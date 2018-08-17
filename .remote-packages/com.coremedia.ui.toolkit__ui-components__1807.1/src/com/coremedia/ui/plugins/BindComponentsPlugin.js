Ext.define("com.coremedia.ui.plugins.BindComponentsPlugin", function(BindComponentsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 The 'bindComponentsPlugin' plugin binds a list of values or beans to a list of components.
 It must be used with containers only and replaces the items of its container with the
 list of bound components.

 * /
public class BindComponentsPlugin extends BindComponentsPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function BindComponentsPlugin$(config/*:BindComponentsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindComponentsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPluginBase,{});
    var defaults_$1/*:BindComponentsPlugin*/ =AS3.cast(BindComponentsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$BSYO(config_$1);
  }/*

    /**
     * The ValueExpression evaluating to the Array value that feeds the JsonStore.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;

    /**
     * The template of the component to be created. The template may define a default value for the bound parameter.
     * /
    [Bindable]
    public var template:Object;

    /**
     The name of the parameter name under which an item is stored in the initial config of a bound component.
     Defaults to 'currentBean'.
     * /
    [Bindable]
    public var configBeanParameterName:String;


    /**

     A function that retrieves a unique value from the items of the list usable for
     creating a mapping from item to component.
     Leave empty for using RemoteBean#getUriPath (requires items to be remote beans).
     signature: &lt;code>function(item:*):String&lt;/code>

     * /
    [Bindable]
    public var getKey:Function;


    /**
     The field to use for sorting the values in the list (defaults to undefined which performs no sorting).
     * /
    [Bindable]
    public var sortField:String;


    /**
     'ASC' or 'DESC' (case sensitive), ignored if sortField is not given. Defaults to 'ASC'.
     * /
    [Bindable]
    public var sortDirection:String;


    /**
     whether to reuse existing components when updating the container; defaults to true
     * /
    [Bindable]
    public var reuseComponents:Boolean;


    /**
     whether to remove all existing components before updating the container
     * /
    [Bindable]
    public var clearBeforeUpdate:Boolean;


    /**
     Optional function which is applied when removing the items from the container.
     Per Default all items will be removed.
     Useful when the container contains items which are not bound to the plugin.
     The first argument of the function is the container.
     The second argument of the function defines if the components to be removed can be destroyed.
     * /
    [Bindable]
    public var removeFunction:Function;


    /**
     Optional function which is applied when adding the bound items to the container.
     Per Default all items will appended.
     Useful when the container contains items which are not bound to the plugin
     and the bound items should be added at specific positions.
     The arguments of the function are the container and the array of the bound components.
     * /
    [Bindable]
    public var addFunction:Function;


    /**
     Callback function to be executed before component update. Use 'this' in the function's
     code to refer to the plugin's container.
     * /
    [Bindable]
    public var beforeUpdateCallback:Function;


    /**
     Callback function to be executed after component update. Use 'this' in the function's
     code to refer to the plugin's container.
     * /
    [Bindable]
    public var afterUpdateCallback:Function;



    /**
     Whether the scroll state of the container should be preserved when components data is updated.
     * /
    [Bindable]
    public var preserveScroll:Boolean;


    /**
     Optional function which is used to determine the scroll element of the container.
     * /
    [Bindable]
    public var scrollLocator:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindComponentsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindComponentsPlugin$,
      super$BSYO: function() {
        com.coremedia.ui.plugins.BindComponentsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        valueExpression: null,
        template: null,
        configBeanParameterName: null,
        getKey: null,
        sortField: null,
        sortDirection: null,
        reuseComponents: false,
        clearBeforeUpdate: false,
        removeFunction: null,
        addFunction: null,
        beforeUpdateCallback: null,
        afterUpdateCallback: null,
        preserveScroll: false,
        scrollLocator: null
      },
      requires: [
        "com.coremedia.ui.plugins.BindComponentsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
