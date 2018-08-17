Ext.define("com.coremedia.ui.plugins.BindVisibilityPluginBase", function(BindVisibilityPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;

/**
 * A plugin to bind the visibility state of a component to a property (path) of a given Bean. If the value is true, the component will be
 * visible, false it will be hidden.
 * /
[PublicApi]
public class BindVisibilityPluginBase extends BindPlugin {

  private var transformer:Function;

  /**
   * Create a plugin to bind the visibility state of a component to a property (path) of a given Bean.
   *
   * @param config the configuration object
   * /
  public*/ function BindVisibilityPluginBase$(config/*:BindVisibilityPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$Vao5(config);
    this.transformer$Vao5 = AS3.getBindable(config,"transformer");

  }/*

  internal*/ function changeVisibility(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var value/*:**/ = valueExpression.getValue();
    if (this.transformer$Vao5 != null && value !== undefined) {
      value = this.transformer$Vao5(value, valueExpression);
    }
    var newHidden/*:Boolean*/ = !value;
    if (newHidden !== component.hidden) {
      component.setVisible(! !value);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      transformer$Vao5: null,
      constructor: BindVisibilityPluginBase$,
      super$Vao5: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      changeVisibility: changeVisibility,
      requires: ["com.coremedia.ui.plugins.BindPlugin"]
    };
});
