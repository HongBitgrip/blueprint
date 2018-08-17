Ext.define("com.coremedia.ui.data.InstantiatingValueHolder", function(InstantiatingValueHolder) {/*package com.coremedia.ui.data {
import com.coremedia.ui.util.ObjectUtils;

import ext.Ext;

public class InstantiatingValueHolder extends ValueExpressionValueHolder {
  private var propertyPath:Array;
  private var instantiate:Function;
  private var defaultValue:*;

  public*/ function InstantiatingValueHolder$(valueExpression/*:ValueExpression*/,
                                           propertyPath/*:**/,
                                           instantiate/*:Function = null*/,
                                           defaultValue/*:* = null*/) {switch(Math.max(arguments.length,2)){case 2:instantiate=null;case 3:defaultValue=null;}
    this.super$VEgM(valueExpression);
    this.defaultValue$VEgM = defaultValue;
    this.propertyPath$VEgM =AS3.is( propertyPath,  Array) ? propertyPath : String(propertyPath).split(".");
    this.instantiate$VEgM = instantiate;
  }/*

  override public*/ function getValue()/*:**/ {
    var bean/*:Object*/ = com.coremedia.ui.data.ValueExpressionValueHolder.prototype.getValue.call(this);
    if (bean === undefined) {
      return undefined;
    }
    if (bean === null) {
      return this.defaultValue$VEgM;
    }
    return com.coremedia.ui.util.ObjectUtils.getPropertyAt(bean, this.propertyPath$VEgM, this.defaultValue$VEgM);
  }/*

  override public*/ function setValue(newValue/*:**/)/*:Boolean*/ {
    var bean/*:Object*/ = this.getValueExpression().getValue();
    if (bean === undefined) {
      // The bean behind the ValueExpression is not ready yet to be written.
      // Skip write operation
      AS3.trace("[WARN]", InstantiatingValueHolder, " cannot set value on undefined bean.");
      return false;
    }

    var pathArcs/*:Array*/ = this.propertyPath$VEgM.concat();
    var lastProperty/*:String*/ = pathArcs.pop();

    var value/*:**/ = bean;
    for/* each*/ (var $1=0;$1</* in*/ pathArcs.length;++$1) {var pathArc/*:String*/ =pathArcs[$1];
      var nextValue/*:**/ = com.coremedia.ui.util.ObjectUtils.getProperty(value, pathArc);
      if (!Ext.isObject(nextValue)) {
        if (AS3.is(value,  com.coremedia.ui.data.Bean)) {
          // A bean might be willing to instantiate subobjects dynamically .
          nextValue = (AS3.as(value,  com.coremedia.ui.data.Bean)).instantiate(pathArc);
        }
      }
      value = nextValue;
    }
    if (typeof value != 'object') {
      throw new AS3.Error("Cannot set property '" + lastProperty +
                          "' of non-object value '" + value +
                          "' at path '" + pathArcs.join('.') +
                          "' of bean '" + bean + "'.");
    }
    if (!Ext.isObject(value)) {
      return false;
    }
    if (this.instantiate$VEgM && com.coremedia.ui.util.ObjectUtils.getProperty(value, lastProperty) === undefined) {
      this.instantiate$VEgM(value, lastProperty);
    }
    return com.coremedia.ui.util.ObjectUtils.setProperty(value, lastProperty, newValue);
  }/*
}

}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.ValueExpressionValueHolder",
      propertyPath$VEgM: null,
      instantiate$VEgM: null,
      defaultValue$VEgM: undefined,
      constructor: InstantiatingValueHolder$,
      super$VEgM: function() {
        com.coremedia.ui.data.ValueExpressionValueHolder.prototype.constructor.apply(this, arguments);
      },
      getValue: getValue,
      setValue: setValue,
      requires: [
        "AS3.Error",
        "AS3.trace",
        "Ext",
        "com.coremedia.ui.data.ValueExpressionValueHolder"
      ],
      uses: [
        "com.coremedia.ui.data.Bean",
        "com.coremedia.ui.util.ObjectUtils"
      ]
    };
});
