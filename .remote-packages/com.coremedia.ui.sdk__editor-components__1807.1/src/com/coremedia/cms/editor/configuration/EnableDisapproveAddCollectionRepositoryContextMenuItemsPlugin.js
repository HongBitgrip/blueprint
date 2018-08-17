Ext.define("com.coremedia.cms.editor.configuration.EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin", function(EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin) {/*package com.coremedia.cms.editor.configuration{
import com.coremedia.ui.plugins.AddItemsPlugin;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.DisapproveAction;
public class EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin extends AddItemsPlugin{

    import com.coremedia.cms.editor.sdk.collectionview.*;
    private var componentConfig:CollectionRepositoryContextMenu;

    // called by generated constructor code
    private*/ function __initialize__(config/*:EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin*/)/*:void*/ {
      this.componentConfig$fEpE = AS3.cast(com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu,AS3.getBindable(config,"cmp","DUMMY").initialConfig);
    }/*

    public*/function EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin$(config/*:EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin = null*/){if(arguments.length<=0)config=null;this.__initialize__$fEpE(config);
    var config_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var defaults_$1/*:EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin*/ =AS3.cast(EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var menuItem_23_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_23_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu.DISAPPROVE_MENU_ITEM_ID);
    var editor_DisapproveAction_25_9_$1/*:com.coremedia.cms.editor.sdk.actions.DisapproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DisapproveAction,{});
    AS3.setBindable(editor_DisapproveAction_25_9_$1,"contentValueExpression" , this.componentConfig$fEpE.selectedItemsValueExpression);
    menuItem_23_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DisapproveAction(editor_DisapproveAction_25_9_$1);
    AS3.setBindable(config_$1,"items" , [menuItem_23_5_$1]);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$fEpE(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.plugins.AddItemsPlugin",
      componentConfig$fEpE: null,
      __initialize__$fEpE: __initialize__,
      constructor: EnableDisapproveAddCollectionRepositoryContextMenuItemsPlugin$,
      super$fEpE: function() {
        com.coremedia.ui.plugins.AddItemsPlugin.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.menu.Item",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.DisapproveAction",
        "com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu"
      ]
    };
});
