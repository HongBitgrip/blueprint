Ext.define("com.coremedia.ui.data.SingleItemValueHolder", function(SingleItemValueHolder) {/*package com.coremedia.ui.data {
public class SingleItemValueHolder implements ValueHolder {
  private var valueExpression:ValueExpression;

  public*/ function SingleItemValueHolder$(valueExpression/*:ValueExpression*/) {
    this.valueExpression$DUn2 = valueExpression;
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    return this.valueExpression$DUn2.setValue(value?[value]:null);
  }/*

  public*/ function getValue()/*:**/ {
    var value/*:**/ = this.valueExpression$DUn2.getValue();
    if (AS3.is(value,  Array)){
      return value.length === 1 ? value[0] : null;
    } else {
      return value;
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      valueExpression$DUn2: null,
      constructor: SingleItemValueHolder$,
      setValue: setValue,
      getValue: getValue,
      requires: ["com.coremedia.ui.data.ValueHolder"]
    };
});
