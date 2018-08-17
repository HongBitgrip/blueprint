Ext.define("com.coremedia.ui.plugins.BindItemsPlugin", function(BindItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
/**

 The 'bindItemsPlugin' plugin binds a list of config objects to the items of the container.
 The order of the given config objects will be maintained.
 For a config object with a recurring itemId the already built component will be reused by default (see <code>reuseComponents</code>).
 For a config object with a new itemId a component will be created.

 * /
public class BindItemsPlugin extends BindItemsPluginBase{

    import com.coremedia.ui.data.ValueExpression;

    public*/function BindItemsPlugin$(config/*:BindItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindItemsPluginBase,{});
    var defaults_$1/*:BindItemsPlugin*/ =AS3.cast(BindItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$k2y4(config_$1);
  }/*

    /**
     * The ValueExpression evaluating to the Array of items of config objects.
     * /
    [Bindable]
    public var valueExpression:ValueExpression;

    /**
     Whether to reuse existing components when updating the container; defaults to true.
     * /
    [Bindable]
    public var reuseComponents:Boolean;


    /**
     Whether to delay the binding of the components until the event configured in 'lazyEvent' is fired; defaults to false.
     * /
    [Bindable]
    public var lazy:Boolean;


    /**
     The event that triggers the lazy binding of the components; only used when 'lazy' is true; defaults to 'beforerender'.
     * /
    [Bindable]
    public var lazyEvent:String;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindItemsPluginBase",
      constructor: BindItemsPlugin$,
      super$k2y4: function() {
        com.coremedia.ui.plugins.BindItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        valueExpression: null,
        reuseComponents: false,
        lazy: false,
        lazyEvent: null
      },
      requires: [
        "com.coremedia.ui.plugins.BindItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
