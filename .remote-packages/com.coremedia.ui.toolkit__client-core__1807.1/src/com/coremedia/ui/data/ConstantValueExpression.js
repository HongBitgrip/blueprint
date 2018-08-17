Ext.define("com.coremedia.ui.data.ConstantValueExpression", function(ConstantValueExpression) {/*package com.coremedia.ui.data {
/**
 * A ValueExpression that is constant and therefore does not allow the
 * underlying value to change. It does not support value change events.
 * /
public class ConstantValueExpression implements ValueExpression {
  private var value:*;

  /**
   * Create a new ConstantValueExpression.
   * @param value the value of the ValueExpression
   * /
  public*/ function ConstantValueExpression$(value/*:**/) {
    this.value$NRhb = value;
  }/*

  /**
   * @inheritDoc
   * /
  public*/ function extendBy(/*...properties*/)/*:ValueExpression*/ {var properties=Array.prototype.slice.call(arguments);
    var propertyPathArcs/*:Array*/ = com.coremedia.ui.data.AbstractValueExpression.normalizeProperties(properties);
    if (propertyPathArcs.length === 0) {
      return this;
    }
    return new com.coremedia.ui.data.PropertyPathExpression(this.value$NRhb, propertyPathArcs);
  }/*

  /**
   * A constant value expression has no parent expression.
   *
   * @return null
   * /
  public*/ function getParent()/*:ValueExpression*/ {
    return null;
  }/*

  /**
   * Constant value expression do not support value change listeners.
   *
   * @param valueChangeListener ignored
   * /
  public*/ function addChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
  }/*

  /**
   * Constant value expression do not support value change listeners.
   *
   * @param valueChangeListener ignored
   * /
  public*/ function removeChangeListener(valueChangeListener/*:Function*/)/*:void*/ {
  }/*

  /**
   * Returns the constant value held by this expression.
   *
   * @return the underlying constant value of this expression
   * /
  public*/ function getValue()/*:**/ {
    return this.value$NRhb;
  }/*

  /**
   * Constant value expressions are always readable
   *
   * @return true
   * /
  public*/ function isReadable()/*:Boolean*/ {
    return true;
  }/*

  /**
   * Setting of the value is not supported
   * @param value ignored
   * @return nothing, throws an Error
   * /
  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    throw new AS3.Error("unsupported operation exception");
  }/*

  /**
   * Constant value expressions need not be loaded.
   *
   * @return true
   * /
  public*/ function isLoaded()/*:Boolean*/ {
    return true;
  }/*

  /**
   * Constant value expressions need not be loaded, so the
   * callback is immediately invoked with the constant value
   * as parameter.
   *
   * @param callback a function with signature
   * <code>function(value:*):void</code>
   * /
  public*/ function loadValue(callback/*:Function*/)/*:void*/ {
    callback(this.value$NRhb);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueExpression"],
      value$NRhb: undefined,
      constructor: ConstantValueExpression$,
      extendBy: extendBy,
      getParent: getParent,
      addChangeListener: addChangeListener,
      removeChangeListener: removeChangeListener,
      getValue: getValue,
      isReadable: isReadable,
      setValue: setValue,
      isLoaded: isLoaded,
      loadValue: loadValue,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.ValueExpression"
      ],
      uses: [
        "com.coremedia.ui.data.AbstractValueExpression",
        "com.coremedia.ui.data.PropertyPathExpression"
      ]
    };
});
