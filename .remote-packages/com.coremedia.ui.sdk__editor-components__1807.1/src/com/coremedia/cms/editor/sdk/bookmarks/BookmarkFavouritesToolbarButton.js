Ext.define("com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButton", function(BookmarkFavouritesToolbarButton) {/*package com.coremedia.cms.editor.sdk.bookmarks{
import com.coremedia.cms.editor.sdk.bookmarks.*;
import net.jangaroo.ext.Exml;
import ext.menu.Menu;
import com.coremedia.ui.plugins.BindComponentsPlugin;
import com.coremedia.ui.plugins.BindPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class BookmarkFavouritesToolbarButton extends BookmarkFavouritesToolbarButtonBase{

    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.MenuSkin;

    public static const COMPONENT_ID:String = "bookmarksMenuButton";
    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.bookmarkFavouritesToolbarButton";
    private var bookmarks:ValueExpression;

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:BookmarkFavouritesToolbarButton*/)/*:void*/ {
      this.bookmarks$z75Y = com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager.getInstance().getAvailableBookmarksExpression();
    }/*

    public*/function BookmarkFavouritesToolbarButton$(config/*:BookmarkFavouritesToolbarButton = null*/){if(arguments.length<=0)config=null;this.__initialize__$z75Y(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase,{});
    var defaults_$1/*:BookmarkFavouritesToolbarButton*/ =AS3.cast(BookmarkFavouritesToolbarButton,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'BookmarksMenuButton_label')));
    AS3.setBindable(config_$1,"iconAlign" , "top");
    config_$1["id"] = BookmarkFavouritesToolbarButton.COMPONENT_ID;
    AS3.setBindable(config_$1,"scale" , "medium");
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'BookmarksMenuButton_icon')));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    config_$1.menuAlign = "tr";
    var menu_45_5_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    menu_45_5_$1["id"] = "bookmarkMenu";
    AS3.setBindable(menu_45_5_$1,"style" , "max-height: 70%;overflow-y: auto");
    menu_45_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.SIDE.getSkin());
    var ui_BindComponentsPlugin_49_9_$1/*:com.coremedia.ui.plugins.BindComponentsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindComponentsPlugin,{});
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"configBeanParameterName" , "bookmark");
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"clearBeforeUpdate" , true);
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"reuseComponents" , false);
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"valueExpression" , this.bookmarks$z75Y);
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"getKey" , function(bm/*:Bookmark*/)/*:String*/{return bm.getContent().getUriPath();});
    var editor_BookmarkButtonMenuItem_55_13_$1/*: com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem,{});
    AS3.setBindable(ui_BindComponentsPlugin_49_9_$1,"template" , editor_BookmarkButtonMenuItem_55_13_$1);
    var ui_BindPlugin_58_9_$1/*:com.coremedia.ui.plugins.BindPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPlugin,{});
    ui_BindPlugin_58_9_$1.bindTo = this.bookmarks$z75Y;
    ui_BindPlugin_58_9_$1.boundValueChanged = com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase.addDummyMenuItemWhenEmpty;
    menu_45_5_$1.plugins = [ui_BindComponentsPlugin_49_9_$1, ui_BindPlugin_58_9_$1];
    menu_45_5_$1.items = [];
    config_$1.menu = menu_45_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$z75Y(config_$1);
  }/*

    /**
     The contextmenu to use for the bookmark menuitems
     * /
    [Bindable]
    public var contextMenu:com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.bookmarkFavouritesToolbarButton",
      bookmarks$z75Y: null,
      __initialize__$z75Y: __initialize__,
      constructor: BookmarkFavouritesToolbarButton$,
      super$z75Y: function() {
        com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase.prototype.constructor.apply(this, arguments);
      },
      config: {contextMenu: null},
      statics: {COMPONENT_ID: "bookmarksMenuButton"},
      requires: [
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButtonBase",
        "com.coremedia.ui.plugins.BindComponentsPlugin",
        "com.coremedia.ui.plugins.BindPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.MenuSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkButtonMenuItem",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkManager"
      ]
    };
});
