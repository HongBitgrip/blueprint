Ext.define("com.coremedia.ui.plugins.BindingBase", function(BindingBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.Component;
import ext.Plugin;

public class BindingBase implements Plugin {
  private var initialConfig:Binding;
  private var sourceValueExpression:ValueExpression;
  private var destinationValueExpression:ValueExpression;

  public*/ function BindingBase$(config/*:Binding = null*/) {if(arguments.length<=0)config=null;
    this.initialConfig$jXPa = config;
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.sourceValueExpression$jXPa = createValueExpression$static(AS3.getBindable(this.initialConfig$jXPa,"source"), component);
    if (AS3.getBindable(this.initialConfig$jXPa,"transformer") || AS3.getBindable(this.initialConfig$jXPa,"ifUndefined") !== undefined) {
      this.sourceValueExpression$jXPa = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(this.sourceValueExpression$jXPa,
              AS3.getBindable(this.initialConfig$jXPa,"transformer"), AS3.getBindable(this.initialConfig$jXPa,"reverseTransformer"), AS3.getBindable(this.initialConfig$jXPa,"ifUndefined"));
    }
    this.destinationValueExpression$jXPa = createValueExpression$static(AS3.getBindable(this.initialConfig$jXPa,"destination"), component);

    this.sourceValueExpression$jXPa.addChangeListener(AS3.bind(this,"updateDestination$jXPa"));
    this.updateDestination$jXPa();

    if (AS3.getBindable(this.initialConfig$jXPa,"twoWay")) {
      this.destinationValueExpression$jXPa.addChangeListener(AS3.bind(this,"updateSource$jXPa"));
    }
    component.addListener('beforedestroy',AS3.bind( this,"removeListeners$jXPa"));
  }/*

  private static*/ function createValueExpression$static(valueExpression/*:**/, component/*:Component*/)/*:ValueExpression*/ {
    switch (typeof valueExpression) {
      case "string":
        return com.coremedia.ui.data.ValueExpressionFactory.create(valueExpression, component);
      case "function":
        return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(valueExpression, component);
      case "object":
        if (AS3.is(valueExpression,  com.coremedia.ui.data.ValueExpression)) {
          return valueExpression;
        }
    }
    throw new AS3.Error("Binding source and destination must be a value expression given as string, function, or ValueExpression.");
  }/*

  private*/ function updateDestination()/*:void*/ {
    var value/*:**/ = this.sourceValueExpression$jXPa.getValue();
    if (value !== undefined) {
      this.destinationValueExpression$jXPa.setValue(value);
    }
  }/*

  private*/ function updateSource()/*:void*/ {
    var value/*:**/ = this.destinationValueExpression$jXPa.getValue();
    if (value !== undefined) {
      this.sourceValueExpression$jXPa.setValue(value);
    }
  }/*

  private*/ function removeListeners()/*:void*/ {
    this.sourceValueExpression$jXPa.removeChangeListener(AS3.bind(this,"updateDestination$jXPa"));
    if (AS3.getBindable(this.initialConfig$jXPa,"twoWay")) {
      this.destinationValueExpression$jXPa.removeChangeListener(AS3.bind(this,"updateSource$jXPa"));
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      initialConfig$jXPa: null,
      sourceValueExpression$jXPa: null,
      destinationValueExpression$jXPa: null,
      constructor: BindingBase$,
      init: init,
      updateDestination$jXPa: updateDestination,
      updateSource$jXPa: updateSource,
      removeListeners$jXPa: removeListeners,
      requires: [
        "AS3.Error",
        "com.coremedia.ui.data.ValueExpression",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "ext.Plugin"
      ]
    };
});
