Ext.define("com.coremedia.ui.plugins.BindStyleClassPluginBase", function(BindStyleClassPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;

/**
 * A plugin to bind the presence of a style class in a component to a
 * property (path) of a given Bean.
 * If a style class is given exactly, the style class will be present
 * if and only if the property path value is true after conversion to boolean.
 * If a prefix and a suffix are given, the style class to be present
 * will be the composition of the prefix, the property value, and the
 * suffix.
 * /
public class BindStyleClassPluginBase extends BindPlugin {

  private var transformer:Function;
  private var cls:String;
  private var prefix:String;
  private var suffix:String;

  private var addedCls:String;

  /**
   * A plugin to bind the presence of a style class in a component to a
   * property (path) of a given Bean.
   * If a style class is given exactly, the style class will be present
   * if and only if the property path value is true after conversion to boolean.
   * If a prefix and a suffix are given, the style class to be present
   * will be the composition of the prefix, the property value, and the
   * suffix.
   *
   * @param config the configuration object
   * /
  public*/ function BindStyleClassPluginBase$(config/*:BindStyleClassPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$KQrw(config);
    this.transformer$KQrw = AS3.getBindable(config,"transformer");
    this.cls$KQrw = AS3.getBindable(config,"cls");
    this.prefix$KQrw = AS3.getBindable(config,"prefix") || "";
    this.suffix$KQrw = AS3.getBindable(config,"suffix") || "";
  }/*

  internal*/ function changeStyleClass(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    // TODO: Maybe it is too inefficient to remove the class even
    // if it is added again immediately afterwards? But that should
    // not happen often.
    if (this.addedCls$KQrw) {
      component.removeCls(this.addedCls$KQrw);
      this.addedCls$KQrw = undefined;
    }

    var value/*:**/ = valueExpression.getValue();
    if (this.transformer$KQrw != null && value !== undefined) {
      value = this.transformer$KQrw(value, valueExpression);
    }

    if (value) {
      var newCls/*:String*/;
      if (this.cls$KQrw) {
        newCls = this.cls$KQrw;
      } else {
        newCls = this.prefix$KQrw + value + this.suffix$KQrw;
      }
      this.addClass$KQrw(component, newCls);
    }
  }/*

  private*/ function addClass(component/*:Component*/, clsToAdd/*:String*/)/*:void*/ {
    component.addCls(clsToAdd);
    this.addedCls$KQrw = clsToAdd;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      transformer$KQrw: null,
      cls$KQrw: null,
      prefix$KQrw: null,
      suffix$KQrw: null,
      addedCls$KQrw: null,
      constructor: BindStyleClassPluginBase$,
      super$KQrw: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      changeStyleClass: changeStyleClass,
      addClass$KQrw: addClass,
      requires: ["com.coremedia.ui.plugins.BindPlugin"]
    };
});
