Ext.define("com.coremedia.ui.plugins.BindTooltipPluginBase", function(BindTooltipPluginBase) {/*package com.coremedia.ui.plugins {

import com.coremedia.ui.data.ValueExpression;

import ext.Component;
import ext.button.Button;

/**
 * A plugin to bind the tooltip of a button to a value expression.
 * /
public class BindTooltipPluginBase extends BindPlugin {

  /**
   * Create a plugin to bind the tooltip of a button to a value expression.
   *
   * @param config the configuration object
   * /
  public*/ function BindTooltipPluginBase$(config/*:BindTooltipPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$7Y0u(config);
  }/*

  override public*/ function init(component/*:Component*/)/*:void*/ {
    if (!(AS3.is(component,  Ext.button.Button))) {
      throw new AS3.Error("cannot bind tooltips for non-buttons");
    }
    com.coremedia.ui.plugins.BindPlugin.prototype.init.call(this,component);

    var button/*:Button*/ = AS3.cast(Ext.button.Button,component);

    if (AS3.getBindable(button,"menu","DUMMY")) {
      component.addListener("menushow",AS3.bind( this,"menuShow$7Y0u"));
      component.addListener("menuhide",AS3.bind( this,"menuHide$7Y0u"));
    }
  }/*

  private*/ function menuShow(button/*:Button*/)/*:void*/ {
    // Make sure no tooltip is shown until the menu is hidden.
    button.setTooltip("");
  }/*

  private*/ function menuHide(button/*:Button*/)/*:void*/ {
    this.updateTooltip(button, this.getBindTo());
  }/*

  internal*/ function updateTooltip(button/*:Button*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    if (!button.hasVisibleMenu()) {
      // Delay update of tooltip until the menu disappears.
      // Otherwise the tooltip might not remain hidden while the menu is visible.
      button.setTooltip(valueExpression.getValue());
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      constructor: BindTooltipPluginBase$,
      super$7Y0u: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      init: init,
      menuShow$7Y0u: menuShow,
      menuHide$7Y0u: menuHide,
      updateTooltip: updateTooltip,
      requires: [
        "AS3.Error",
        "Ext.button.Button",
        "com.coremedia.ui.plugins.BindPlugin"
      ]
    };
});
