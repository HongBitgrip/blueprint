Ext.define("com.coremedia.cms.editor.sdk.sites.SitesTreeContextMenu", function(SitesTreeContextMenu) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
/**
 The context menu for the site tree in the localization manager.
 * /
public class SitesTreeContextMenu extends Menu{

    import com.coremedia.cap.content.Content;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.sitesTreeContextMenu";

    /**
     * The itemId of the open folder menu item.
     * /
    public static const OPEN_FOLDER_MENU_ITEM_ID:String = "openInRepository";

    /**
     * The itemId of the open document menu item.
     * /
    public static const OPEN_DOCUMENT_MENU_ITEM_ID:String = "openInTab";

    public static const CLONE_SITE_MENU_ITEM_ID:String = "cloneSite";

    public*/function SitesTreeContextMenu$(config/*:SitesTreeContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:SitesTreeContextMenu*/ =AS3.cast(SitesTreeContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_48_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_48_5_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTreeContextMenu.OPEN_DOCUMENT_MENU_ITEM_ID);
    var editor_OpenInTabAction_50_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_50_9_$1,"contentValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Content*/ {
            return AS3.getBindable(config,"sitesService").getSiteRootDocument(AS3.getBindable(config,"currentSiteIdValueExpression").getValue());
          }));
    AS3.setBindable(editor_OpenInTabAction_50_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openInTab_text')));
    menuItem_48_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_50_9_$1);
    var menuItem_56_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_56_5_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTreeContextMenu.OPEN_FOLDER_MENU_ITEM_ID);
    var editor_ShowInRepositoryAction_58_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_58_9_$1,"contentValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function()/*:Content*/ {
            return AS3.getBindable(config,"sitesService").getSiteRootFolder(AS3.getBindable(config,"currentSiteIdValueExpression").getValue());
          }));
    AS3.setBindable(editor_ShowInRepositoryAction_58_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openSiteInRepository_icon')));
    AS3.setBindable(editor_ShowInRepositoryAction_58_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_openSiteInRepository_text')));
    menuItem_56_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_58_9_$1);
    var menuItem_65_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( SitesTreeContextMenu.CLONE_SITE_MENU_ITEM_ID);
    var editor_OpenCloneSiteWindowAction_67_9_$1/*: com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction,{});
    AS3.setBindable(editor_OpenCloneSiteWindowAction_67_9_$1,"useActionAsAnimationTarget" , true);
    AS3.setBindable(editor_OpenCloneSiteWindowAction_67_9_$1,"sitesService" , AS3.getBindable(config,"sitesService"));
    menuItem_65_5_$1.baseAction = new com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction(editor_OpenCloneSiteWindowAction_67_9_$1);
    config_$1.items = [menuItem_48_5_$1, menuItem_56_5_$1, menuItem_65_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$mPz0(config_$1);
  }/*

    [Bindable]
    public var currentSiteIdValueExpression:ValueExpression;

    /** the sites service to use * /
    [Bindable]
    public var sitesService:com.coremedia.cms.editor.sdk.sites.ExtendedSitesServiceImpl;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.sitesTreeContextMenu",
      constructor: SitesTreeContextMenu$,
      super$mPz0: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        currentSiteIdValueExpression: null,
        sitesService: null
      },
      statics: {
        OPEN_FOLDER_MENU_ITEM_ID: "openInRepository",
        OPEN_DOCUMENT_MENU_ITEM_ID: "openInTab",
        CLONE_SITE_MENU_ITEM_ID: "cloneSite"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.sites.OpenCloneSiteWindowAction"
      ]
    };
});
