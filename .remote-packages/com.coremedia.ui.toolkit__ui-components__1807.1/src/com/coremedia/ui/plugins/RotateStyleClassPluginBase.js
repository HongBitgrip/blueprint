Ext.define("com.coremedia.ui.plugins.RotateStyleClassPluginBase", function(RotateStyleClassPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;

/**
 * A plugin to rotate a style class attached to a component as long as
 * a certain property (path) of a given bean evaluates to a true value.
 * If the property evaluates to a false value, the style class is removed.
 * /
public class RotateStyleClassPluginBase extends BindPlugin {

  private var prefix:String;
  private var suffix:String;
  private var interval:Number;
  private var phases:Number;

  //noinspection JSFieldCanBeLocalInspection
  private var windowInterval:Object;
  private var currentPhase:Number;
  private var addedCls:String;

  /**
   * A plugin to rotate a style class attached to a component as long as
   * a certain property (path) of a given bean evaluates to a true value.
   * If the property evaluates to a false value, the style class is removed.
   *
   * @param config the configuration object
   * /
  public*/ function RotateStyleClassPluginBase$(config/*:RotateStyleClassPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$hnyO(config);
    this.prefix$hnyO = AS3.getBindable(config,"prefix") || "";
    this.suffix$hnyO = AS3.getBindable(config,"suffix") || "";
    this.interval$hnyO = AS3.getBindable(config,"interval") || 1000;
    this.phases$hnyO = AS3.getBindable(config,"phases") || 2;
  }/*

  //noinspection JSUnusedLocalSymbols
  internal*/ function valueChanged(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var value/*:**/ = valueExpression.getValue();
    if (value) {
      this.currentPhase$hnyO = 0;
      this.windowInterval$hnyO = window.setInterval(AS3.bind(this,"nextPhase$hnyO"), this.interval$hnyO);
      this.setStyleClass$hnyO(this.currentPhase$hnyO);
    } else {
      window.clearInterval(this.windowInterval$hnyO);
      this.setStyleClass$hnyO(undefined);
    }
  }/*

  private*/ function nextPhase()/*:void*/ {
    this.currentPhase$hnyO = (this.currentPhase$hnyO + 1) % this.phases$hnyO;
    this.setStyleClass$hnyO(this.currentPhase$hnyO);
  }/*

  private*/ function setStyleClass(phase/*:Number*/)/*:void*/ {
    if (this.addedCls$hnyO) {
      this.getComponent().removeCls(this.addedCls$hnyO);
      this.addedCls$hnyO = undefined;
    }

    if (phase) {
      var newCls/*:String*/ = this.prefix$hnyO + phase + this.suffix$hnyO;
      this.getComponent().addCls(newCls);
      this.addedCls$hnyO = newCls;
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      prefix$hnyO: null,
      suffix$hnyO: null,
      interval$hnyO: NaN,
      phases$hnyO: NaN,
      windowInterval$hnyO: null,
      currentPhase$hnyO: NaN,
      addedCls$hnyO: null,
      constructor: RotateStyleClassPluginBase$,
      super$hnyO: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      valueChanged: valueChanged,
      nextPhase$hnyO: nextPhase,
      setStyleClass$hnyO: setStyleClass,
      requires: ["com.coremedia.ui.plugins.BindPlugin"]
    };
});
