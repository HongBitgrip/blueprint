Ext.define("com.coremedia.ui.plugins.BindIconClassPlugin", function(BindIconClassPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A simple plugin that binds the iconClass of a component.
 * /
public class BindIconClassPlugin extends BindIconClassPluginBase{

    public*/function BindIconClassPlugin$(config/*:BindIconClassPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindIconClassPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindIconClassPluginBase,{});
    var defaults_$1/*:BindIconClassPlugin*/ =AS3.cast(BindIconClassPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"boundPropertyValueChanged");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$1dm3(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindIconClassPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindIconClassPlugin$,
      super$1dm3: function() {
        com.coremedia.ui.plugins.BindIconClassPluginBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "com.coremedia.ui.plugins.BindIconClassPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
