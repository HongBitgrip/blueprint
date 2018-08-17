Ext.define("com.coremedia.ui.plugins.RemoveItemsPlugin", function(RemoveItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 <p>Removes all items of the container that match any item from the provided list of items.
 If an <code>index</code> is specified, the item at that position is removed first.</p>
 <p>Using the parameter <code>recursive</code> any matched item in subcontainers is removed as well.
 Note that the menu of a button will be handled as subcontainer in this case.
 Note that <code>index</code> cannot be used when <code>recursive</code> is set to <code>true</code>.</p>
 <p>The plugin tries to remove items as early as possible, ideally before they are created.
 This does not work if the plugin is used in combination with a NestedRulesPlugin around
 it. In this case the items are already created before they are removed (and destroyed).</p>

 * /
public class RemoveItemsPlugin extends RemoveItemsPluginBase{

    public*/function RemoveItemsPlugin$(config/*:RemoveItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.RemoveItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.RemoveItemsPluginBase,{});
    var defaults_$1/*:RemoveItemsPlugin*/ =AS3.cast(RemoveItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$GLJT(config_$1);
  }/*

    /**

     Whether to automatically invoke the removed components' &lt;code>destroy()&lt;/code> function.
     Defaults to the value of the container's &lt;code>autoDestroy&lt;/code> config option.

     * /
    [Bindable]
    public var autoDestroy:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.RemoveItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: RemoveItemsPlugin$,
      super$GLJT: function() {
        com.coremedia.ui.plugins.RemoveItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {autoDestroy: false},
      requires: [
        "com.coremedia.ui.plugins.RemoveItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
