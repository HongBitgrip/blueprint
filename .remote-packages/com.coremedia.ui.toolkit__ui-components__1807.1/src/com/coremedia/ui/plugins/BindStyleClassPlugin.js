Ext.define("com.coremedia.ui.plugins.BindStyleClassPlugin", function(BindStyleClassPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 A plugin to bind the presence of a style class in a component to a
 property (path) of a given Bean.
 If a style class is given exactly, the style class will be present
 if and only if the property path value is true after conversion to boolean.
 If a prefix and a suffix are given, the style class to be present
 will be the composition of the prefix, the property value, and the
 suffix.

 * /
public class BindStyleClassPlugin extends BindStyleClassPluginBase{

    public*/function BindStyleClassPlugin$(config/*:BindStyleClassPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindStyleClassPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindStyleClassPluginBase,{});
    var defaults_$1/*:BindStyleClassPlugin*/ =AS3.cast(BindStyleClassPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"changeStyleClass");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Ejy9(config_$1);
  }/*

    /**

     A function that transforms the value before it is passed to the field. Furthermore the bean holding the value is
     passed to the function.
     Example function: &lt;code>function (value, valueExpression) { return value.toUpperCase(); }&lt;/code>

     * /
    [Bindable]
    public var transformer:Function;


    /**
     The style class to add and remove.
     * /
    [Bindable]
    public var cls:String;


    /**
     The prefix for the style class.
     * /
    [Bindable]
    public var prefix:String;


    /**
     The suffix for the style class.
     * /
    [Bindable]
    public var suffix:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindStyleClassPluginBase",
      constructor: BindStyleClassPlugin$,
      super$Ejy9: function() {
        com.coremedia.ui.plugins.BindStyleClassPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        transformer: null,
        cls: null,
        prefix: null,
        suffix: null
      },
      requires: [
        "com.coremedia.ui.plugins.BindStyleClassPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
