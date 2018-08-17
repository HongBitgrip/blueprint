Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbar", function(PreviewPanelToolbar) {/*package com.coremedia.cms.editor.sdk.preview{
import com.coremedia.cms.editor.sdk.preview.*;
import net.jangaroo.ext.Exml;
import com.coremedia.cms.editor.sdk.plugins.OnlyIf;
import com.coremedia.ui.plugins.AddItemsPlugin;
import com.coremedia.ui.components.IconButton;
import ext.toolbar.Spacer;
import ext.toolbar.Separator;
import ext.button.SplitButton;
import ext.menu.Menu;
import ext.menu.Item;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.ActionRef;
import ext.layout.container.HBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The toolbar the preview panel of a premular.
 * /
public class PreviewPanelToolbar extends PreviewPanelToolbarBase{

    import com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.util.UrlUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.previewPanelToolbar";

    /**
     * The itemId for the 'collapse' button.
     * /
    public static const COLLAPSE_BUTTON_ITEM_ID:String = "collapseButton";

    /**
     * The itemId for the toolbar separator before the reload button.
     * /
    public static const RELOAD_SEPARATOR_ITEM_ID:String = "reloadSeparator";

    /**
     * The itemId for the 'reload' button.
     * /
    public static const RELOAD_BUTTON_ITEM_ID:String = "reloadButton";

    /**
     * The itemId for toolbar separator before the open in browser button.
     * /
    public static const OPEN_IN_BROWSER_SEPARATOR_ITEM_ID:String = "openInBrowserToolbarSeparator";

    /**
     * The itemId for the 'open in browser' menu item.
     * /
    public static const OPEN_IN_BROWSER_MENU_ITEM_ID:String = "openInBrowserPreviewToolbarMenuItem";

    /**
     * The itemId for the toolbar separator before the bookmark button.
     * /
    public static const BOOKMARK_SEPARATOR_ITEM_ID:String = "bookmarkPreviewToolbarSeparator";

    /**
     * The itemId for the bookmark button.
     * /
    public static const BOOKMARK_BUTTON_ITEM_ID:String = "bookmarkButton";

    /**
     * The itemId for the 'send link by mail' button.
     * /
    public static const SEND_LINK_MENU_ITEM_ID:String = "sendLink";

    public*/function PreviewPanelToolbar$(config/*:PreviewPanelToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase,{});
    var defaults_$1/*:PreviewPanelToolbar*/ =AS3.cast(PreviewPanelToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_label'));
    var editor_OnlyIf_79_5_$1/*:com.coremedia.cms.editor.sdk.plugins.OnlyIf*/ =AS3.cast(com.coremedia.cms.editor.sdk.plugins.OnlyIf,{});
    AS3.setBindable(editor_OnlyIf_79_5_$1,"condition" , function()/*:Boolean*/ {return com.coremedia.ui.util.UrlUtil.getHashParam('preview.metadata.debug') !== null;});
    var ui_AddItemsPlugin_81_9_$1/*:com.coremedia.ui.plugins.AddItemsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.AddItemsPlugin,{});
    var ui_IconButton_83_13_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    AS3.setBindable(ui_IconButton_83_13_$1,"scale" , "medium");
    ui_IconButton_83_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconButton_83_13_$1,"tooltip" , "Open metadata tree");
    AS3.setBindable(ui_IconButton_83_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'tree_view')));
    AS3.setBindable(ui_IconButton_83_13_$1,"handler" ,AS3.bind( this,"openMetadataTree"));
    AS3.setBindable(ui_AddItemsPlugin_81_9_$1,"items" , [ui_IconButton_83_13_$1]);
    AS3.setBindable(editor_OnlyIf_79_5_$1,"then" , ui_AddItemsPlugin_81_9_$1);
    config_$1.plugins = [editor_OnlyIf_79_5_$1];
    var ui_IconButton_95_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_95_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.COLLAPSE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_95_5_$1,"scale" , "medium");
    ui_IconButton_95_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconButton_95_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Preview_panel_btn_tooltip'));
    AS3.setBindable(ui_IconButton_95_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Preview_panel_btn_tooltip')));
    AS3.setBindable(ui_IconButton_95_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'collapsing_arrow_right')));
    AS3.setBindable(ui_IconButton_95_5_$1,"handler" , AS3.getBindable(config,"collapseHandler"));
    var tbSpacer_103_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    tbSpacer_103_5_$1.flex = 1.0;
    var tbSeparator_105_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_105_5_$1,"hidden" , true);
    tbSeparator_105_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.RELOAD_SEPARATOR_ITEM_ID);
    var ui_IconButton_106_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_106_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.RELOAD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_106_5_$1,"scale" , "medium");
    ui_IconButton_106_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    AS3.setBindable(ui_IconButton_106_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_reload_btn_tooltip')));
    AS3.setBindable(ui_IconButton_106_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_reload_btn_tooltip'));
    AS3.setBindable(ui_IconButton_106_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'reload')));
    AS3.setBindable(ui_IconButton_106_5_$1,"handler" , AS3.getBindable(config,"reloadHandler"));
    var tbSeparator_115_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_115_5_$1,"hidden" , true);
    tbSeparator_115_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.OPEN_IN_BROWSER_SEPARATOR_ITEM_ID);
    var splitButton_116_5_$1/*:ext.button.SplitButton*/ =AS3.cast(Ext.button.Split,{});
    splitButton_116_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase.OPEN_IN_BROWSER_BUTTON_ITEM_ID);
    AS3.setBindable(splitButton_116_5_$1,"scale" , "medium");
    splitButton_116_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    splitButton_116_5_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_openInBrowser_btn_tooltip'));
    AS3.setBindable(splitButton_116_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_openInBrowser_btn_tooltip'));
    AS3.setBindable(splitButton_116_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'open_in_browser')));
    AS3.setBindable(splitButton_116_5_$1,"handler" ,AS3.bind( this,"handleOpenInBrowser"));
    var menu_124_9_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var menuItem_126_13_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_126_13_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.OPEN_IN_BROWSER_MENU_ITEM_ID);
    AS3.setBindable(menuItem_126_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_openInBrowser_btn_tooltip')));
    AS3.setBindable(menuItem_126_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'open_in_browser')));
    AS3.setBindable(menuItem_126_13_$1,"handler" ,AS3.bind( this,"handleOpenInBrowser"));
    var ui_BindPropertyPlugin_131_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_131_17_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_131_17_$1.bindTo = this.getOpenInBrowserDisabledValueExpression();
    menuItem_126_13_$1.plugins = [ui_BindPropertyPlugin_131_17_$1];
    var menuItem_135_13_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_135_13_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.SEND_LINK_MENU_ITEM_ID);
    AS3.setBindable(menuItem_135_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreviewPanelToolbar_sendLink_btn_text')));
    AS3.setBindable(menuItem_135_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'envelope')));
    AS3.setBindable(menuItem_135_13_$1,"handler" ,AS3.bind( this,"handleEmail"));
    var ui_BindPropertyPlugin_140_17_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_140_17_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_140_17_$1.bindTo = this.getEmailButtonDisabledValueExpression();
    menuItem_135_13_$1.plugins = [ui_BindPropertyPlugin_140_17_$1];
    menu_124_9_$1.items = [menuItem_126_13_$1, menuItem_135_13_$1];
    splitButton_116_5_$1.menu = menu_124_9_$1;
    var tbSeparator_150_5_$1/*: ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_150_5_$1,"hidden" , true);
    tbSeparator_150_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.BOOKMARK_SEPARATOR_ITEM_ID);
    var ui_IconButton_152_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_152_5_$1.itemId =net.jangaroo.ext.Exml.asString( PreviewPanelToolbar.BOOKMARK_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_152_5_$1,"scale" , "medium");
    ui_IconButton_152_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.WORKAREA.getSkin());
    var actionRef_156_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_156_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction.ACTION_ID);
    ui_IconButton_152_5_$1.baseAction = actionRef_156_9_$1;
    config_$1.items = [ui_IconButton_95_5_$1, tbSpacer_103_5_$1, tbSeparator_105_5_$1, ui_IconButton_106_5_$1, tbSeparator_115_5_$1, splitButton_116_5_$1, tbSeparator_150_5_$1, ui_IconButton_152_5_$1];
    var layout_HBox_162_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_162_5_$1,"align" , "middle");
    AS3.setBindable(config_$1,"layout" , layout_HBox_162_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5EM$(config_$1);
  }/*

    /** The function that will be called on collapse. * /
    [Bindable]
    public var collapseHandler:Function;


    /** The function that will be called on reload. * /
    [Bindable]
    public var reloadHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.previewPanelToolbar",
      constructor: PreviewPanelToolbar$,
      super$5EM$: function() {
        com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        collapseHandler: null,
        reloadHandler: null
      },
      statics: {
        COLLAPSE_BUTTON_ITEM_ID: "collapseButton",
        RELOAD_SEPARATOR_ITEM_ID: "reloadSeparator",
        RELOAD_BUTTON_ITEM_ID: "reloadButton",
        OPEN_IN_BROWSER_SEPARATOR_ITEM_ID: "openInBrowserToolbarSeparator",
        OPEN_IN_BROWSER_MENU_ITEM_ID: "openInBrowserPreviewToolbarMenuItem",
        BOOKMARK_SEPARATOR_ITEM_ID: "bookmarkPreviewToolbarSeparator",
        BOOKMARK_BUTTON_ITEM_ID: "bookmarkButton",
        SEND_LINK_MENU_ITEM_ID: "sendLink"
      },
      requires: [
        "Ext.button.Split",
        "Ext.layout.container.HBox",
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.preview.PreviewPanelToolbarBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.plugins.AddItemsPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.util.UrlUtil",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.bookmarks.BookmarkAction",
        "com.coremedia.cms.editor.sdk.plugins.OnlyIf"
      ]
    };
});
