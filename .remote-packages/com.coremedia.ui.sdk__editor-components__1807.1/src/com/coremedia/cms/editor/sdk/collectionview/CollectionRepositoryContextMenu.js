Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionRepositoryContextMenu", function(CollectionRepositoryContextMenu) {/*package com.coremedia.cms.editor.sdk.collectionview{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction;
import com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem;
import com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction;
import com.coremedia.cms.editor.sdk.actions.RenameContentItemAction;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
import com.coremedia.cms.editor.sdk.actions.DeleteAction;
[PublicApi]
/**
 The context menu for the list or thumbnail view in the repository view of the collection view.
 * /
public class CollectionRepositoryContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.collectionRepositoryContextMenu";

    /**
     * The itemId of the cut menu item.
     * /
    public static const CUT_TO_CLIPBOARD_ITEM_ID:String = "cutToClipboard";

    /**
     * The itemId of the copy menu item.
     * /
    public static const COPY_TO_CLIPBOARD_ITEM_ID:String = "copyToClipboard";

    /**
     * The itemId of the paste menu item.
     * /
    public static const PASTE_FROM_CLIPBOARD_ITEM_ID:String = "pasteFromClipboard";

    /**
     * The itemId of the open menu item.
     * /
    public static const OPEN_MENU_ITEM_ID:String = "open";

    /**
     * The itemId of the open in tab menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the bookmark menu item.
     * /
    public static const BOOKMARK_ITEM_ID:String = "bookmark";

    /**
     * The itemId of the approve menu item.
     * /
    public static const APPROVE_MENU_ITEM_ID:String = "approve";

    /**
     * The itemId of the disapprove menu item.
     * /
    public static const DISAPPROVE_MENU_ITEM_ID:String = "disapprove";

    /**
     * The itemId of the publish menu item.
     * /
    public static const PUBLISH_MENU_ITEM_ID:String = "publish";

    /**
     * The itemId of the rename menu item.
     * /
    public static const RENAME_CONTENT_ITEM_MENU_ITEM_ID:String = "rename";

    /**
     * The itemId of the withdraw menu item.
     * /
    public static const WITHDRAW_MENU_ITEM_ID:String = "withdraw";

    /**
     * The itemId of the delete menu item.
     * /
    public static const DELETE_MENU_ITEM_ID:String = "delete";

    public var selectedItemsValueExpression:ValueExpression;

    [Bindable]
    public var selectedFolderValueExpression:ValueExpression;

    public*/function CollectionRepositoryContextMenu$(config/*:CollectionRepositoryContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:CollectionRepositoryContextMenu*/ =AS3.cast(CollectionRepositoryContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_89_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_89_5_$1];
    var menuItem_93_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_93_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.OPEN_MENU_ITEM_ID);
    var editor_OpenInTreeAction_95_9_$1/*:com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction,{});
    AS3.setBindable(editor_OpenInTreeAction_95_9_$1,"selectedFolderValueExpression" , AS3.getBindable(config,"selectedFolderValueExpression"));
    menuItem_93_5_$1.baseAction = new com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction(editor_OpenInTreeAction_95_9_$1);
    var menuItem_98_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_98_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenEntitiesInTabsAction_100_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction,{});
    AS3.setBindable(editor_OpenEntitiesInTabsAction_100_9_$1,"entitiesValueExpression" , config.selectedItemsValueExpression);
    menuItem_98_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction(editor_OpenEntitiesInTabsAction_100_9_$1);
    var menuSeparator_103_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var editor_BookmarkMenuItem_104_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem,{});
    editor_BookmarkMenuItem_104_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.BOOKMARK_ITEM_ID);
    AS3.setBindable(editor_BookmarkMenuItem_104_5_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    var menuSeparator_106_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_107_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_107_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.CUT_TO_CLIPBOARD_ITEM_ID);
    var editor_CutToClipboardAction_109_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction,{});
    AS3.setBindable(editor_CutToClipboardAction_109_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_107_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction(editor_CutToClipboardAction_109_9_$1);
    var menuItem_112_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_112_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.COPY_TO_CLIPBOARD_ITEM_ID);
    var editor_CopyToClipboardAction_114_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_114_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_112_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_114_9_$1);
    var menuItem_117_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_117_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.PASTE_FROM_CLIPBOARD_ITEM_ID);
    var editor_PasteFromClipboardAction_119_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction,{});
    AS3.setBindable(editor_PasteFromClipboardAction_119_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    AS3.setBindable(editor_PasteFromClipboardAction_119_9_$1,"selectedFolderValueExpression" , AS3.getBindable(config,"selectedFolderValueExpression"));
    menuItem_117_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction(editor_PasteFromClipboardAction_119_9_$1);
    var menuSeparator_123_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_124_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_124_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.RENAME_CONTENT_ITEM_MENU_ITEM_ID);
    var editor_RenameContentItemAction_126_9_$1/*:com.coremedia.cms.editor.sdk.actions.RenameContentItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemAction,{});
    AS3.setBindable(editor_RenameContentItemAction_126_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_124_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RenameContentItemAction(editor_RenameContentItemAction_126_9_$1);
    var menuSeparator_129_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_130_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_130_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.APPROVE_MENU_ITEM_ID);
    var editor_ApproveAction_132_9_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_132_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_130_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_132_9_$1);
    var menuItem_135_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_135_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.PUBLISH_MENU_ITEM_ID);
    var editor_PublishAction_137_9_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_137_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_135_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_137_9_$1);
    var menuSeparator_140_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_141_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_141_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.WITHDRAW_MENU_ITEM_ID);
    var editor_WithdrawAction_143_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_143_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_141_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_143_9_$1);
    var menuItem_146_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_146_5_$1.itemId =net.jangaroo.ext.Exml.asString( CollectionRepositoryContextMenu.DELETE_MENU_ITEM_ID);
    var editor_DeleteAction_148_9_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteAction,{});
    AS3.setBindable(editor_DeleteAction_148_9_$1,"contentValueExpression" , config.selectedItemsValueExpression);
    menuItem_146_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteAction(editor_DeleteAction_148_9_$1);
    config_$1.items = [menuItem_93_5_$1, menuItem_98_5_$1, menuSeparator_103_5_$1, editor_BookmarkMenuItem_104_5_$1, menuSeparator_106_5_$1, menuItem_107_5_$1, menuItem_112_5_$1, menuItem_117_5_$1, menuSeparator_123_5_$1, menuItem_124_5_$1, menuSeparator_129_5_$1, menuItem_130_5_$1, menuItem_135_5_$1, menuSeparator_140_5_$1, menuItem_141_5_$1, menuItem_146_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KJWr(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.collectionRepositoryContextMenu",
      selectedItemsValueExpression: null,
      constructor: CollectionRepositoryContextMenu$,
      super$KJWr: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {selectedFolderValueExpression: null},
      statics: {
        CUT_TO_CLIPBOARD_ITEM_ID: "cutToClipboard",
        COPY_TO_CLIPBOARD_ITEM_ID: "copyToClipboard",
        PASTE_FROM_CLIPBOARD_ITEM_ID: "pasteFromClipboard",
        OPEN_MENU_ITEM_ID: "open",
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        BOOKMARK_ITEM_ID: "bookmark",
        APPROVE_MENU_ITEM_ID: "approve",
        DISAPPROVE_MENU_ITEM_ID: "disapprove",
        PUBLISH_MENU_ITEM_ID: "publish",
        RENAME_CONTENT_ITEM_MENU_ITEM_ID: "rename",
        WITHDRAW_MENU_ITEM_ID: "withdraw",
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
        "com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.RenameContentItemAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction",
        "com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction",
        "com.coremedia.cms.editor.sdk.collectionview.tree.OpenInTreeAction"
      ]
    };
});
