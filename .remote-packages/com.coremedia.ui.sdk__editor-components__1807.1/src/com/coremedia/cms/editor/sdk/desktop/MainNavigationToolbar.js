Ext.define("com.coremedia.cms.editor.sdk.desktop.MainNavigationToolbar", function(MainNavigationToolbar) {/*package com.coremedia.cms.editor.sdk.desktop{
import ext.toolbar.Toolbar;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.components.IconButton;
import ext.ActionRef;
import ext.toolbar.Spacer;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
 The dark vertical toolbar on the left of the studio main view.
 * /
public class MainNavigationToolbar extends Toolbar{

    import com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction;
    import com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction;
    import com.coremedia.cms.editor.sdk.editorContext;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.mainNavigationToolbar";

    public static const ID:String = "main-navigation-toolbar";

    /**
     * The itemId of the library button.
     * /
    public static const LIBRARY_BUTTON_ITEM_ID:String = "libraryButton";

    /**
     * The itemId of the dashboard button.
     * /
    public static const DASHBOARD_BUTTON_ITEM_ID:String = "dashboardButton";

    public*/function MainNavigationToolbar$(config/*:MainNavigationToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var defaults_$1/*:MainNavigationToolbar*/ =AS3.cast(MainNavigationToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = "region";
    config_$1["focusableContainer"] = false;
    config_$1["focusable"] = true;
    config_$1.defaultFocus = ":focusable";
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_label'));
    config_$1["id"] = MainNavigationToolbar.ID;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.MAIN_NAVIGATION.getSkin());
    var ui_IconButton_47_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_47_5_$1.enableToggle = true;
    AS3.setBindable(ui_IconButton_47_5_$1,"scale" , "medium");
    ui_IconButton_47_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.MAIN_NAVIGATION.getSkin());
    ui_IconButton_47_5_$1.flex = 1.0;
    config_$1["defaultType"] = ui_IconButton_47_5_$1['xtype'];
    delete ui_IconButton_47_5_$1['xtype'];
    delete ui_IconButton_47_5_$1['xclass'];
    config_$1.defaults = ui_IconButton_47_5_$1;
    var ui_IconButton_54_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_54_5_$1.itemId =net.jangaroo.ext.Exml.asString( MainNavigationToolbar.DASHBOARD_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_54_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showDashboard_btn_icon')));
    AS3.setBindable(ui_IconButton_54_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showDashboard_btn_text')));
    AS3.setBindable(ui_IconButton_54_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showDashboard_btn_text'));
    AS3.setBindable(ui_IconButton_54_5_$1,"disabled" , AS3.getBindable(com.coremedia.cms.editor.sdk.editorContext.getDashboardConfiguration(),"types").length === 0);
    var actionRef_60_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_60_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction.ACTION_ID);
    ui_IconButton_54_5_$1.baseAction = actionRef_60_9_$1;
    var ui_IconButton_63_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_63_5_$1.itemId =net.jangaroo.ext.Exml.asString( MainNavigationToolbar.LIBRARY_BUTTON_ITEM_ID);
    ui_IconButton_63_5_$1["id"] = MainNavigationToolbar.LIBRARY_BUTTON_ITEM_ID;
    AS3.setBindable(ui_IconButton_63_5_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showLibrary_btn_icon')));
    AS3.setBindable(ui_IconButton_63_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showLibrary_btn_text')));
    AS3.setBindable(ui_IconButton_63_5_$1,"tooltip" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'MainNavigationToolbar_showLibrary_btn_tooltip'));
    var actionRef_69_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_69_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction.ACTION_ID);
    ui_IconButton_63_5_$1.baseAction = actionRef_69_9_$1;
    var tbSpacer_72_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_72_5_$1,"width" , "6px");
    config_$1.items = [ui_IconButton_54_5_$1, ui_IconButton_63_5_$1, tbSpacer_72_5_$1];
    var layout_HBox_75_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_75_5_$1,"align" , "top");
    AS3.setBindable(config_$1,"layout" , layout_HBox_75_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$eU1Y(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      alias: "widget.com.coremedia.cms.editor.sdk.config.mainNavigationToolbar",
      constructor: MainNavigationToolbar$,
      super$eU1Y: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ID: "main-navigation-toolbar",
        LIBRARY_BUTTON_ITEM_ID: "libraryButton",
        DASHBOARD_BUTTON_ITEM_ID: "dashboardButton"
      },
      requires: [
        "Ext.layout.container.HBox",
        "Ext.toolbar.Spacer",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.ToggleCollectionViewAction",
        "com.coremedia.cms.editor.sdk.dashboard.ToggleDashboardAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
