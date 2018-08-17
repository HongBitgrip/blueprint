Ext.define("com.coremedia.personalization.ui.editors.Condition", function(Condition) {/*package com.coremedia.personalization.ui.editors {

/**
 * Common interface to components representing property conditions in the UI (e.g., "foo < 42"). This interface must
 * be implemented by components used to represent specific condition types in a ConditionsEditor or RuleListEditor.
 * /
public interface Condition {

  /**
   * Name of the context property whose value is tested by this condition.
   *
   * @return name of a context property
   * /
  function getPropertyName():String;

  /**
   * Sets the name of the context property tested by this condition.
   *
   * @param name name of a context property
   * /
  function setPropertyName(name:String):void;

  /**
   * Name of the operator used to test the context property value.
   *
   * @return name of an operator
   * /
  function getOperator():String;

  /**
   * Sets the name of the operator used to test the context property value.
   *
   * @param op name of an operator
   * /
  function setOperator(op:String):void;

  /**
   * Value against which to test the context property value.
   *
   * @return a value to test the context property value against
   * /
  function getPropertyValue():String;

  /**
   * Sets the value against which to test the context property value.
   *
   * @param value a value to test the context property value against
   * /
  function setPropertyValue(value:String):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
