Ext.define("com.coremedia.ui.plugins.TabContextMenuPlugin", function(TabContextMenuPlugin) {/*package com.coremedia.ui.plugins{
import com.coremedia.ui.plugins.*;
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A plugin that adds a tab context menu to tabs of a tab panel.

 @see com.coremedia.ui.config.tabContextMenu

 * /
public class TabContextMenuPlugin extends TabContextMenuPluginBase{

    public*/function TabContextMenuPlugin$(config/*:TabContextMenuPlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.plugins.TabContextMenuPluginBase*/ =AS3.cast(com.coremedia.ui.plugins.TabContextMenuPluginBase,{});
    var defaults_$1/*:TabContextMenuPlugin*/ =AS3.cast(TabContextMenuPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$_t6_(config_$1);
  }/*

    /**

     The context menu to use.

     * /
    [Bindable]
    public var contextMenu:com.coremedia.ui.components.TabContextMenu;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.TabContextMenuPluginBase",
      metadata: {"": ["PublicApi"]},
      constructor: TabContextMenuPlugin$,
      super$_t6_: function() {
        com.coremedia.ui.plugins.TabContextMenuPluginBase.prototype.constructor.apply(this, arguments);
      },
      config: {contextMenu: null},
      requires: [
        "com.coremedia.ui.plugins.TabContextMenuPluginBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
