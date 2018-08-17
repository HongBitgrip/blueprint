Ext.define("com.coremedia.cms.editor.configuration.EnableDisapprovePlugin", function(EnableDisapprovePlugin) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.cms.editor.configuration.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.desktop.ActionsToolbar;
import com.coremedia.ui.plugins.AddItemsPlugin;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.actions.DisapproveAction;
import ext.Component;
import com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu;
import com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu;
[PublicApi]
/**

 Studio Plugin which activates disapprove action in Studio:
 <ul>
 <li>Disapprove button in the action toolbar</li>
 <li>Disapprove menu item in the context menu of the repository list in the collection view</li>
 <li>Disapprove menu item in the context menu of the search list in the collection view</li>
 </ul>

 * /
public class EnableDisapprovePlugin extends StudioPlugin{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionView;

    public*/function EnableDisapprovePlugin$(config/*:EnableDisapprovePlugin = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.configuration.StudioPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.StudioPlugin,{});
    var defaults_$1/*:EnableDisapprovePlugin*/ =AS3.cast(EnableDisapprovePlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_ActionsToolbar_29_5_$1/*:com.coremedia.cms.editor.sdk.desktop.ActionsToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ActionsToolbar,{});
    var ui_AddItemsPlugin_31_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var button_33_13_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_33_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.DISAPPROVE_BUTTON_ITEM_ID);
    var editor_DisapproveAction_35_17_$1/*:com.coremedia.cms.editor.sdk.actions.DisapproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DisapproveAction,{});
    AS3.setBindable(editor_DisapproveAction_35_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.CONTENT_VARIABLE_NAME));
    button_33_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DisapproveAction(editor_DisapproveAction_35_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_31_9_$1,"items" , [button_33_13_$1]);
    var component_40_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_40_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.CHECK_IN_BUTTON_ITEM_ID);
    var component_41_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_41_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.REVERT_BUTTON_ITEM_ID);
    var component_42_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_42_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.ActionsToolbar.APPROVE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_31_9_$1,"after" , [component_40_13_$1, component_41_13_$1, component_42_13_$1]);
    editor_ActionsToolbar_29_5_$1.plugins = [ui_AddItemsPlugin_31_9_$1];
    var editor_CollectionRepositoryContextMenu_48_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var local_EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin_50_9_$1/*: com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin,{});
    editor_CollectionRepositoryContextMenu_48_5_$1.plugins = [local_EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin_50_9_$1];
    var editor_TreeViewContextMenu_54_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu,{});
    var ui_AddItemsPlugin_56_9_$1/*: com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var menuItem_58_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_58_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu.DISAPPROVE_MENU_ITEM_ID);
    var editor_DisapproveAction_60_17_$1/*: com.coremedia.cms.editor.sdk.actions.DisapproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DisapproveAction,{});
    AS3.setBindable(editor_DisapproveAction_60_17_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_58_13_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DisapproveAction(editor_DisapproveAction_60_17_$1);
    AS3.setBindable(ui_AddItemsPlugin_56_9_$1,"items" , [menuItem_58_13_$1]);
    var component_65_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_65_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu.APPROVE_MENU_ITEM_ID);
    AS3.setBindable(ui_AddItemsPlugin_56_9_$1,"after" , [component_65_13_$1]);
    editor_TreeViewContextMenu_54_5_$1.plugins = [ui_AddItemsPlugin_56_9_$1];
    var editor_CollectionSearchContextMenu_71_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    var local_EnableDisapproveAddCollectionSearchContextMenuItemsPlugin_73_9_$1/*: com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionSearchContextMenuItemsPlugin*/ =AS3.cast(com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionSearchContextMenuItemsPlugin,{});
    editor_CollectionSearchContextMenu_71_5_$1.plugins = [local_EnableDisapproveAddCollectionSearchContextMenuItemsPlugin_73_9_$1];
    AS3.setBindable(config_$1,"rules" , [editor_ActionsToolbar_29_5_$1, editor_CollectionRepositoryContextMenu_48_5_$1, editor_TreeViewContextMenu_54_5_$1, editor_CollectionSearchContextMenu_71_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$$uCJ(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.configuration.StudioPlugin",
      metadata: {"": ["PublicApi"]},
      constructor: EnableDisapprovePlugin$,
      super$$uCJ: function() {
        com.coremedia.cms.editor.configuration.StudioPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.menu.Item",
        "com.coremedia.cms.editor.configuration.StudioPlugin",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin",
        "com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionSearchContextMenuItemsPlugin",
        "com.coremedia.cms.editor.sdk.actions.DisapproveAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbar"
      ]
    };
});
