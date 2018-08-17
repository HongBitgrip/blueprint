Ext.define("com.coremedia.ui.plugins.ReplaceItemsPlugin", function(ReplaceItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Replace one or more items of the targeted container by other items.
 The replacement items are given in the items property. Each replacement
 component must identify the component to replace by its own id or itemId.

 * /
public class ReplaceItemsPlugin extends ReplaceItemsPluginBase{

    public*/function ReplaceItemsPlugin$(config/*:ReplaceItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.ReplaceItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.ReplaceItemsPluginBase,{});
    var defaults_$1/*:ReplaceItemsPlugin*/ =AS3.cast(ReplaceItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zY2H(config_$1);
  }/*

    /**

     Whether to automatically invoke the replaced components' &lt;code>destroy()&lt;/code> function.
     Defaults to the value of the container's &lt;code>autoDestroy&lt;/code> config option.

     * /
    [Bindable]
    public var autoDestroy:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.ReplaceItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: ReplaceItemsPlugin$,
      super$zY2H: function() {
        com.coremedia.ui.plugins.ReplaceItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {autoDestroy: false},
      requires: [
        "com.coremedia.ui.plugins.ReplaceItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
