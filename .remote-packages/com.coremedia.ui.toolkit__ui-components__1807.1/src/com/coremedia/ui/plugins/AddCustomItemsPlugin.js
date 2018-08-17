Ext.define("com.coremedia.ui.plugins.AddCustomItemsPlugin", function(AddCustomItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adds the provided list of items to the given property of the component to which the plugin is applied
 or the component specified in <code>applyTo</code> function.

 * /
public class AddCustomItemsPlugin extends AddCustomItemsPluginBase{

    public*/function AddCustomItemsPlugin$(config/*:AddCustomItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddCustomItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddCustomItemsPluginBase,{});
    var defaults_$1/*:AddCustomItemsPlugin*/ =AS3.cast(AddCustomItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$P72J(config_$1);
  }/*

    /**
     The function to find the component to which the items will be added.
     The only argument is the component to which the plugin is applied.
     The function should return the target component to which the items will be eventually added.
     If not specified the items will be added to the component to which this plugin is applied.
     * /
    [Bindable]
    public var applyTo:Function;


    /**
     The items to add to the Container.
     * /
    [Bindable]
    public var items:Array;


    /**
     The property name of the component that the items are added to. The property is expected to be an Array.
     * /
    [Bindable]
    public var property:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddCustomItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddCustomItemsPlugin$,
      super$P72J: function() {
        com.coremedia.ui.plugins.AddCustomItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        applyTo: null,
        items: null,
        property: null
      },
      requires: [
        "com.coremedia.ui.plugins.AddCustomItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
