Ext.define("com.coremedia.cms.editor.sdk.desktop.ExtensionsMenuToolbar", function(ExtensionsMenuToolbar) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import ext.button.Button;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.cms.editor.sdk.sites.LocalizationManager;
import ext.layout.container.VBoxLayout;

    [PublicApi]
    [ResourceBundle('com.coremedia.cms.editor.sdk.sites.LocalizationManager')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
/**
 The extension menu contains all additional studio plugins, like elastic social, third party content integration,
 CAE console and taxonomies. The menu is used by the MoveFavBarButton plugin that moves the favorites toolbar
 buttons of plugins into this menu, so that the Favorites-Toolbar is not too crowded.
 * /
public class ExtensionsMenuToolbar extends Toolbar{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.extensionsMenuToolbar";

    /**
     * The previous itemId of the preferences button.
     * The preferences button is no longer contained in this menu.
     * /
    public static const PREFERENCES_BUTTON_ITEM_ID:String = "preferencesButton";

    /**
     * The itemId of the button that opens the Localization Manager
     * /
    public static const LOCALZATION_MANAGER_BUTTON_ITEM_ID:String = "localizationManagerButton";

    public*/function ExtensionsMenuToolbar$(config/*:ExtensionsMenuToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:ExtensionsMenuToolbar*/ =AS3.cast(ExtensionsMenuToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.SIDE.getSkin());
    config_$1.vertical = true;
    var button_42_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_42_5_$1,"scale" , "medium");
    button_42_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    AS3.setBindable(button_42_5_$1,"iconAlign" , "top");
    config_$1["defaultType"] = button_42_5_$1['xtype'];
    delete button_42_5_$1['xtype'];
    delete button_42_5_$1['xclass'];
    config_$1.defaults = button_42_5_$1;
    var button_47_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_47_5_$1.itemId =net.jangaroo.ext.Exml.asString( ExtensionsMenuToolbar.LOCALZATION_MANAGER_BUTTON_ITEM_ID);
    AS3.setBindable(button_47_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'site')));
    var ui_OpenDialogAction_50_9_$1/*:com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    AS3.setBindable(ui_OpenDialogAction_50_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_showLocalizationManager_icon')));
    AS3.setBindable(ui_OpenDialogAction_50_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_showLocalizationManager_text')));
    AS3.setBindable(ui_OpenDialogAction_50_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.sites.LocalizationManager', 'Action_showLocalizationManager_tooltip'));
    var editor_LocalizationManager_54_13_$1/*:com.coremedia.cms.editor.sdk.sites.LocalizationManager*/ =AS3.cast(com.coremedia.cms.editor.sdk.sites.LocalizationManager,{});
    AS3.setBindable(ui_OpenDialogAction_50_9_$1,"dialog" , editor_LocalizationManager_54_13_$1);
    button_47_5_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_50_9_$1);
    config_$1.items = [button_47_5_$1];
    var layout_VBox_61_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_61_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_61_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$6lwy(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.extensionsMenuToolbar",
      constructor: ExtensionsMenuToolbar$,
      super$6lwy: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      statics: {
        PREFERENCES_BUTTON_ITEM_ID: "preferencesButton",
        LOCALZATION_MANAGER_BUTTON_ITEM_ID: "localizationManagerButton"
      },
      requires: [
        "Ext.button.Button",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.sdk.sites.LocalizationManager_properties",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.sites.LocalizationManager"]
    };
});
