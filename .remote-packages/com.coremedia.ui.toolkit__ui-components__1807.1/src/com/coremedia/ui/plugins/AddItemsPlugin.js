Ext.define("com.coremedia.ui.plugins.AddItemsPlugin", function(AddItemsPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Adds the provided list of items to the items of the component to which the plugin is applied
 or the component specified in <code>applyTo</code> function.

 <p>If no exact position is specified and no constraints for the position of the items
 to be added apply, the provided items are added at the end.
 Otherwise, if an exact position is specified and if this position satisfies all applicable constraints,
 the exact position is used.
 Otherwise, if there are applicable constraints requesting to put the items after certain items,
 the provided items are inserted immediately after the last of these items.
 Otherwise, there are items so that the provided items must be inserted before all
 of these items and the provided items are inserted immediately before the
 first of these items.</p>
 <p>Using the parameter <code>recursive</code> the provided list of items will be added to subcontainers as well.
 Note that the menu of a button will be handled as subcontainer in this case.
 Note that <code>index</code> cannot be used when <code>recursive</code> is set to <code>true</code>.
 In addition the provided items are NOT added at the end if no constraints for the position of the items
 to be added apply.
 </p>

 * /
public class AddItemsPlugin extends AddItemsPluginBase{

    public*/function AddItemsPlugin$(config/*:AddItemsPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.AddItemsPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPluginBase,{});
    var defaults_$1/*:AddItemsPlugin*/ =AS3.cast(AddItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zus4(config_$1);
  }/*

    /**
     The Containers whose items to add to the Container. Use this setting if you want to specify the list of items
     in a separate EXML file. The Container's items are added after the items.
     * /
    [Bindable]
    public var containers:Array;


    /**

     A list of component config objects that describe the existing items after which new items should be inserted.
     If the config object declares an &lt;code>id&lt;/code> or an &lt;code>itemId&lt;/code>, those are used to identify the
     existing item. Otherwise, the item's &lt;code>xtype&lt;/code> is matched.
     If an object does not denote a component, it is ignored. If no objects match, the entire configuration
     option is not applicable.

     * /
    [Bindable]
    public var after:Array;


    /**

     A list of component config objects that describe the existing items before which new items should be inserted.
     If the config object declares an &lt;code>id&lt;/code> or an &lt;code>itemId&lt;/code>, those are used to identify the
     existing item. Otherwise, the item's &lt;code>xtype&lt;/code> is matched.
     If an object does not denote a component, it is ignored. If no objects match, the entire configuration
     option is not applicable.

     * /
    [Bindable]
    public var before:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: AddItemsPlugin$,
      super$zus4: function() {
        com.coremedia.ui.plugins.AddItemsPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        containers: null,
        after: null,
        before: null
      },
      requires: [
        "com.coremedia.ui.plugins.AddItemsPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
