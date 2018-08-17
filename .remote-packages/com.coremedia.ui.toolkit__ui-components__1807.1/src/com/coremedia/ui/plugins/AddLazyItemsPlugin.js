Ext.define("com.coremedia.ui.plugins.AddLazyItemsPlugin", function(AddLazyItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adds the provided list of items to the lazyItems of the component to which the plugin is applied
 or the component specified in <code>applyTo</code> function.

 <p>
 This plugin works only with SwitchingContainers.
 </p>

 * /
public class AddLazyItemsPlugin extends AddLazyItemsPluginBase{

    public*/function AddLazyItemsPlugin$(config/*:AddLazyItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddLazyItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddLazyItemsPluginBase,{});
    var defaults_$1/*:AddLazyItemsPlugin*/ =AS3.cast(AddLazyItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$n3m(config_$1);
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
    public var items:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddLazyItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddLazyItemsPlugin$,
      super$$n3m: function() {
        com.coremedia.ui.plugins.AddLazyItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        applyTo: null,
        items: null
      },
      requires: [
        "com.coremedia.ui.plugins.AddLazyItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
