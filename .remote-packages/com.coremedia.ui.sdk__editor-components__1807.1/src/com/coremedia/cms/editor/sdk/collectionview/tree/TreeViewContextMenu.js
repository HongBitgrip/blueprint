Ext.define("com.coremedia.cms.editor.sdk.collectionview.tree.TreeViewContextMenu", function(TreeViewContextMenu) {/*package com.coremedia.cms.editor.sdk.collectionview.tree{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction;
import com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction;
import com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction;
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
 The context menu for the tree in the repository view of the collection view.
 * /
public class TreeViewContextMenu extends Menu{

    import com.coremedia.cms.editor.sdk.collectionview.CollectionView;
    import com.coremedia.ui.context.ComponentContextManager;
    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.treeViewContextMenu";

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
     * The itemId of the open in tab menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the rename menu item.
     * /
    public static const RENAME_CONTENT_ITEM_MENU_ITEM_ID:String = "rename";

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
     * The itemId of the withdraw menu item.
     * /
    public static const WITHDRAW_MENU_ITEM_ID:String = "withdraw";

    /**
     * The itemId of the delete menu item.
     * /
    public static const DELETE_MENU_ITEM_ID:String = "delete";

    /**
     * The itemId of the delete menu item.
     * /
    public static const OPEN_SITE_HOMEPAGE_IN_TAB_MENU_ITEM_ID:String = "openSiteHomepageInTab";

    /**
     * The itemId of the set preferred site menu item.
     * /
    public static const SET_PREFERRED_SITE_MENU_ITEM_ID:String = "setPreferredSite";

    /**
     * The itemId of the show hidden navigation items menu item.
     * /
    public static const SHOW_HIDE_ITEMS:String = "showHideItems";
    private var selectedFolderValueExpression:ValueExpression;

    // called by generated constructor code
    private*/ function __initialize__(config/*:TreeViewContextMenu*/)/*:void*/ {
      this.selectedFolderValueExpression$hF9i = com.coremedia.ui.context.ComponentContextManager.getInstance().getContextExpression(this, com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME);
    }/*

    public*/function TreeViewContextMenu$(config/*:TreeViewContextMenu = null*/){if(arguments.length<=0)config=null;this.__initialize__$hF9i(config);
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:TreeViewContextMenu*/ =AS3.cast(TreeViewContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_103_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_103_5_$1];
    var menuItem_106_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_106_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenEntitiesInTabsAction_108_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction,{});
    AS3.setBindable(editor_OpenEntitiesInTabsAction_108_9_$1,"entitiesVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_106_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenEntitiesInTabsAction(editor_OpenEntitiesInTabsAction_108_9_$1);
    var menuSeparator_111_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_112_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_112_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.OPEN_SITE_HOMEPAGE_IN_TAB_MENU_ITEM_ID);
    var editor_OpenSiteHomepageInTabAction_114_9_$1/*:com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction,{});
    AS3.setBindable(editor_OpenSiteHomepageInTabAction_114_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_112_5_$1.baseAction = new com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction(editor_OpenSiteHomepageInTabAction_114_9_$1);
    var menuSeparator_117_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_118_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_118_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.SHOW_HIDE_ITEMS);
    var editor_ShowHiddenItemsAction_120_9_$1/*:com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction,{});
    AS3.setBindable(editor_ShowHiddenItemsAction_120_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_118_5_$1.baseAction = new com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction(editor_ShowHiddenItemsAction_120_9_$1);
    var menuSeparator_123_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_124_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_124_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.SET_PREFERRED_SITE_MENU_ITEM_ID);
    var editor_SetPreferredSiteContentAction_126_9_$1/*:com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction,{});
    AS3.setBindable(editor_SetPreferredSiteContentAction_126_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_124_5_$1.baseAction = new com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction(editor_SetPreferredSiteContentAction_126_9_$1);
    var menuSeparator_129_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var editor_BookmarkMenuItem_130_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkMenuItem,{});
    editor_BookmarkMenuItem_130_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.BOOKMARK_ITEM_ID);
    AS3.setBindable(editor_BookmarkMenuItem_130_5_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    var menuSeparator_132_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_133_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_133_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.CUT_TO_CLIPBOARD_ITEM_ID);
    var editor_CutToClipboardAction_135_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction,{});
    AS3.setBindable(editor_CutToClipboardAction_135_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    editor_CutToClipboardAction_135_9_$1["hideForContentProxy"] = true;
    menuItem_133_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CutToClipboardAction(editor_CutToClipboardAction_135_9_$1);
    var menuItem_139_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_139_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.COPY_TO_CLIPBOARD_ITEM_ID);
    var editor_CopyToClipboardAction_141_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_141_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_139_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_141_9_$1);
    var menuItem_144_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_144_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.PASTE_FROM_CLIPBOARD_ITEM_ID);
    var editor_PasteFromClipboardAction_146_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction,{});
    AS3.setBindable(editor_PasteFromClipboardAction_146_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    editor_PasteFromClipboardAction_146_9_$1["hideForContentProxy"] = true;
    menuItem_144_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.PasteFromClipboardAction(editor_PasteFromClipboardAction_146_9_$1);
    var menuSeparator_150_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_151_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_151_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.RENAME_CONTENT_ITEM_MENU_ITEM_ID);
    var editor_RenameContentItemAction_153_9_$1/*:com.coremedia.cms.editor.sdk.actions.RenameContentItemAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.RenameContentItemAction,{});
    AS3.setBindable(editor_RenameContentItemAction_153_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    editor_RenameContentItemAction_153_9_$1["hideForContentProxy"] = true;
    menuItem_151_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.RenameContentItemAction(editor_RenameContentItemAction_153_9_$1);
    var menuSeparator_157_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_158_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_158_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.APPROVE_MENU_ITEM_ID);
    var editor_ApproveAction_160_9_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_160_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_158_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_160_9_$1);
    var menuItem_163_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_163_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.PUBLISH_MENU_ITEM_ID);
    var editor_PublishAction_165_9_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_165_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_163_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_165_9_$1);
    var menuSeparator_168_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_169_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_169_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.WITHDRAW_MENU_ITEM_ID);
    var editor_WithdrawAction_171_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_171_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_169_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_171_9_$1);
    var menuItem_174_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_174_5_$1.itemId =net.jangaroo.ext.Exml.asString( TreeViewContextMenu.DELETE_MENU_ITEM_ID);
    var editor_DeleteAction_176_9_$1/*:com.coremedia.cms.editor.sdk.actions.DeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.DeleteAction,{});
    AS3.setBindable(editor_DeleteAction_176_9_$1,"contentVariableName" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.CollectionView.SELECTED_FOLDER_VARIABLE_NAME));
    menuItem_174_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.DeleteAction(editor_DeleteAction_176_9_$1);
    config_$1.items = [menuItem_106_5_$1, menuSeparator_111_5_$1, menuItem_112_5_$1, menuSeparator_117_5_$1, menuItem_118_5_$1, menuSeparator_123_5_$1, menuItem_124_5_$1, menuSeparator_129_5_$1, editor_BookmarkMenuItem_130_5_$1, menuSeparator_132_5_$1, menuItem_133_5_$1, menuItem_139_5_$1, menuItem_144_5_$1, menuSeparator_150_5_$1, menuItem_151_5_$1, menuSeparator_157_5_$1, menuItem_158_5_$1, menuItem_163_5_$1, menuSeparator_168_5_$1, menuItem_169_5_$1, menuItem_174_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$hF9i(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.treeViewContextMenu",
      selectedFolderValueExpression$hF9i: null,
      __initialize__$hF9i: __initialize__,
      constructor: TreeViewContextMenu$,
      super$hF9i: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CUT_TO_CLIPBOARD_ITEM_ID: "cutToClipboard",
        COPY_TO_CLIPBOARD_ITEM_ID: "copyToClipboard",
        PASTE_FROM_CLIPBOARD_ITEM_ID: "pasteFromClipboard",
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        RENAME_CONTENT_ITEM_MENU_ITEM_ID: "rename",
        BOOKMARK_ITEM_ID: "bookmark",
        APPROVE_MENU_ITEM_ID: "approve",
        DISAPPROVE_MENU_ITEM_ID: "disapprove",
        PUBLISH_MENU_ITEM_ID: "publish",
        WITHDRAW_MENU_ITEM_ID: "withdraw",
        DELETE_MENU_ITEM_ID: "delete",
        OPEN_SITE_HOMEPAGE_IN_TAB_MENU_ITEM_ID: "openSiteHomepageInTab",
        SET_PREFERRED_SITE_MENU_ITEM_ID: "setPreferredSite",
        SHOW_HIDE_ITEMS: "showHideItems"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.context.ComponentContextManager",
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
        "com.coremedia.cms.editor.sdk.collectionview.CollectionView",
        "com.coremedia.cms.editor.sdk.navigationtree.actions.ShowHiddenItemsAction",
        "com.coremedia.cms.editor.sdk.sites.OpenSiteHomepageInTabAction",
        "com.coremedia.cms.editor.sdk.sites.SetPreferredSiteContentAction"
      ]
    };
});
