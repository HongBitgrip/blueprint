Ext.define("com.coremedia.ui.components.BoundRadioGroupBase", function(BoundRadioGroupBase) {/*package com.coremedia.ui.components {
import com.coremedia.ui.data.ValueExpression;

import ext.Ext;
import ext.form.field.Radio;

public class BoundRadioGroupBase extends StatefulRadioGroup {

  public*/ function BoundRadioGroupBase$(config/*:BoundRadioGroup = null*/) {if(arguments.length<=0)config=null;
    this.super$03V$(config);
  }/*

  override protected*/ function initComponent()/*:void*/ {
    var config/*:BoundRadioGroup*/ = AS3.cast(com.coremedia.ui.components.BoundRadioGroup,this.initialConfig);
    this.name = AS3.getBindable(config,"name","DUMMY") || this.getId() + '-boundRadioGroup';
    this.items = this.augmentRadios$03V$(config.items, AS3.getBindable(this,"name","DUMMY"));
    com.coremedia.ui.components.StatefulRadioGroup.prototype.initComponent.call(this);
    if (this.defaultValue) {
      //set the default only if the bound value is undefined or equals to the default value.
      if (AS3.getBindable(config,"bindTo").getValue() === undefined || this.defaultValue === this.toInputValueString$03V$(AS3.getBindable(config,"bindTo").getValue())) {
        this.setValue(makeObject$static(AS3.getBindable(this,"name","DUMMY"), this.defaultValue));
      }
      AS3.getBindable(config,"bindTo").addChangeListener(AS3.bind(this,"setDefault$03V$"));
    }
  }/*

  /**
   * A function to convert the inputValue of a radio button
   * to the value to bind to the value expression.
   * /
  [ExtConfig]
  public var toValue:Function;

  /**
   * The default value to use when the current value of the value
   * expression cannot be mapped to a radio button inputValue.
   * /
  [ExtConfig]
  public var defaultValue:*;

  private*/ function setDefault(expression/*:ValueExpression*/)/*:void*/ {
    if (expression.getValue() === undefined) {
      if (this.itemCollection) { //when reverting by closing the premular
        this.setValue(makeObject$static(AS3.getBindable(this,"name","DUMMY"), this.defaultValue));
      }
    }
  }/*

  private*/ function augmentRadios(items/*:Array*/, radioGroupName/*:String*/)/*:Array*/ {
    return items.map(function(item/*:**/)/*:**/ {
      if (AS3.is(item,  Ext.form.field.Radio)) {
        return AS3.cast(Ext.form.field.Radio,Ext.apply({
          inputValue: item.itemId,
          name: radioGroupName
        }, item));
      }
      return item;
    });
  }/*

  protected*/ function toExpressionValue(item/*:Object*/)/*:**/ {
    if (item === undefined) {
      return this.inputValueToValue$03V$(undefined);
    }
    return this.inputValueToValue$03V$(item[AS3.getBindable(this,"name","DUMMY")]);
  }/*

  protected*/ function toInputValue(value/*:**/)/*:Object*/ {
    var result/*:String*/ = this.toInputValueString$03V$(value);

    return makeObject$static(AS3.getBindable(this,"name","DUMMY"), result);
  }/*

  private*/ function toInputValueString(value/*:**/)/*:String*/ {var this$=this;
    var result/*:String*/ = this.defaultValue;

    this.itemCollection.each(function(item/*:Radio*/)/*:void*/ {
      var inputValue/*:String*/ = item.inputValue;
      if (this$.inputValueToValue$03V$(inputValue) === value) {
        result = inputValue;
      }
    });

    return result;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.ui.components.StatefulRadioGroup.prototype.onDestroy.call(this);
    if (this.defaultValue) {
      AS3.cast(com.coremedia.ui.data.ValueExpression,this.initialConfig.bindTo).removeChangeListener(AS3.bind(this,"setDefault$03V$"));
    }
  }/*

  private*/ function inputValueToValue(inputValue/*:String*/)/*:**/ {
    var myInputValue/*:String*/ = inputValue;
    if (this.defaultValue && inputValue === this.defaultValue) {
      myInputValue = undefined;
    }
    return this.toValue ? this.toValue(myInputValue) : myInputValue;
  }/*

  private static*/ function makeObject$static(key/*:String*/, value/*:String*/)/*:Object*/ {
    var o/*:Object*/ = {};
    o[key] = value;
    return o;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.StatefulRadioGroup",
      constructor: BoundRadioGroupBase$,
      super$03V$: function() {
        com.coremedia.ui.components.StatefulRadioGroup.prototype.constructor.apply(this, arguments);
      },
      initComponent: initComponent,
      toValue: null,
      defaultValue: undefined,
      setDefault$03V$: setDefault,
      augmentRadios$03V$: augmentRadios,
      toExpressionValue: toExpressionValue,
      toInputValue: toInputValue,
      toInputValueString$03V$: toInputValueString,
      onDestroy: onDestroy,
      inputValueToValue$03V$: inputValueToValue,
      requires: [
        "Ext",
        "Ext.form.field.Radio",
        "com.coremedia.ui.components.StatefulRadioGroup",
        "com.coremedia.ui.data.ValueExpression"
      ],
      uses: ["com.coremedia.ui.components.BoundRadioGroup"]
    };
});
