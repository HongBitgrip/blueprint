Ext.define("com.coremedia.ui.plugins.AddButtonsPlugin", function(AddButtonsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 Adds the provided array of buttons to the 'buttons' property of an ext.Panel.
 * /
public class AddButtonsPlugin extends AddButtonsPluginBase{

    public*/function AddButtonsPlugin$(config/*:AddButtonsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddButtonsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddButtonsPluginBase,{});
    var defaults_$1/*:AddButtonsPlugin*/ =AS3.cast(AddButtonsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$bFX5(config_$1);
  }/*

    /**
     The buttons to add to the Panel.
     * /
    [Bindable]
    public var buttons:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddButtonsPluginBase",
      constructor: AddButtonsPlugin$,
      super$bFX5: function() {
        com.coremedia.ui.plugins.AddButtonsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {buttons: null},
      requires: [
        "com.coremedia.ui.plugins.AddButtonsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
