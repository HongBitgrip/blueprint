Ext.define("com.coremedia.ui.components.TabContextMenu", function(TabContextMenu) {/*package com.coremedia.ui.components{
import com.coremedia.ui.components.*;
import net.jangaroo.ext.Exml;
[PublicApi]
/**

 A context menu for tabs in a tab panel. It is a context provider defining the following context properties:
 <ul>
 <li><code>com.coremedia.ui.config.tabContextMenu.CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME</code></li>
 <li><code>com.coremedia.ui.config.tabContextMenu.CONTEXT_CLICKED_TAB_VARIABLE_NAME</code></li>
 </ul>
 However, instead of accessing these context variables directly for implementing context
 menu actions, it is recommended to subclass AbstractTabContextMenuAction or one of
 its subclasses.

 @see com.coremedia.ui.actions.AbstractTabContextMenuAction

 * /
public class TabContextMenu extends TabContextMenuBase{

    public static const xtype:String = "com.coremedia.ui.config.tabContextMenu";

    /**
     * The context property name for the context-clicked tab panel.
     *
     * @see ext.TabPanel.
     * /
    public static const CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME:String = "contextClickedTabPanel";

    /**
     * The context property name for the context-clicked tab.
     *
     * @see ext.Panel.
     * /
    public static const CONTEXT_CLICKED_TAB_VARIABLE_NAME:String = "contextClickedTab";

    public*/function TabContextMenu$(config/*:TabContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.ui.components.TabContextMenuBase*/ =AS3.cast(com.coremedia.ui.components.TabContextMenuBase,{});
    var defaults_$1/*:TabContextMenu*/ =AS3.cast(TabContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$rMQj(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.TabContextMenuBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.ui.config.tabContextMenu",
      constructor: TabContextMenu$,
      super$rMQj: function() {
        com.coremedia.ui.components.TabContextMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME: "contextClickedTabPanel",
        CONTEXT_CLICKED_TAB_VARIABLE_NAME: "contextClickedTab"
      },
      requires: [
        "com.coremedia.ui.components.TabContextMenuBase",
        "net.jangaroo.ext.Exml"
      ]
    };
});
