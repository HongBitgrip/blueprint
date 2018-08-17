Ext.define("com.coremedia.ui.plugins.RotateStyleClassPlugin", function(RotateStyleClassPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**
 A plugin to rotate a style class attached to a component as long as
 a certain property (path) of a given bean evaluates to a true value.
 If the property evaluates to a false value, the style class is removed.
 * /
public class RotateStyleClassPlugin extends RotateStyleClassPluginBase{

    public*/function RotateStyleClassPlugin$(config/*:RotateStyleClassPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.RotateStyleClassPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.RotateStyleClassPluginBase,{});
    var defaults_$1/*:RotateStyleClassPlugin*/ =AS3.cast(RotateStyleClassPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"valueChanged");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tS_d(config_$1);
  }/*

    /**
     The prefix for the style class; defaults to the empty string.
     * /
    [Bindable]
    public var prefix:String;


    /**
     The suffix for the style class; defaults to the empty string.
     * /
    [Bindable]
    public var suffix:String;


    /**
     The time in milliseconds between two changes of the style class; defaults to 1000.
     * /
    [Bindable]
    public var interval:Number;


    /**
     The number of phases of a complete cycle; defaults to 2.
     * /
    [Bindable]
    public var phases:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.RotateStyleClassPluginBase",
      constructor: RotateStyleClassPlugin$,
      super$tS_d: function() {
        com.coremedia.ui.plugins.RotateStyleClassPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        prefix: null,
        suffix: null,
        interval: NaN,
        phases: 0
      },
      requires: [
        "com.coremedia.ui.plugins.RotateStyleClassPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
