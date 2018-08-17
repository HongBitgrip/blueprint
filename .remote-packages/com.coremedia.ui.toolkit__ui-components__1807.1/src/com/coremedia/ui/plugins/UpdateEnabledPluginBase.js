Ext.define("com.coremedia.ui.plugins.UpdateEnabledPluginBase", function(UpdateEnabledPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.Plugin;

/**
 * A plugin to enable and disable a component based on a boolean property
 * of a bean.
 * /
public class UpdateEnabledPluginBase implements Plugin {

  private var component:Component;
  private var valueExpression:ValueExpression;

  /**
   * A plugin to enable and disable a component based on a boolean property
   * of a bean. If no id or bean is given, the <code>applicationContext</code> bean is used
   *
   * @param config the config object
   *
   * @see com.coremedia.ui.plugins.UpdateEnabledPlugin
   * /
  public*/ function UpdateEnabledPluginBase$(config/*:UpdateEnabledPlugin = null*/) {if(arguments.length<=0)config=null;
    this.valueExpression$dRTg = AS3.getBindable(config,"valueExpression");
  }/*

  private*/ function propertyChanged(valueExpression/*:ValueExpression*/)/*:void*/ {
    this.component$dRTg.setDisabled(!valueExpression.getValue());
  }/*

  private*/ function componentDestroyed()/*:void*/ {
    this.valueExpression$dRTg.removeChangeListener(AS3.bind(this,"propertyChanged$dRTg"));
  }/*

  public*/ function init(component/*:Component*/)/*:void*/ {
    this.component$dRTg = component;

    // init the component's value from the property, avoiding setters while it is not yet rendered.
    this.propertyChanged$dRTg(this.valueExpression$dRTg);
    // only then, add listeners:
    this.valueExpression$dRTg.addChangeListener(AS3.bind(this,"propertyChanged$dRTg"));
    component.addListener('removed',AS3.bind( this,"componentDestroyed$dRTg"));
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["ext.Plugin"],
      component$dRTg: null,
      valueExpression$dRTg: null,
      constructor: UpdateEnabledPluginBase$,
      propertyChanged$dRTg: propertyChanged,
      componentDestroyed$dRTg: componentDestroyed,
      init: init,
      requires: ["ext.Plugin"]
    };
});
