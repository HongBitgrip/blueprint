Ext.define("com.coremedia.cms.editor.sdk.desktop.FavoritesToolbar", function(FavoritesToolbar) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.toolbar.Spacer;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButton;
import com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.cms.editor.sdk.newcontent.NewContentMenuButton;
import ext.toolbar.Separator;
import com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea;
import com.coremedia.cms.editor.sdk.desktop.SavedSearchContextMenu;
import ext.button.Button;
import com.coremedia.cms.editor.sdk.desktop.ExtensionsMenu;
import ext.Component;
import ext.layout.container.VBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 The dark vertical toolbar on the left of the studio main view.
 * /
public class FavoritesToolbar extends Toolbar{

    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const COMPONENT_ID:String = "favorites-toolbar";
    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.favoritesToolbar";

    /**
     * The itemId of the 'My Searches' toolbar.
     * /
    public static const USER_ITEMS_TOOLBAR_ITEM_ID:String = "userItems";

    /**
     * The itemId of the extension menu button.
     * /
    public static const EXTENSION_MENU_BUTTON_ITEM_ID:String = "extensionsMenuButton";

    /**
     * The itemId of the new menu button.
     * /
    public static const NEW_MENU_BUTTON_ITEM_ID:String = "newMenuButton";

    /**
     * The itemId of the bookmarks menu.
     * /
    public static const FAVORITES_TOOLBAR_BOOKMARKS_ITEM_ID:String = "favoritesToolbarBookmarks";

    /**
     * The itemId of the logo box.
     * /
    public static const FAVORITES_TOOLBAR_LOGO_BOX_ITEM_ID:String = "logoBox";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){FavoritesToolbar.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-favorites-toolbar"));}/*;
    public static const ELEMENT_ARROW_BUTTON:BEMElement =*/function ELEMENT_ARROW_BUTTON$static_(){FavoritesToolbar.ELEMENT_ARROW_BUTTON=( FavoritesToolbar.BLOCK.createElement("arrow-button"));}/*;
    public static const ELEMENT_LOGO_BOX:BEMElement =*/function ELEMENT_LOGO_BOX$static_(){FavoritesToolbar.ELEMENT_LOGO_BOX=( FavoritesToolbar.BLOCK.createElement("logo-box"));}/*;

    public*/function FavoritesToolbar$(config/*:FavoritesToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:FavoritesToolbar*/ =AS3.cast(FavoritesToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["id"] = FavoritesToolbar.COMPONENT_ID;
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'FavoritesToolbar_label'));
    config_$1.vertical = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.SIDE.getSkin());
    config_$1.padding = "0 2 0 4";
    var ui_BEMPlugin_64_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_64_5_$1,"block" , FavoritesToolbar.BLOCK);
    config_$1.plugins = [ui_BEMPlugin_64_5_$1];
    var tbSpacer_67_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_67_5_$1,"height" , 34);
    var editor_BookmarkFavouritesToolbarButton_68_5_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButton,{});
    editor_BookmarkFavouritesToolbarButton_68_5_$1.itemId =net.jangaroo.ext.Exml.asString( FavoritesToolbar.FAVORITES_TOOLBAR_BOOKMARKS_ITEM_ID);
    var editor_BookmarkContextMenu_70_9_$1/*:com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu,{});
    AS3.setBindable(editor_BookmarkFavouritesToolbarButton_68_5_$1,"contextMenu" , editor_BookmarkContextMenu_70_9_$1);
    var ui_BEMMixin_73_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_73_9_$1,"bemElement" , FavoritesToolbar.ELEMENT_ARROW_BUTTON);

    delete ui_BEMMixin_73_9_$1['xtype'];
    delete ui_BEMMixin_73_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_BookmarkFavouritesToolbarButton_68_5_$1, ui_BEMMixin_73_9_$1);
    var editor_NewContentMenuButton_76_5_$1/*:com.coremedia.cms.editor.sdk.newcontent.NewContentMenuButton*/ =AS3.cast(com.coremedia.cms.editor.sdk.newcontent.NewContentMenuButton,{});
    editor_NewContentMenuButton_76_5_$1.itemId =net.jangaroo.ext.Exml.asString( FavoritesToolbar.NEW_MENU_BUTTON_ITEM_ID);
    var ui_BEMMixin_78_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_78_9_$1,"bemElement" , FavoritesToolbar.ELEMENT_ARROW_BUTTON);

    delete ui_BEMMixin_78_9_$1['xtype'];
    delete ui_BEMMixin_78_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_NewContentMenuButton_76_5_$1, ui_BEMMixin_78_9_$1);
    var tbSeparator_81_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_81_5_$1,"height" , 1);
    AS3.setBindable(tbSeparator_81_5_$1,"margin" , 0);
    var editor_FavoritesToolbarUserItemsArea_83_5_$1/*:com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea,{});
    editor_FavoritesToolbarUserItemsArea_83_5_$1.overflowHandler = "scroller";
    editor_FavoritesToolbarUserItemsArea_83_5_$1.flex = 1.0;
    editor_FavoritesToolbarUserItemsArea_83_5_$1.itemId =net.jangaroo.ext.Exml.asString( FavoritesToolbar.USER_ITEMS_TOOLBAR_ITEM_ID);
    editor_FavoritesToolbarUserItemsArea_83_5_$1.vertical = true;
    editor_FavoritesToolbarUserItemsArea_83_5_$1["tabGuard"] = false;
    editor_FavoritesToolbarUserItemsArea_83_5_$1["ariaRole"] = null;
    AS3.setBindable(editor_FavoritesToolbarUserItemsArea_83_5_$1,"border" , false);
    var editor_SavedSearchContextMenu_91_9_$1/*:com.coremedia.cms.editor.sdk.desktop.SavedSearchContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SavedSearchContextMenu,{});
    editor_FavoritesToolbarUserItemsArea_83_5_$1.contextMenu = editor_SavedSearchContextMenu_91_9_$1;
    var tbSeparator_94_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_94_5_$1,"height" , 1);
    var button_95_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_95_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'FavoritesToolbar_extensions_btn_text')));
    button_95_5_$1.itemId =net.jangaroo.ext.Exml.asString( FavoritesToolbar.EXTENSION_MENU_BUTTON_ITEM_ID);
    AS3.setBindable(button_95_5_$1,"scale" , "medium");
    AS3.setBindable(button_95_5_$1,"iconAlign" , "top");
    AS3.setBindable(button_95_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'FavoritesToolbar_extensions_btn_icon')));
    button_95_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    button_95_5_$1.menuAlign = "bl-br";
    var editor_ExtensionsMenu_103_9_$1/*:com.coremedia.cms.editor.sdk.desktop.ExtensionsMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ExtensionsMenu,{});
    editor_ExtensionsMenu_103_9_$1.hideMode = "display";
    button_95_5_$1.menu = editor_ExtensionsMenu_103_9_$1;
    var ui_BEMMixin_106_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_106_9_$1,"bemElement" , FavoritesToolbar.ELEMENT_ARROW_BUTTON);

    delete ui_BEMMixin_106_9_$1['xtype'];
    delete ui_BEMMixin_106_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(button_95_5_$1, ui_BEMMixin_106_9_$1);
    var box_109_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    box_109_5_$1.itemId =net.jangaroo.ext.Exml.asString( FavoritesToolbar.FAVORITES_TOOLBAR_LOGO_BOX_ITEM_ID);
    var ui_BEMMixin_111_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_111_9_$1,"bemElement" , FavoritesToolbar.ELEMENT_LOGO_BOX);

    delete ui_BEMMixin_111_9_$1['xtype'];
    delete ui_BEMMixin_111_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(box_109_5_$1, ui_BEMMixin_111_9_$1);
    config_$1.items = [tbSpacer_67_5_$1, editor_BookmarkFavouritesToolbarButton_68_5_$1, editor_NewContentMenuButton_76_5_$1, tbSeparator_81_5_$1, editor_FavoritesToolbarUserItemsArea_83_5_$1, tbSeparator_94_5_$1, button_95_5_$1, box_109_5_$1];
    var layout_VBox_116_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_116_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_116_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4L9G(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.favoritesToolbar",
      constructor: FavoritesToolbar$,
      super$4L9G: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      statics: {
        COMPONENT_ID: "favorites-toolbar",
        USER_ITEMS_TOOLBAR_ITEM_ID: "userItems",
        EXTENSION_MENU_BUTTON_ITEM_ID: "extensionsMenuButton",
        NEW_MENU_BUTTON_ITEM_ID: "newMenuButton",
        FAVORITES_TOOLBAR_BOOKMARKS_ITEM_ID: "favoritesToolbarBookmarks",
        FAVORITES_TOOLBAR_LOGO_BOX_ITEM_ID: "logoBox",
        BLOCK: undefined,
        ELEMENT_ARROW_BUTTON: undefined,
        ELEMENT_LOGO_BOX: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_ARROW_BUTTON$static_();
          ELEMENT_LOGO_BOX$static_();
        }
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkContextMenu",
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkFavouritesToolbarButton",
        "com.coremedia.cms.editor.sdk.desktop.ExtensionsMenu",
        "com.coremedia.cms.editor.sdk.desktop.FavoritesToolbarUserItemsArea",
        "com.coremedia.cms.editor.sdk.desktop.SavedSearchContextMenu",
        "com.coremedia.cms.editor.sdk.newcontent.NewContentMenuButton"
      ]
    };
});
