Ext.define("com.coremedia.cms.editor.sdk.sites.SitesTree", function(SitesTree) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BindTreePlugin;
import com.coremedia.ui.plugins.BindTreeSelectionPlugin;
import com.coremedia.ui.plugins.ContextMenuPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconButton;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;

    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
public class SitesTree extends SitesTreeBase{

    import com.coremedia.cap.content.Content;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.sitesTree";

    /**
     * The itemId of the open folder menu item.
     * /
    public static const OPEN_FOLDER_BUTTON_ITEM_ID:String = "openInRepository";

    /**
     * The itemId of the open document menu item.
     * /
    public static const OPEN_DOCUMENT_BUTTON_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the open document menu item.
     * /
    public static const CLONE_SITE_BUTTON_ITEM_ID:String = "cloneSite";

    public*/function SitesTree$(config/*:SitesTree = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.SitesTreeBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.SitesTreeBase,{});
    var defaults_$1/*:SitesTree*/ =AS3.cast(SitesTree,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.useArrows = true;
    config_$1.rootVisible = false;
    var ui_BindTreePlugin_43_5_$1/*:com.coremedia.ui.plugins.BindTreePlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreePlugin,{});
    AS3.setBindable(ui_BindTreePlugin_43_5_$1,"treeModel" , this.getSitesTreeModel());
    AS3.setBindable(ui_BindTreePlugin_43_5_$1,"expandInitially" , true);
    var ui_BindTreeSelectionPlugin_45_5_$1/*:com.coremedia.ui.plugins.BindTreeSelectionPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindTreeSelectionPlugin,{});
    AS3.setBindable(ui_BindTreeSelectionPlugin_45_5_$1,"valueExpression" , this.getCurrentSiteValueExpression());
    AS3.setBindable(ui_BindTreeSelectionPlugin_45_5_$1,"treeModel" , this.getSitesTreeModel());
    var ui_ContextMenuPlugin_47_5_$1/*:com.coremedia.ui.plugins.ContextMenuPlugin*/ =AS3.cast(com.coremedia.ui.plugins.ContextMenuPlugin,{});
    var editor_SitesTreeContextMenu_49_9_$1/*: com.coremedia.cms.editor.sdk.sites.SitesTreeContextMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.SitesTreeContextMenu,{});
    AS3.setBindable(editor_SitesTreeContextMenu_49_9_$1,"currentSiteIdValueExpression" , this.getCurrentSiteIdValueExpression());
    AS3.setBindable(editor_SitesTreeContextMenu_49_9_$1,"sitesService" , this.getSitesService());
    AS3.setBindable(ui_ContextMenuPlugin_47_5_$1,"contextMenu" , editor_SitesTreeContextMenu_49_9_$1);
    config_$1.plugins = [ui_BindTreePlugin_43_5_$1, ui_BindTreeSelectionPlugin_45_5_$1, ui_ContextMenuPlugin_47_5_$1];
    var toolbar_55_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_55_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    var ui_IconButton_57_9_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_57_9_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTree.OPEN_DOCUMENT_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_57_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openInTab_tooltip'));
    var editor_OpenInTabAction_60_13_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_60_13_$1,"contentValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Content*/ {
                                                                return this$.getSitesService().getSiteRootDocument(this$.getCurrentSiteIdValueExpression().getValue());
                                                              }));
    ui_IconButton_57_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_60_13_$1);
    var ui_IconButton_65_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_65_9_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTree.OPEN_FOLDER_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_65_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openSiteInRepository_icon')));
    AS3.setBindable(ui_IconButton_65_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openSiteInRepository_tooltip'));
    var editor_ShowInRepositoryAction_69_13_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_69_13_$1,"contentValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Content*/ {
                                                                        return this$.getSitesService().getSiteRootFolder(this$.getCurrentSiteIdValueExpression().getValue());
                                                                      }));
    ui_IconButton_65_9_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_69_13_$1);
    var ui_IconButton_74_9_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_74_9_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTree.CLONE_SITE_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_74_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_cloneSite_tooltip'));
    var editor_OpenCloneSiteWindowAction_77_13_$1/*: com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction,{});
    AS3.setBindable(editor_OpenCloneSiteWindowAction_77_13_$1,"useActionAsAnimationTarget" , true);
    AS3.setBindable(editor_OpenCloneSiteWindowAction_77_13_$1,"sitesService" , this.getSitesService());
    ui_IconButton_74_9_$1.baseAction = new com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction(editor_OpenCloneSiteWindowAction_77_13_$1);
    toolbar_55_5_$1.items = [ui_IconButton_57_9_$1, ui_IconButton_65_9_$1, ui_IconButton_74_9_$1];
    config_$1.tbar = toolbar_55_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$dpEE(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.SitesTreeBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.sitesTree",
      constructor: SitesTree$,
      super$dpEE: function() {
        com.coremedia.cms.editor.sdk.sites.SitesTreeBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        OPEN_FOLDER_BUTTON_ITEM_ID: "openInRepository",
        OPEN_DOCUMENT_BUTTON_ITEM_ID: "openInTab",
        CLONE_SITE_BUTTON_ITEM_ID: "cloneSite"
      },
      requires: [
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.cms.editor.sdk.sites.SitesTreeBase",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindTreePlugin",
        "com.coremedia.ui.plugins.BindTreeSelectionPlugin",
        "com.coremedia.ui.plugins.ContextMenuPlugin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction",
        "com.coremedia.cms.editor.sdk.sites.SitesTreeContextMenu"
      ]
    };
});
