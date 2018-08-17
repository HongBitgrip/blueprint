Ext.define("com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenu", function(WorkAreaTabProxiesContextMenu) {/*package com.coremedia.cms.editor.sdk.desktop.reusability{
import com.coremedia.cms.editor.sdk.desktop.reusability.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.desktop.CloseTabsAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.actions.RenameTabContentAction;
import com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction;
import com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction;
import com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.actions.Actions')]
/**

 The context menu for work area tabs. It is a context provider defining the following context properties:
 <ul>
 <li><code>com.coremedia.ui.config.tabContextMenu.CONTEXT_CLICKED_TAB_PANEL_VARIABLE_NAME</code></li>
 <li><code>com.coremedia.ui.config.tabContextMenu.CONTEXT_CLICKED_TAB_VARIABLE_NAME</code></li>
 </ul>
 However, instead of accessing these context variables directly for implementing context
 menu actions, it is recommended to subclass AbstractTabContextMenuAction or
 AbstractTabContextMenuContentAction.

 @see com.coremedia.ui.actions.AbstractTabContextMenuAction
 @see com.coremedia.cms.editor.sdk.actions.AbstractTabContextMenuContentAction

 * /
public class WorkAreaTabProxiesContextMenu extends WorkAreaTabProxiesContextMenuBase{

    import com.coremedia.cms.editor.sdk.desktop.*;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.workAreaTabProxiesContextMenu";

    /**
     * The item ID of the menu item for closing the active tab.
     * /
    public static const CLOSE_TAB_MENU_ITEM_ID:String = "closeTabMenuItemId";

    /**
     * The item ID of the menu item for closing all tabs other than the active tab.
     * /
    public static const CLOSE_OTHER_TABS_MENU_ITEM_ID:String = "closeOtherTabsMenuItemId";

    /**
     * The item ID of the menu item for closing all tabs.
     * /
    public static const CLOSE_ALL_TABS_MENU_ITEM_ID:String = "closeAllTabsMenuItemId";

    /**
     * The item ID of the menu item for showing the content of the active tab (if the tab is a Premular) in the library.
     * /
    public static const RENAME_CONTENT_OF_ACTIVE_TAB_ITEM_ID:String = "renameContentOfActiveTabItemId";

    /**
     * The item ID of the menu item for showing the content of the active tab (if the tab is a Premular) in the library.
     * /
    public static const SHOW_CONTENT_OF_ACTIVE_TAB_IN_LIBRARY_MENU_ITEM_ID:String = "showContentOfActiveTabInLibraryMenuItemId";

    /**
     * The item ID of the menu item for reverting the contents of all opened tabs (only applies to Premular tabs).
     * /
    public static const REVERT_ALL_CONTENTS_MENU_ITEM_ID:String = "revertAllContentsMenuItemId";

    /**
     * The item ID of the menu item for checking in the contents of all opened tabs (only applies to Premular tabs).
     * /
    public static const CHECK_IN_ALL_CONTENTS_MENU_ITEM_ID:String = "checkInAllContentsMenuItemId";

    /**
     * The item ID of the menu item for deleting the content of the active tab.
     * /
    public static const DELETE_CONTENT_OF_ACTIVE_TAB_ITEM_ID:String = "deleteContentOfActiveTabItemId";

    /**
     * The context property name for the entity of the context-clicked tab.
     * May be null if the context-clicked tab does not have an entity.
     * /
    public static const CONTEXT_CLICKED_TAB_ENTITY_VARIABLE_NAME:String = "contextClickedTabEntity";

    public*/function WorkAreaTabProxiesContextMenu$(config/*:WorkAreaTabProxiesContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase,{});
    var defaults_$1/*:WorkAreaTabProxiesContextMenu*/ =AS3.cast(WorkAreaTabProxiesContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var ui_HideObsoleteSeparatorsPlugin_85_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_85_5_$1];
    var menuItem_88_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_88_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.CLOSE_TAB_MENU_ITEM_ID);
    var editor_CloseTabsAction_90_9_$1/*:com.coremedia.cms.editor.sdk.desktop.CloseTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsAction,{});
    AS3.setBindable(editor_CloseTabsAction_90_9_$1,"mode" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_TAB_MODE));
    AS3.setBindable(editor_CloseTabsAction_90_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_closeTabsAction_closeTabText')));
    menuItem_88_5_$1.baseAction = new com.coremedia.cms.editor.sdk.desktop.CloseTabsAction(editor_CloseTabsAction_90_9_$1);
    var menuItem_94_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_94_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.CLOSE_OTHER_TABS_MENU_ITEM_ID);
    var editor_CloseTabsAction_96_9_$1/*: com.coremedia.cms.editor.sdk.desktop.CloseTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsAction,{});
    AS3.setBindable(editor_CloseTabsAction_96_9_$1,"mode" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_OTHER_TABS_MODE));
    AS3.setBindable(editor_CloseTabsAction_96_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_closeTabsAction_closeOtherTabsText')));
    menuItem_94_5_$1.baseAction = new com.coremedia.cms.editor.sdk.desktop.CloseTabsAction(editor_CloseTabsAction_96_9_$1);
    var menuItem_100_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_100_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.CLOSE_ALL_TABS_MENU_ITEM_ID);
    var editor_CloseTabsAction_102_9_$1/*: com.coremedia.cms.editor.sdk.desktop.CloseTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.CloseTabsAction,{});
    AS3.setBindable(editor_CloseTabsAction_102_9_$1,"mode" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.CloseTabsAction.CLOSE_ALL_TABS_MODE));
    AS3.setBindable(editor_CloseTabsAction_102_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_closeTabsAction_closeAllTabsText')));
    menuItem_100_5_$1.baseAction = new com.coremedia.cms.editor.sdk.desktop.CloseTabsAction(editor_CloseTabsAction_102_9_$1);
    var menuSeparator_106_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_107_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_107_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.RENAME_CONTENT_OF_ACTIVE_TAB_ITEM_ID);
    var editor_RenameTabContentAction_109_9_$1/*:com.coremedia.cms.editor.sdk.actions.RenameTabContentAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameTabContentAction,{});
    AS3.setBindable(editor_RenameTabContentAction_109_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_renameTabContentAction_menu_text')));
    menuItem_107_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RenameTabContentAction(editor_RenameTabContentAction_109_9_$1);
    var menuItem_113_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_113_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.SHOW_CONTENT_OF_ACTIVE_TAB_IN_LIBRARY_MENU_ITEM_ID);
    var editor_ShowTabContentInRepositoryAction_115_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction,{});
    AS3.setBindable(editor_ShowTabContentInRepositoryAction_115_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_showInTree_text')));
    menuItem_113_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction(editor_ShowTabContentInRepositoryAction_115_9_$1);
    var menuSeparator_119_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_120_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_120_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.REVERT_ALL_CONTENTS_MENU_ITEM_ID);
    var editor_ProcessAllContentTabsAction_122_9_$1/*:com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction,{});
    AS3.setBindable(editor_ProcessAllContentTabsAction_122_9_$1,"action" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_REVERT));
    AS3.setBindable(editor_ProcessAllContentTabsAction_122_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_revert_all_text')));
    menuItem_120_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction(editor_ProcessAllContentTabsAction_122_9_$1);
    var menuItem_126_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_126_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.CHECK_IN_ALL_CONTENTS_MENU_ITEM_ID);
    var editor_ProcessAllContentTabsAction_128_9_$1/*: com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction,{});
    AS3.setBindable(editor_ProcessAllContentTabsAction_128_9_$1,"action" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction.PROCESS_ALL_CONTENT_TABS_CHECKIN));
    AS3.setBindable(editor_ProcessAllContentTabsAction_128_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_checkIn_all_text')));
    menuItem_126_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction(editor_ProcessAllContentTabsAction_128_9_$1);
    var menuSeparator_132_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_133_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_133_5_$1.itemId =net.jangaroo.ext.Exml.asString( WorkAreaTabProxiesContextMenu.DELETE_CONTENT_OF_ACTIVE_TAB_ITEM_ID);
    var editor_DeleteTabContentAction_135_9_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction,{});
    AS3.setBindable(editor_DeleteTabContentAction_135_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.actions.Actions', 'Action_delete_text')));
    menuItem_133_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction(editor_DeleteTabContentAction_135_9_$1);
    config_$1.items = [menuItem_88_5_$1, menuItem_94_5_$1, menuItem_100_5_$1, menuSeparator_106_5_$1, menuItem_107_5_$1, menuItem_113_5_$1, menuSeparator_119_5_$1, menuItem_120_5_$1, menuItem_126_5_$1, menuSeparator_132_5_$1, menuItem_133_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wWbu(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.workAreaTabProxiesContextMenu",
      constructor: WorkAreaTabProxiesContextMenu$,
      super$wWbu: function() {
        com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CLOSE_TAB_MENU_ITEM_ID: "closeTabMenuItemId",
        CLOSE_OTHER_TABS_MENU_ITEM_ID: "closeOtherTabsMenuItemId",
        CLOSE_ALL_TABS_MENU_ITEM_ID: "closeAllTabsMenuItemId",
        RENAME_CONTENT_OF_ACTIVE_TAB_ITEM_ID: "renameContentOfActiveTabItemId",
        SHOW_CONTENT_OF_ACTIVE_TAB_IN_LIBRARY_MENU_ITEM_ID: "showContentOfActiveTabInLibraryMenuItemId",
        REVERT_ALL_CONTENTS_MENU_ITEM_ID: "revertAllContentsMenuItemId",
        CHECK_IN_ALL_CONTENTS_MENU_ITEM_ID: "checkInAllContentsMenuItemId",
        DELETE_CONTENT_OF_ACTIVE_TAB_ITEM_ID: "deleteContentOfActiveTabItemId",
        CONTEXT_CLICKED_TAB_ENTITY_VARIABLE_NAME: "contextClickedTabEntity"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Separator",
        "com.coremedia.cms.editor.sdk.actions.Actions_properties",
        "com.coremedia.cms.editor.sdk.desktop.reusability.WorkAreaTabProxiesContextMenuBase",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.DeleteTabContentAction",
        "com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction",
        "com.coremedia.cms.editor.sdk.actions.RenameTabContentAction",
        "com.coremedia.cms.editor.sdk.actions.ShowTabContentInRepositoryAction",
        "com.coremedia.cms.editor.sdk.desktop.CloseTabsAction"
      ]
    };
});
