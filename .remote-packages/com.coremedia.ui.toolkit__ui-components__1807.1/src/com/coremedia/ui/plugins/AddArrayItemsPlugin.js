Ext.define("com.coremedia.ui.plugins.AddArrayItemsPlugin", function(AddArrayItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**
 Adds the provided array of items to the arrayProperty of the component.
 * /
public class AddArrayItemsPlugin extends AddArrayItemsPluginBase{

    public*/function AddArrayItemsPlugin$(config/*:AddArrayItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddArrayItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddArrayItemsPluginBase,{});
    var defaults_$1/*:AddArrayItemsPlugin*/ =AS3.cast(AddArrayItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_wif(config_$1);
  }/*

    /**
     The array component property.
     * /
    [Bindable]
    public var arrayProperty:String;


    /**
     The items to add to the array.
     * /
    [Bindable]
    public var items:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddArrayItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddArrayItemsPlugin$,
      super$_wif: function() {
        com.coremedia.ui.plugins.AddArrayItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        arrayProperty: null,
        items: null
      },
      requires: [
        "com.coremedia.ui.plugins.AddArrayItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
