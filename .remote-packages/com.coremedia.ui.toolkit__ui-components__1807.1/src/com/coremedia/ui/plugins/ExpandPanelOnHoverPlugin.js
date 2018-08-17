Ext.define("com.coremedia.ui.plugins.ExpandPanelOnHoverPlugin", function(ExpandPanelOnHoverPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 Attached to a panel to expand it when hovering over the header after a certain delay.

 * /
public class ExpandPanelOnHoverPlugin extends ExpandPanelOnHoverPluginBase{

    public*/function ExpandPanelOnHoverPlugin$(config/*:ExpandPanelOnHoverPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase,{});
    var defaults_$1/*:ExpandPanelOnHoverPlugin*/ =AS3.cast(ExpandPanelOnHoverPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$8P0O(config_$1);
  }/*

    /**

     If in drag mode and the drag source belongs to any of the given groups the corresponding panel will be expanded
     after a certain delay when hovering over the panel header.

     * /
    [Bindable]
    public var activateOnHoverDDGroups:Array;


    /**

     Specifies a delay if panel should not be expanded immediately.

     * /
    [Bindable]
    public var activateOnHoverDelay:int;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: ExpandPanelOnHoverPlugin$,
      super$8P0O: function() {
        com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        activateOnHoverDDGroups: null,
        activateOnHoverDelay: 0
      },
      requires: [
        "com.coremedia.ui.plugins.ExpandPanelOnHoverPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
