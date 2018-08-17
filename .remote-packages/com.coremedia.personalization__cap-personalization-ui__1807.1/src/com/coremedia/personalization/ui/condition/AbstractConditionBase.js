Ext.define("com.coremedia.personalization.ui.condition.AbstractConditionBase", function(AbstractConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2011. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.editors.Condition;
import com.coremedia.personalization.ui.util.SelectionRuleHelper;

import ext.Ext;
import ext.container.Container;

import mx.resources.ResourceManager;

/**
 * This internal class might change without notice. Use at your own risk!
 * /
[ResourceBundle('com.coremedia.personalization.ui.Personalization')]
public class AbstractConditionBase extends Container implements Condition {

  // default values for all configurable parts
  static const KEYWORD_EMPTY_TEXT:String =*/function KEYWORD_EMPTY_TEXT$static_(){AbstractConditionBase.KEYWORD_EMPTY_TEXT=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_keyword'));}/*;
  static const OPERATOR_EMPTY_TEXT:String =*/function OPERATOR_EMPTY_TEXT$static_(){AbstractConditionBase.OPERATOR_EMPTY_TEXT=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_operator'));}/*;
  static const VALUE_EMPTY_TEXT:String =*/function VALUE_EMPTY_TEXT$static_(){AbstractConditionBase.VALUE_EMPTY_TEXT=( mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_value'));}/*;

  // default operator names
  protected static const DEFAULT_OPERATOR_DISPLAY_NAMES:* =*/function DEFAULT_OPERATOR_DISPLAY_NAMES$static_(){AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES=( {});}/*;*/function static$0(){
  {
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_less');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_less_equal');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_equal');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_not_equal');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_greater_equal');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_greater');
    AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_CONTAINS] = mx.resources.ResourceManager.getInstance().getString('com.coremedia.personalization.ui.Personalization', 'p13n_op_contains');
  }}/*

  // mapping from external to internal operator names
  private static const*/var OPERATOR_EXTERNAL_INTERNAL$static/*:**/;/* =*/function OPERATOR_EXTERNAL_INTERNAL$static_(){OPERATOR_EXTERNAL_INTERNAL$static=( {
    'lt': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN,
    'le': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_LESS_THAN_OR_EQUAL,
    'eq': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL,
    'ne': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL,
    'ge': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN_OR_EQUAL,
    'gt': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_GREATER_THAN,
    'ct': com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_CONTAINS
  });};/*

  private var propertyName:String;
  private var opSelector:OperatorSelector;
  
  public*/ function AbstractConditionBase$(config/*:* = undefined*/) {
    config = (config !== undefined) ? config : {};

    this.super$KT_z(config);
  }/*

  /**
   * Maps an external operator name used to configure the condition components to the internal names
   *
   * @param externalName
   * /
  public static*/ function internalFromExternalOperatorName$static(externalName/*:String*/)/*:String*/ {
    return OPERATOR_EXTERNAL_INTERNAL$static[externalName];
  }/*

  /**
   * Converts an array of external operator names to an array of internal operator names.
   *
   * @param externalOperatorNames the array of external operator names
   *
   * @return the array of internal operator names
   * /
  public static*/ function convertToInternalNames$static(externalOperatorNames/*:Array*/)/*:Array*/ {/*
    const*/var internalOperatorNames/*:Array*/ = [];
    for (var i/*:int*/ = 0; i < externalOperatorNames.length; ++i) {
      internalOperatorNames[i] = AbstractConditionBase.internalFromExternalOperatorName(externalOperatorNames[i]);
    }
    return internalOperatorNames;
  }/*

  /**
   * Converts a mapping from external operator names to display names to a mapping from
   * internal operator names to display names.
   *
   * @param externalToDisplayNames a mapping from external operator names to display names
   *
   * @return the mapping from internal operator names to display names
   * /
  public static*/ function convertToInternalToDisplayNames$static(externalToDisplayNames/*:Object*/)/*:Object*/ {/*
    const*/var internalToDisplayNames/*:Object*/ = {};
    for (var external/*:String*/ in externalToDisplayNames) {
      internalToDisplayNames[AbstractConditionBase.internalFromExternalOperatorName(external)] = externalToDisplayNames[external];
    }
    return internalToDisplayNames;
  }/*

  /**
   * Builds an array with operators and operator names in a form suitable for an
   * ArrayStore of a ComboBox.
   *
   * @param usedOperators the used operators as an array of operator identifiers, e.g.
   *  <code>[SelectionRuleHelper.OP_EQUAL, SelectionRuleHelper.OP_NOTEQUAL]</code>.
   * @param operatorNames new operator names for a subset of the usedOperators in a dictionary, e.g.
   *  <code>operatorNames[SelectionRuleHelper.OP_EQUAL] = 'is'</code>
   *
   * @return array that can be used as data in an ArrayStore of a ComboBox.
   * /
  public static*/ function createOperators$static(usedOperators/*:Array*/, operatorNames/*:* = undefined*/)/*:Array*/ {
    operatorNames = (operatorNames !== undefined) ? operatorNames : {};

    var operatorArray/*:Array*/ = new Array();
    for (var i/*:int*/ = 0; i < usedOperators.length; i++) {
      var op/*:String*/ = usedOperators[i];
      var opName/*:String*/ = AbstractConditionBase.DEFAULT_OPERATOR_DISPLAY_NAMES[op];
      if (operatorNames != null && operatorNames[op] != null) {
        opName = operatorNames[op];
      }
      var entry/*:Array*/ = [op, opName];
      operatorArray.push(entry);
    }
    return operatorArray;
  }/*

  /**
   * Initializes and adds the operator-selector component.
   * @param operators
   * @param operatorNames
   * @param operatorEmptyText
   * @param operator
   * @param defaultOperators
   * @param defaultOperatorNames
   * @return
   * /
  protected*/ function initOpSelector(operators/*:Array*/, operatorNames/*:**/, operatorEmptyText/*:String*/, operator/*:String*/,
          defaultOperators/*:Array*/, defaultOperatorNames/*:**/)/*:OperatorSelector*/ {/*
    // determine which operators to use: supplied or default
    const*/var internalOperators/*:Array*/ = operators != null ? AbstractConditionBase.convertToInternalNames(operators) : defaultOperators;
    // create and configure the operator selector
    this.opSelector$KT_z = new com.coremedia.personalization.ui.condition.OperatorSelector(
            internalOperators,
            Ext.apply({}, AbstractConditionBase.convertToInternalToDisplayNames(operatorNames), defaultOperatorNames),
            operatorEmptyText);

    return this.opSelector$KT_z;
  }/*

  public*/ function getPropertyName()/*:String*/ {
    return this.propertyName$KT_z;
  }/*

  public*/ function setPropertyName(name/*:String*/)/*:void*/ {
    this.propertyName$KT_z = name;
  }/*

  public*/ function getOperator()/*:String*/ {/*
    const*/var op/*:String*/ = this.opSelector$KT_z.getValue();
    return op ? op : com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_OPERATOR;
  }/*

  public*/ function setOperator(op/*:String*/)/*:void*/ {
    (op != com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_OPERATOR) ? this.opSelector$KT_z.setValue(op) : this.opSelector$KT_z.setValue(null);
  }/*


  public*/ function getPropertyValue()/*:String*/ {
    throw new AS3.Error("not implemented!");
  }/*

  public*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    throw new AS3.Error("not implemented!");
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.personalization.ui.editors.Condition"],
      propertyName$KT_z: null,
      opSelector$KT_z: null,
      constructor: AbstractConditionBase$,
      super$KT_z: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      initOpSelector: initOpSelector,
      getPropertyName: getPropertyName,
      setPropertyName: setPropertyName,
      getOperator: getOperator,
      setOperator: setOperator,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      statics: {
        KEYWORD_EMPTY_TEXT: undefined,
        OPERATOR_EMPTY_TEXT: undefined,
        VALUE_EMPTY_TEXT: undefined,
        DEFAULT_OPERATOR_DISPLAY_NAMES: undefined,
        OPERATOR_EXTERNAL_INTERNAL: undefined,
        internalFromExternalOperatorName: internalFromExternalOperatorName$static,
        convertToInternalNames: convertToInternalNames$static,
        convertToInternalToDisplayNames: convertToInternalToDisplayNames$static,
        createOperators: createOperators$static,
        __initStatics__: function() {
          KEYWORD_EMPTY_TEXT$static_();
          OPERATOR_EMPTY_TEXT$static_();
          VALUE_EMPTY_TEXT$static_();
          DEFAULT_OPERATOR_DISPLAY_NAMES$static_();
          static$0();
          OPERATOR_EXTERNAL_INTERNAL$static_();
        }
      },
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.container.Container",
        "com.coremedia.personalization.ui.Personalization_properties",
        "com.coremedia.personalization.ui.editors.Condition",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.personalization.ui.condition.OperatorSelector",
        "com.coremedia.personalization.ui.util.SelectionRuleHelper"
      ]
    };
});
