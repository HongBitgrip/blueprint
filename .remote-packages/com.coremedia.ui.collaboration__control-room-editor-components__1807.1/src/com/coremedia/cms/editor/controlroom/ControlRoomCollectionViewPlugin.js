Ext.define("com.coremedia.cms.editor.controlroom.ControlRoomCollectionViewPlugin", function(ControlRoomCollectionViewPlugin) {/*package com.coremedia.cms.editor.controlroom{
import com.coremedia.ui.plugins.NestedRulesPlugin;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar;
import com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin;
import ext.Component;
import com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu;
import com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin;
import com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu;
import com.coremedia.cms.editor.sdk.collectionview.SearchToolbar;
import com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu;
public class ControlRoomCollectionViewPlugin extends NestedRulesPlugin{

    import com.coremedia.cms.editor.sdk.collectionview.ICollectionView;
    private var myCollectionView:ICollectionView;

    // called by generated constructor code
    private*/ function __initialize__(config/*:ControlRoomCollectionViewPlugin*/)/*:void*/ {
      this.myCollectionView$ndOI =AS3.as( AS3.getBindable(config,"cmp","DUMMY"),  com.coremedia.cms.editor.sdk.collectionview.ICollectionView);
    }/*

    public*/function ControlRoomCollectionViewPlugin$(config/*:ControlRoomCollectionViewPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$ndOI(config);
    var config_$1/*:com.coremedia.ui.plugins.NestedRulesPlugin*/ =AS3.cast(com.coremedia.ui.plugins.NestedRulesPlugin,{});
    var defaults_$1/*:ControlRoomCollectionViewPlugin*/ =AS3.cast(ControlRoomCollectionViewPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var editor_RepositoryToolbar_27_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar,{});
    var collab_AddLibraryStartWorkflowButtonsPlugin_29_9_$1/*:com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin,{});
    AS3.setBindable(collab_AddLibraryStartWorkflowButtonsPlugin_29_9_$1,"selectedItemsValueExpression" , this.myCollectionView$ndOI.getSelectedItemsValueExpression());
    var component_32_13_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_32_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar.REPOSITORY_TOOLBAR_SPACER_FOURTH_ITEM_ID);
    AS3.setBindable(collab_AddLibraryStartWorkflowButtonsPlugin_29_9_$1,"after" , [component_32_13_$1]);
    editor_RepositoryToolbar_27_5_$1.plugins = [collab_AddLibraryStartWorkflowButtonsPlugin_29_9_$1];
    var editor_CollectionRepositoryContextMenu_38_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,{});
    var collab_AddLibraryStartWorkflowMenuItemsPlugin_40_9_$1/*:com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin,{});
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_40_9_$1,"selectedItemsValueExpression" , this.myCollectionView$ndOI.getSelectedRepositoryItemsValueExpression());
    var component_43_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_43_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu.WITHDRAW_MENU_ITEM_ID);
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_40_9_$1,"before" , [component_43_13_$1]);
    editor_CollectionRepositoryContextMenu_38_5_$1.plugins = [collab_AddLibraryStartWorkflowMenuItemsPlugin_40_9_$1];
    var editor_TreeViewContextMenu_49_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu,{});
    var collab_AddLibraryStartWorkflowMenuItemsPlugin_51_9_$1/*: com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin,{});
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_51_9_$1,"selectedItemsValueExpression" , this.myCollectionView$ndOI.getSelectedFolderValueExpression());
    var component_54_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_54_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu.WITHDRAW_MENU_ITEM_ID);
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_51_9_$1,"before" , [component_54_13_$1]);
    editor_TreeViewContextMenu_49_5_$1.plugins = [collab_AddLibraryStartWorkflowMenuItemsPlugin_51_9_$1];
    var editor_SearchToolbar_62_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.SearchToolbar*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.SearchToolbar,{});
    var collab_AddLibraryStartWorkflowButtonsPlugin_64_9_$1/*: com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin,{});
    AS3.setBindable(collab_AddLibraryStartWorkflowButtonsPlugin_64_9_$1,"selectedItemsValueExpression" , this.myCollectionView$ndOI.getSelectedSearchItemsValueExpression());
    var component_67_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_67_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.SearchToolbar.SEARCH_TOOLBAR_SPACER_FOURTH_ITEM_ID);
    AS3.setBindable(collab_AddLibraryStartWorkflowButtonsPlugin_64_9_$1,"after" , [component_67_13_$1]);
    editor_SearchToolbar_62_5_$1.plugins = [collab_AddLibraryStartWorkflowButtonsPlugin_64_9_$1];
    var editor_CollectionSearchContextMenu_73_5_$1/*:com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu,{});
    var collab_AddLibraryStartWorkflowMenuItemsPlugin_75_9_$1/*: com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin*/ =AS3.cast(com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin,{});
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_75_9_$1,"selectedItemsValueExpression" , this.myCollectionView$ndOI.getSelectedSearchItemsValueExpression());
    var component_78_13_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_78_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu.WITHDRAW_MENU_ITEM_ID);
    AS3.setBindable(collab_AddLibraryStartWorkflowMenuItemsPlugin_75_9_$1,"before" , [component_78_13_$1]);
    editor_CollectionSearchContextMenu_73_5_$1.plugins = [collab_AddLibraryStartWorkflowMenuItemsPlugin_75_9_$1];
    config_$1.rules = [editor_RepositoryToolbar_27_5_$1, editor_CollectionRepositoryContextMenu_38_5_$1, editor_TreeViewContextMenu_49_5_$1, editor_SearchToolbar_62_5_$1, editor_CollectionSearchContextMenu_73_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ndOI(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.NestedRulesPlugin",
      myCollectionView$ndOI: null,
      __initialize__$ndOI: __initialize__,
      constructor: ControlRoomCollectionViewPlugin$,
      super$ndOI: function() {
        com.coremedia.ui.plugins.NestedRulesPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.Component",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu",
        "com.coremedia.cms.editor.sdk.collectionview.ICollectionView",
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryToolbar",
        "com.coremedia.cms.editor.sdk.collectionview.SearchToolbar",
        "com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu",
        "com.coremedia.ui.plugins.NestedRulesPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowButtonsPlugin",
        "com.coremedia.cms.editor.controlroom.plugins.AddLibraryStartWorkflowMenuItemsPlugin"
      ]
    };
});
