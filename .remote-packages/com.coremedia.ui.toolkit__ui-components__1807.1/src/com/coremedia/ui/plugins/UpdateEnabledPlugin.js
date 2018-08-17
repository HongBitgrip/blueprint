Ext.define("com.coremedia.ui.plugins.UpdateEnabledPlugin", function(UpdateEnabledPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to enable and disable a component based on a boolean property of a bean.

 * /
public class UpdateEnabledPlugin extends UpdateEnabledPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function UpdateEnabledPlugin$(config/*:UpdateEnabledPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.UpdateEnabledPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.UpdateEnabledPluginBase,{});
    var defaults_$1/*:UpdateEnabledPlugin*/ =AS3.cast(UpdateEnabledPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$UM3v(config_$1);
  }/*

    /**
     * The property path to bind to.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.UpdateEnabledPluginBase",
      constructor: UpdateEnabledPlugin$,
      super$UM3v: function() {
        com.coremedia.ui.plugins.UpdateEnabledPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {valueExpression: null},
      requires: [
        "com.coremedia.ui.plugins.UpdateEnabledPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
