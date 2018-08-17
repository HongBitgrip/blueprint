Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu", function(BookmarkContextMenu) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class BookmarkContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bookmarkContextMenu";

    /**
     * The item ID of the menu item for showing the rename bookmark dialog.
     * /
    public static const RENAME_BOOKMARK:String = "renameBookmarkItemId";

    /**
     * The item ID of the menu item for removing a bookmark.
     * /
    public static const REMOVE_BOOKMARK:String = "removeBookmarkItemId";

    public*/function BookmarkContextMenu$(config/*:BookmarkContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:BookmarkContextMenu*/ =AS3.cast(BookmarkContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_44_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_44_5_$1.itemId =net.jangaroo.ext.Exml.asString( BookmarkContextMenu.RENAME_BOOKMARK);
    var editor_RenameBookmarkAction_46_9_$1/*:com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction,{});
    AS3.setBindable(editor_RenameBookmarkAction_46_9_$1,"bookmarkVE" , AS3.getBindable(config,"selectedBookmarkVE"));
    AS3.setBindable(editor_RenameBookmarkAction_46_9_$1,"preventHideMenuVE" , AS3.getBindable(config,"preventHideMenuVE"));
    AS3.setBindable(editor_RenameBookmarkAction_46_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Bookmark_renameBookmarkAction_menu_text')));
    menuItem_44_5_$1.baseAction = new com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction(editor_RenameBookmarkAction_46_9_$1);
    var menuItem_51_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_5_$1.itemId =net.jangaroo.ext.Exml.asString( BookmarkContextMenu.REMOVE_BOOKMARK);
    var editor_BookmarkAction_53_9_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction,{});
    AS3.setBindable(editor_BookmarkAction_53_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedBookmarkVE").extendBy('content'));
    AS3.setBindable(editor_BookmarkAction_53_9_$1,"preventHideMenuVE" , AS3.getBindable(config,"preventHideMenuVE"));
    AS3.setBindable(editor_BookmarkAction_53_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Bookmark_bookmarkAction_menu_text')));
    menuItem_51_5_$1.baseAction = new com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction(editor_BookmarkAction_53_9_$1);
    config_$1.items = [menuItem_44_5_$1, menuItem_51_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$B9dD(config_$1);
  }/*

    /**
     * A ValueExpression evaluating to the selected bookmark for renaming
     * /
    [Bindable]
    public var selectedBookmarkVE:ValueExpression;

    /**
     * A ValueExpression evaluating to whether to hide the bookmark menu in case of a click or not
     * /
    [Bindable]
    public var preventHideMenuVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bookmarkContextMenu",
      constructor: BookmarkContextMenu$,
      super$B9dD: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedBookmarkVE: null,
        preventHideMenuVE: null
      },
      statics: {
        RENAME_BOOKMARK: "renameBookmarkItemId",
        REMOVE_BOOKMARK: "removeBookmarkItemId"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.Editor_properties",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.bookmarks.RenameBookmarkAction"
      ]
    };
});
