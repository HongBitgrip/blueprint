Ext.define("com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin", function(HideObsoleteSeparatorsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
public class HideObsoleteSeparatorsPlugin extends HideObsoleteSeparatorsPluginBase{

    public*/function HideObsoleteSeparatorsPlugin$(config/*:HideObsoleteSeparatorsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase,{});
    var defaults_$1/*:HideObsoleteSeparatorsPlugin*/ =AS3.cast(HideObsoleteSeparatorsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ZM1k(config_$1);
  }/*

    /** Whether the menu should be visible before the visibility of it's items has been checked. * /
    [Bindable]
    public var initiallyVisible:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase",
      constructor: HideObsoleteSeparatorsPlugin$,
      super$ZM1k: function() {
        com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {initiallyVisible: false},
      requires: [
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
