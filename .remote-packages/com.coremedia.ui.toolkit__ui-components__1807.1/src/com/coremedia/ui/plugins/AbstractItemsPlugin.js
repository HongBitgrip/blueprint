Ext.define("com.coremedia.ui.plugins.AbstractItemsPlugin", function(AbstractItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Base class for plugins manipulating the items of a container

 * /
public class AbstractItemsPlugin extends AbstractItemsPluginBase{

    public*/function AbstractItemsPlugin$(config/*:AbstractItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AbstractItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AbstractItemsPluginBase,{});
    var defaults_$1/*:AbstractItemsPlugin*/ =AS3.cast(AbstractItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$heh$(config_$1);
  }/*

    /**
     The function to find the container of which the items will be manipulated
     The only argument is the component to which the plugin is applied.
     The function should return the target container of which the items will be eventually manipulated.
     If not specified the items of the container to which this plugin is applied will be manipulated.
     * /
    [Bindable]
    public var applyTo:Function;


    /**
     The optional function to decide the items will be manipulated.
     The only argument is the component to which the plugin is applied or the container which the applyTo returns.
     The given items will be only manipulated if the function returns true.
     * /
    [Bindable]
    public var onlyIf:Function;


    /**

     The index of the item in the container to be manipulated. Can be used only when &lt;code>recursive=false&lt;/code>.

     * /
    [Bindable]
    public var index:int;


    /**
     True if the item to be manipulated is searched recursively in all sub containers (default is false).
     * /
    [Bindable]
    public var recursive:Boolean;


    /**

     A list of component config objects that describe the items to be manipulated
     If the config object declares an &lt;code>id&lt;/code> or an &lt;code>itemId&lt;/code>, those are used to identify the
     existing item. Otherwise, the item's &lt;code>xtype&lt;/code> is matched.
     If an object does not denote a component, it is ignored.
     * /
    [Bindable]
    public var items:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AbstractItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AbstractItemsPlugin$,
      super$heh$: function() {
        com.coremedia.ui.plugins.AbstractItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        applyTo: null,
        onlyIf: null,
        index: 0,
        recursive: false,
        items: null
      },
      requires: [
        "com.coremedia.ui.plugins.AbstractItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
