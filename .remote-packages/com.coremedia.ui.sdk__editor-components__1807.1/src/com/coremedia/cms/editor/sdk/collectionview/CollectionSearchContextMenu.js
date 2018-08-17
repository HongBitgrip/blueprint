Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionSearchContextMenu", function(CollectionSearchContextMenu) {/*package com.coremedia.cms.editor.sdk.collectionview{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.sdk.actions.RenameContentItemAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.sdk.actions.UndeleteAction;
import com.coremedia.cms.editor.sdk.actions.DeleteAction;
[PublicApi]
/**
 The context menu for the list or thumbnail view in the search view of the collection view.
 * /
public class CollectionSearchContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collectionSearchContextMenu";

    /**
     * The itemId of the copy menu item.
     * /
    public static const COPY_TO_CLIPBOARD_ITEM_ID:String = "copyToClipboard";

    /**
     * The itemId of the open in tab menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the show in folder menu item.
     * /
    public static const SHOW_IN_FOLDER_MENU_ITEM_ID:String = "showInFolder";

    /**
     * The itemId of the approve menu item.
     * /
    public static const APPROVE_MENU_ITEM_ID:String = "approve";

    /**
     * The itemId of the copy menu item.
     * /
    public static const RENAME_MENU_ITEM_ID:String = "rename";

    /**
     * The itemId of the disapprove menu item.
     * /
    public static const DISAPPROVE_MENU_ITEM_ID:String = "disapprove";

    /**
     * The itemId of the publish menu item.
     * /
    public static const PUBLISH_MENU_ITEM_ID:String = "publish";

    /**
     * The itemId of the withdraw menu item.
     * /
    public static const WITHDRAW_MENU_ITEM_ID:String = "withdraw";

    /**
     * The itemId of the 'restore from trash' menu item.
     * /
    public static const UNDELETE_MENU_ITEM_ID:String = "undelete";

    /**
     * The itemId of the delete menu item.
     * /
    public static const DELETE_MENU_ITEM_ID:String = "delete";

    public var selectedItemsValueExpression:ValueExpression;

    public*/function CollectionSearchContextMenu$(config/*:CollectionSearchContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:CollectionSearchContextMenu*/ =AS3.cast(CollectionSearchContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_76_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_76_5_$1];
    var menuItem_80_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_80_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_82_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_82_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_80_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_82_9_$1);
    var menuItem_85_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_85_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.SHOW_IN_FOLDER_MENU_ITEM_ID);
    var editor_OpenInRepositoryAction_87_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction,{});
    AS3.setBindable(editor_OpenInRepositoryAction_87_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_85_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction(editor_OpenInRepositoryAction_87_9_$1);
    var menuSeparator_90_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var editor_BookmarkMenuItem_91_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem,{});
    AS3.setBindable(editor_BookmarkMenuItem_91_5_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    var menuSeparator_92_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_93_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_93_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.COPY_TO_CLIPBOARD_ITEM_ID);
    var editor_CopyToClipboardAction_95_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_95_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_93_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_95_9_$1);
    var menuSeparator_98_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_99_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_99_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.RENAME_MENU_ITEM_ID);
    var editor_RenameContentItemAction_101_9_$1/*:com.coremedia.cms.editor.sdk.actions.RenameContentItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemAction,{});
    AS3.setBindable(editor_RenameContentItemAction_101_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_99_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RenameContentItemAction(editor_RenameContentItemAction_101_9_$1);
    var menuSeparator_104_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_105_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.APPROVE_MENU_ITEM_ID);
    var editor_ApproveAction_107_9_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_107_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_105_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_107_9_$1);
    var menuItem_110_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_110_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.PUBLISH_MENU_ITEM_ID);
    var editor_PublishAction_112_9_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_112_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_110_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_112_9_$1);
    var menuSeparator_115_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_116_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_116_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.WITHDRAW_MENU_ITEM_ID);
    var editor_WithdrawAction_118_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_118_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_116_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_118_9_$1);
    var menuSeparator_121_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_122_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_122_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.UNDELETE_MENU_ITEM_ID);
    var editor_UndeleteAction_124_9_$1/*:com.coremedia.cms.editor.sdk.actions.UndeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteAction,{});
    AS3.setBindable(editor_UndeleteAction_124_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_122_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.UndeleteAction(editor_UndeleteAction_124_9_$1);
    var menuItem_127_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_127_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionSearchContextMenu.DELETE_MENU_ITEM_ID);
    var editor_DeleteAction_129_9_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteAction,{});
    AS3.setBindable(editor_DeleteAction_129_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_127_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteAction(editor_DeleteAction_129_9_$1);
    config_$1.items = [menuItem_80_5_$1, menuItem_85_5_$1, menuSeparator_90_5_$1, editor_BookmarkMenuItem_91_5_$1, menuSeparator_92_5_$1, menuItem_93_5_$1, menuSeparator_98_5_$1, menuItem_99_5_$1, menuSeparator_104_5_$1, menuItem_105_5_$1, menuItem_110_5_$1, menuSeparator_115_5_$1, menuItem_116_5_$1, menuSeparator_121_5_$1, menuItem_122_5_$1, menuItem_127_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$XkUN(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collectionSearchContextMenu",
      selectedItemsValueExpression: null,
      constructor: CollectionSearchContextMenu$,
      super$XkUN: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COPY_TO_CLIPBOARD_ITEM_ID: "copyToClipboard",
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        SHOW_IN_FOLDER_MENU_ITEM_ID: "showInFolder",
        APPROVE_MENU_ITEM_ID: "approve",
        RENAME_MENU_ITEM_ID: "rename",
        DISAPPROVE_MENU_ITEM_ID: "disapprove",
        PUBLISH_MENU_ITEM_ID: "publish",
        WITHDRAW_MENU_ITEM_ID: "withdraw",
        UNDELETE_MENU_ITEM_ID: "undelete",
        DELETE_MENU_ITEM_ID: "delete"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.DeleteAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.RenameContentItemAction",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction"
      ]
    };
});
