Ext.define("com.coremedia.ui.data.TransformingValueHolder", function(TransformingValueHolder) {/* /**
 * Created by fwienber on 30.08.2014.
 * /
package com.coremedia.ui.data {
public class TransformingValueHolder extends ValueExpressionValueHolder implements ValueHolder {
  private var transform:Function;
  private var reverseTransform:Function;
  private var defaultValue:*;

  public*/ function TransformingValueHolder$(valueExpression/*:ValueExpression*/, transform/*:Function*/, reverseTransform/*:Function = null*/,
                                          defaultValue/*:* = undefined*/) {if(arguments.length<=2)reverseTransform=null;
    this.super$Njld(valueExpression);
    this.transform$Njld = transform;
    this.reverseTransform$Njld = reverseTransform;
    this.defaultValue$Njld = defaultValue;
  }/*

  override public*/ function getValue()/*:**/ {
    var value/*:**/ = com.coremedia.ui.data.ValueExpressionValueHolder.prototype.getValue.call(this);
    if (value === undefined) {
      if (this.getValueExpression().isLoaded()) {
        return this.defaultValue$Njld;
      } else {
        return undefined;
      }
    } else if (this.transform$Njld) {
      return this.transform$Njld(value);
    } else {
      return value;
    }
  }/*

  override public*/ function setValue(value/*:**/)/*:Boolean*/ {
    if (value === this.getValue()) {
      // The value is equal to the forward transformation result.
      // No update needed.
      return false;
    }
    var reverseTransformedValue/*:**/ = this.reverseTransform$Njld ? this.reverseTransform$Njld(value) : value;
    return com.coremedia.ui.data.ValueExpressionValueHolder.prototype.setValue.call(this,reverseTransformedValue);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.ValueExpressionValueHolder",
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      transform$Njld: null,
      reverseTransform$Njld: null,
      defaultValue$Njld: undefined,
      constructor: TransformingValueHolder$,
      super$Njld: function() {
        com.coremedia.ui.data.ValueExpressionValueHolder.prototype.constructor.apply(this, arguments);
      },
      getValue: getValue,
      setValue: setValue,
      requires: [
        "com.coremedia.ui.data.ValueExpressionValueHolder",
        "com.coremedia.ui.data.ValueHolder"
      ]
    };
});
