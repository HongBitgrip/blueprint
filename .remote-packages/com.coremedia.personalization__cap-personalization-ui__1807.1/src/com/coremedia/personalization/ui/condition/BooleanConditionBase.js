Ext.define("com.coremedia.personalization.ui.condition.BooleanConditionBase", function(BooleanConditionBase) {/* /*
 * Copyright CoreMedia AG, Hamburg, 2011. All rights reserved.
 * /
package com.coremedia.personalization.ui.condition {
import com.coremedia.personalization.ui.util.SelectionRuleHelper;
import com.coremedia.ui.components.StatefulCheckbox;

import ext.form.field.DisplayField;

/**
 * The BooleanCondition is used to test the boolean value of a property. It provides a checkbox for the user
 * to select whether the property should be 'true' or 'false'.
 *
 * @xtype com.coremedia.personalization.ui.condition.BooleanCondition
 * /
public class BooleanConditionBase extends AbstractCondition {

  // the checkbox shown by this component
  private var checkbox:StatefulCheckbox;

  // determines whether the checkbox is to be checked if an operator isn't set explicitly
  private var checkedByDefault:Boolean = false;

  /**
   * Creates a new condition.
   *
   * @cfg {String} conditionName name to be used for this condition instance in the condition combo box
   * @cfg {String} propertyName name of context property mapped to this condition instance
   * @cfg {String} checkedByDefault true iff a newly created BooleanCondition should have a checked checkbox
   * @cfg {String} text an optional text rendered in front of the checkbox
   *
   * @param config the configuration to be applied to this component
   * /
  public*/ function BooleanConditionBase$(config/*:BooleanCondition = null*/) {if(arguments.length<=0)config=null;
    this.super$XPwn(config);

    if (config['propertyName'] == null) {
      throw AS3.cast(AS3.Error,"BooleanCondition: Config field 'propertyName' must be null or undefined!");
    }
    this.setPropertyName(config['propertyName']);

    if (config['checkedByDefault'] == null) {
      throw AS3.cast(AS3.Error,"BooleanCondition: Config field 'checkedByDefault' must be defined with a boolean value!");
    }
    this.checkedByDefault$XPwn = String(config['checkedByDefault']).toLowerCase() == 'true';

    if (config['text'] != null) {
      var displayFieldCfg/*:DisplayField*/ = AS3.cast(Ext.form.field.Display,{});
      displayFieldCfg.itemId = "text";
      AS3.setBindable(displayFieldCfg,"value" , config['text']);
      this.add(displayFieldCfg);
    }

    this.initPropertyCheckbox$XPwn();
  }/*

  private*/ function initPropertyCheckbox()/*:void*/ {var this$=this;
    var checkBoxConf/*:StatefulCheckbox*/ = AS3.cast(com.coremedia.ui.components.StatefulCheckbox,{});
    checkBoxConf.checked = this.checkedByDefault$XPwn;
    checkBoxConf.inputType = "checkbox";
    checkBoxConf.flex = 30;
    checkBoxConf.itemId = "checkbox";
    this.checkbox$XPwn = new com.coremedia.ui.components.StatefulCheckbox(checkBoxConf);

    this.add(this.checkbox$XPwn);
    this.checkbox$XPwn.addListener('change', function()/*:void*/{ this$.fireEvent('modified'); });
  }/*

  /* ------------------------------------------

   AbstractCondition Overrides

   ------------------------------------------ * /

  public override*/ function getPropertyValue()/*:String*/ {
    return 'true';
  }/*

  public override*/ function setPropertyValue(value/*:String*/)/*:void*/ {
    if (value !== com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_VALUE && value !== 'true') {
      throw AS3.cast(AS3.Error,"BooleanCondition does not support 'false' as a value. Instead, use '!= true' in your conditions.");
    }
  }/*

  public override*/ function setOperator(op/*:String*/)/*:void*/ {
    if (op == com.coremedia.personalization.ui.util.SelectionRuleHelper.EMPTY_OPERATOR) {
      this.checkbox$XPwn.setValue(this.checkedByDefault$XPwn);
    } else {
      this.checkbox$XPwn.setValue(com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL == op);
    }
  }/*

  public override*/ function getOperator()/*:String*/ {
    return (this.checkbox$XPwn.checked) ? com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_EQUAL : com.coremedia.personalization.ui.util.SelectionRuleHelper.OP_NOTEQUAL ;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.personalization.ui.condition.AbstractCondition",
      checkbox$XPwn: null,
      checkedByDefault$XPwn: false,
      constructor: BooleanConditionBase$,
      super$XPwn: function() {
        com.coremedia.personalization.ui.condition.AbstractCondition.prototype.constructor.apply(this, arguments);
      },
      initPropertyCheckbox$XPwn: initPropertyCheckbox,
      getPropertyValue: getPropertyValue,
      setPropertyValue: setPropertyValue,
      setOperator: setOperator,
      getOperator: getOperator,
      requires: [
        "AS3.Error",
        "Ext.form.field.Display",
        "com.coremedia.personalization.ui.condition.AbstractCondition",
        "com.coremedia.ui.components.StatefulCheckbox"
      ],
      uses: ["com.coremedia.personalization.ui.util.SelectionRuleHelper"]
    };
});
