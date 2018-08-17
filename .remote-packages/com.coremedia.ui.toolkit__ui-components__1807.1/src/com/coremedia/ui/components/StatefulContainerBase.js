Ext.define("com.coremedia.ui.components.StatefulContainerBase", function(StatefulContainerBase) {/*package com.coremedia.ui.components {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.StateHolder;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;

import ext.Ext;
import ext.container.Container;

public class StatefulContainerBase extends Container implements StateHolder {
  private var model:Bean;
  private var propertiesArray:Array;

  public*/ function StatefulContainerBase$(config/*:StatefulContainer = null*/) {if(arguments.length<=0)config=null;
    var superConfig/*:Container*/ = AS3.cast(Ext.container.Container,{});
    (Ext.apply(superConfig, config));

    this.propertiesArray$qfAo = (AS3.getBindable(config,"properties") || "").split(/[, \r\n\t]+/);
    delete superConfig['properties'];
    var propertyDefaults/*:Object*/ = AS3.getBindable(config,"propertyDefaults");
    delete superConfig['propertyDefaults'];
    for (var i/*:int*/ = 0; i < this.propertiesArray$qfAo.length; i++) {
      var property/*:String*/ = this.propertiesArray$qfAo[i];
      var value/*:**/ = config[property];
      if (value === undefined) {
        value = propertyDefaults ? propertyDefaults[property] : undefined;
      }
      this.getModel().set(property, value);
      delete superConfig[property];
    }
    
    this.super$qfAo(superConfig);
  }/*
  
  protected*/ function getModel()/*:Bean*/ {
    if (!this.model$qfAo) {
      this.model$qfAo = com.coremedia.ui.data.beanFactory.createLocalBean();
    }
    return this.model$qfAo;
  }/*

  public*/ function getStateValueExpression()/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeState$qfAo"));
  }/*

  private*/ function computeState()/*:Object*/ {
    var result/*:Object*/ = {};
    for (var i/*:int*/ = 0; i < this.propertiesArray$qfAo.length; i++) {
      var property/*:String*/ = this.propertiesArray$qfAo[i];
      result[property] = this.getModel().get(property);
    }
    return result;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      mixins: ["com.coremedia.ui.data.StateHolder"],
      model$qfAo: null,
      propertiesArray$qfAo: null,
      constructor: StatefulContainerBase$,
      super$qfAo: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      getModel: getModel,
      getStateValueExpression: getStateValueExpression,
      computeState$qfAo: computeState,
      requires: [
        "Ext",
        "Ext.container.Container",
        "com.coremedia.ui.data.StateHolder",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory"
      ]
    };
});
