Ext.define("com.coremedia.ui.plugins.CompoundPlugin", function(CompoundPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 A plugin that aggregates multiple plugins and initializes any given
 component using all of those plugins.
 * /
public class CompoundPlugin extends CompoundPluginBase{

    public*/function CompoundPlugin$(config/*:CompoundPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.CompoundPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.CompoundPluginBase,{});
    var defaults_$1/*:CompoundPlugin*/ =AS3.cast(CompoundPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fUAG(config_$1);
  }/*

    /** the plugins * /
    [Bindable]
    public var plugins:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.CompoundPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: CompoundPlugin$,
      super$fUAG: function() {
        com.coremedia.ui.plugins.CompoundPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {plugins: null},
      requires: [
        "com.coremedia.ui.plugins.CompoundPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
