Ext.define("com.coremedia.ui.plugins.BindVisibilityPlugin", function(BindVisibilityPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A plugin to bind the visibility state of a component to a property (path) of a given Bean. If the value is true,
 the component will be visible, false it will be hidden.

 * /
public class BindVisibilityPlugin extends BindVisibilityPluginBase{

    public*/function BindVisibilityPlugin$(config/*:BindVisibilityPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.BindVisibilityPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPluginBase,{});
    var defaults_$1/*:BindVisibilityPlugin*/ =AS3.cast(BindVisibilityPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.boundValueChanged =AS3.bind( this,"changeVisibility");
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$3hkK(config_$1);
  }/*

    /**

     A function that transforms the value before it is passed to the component property.
     Furthermore the value expression is passed to the function.
     Example function: &lt;code>function (value:Boolean, valueExpression) { return !value; }&lt;/code>

     * /
    [Bindable]
    public var transformer:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.BindVisibilityPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: BindVisibilityPlugin$,
      super$3hkK: function() {
        com.coremedia.ui.plugins.BindVisibilityPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {transformer: null},
      requires: [
        "com.coremedia.ui.plugins.BindVisibilityPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
