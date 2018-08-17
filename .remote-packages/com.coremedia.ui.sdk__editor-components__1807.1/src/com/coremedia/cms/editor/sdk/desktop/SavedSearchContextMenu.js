Ext.define("com.coremedia.cms.editor.sdk.desktop.SavedSearchContextMenu", function(SavedSearchContextMenu) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.actions.MoveUserItemAction;
import com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction;
import com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction;
public class SavedSearchContextMenu extends Menu{

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.savedSearchContextMenu";

    /**
     * The itemId of the 'open' menu item.
     * /
    public static const OPEN_MENU_ITEM_ID:String = "open";

    /**
     * The itemId of the 'move to top' menu item.
     * /
    public static const MOVE_TO_TOP_ITEM_ID:String = "moveToTop";

    /**
     * The itemId of the 'move to top' menu item.
     * /
    public static const MOVE_UP_ITEM_ID:String = "moveUp";

    /**
     * The itemId of the 'move to top' menu item.
     * /
    public static const MOVE_DOWN_ITEM_ID:String = "moveDown";

    /**
     * The itemId of the 'move to top' menu item.
     * /
    public static const MOVE_TO_BOTTOM_ITEM_ID:String = "moveToBottom";

    /**
     * The itemId of the 'delete' menu item.
     * /
    public static const DELETE_MENU_ITEM_ID:String = "delete";

    /**
     * The itemId of the 'delete' menu item.
     * /
    public static const ADD_MENU_ITEM_ID:String = "add";

    public*/function SavedSearchContextMenu$(config/*:SavedSearchContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:SavedSearchContextMenu*/ =AS3.cast(SavedSearchContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_52_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_52_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.OPEN_MENU_ITEM_ID);
    var editor_ShowCollectionViewInSearchStateAction_54_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction,{});
    AS3.setBindable(editor_ShowCollectionViewInSearchStateAction_54_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_52_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction(editor_ShowCollectionViewInSearchStateAction_54_9_$1);
    var menuSeparator_58_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_59_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_59_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.MOVE_TO_TOP_ITEM_ID);
    var editor_MoveUserItemAction_61_9_$1/*:com.coremedia.cms.editor.sdk.actions.MoveUserItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,{});
    AS3.setBindable(editor_MoveUserItemAction_61_9_$1,"targetPosition" , "toTop");
    AS3.setBindable(editor_MoveUserItemAction_61_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_59_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.MoveUserItemAction(editor_MoveUserItemAction_61_9_$1);
    var menuItem_65_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.MOVE_UP_ITEM_ID);
    var editor_MoveUserItemAction_67_9_$1/*: com.coremedia.cms.editor.sdk.actions.MoveUserItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,{});
    AS3.setBindable(editor_MoveUserItemAction_67_9_$1,"targetPosition" , "up");
    AS3.setBindable(editor_MoveUserItemAction_67_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_65_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.MoveUserItemAction(editor_MoveUserItemAction_67_9_$1);
    var menuItem_71_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_71_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.MOVE_DOWN_ITEM_ID);
    var editor_MoveUserItemAction_73_9_$1/*: com.coremedia.cms.editor.sdk.actions.MoveUserItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,{});
    AS3.setBindable(editor_MoveUserItemAction_73_9_$1,"targetPosition" , "down");
    AS3.setBindable(editor_MoveUserItemAction_73_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_71_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.MoveUserItemAction(editor_MoveUserItemAction_73_9_$1);
    var menuItem_77_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_77_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.MOVE_TO_BOTTOM_ITEM_ID);
    var editor_MoveUserItemAction_79_9_$1/*: com.coremedia.cms.editor.sdk.actions.MoveUserItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.MoveUserItemAction,{});
    AS3.setBindable(editor_MoveUserItemAction_79_9_$1,"targetPosition" , "toBottom");
    AS3.setBindable(editor_MoveUserItemAction_79_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_77_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.MoveUserItemAction(editor_MoveUserItemAction_79_9_$1);
    var menuSeparator_83_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_84_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_84_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.ADD_MENU_ITEM_ID);
    var editor_ShowCollectionViewToSaveSearchAction_86_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction,{});
    menuItem_84_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction(editor_ShowCollectionViewToSaveSearchAction_86_9_$1);
    var menuItem_89_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_89_5_$1.itemId =net.jangaroo.ext.Exml.asString( SavedSearchContextMenu.DELETE_MENU_ITEM_ID);
    var editor_DeleteSavedSearchAction_91_9_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction,{});
    AS3.setBindable(editor_DeleteSavedSearchAction_91_9_$1,"stateVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea.CURRENT_SEARCH_STATE_VARIABLE_NAME));
    menuItem_89_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction(editor_DeleteSavedSearchAction_91_9_$1);
    config_$1.items = [menuItem_52_5_$1, menuSeparator_58_5_$1, menuItem_59_5_$1, menuItem_65_5_$1, menuItem_71_5_$1, menuItem_77_5_$1, menuSeparator_83_5_$1, menuItem_84_5_$1, menuItem_89_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$tD5B(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.savedSearchContextMenu",
      constructor: SavedSearchContextMenu$,
      super$tD5B: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      statics: {
        OPEN_MENU_ITEM_ID: "open",
        MOVE_TO_TOP_ITEM_ID: "moveToTop",
        MOVE_UP_ITEM_ID: "moveUp",
        MOVE_DOWN_ITEM_ID: "moveDown",
        MOVE_TO_BOTTOM_ITEM_ID: "moveToBottom",
        DELETE_MENU_ITEM_ID: "delete",
        ADD_MENU_ITEM_ID: "add"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction",
        "com.coremedia.cms.editor.sdk.actions.MoveUserItemAction",
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction",
        "com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea"
      ]
    };
});
