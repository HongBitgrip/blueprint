Ext.define("com.coremedia.cms.editor.sdk.sites.LocalizationManager", function(LocalizationManager) {/*package com.coremedia.cms.editor.sdk.sites{
import com.coremedia.cms.editor.sdk.sites.*;
import net.jangaroo.ext.Exml;
import ext.button.Button;

    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
/**
 A panel showing the configurable dashboard. The items are computed by
 the base class based on the configuration stored in the editor context
 and the last state of the dashboard as derived from the user's preferences.
 * /
public class LocalizationManager extends LocalizationManagerBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.localizationManager";

    /**
     * the id of the current site
     * /
    public static const CURRENT_SITE_ID_VARIABLE_NAME:String = "currentSiteId";

    /**
     * the name of the context variable containing the root folder of the current site
     * /
    public static const CURRENT_SITE_ROOT_FOLDER_VARIABLE_NAME:String = "currentSiteRootFolder";

    /**
     * the name of the context variable containing the root document of the current site
     * /
    public static const CURRENT_SITE_ROOT_DOCUMENT_VARIABLE_NAME:String = "currentSiteRootDocument";

    /**
     * The itemId of sites tree.
     * /
    public static const SITES_TREE_ITEM_ID:String = "sitesTree";

    public*/function LocalizationManager$(config/*:LocalizationManager = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase,{});
    var defaults_$1/*:LocalizationManager*/ =AS3.cast(LocalizationManager,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Tab_LocalizationManager_title'));
    config_$1.stateId = "localizationManagerState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 410);
    AS3.setBindable(config_$1,"minWidth" , 300.0);
    AS3.setBindable(config_$1,"minHeight" , 400.0);
    AS3.setBindable(config_$1,"maxHeight" , 500.0);
    config_$1.collapsible = false;
    AS3.setBindable(config_$1,"x" , 200.0);
    AS3.setBindable(config_$1,"y" , 200.0);
    config_$1.resizable = true;
    AS3.setBindable(config_$1,"layout" , "fit");
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var editor_SitesTree_61_5_$1/*: com.coremedia.cms.editor.sdk.sites.SitesTree*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.SitesTree,{});
    editor_SitesTree_61_5_$1.itemId =net.jangaroo.ext.Exml.asString( LocalizationManager.SITES_TREE_ITEM_ID);
    config_$1.items = [editor_SitesTree_61_5_$1];
    var button_64_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_64_5_$1.itemId = "closeBtn";
    button_64_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_64_5_$1,"scale" , "small");
    AS3.setBindable(button_64_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'LocalizationManager_close_button')));
    AS3.setBindable(button_64_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_64_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$0ZMO(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.localizationManager",
      constructor: LocalizationManager$,
      super$0ZMO: function() {
        com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        CURRENT_SITE_ID_VARIABLE_NAME: "currentSiteId",
        CURRENT_SITE_ROOT_FOLDER_VARIABLE_NAME: "currentSiteRootFolder",
        CURRENT_SITE_ROOT_DOCUMENT_VARIABLE_NAME: "currentSiteRootDocument",
        SITES_TREE_ITEM_ID: "sitesTree"
      },
      requires: [
        "Ext.button.Button",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManagerBase",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.sites.SitesTree"]
    };
});
