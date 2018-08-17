Ext.define("com.coremedia.ui.plugins.AdditionalStyleClassPlugin", function(AdditionalStyleClassPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
public class AdditionalStyleClassPlugin extends AdditionalStyleClassPluginBase{

    public*/function AdditionalStyleClassPlugin$(config/*:AdditionalStyleClassPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AdditionalStyleClassPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AdditionalStyleClassPluginBase,{});
    var defaults_$1/*:AdditionalStyleClassPlugin*/ =AS3.cast(AdditionalStyleClassPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Y9bp(config_$1);
  }/*

    [Bindable]
    public var cls:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AdditionalStyleClassPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AdditionalStyleClassPlugin$,
      super$Y9bp: function() {
        com.coremedia.ui.plugins.AdditionalStyleClassPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {cls: null},
      requires: [
        "com.coremedia.ui.plugins.AdditionalStyleClassPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
