Ext.define("com.coremedia.ui.plugins.BindIconClassPluginBase", function(BindIconClassPluginBase) {/*package com.coremedia.ui.plugins {
import com.coremedia.ui.data.ValueExpression;

import ext.Component;

[PublicApi]
public class BindIconClassPluginBase extends BindPlugin {
  public*/ function BindIconClassPluginBase$(config/*:BindIconClassPlugin = null*/) {if(arguments.length<=0)config=null;
    this.super$iZrq(config);
  }/*

  internal*/ function boundPropertyValueChanged(component/*:Component*/, valueExpression/*:ValueExpression*/)/*:void*/ {
    var value/*:**/ = valueExpression.getValue();
    if (value !== undefined && component['setIconCls']) {
      component['setIconCls'](value);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: BindIconClassPluginBase$,
      super$iZrq: function() {
        com.coremedia.ui.plugins.BindPlugin.prototype.constructor.apply(this, arguments);
      },
      boundPropertyValueChanged: boundPropertyValueChanged,
      requires: ["com.coremedia.ui.plugins.BindPlugin"]
    };
});
