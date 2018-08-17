Ext.define("com.coremedia.ui.data.ValueExpressionValueHolder", function(ValueExpressionValueHolder) {/*package com.coremedia.ui.data {

/**
 * A value holder that uses a value expression to set and get the real value
 * /
public class ValueExpressionValueHolder implements ValueHolder {
  private var valueExpression:ValueExpression;

  public*/ function ValueExpressionValueHolder$(valueExpression/*:ValueExpression*/) {
    this.valueExpression$zPEK = valueExpression;
  }/*

  public*/ function getValue ()/*:**/ {
    return this.valueExpression$zPEK.getValue();
  }/*

  public*/ function setValue (value/*:**/)/*:Boolean*/ {
    return this.valueExpression$zPEK.setValue(value);
  }/*

  protected*/ function getValueExpression()/*:ValueExpression*/ {
    return this.valueExpression$zPEK;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      valueExpression$zPEK: null,
      constructor: ValueExpressionValueHolder$,
      getValue: getValue,
      setValue: setValue,
      getValueExpression: getValueExpression,
      requires: ["com.coremedia.ui.data.ValueHolder"]
    };
});
