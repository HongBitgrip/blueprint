Ext.define("com.coremedia.cms.editor.sdk.publication.PublicationResultWindow", function(PublicationResultWindow) {/*package com.coremedia.cms.editor.sdk.publication{
import com.coremedia.cms.editor.sdk.publication.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.FieldContainer;
import com.coremedia.cms.editor.sdk.components.SimpleContentList;
import com.coremedia.ui.exml.ValueExpression;
import ext.layout.container.AnchorLayout;
import ext.layout.container.FitLayout;
import ext.tab.TabPanel;
import ext.tab.TabBar;
import ext.panel.Panel;
import ext.button.Button;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
    [ResourceBundle('com.coremedia.cms.editor.sdk.publication.Publisher')]
public class PublicationResultWindow extends PublicationResultWindowBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TabBarSkin;
    import com.coremedia.ui.skins.WindowSkin;

    import ext.StringUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.publicationResultWindow";

    /**
     * The itemID for the change set list.
     * /
    public static const CHANGE_SET_LIST_ITEM_ID:String = "changeSetList";

    /**
     * The itemID for the conflicts panel.
     * /
    public static const CONFLICTS_PANEL_ITEM_ID:String = "conflicts";

    /**
     * The itemID for the information panel.
     * /
    public static const INFORMATION_PANEL_ITEM_ID:String = "information";

    /**
     * The itemId of the retry button.
     * /
    public static const RETRY_BUTTON_ITEM_ID:String = "retryBtn";

    /**
     * The itemId of the cancel button.
     * /
    public static const CANCEL_BUTTON_ITEM_ID:String = "cancelBtn";

    public*/function PublicationResultWindow$(config/*:PublicationResultWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase,{});
    var defaults_$1/*:PublicationResultWindow*/ =AS3.cast(PublicationResultWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher', Ext.String.format('publicationResult_{0}_failed_title', AS3.getBindable(config,"publishOperation"))));
    config_$1.stateId = "publicationResultWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"width" , 600);
    AS3.setBindable(config_$1,"minWidth" , 600.0);
    config_$1.resizable = true;
    AS3.setBindable(config_$1,"scrollable" , true);
    config_$1.constrainHeader = true;
    var editor_ApproveAndRetryPlugin_68_5_$1/*: com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPlugin*/ =AS3.cast(com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPlugin,{});
    config_$1.plugins = [editor_ApproveAndRetryPlugin_68_5_$1];
    var container_71_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_71_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var fieldContainer_73_9_$1/*:ext.form.FieldContainer*/ =AS3.cast(Ext.form.FieldContainer,{});
    AS3.setBindable(fieldContainer_73_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher', Ext.String.format('publicationResult_{0}_failed_changeSet_{1}_message', AS3.getBindable(config,"publishOperation"), AS3.getBindable(config,"contents").length === 1 ? 'sg' : 'pl'))));
    fieldContainer_73_9_$1.anchor = "100%";
    fieldContainer_73_9_$1.labelAlign = "top";
    fieldContainer_73_9_$1.labelSeparator = "";
    var editor_SimpleContentList_78_13_$1/*:com.coremedia.cms.editor.sdk.components.SimpleContentList*/ =AS3.cast(com.coremedia.cms.editor.sdk.components.SimpleContentList,{});
    editor_SimpleContentList_78_13_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationResultWindow.CHANGE_SET_LIST_ITEM_ID);
    editor_SimpleContentList_78_13_$1.anchor = "100%";
    var ui_ValueExpression_81_17_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_81_17_$1,"expression" , "contents");
    AS3.setBindable(ui_ValueExpression_81_17_$1,"context" , this);
    AS3.setBindable(editor_SimpleContentList_78_13_$1,"contentList" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_81_17_$1));
    fieldContainer_73_9_$1.items = [editor_SimpleContentList_78_13_$1];
    var layout_Anchor_87_13_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(fieldContainer_73_9_$1,"layout" , layout_Anchor_87_13_$1);
    container_71_5_$1.items = [fieldContainer_73_9_$1];
    var layout_Fit_92_9_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(container_71_5_$1,"layout" , layout_Fit_92_9_$1);
    var tabPanel_96_5_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    AS3.setBindable(tabPanel_96_5_$1,"activeTab" , 0);
    tabPanel_96_5_$1.flex = 1.0;
    var editor_PublicationBulkResultPanel_99_9_$1/*: com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel,{});
    editor_PublicationBulkResultPanel_99_9_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationResultWindow.CONFLICTS_PANEL_ITEM_ID);
    AS3.setBindable(editor_PublicationBulkResultPanel_99_9_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher', Ext.String.format('publicationResult_{0}_conflicts_text', AS3.getBindable(config,"publishOperation")))));
    AS3.setBindable(editor_PublicationBulkResultPanel_99_9_$1,"bulkResultItems" , config['publicationResultItems']);
    AS3.setBindable(editor_PublicationBulkResultPanel_99_9_$1,"sectionSpecs" , com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase.CONFLICT_SECTION_SPECIFICATIONS);
    AS3.setBindable(editor_PublicationBulkResultPanel_99_9_$1,"publishOperation" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"publishOperation")));
    var editor_PublicationBulkResultPanel_104_9_$1/*: com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel*/ =AS3.cast(com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel,{});
    editor_PublicationBulkResultPanel_104_9_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationResultWindow.INFORMATION_PANEL_ITEM_ID);
    AS3.setBindable(editor_PublicationBulkResultPanel_104_9_$1,"titlePattern" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.sdk.publication.Publisher', Ext.String.format('publicationResult_{0}_information_text', AS3.getBindable(config,"publishOperation")))));
    AS3.setBindable(editor_PublicationBulkResultPanel_104_9_$1,"bulkResultItems" , config['publicationResultItems']);
    AS3.setBindable(editor_PublicationBulkResultPanel_104_9_$1,"sectionSpecs" , com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase.INFO_SECTION_SPECIFICATIONS);
    AS3.setBindable(editor_PublicationBulkResultPanel_104_9_$1,"publishOperation" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"publishOperation")));
    tabPanel_96_5_$1.items = [editor_PublicationBulkResultPanel_99_9_$1, editor_PublicationBulkResultPanel_104_9_$1];
    var tabBar_111_9_$1/*:ext.tab.TabBar*/ =AS3.cast(Ext.tab.Bar,{});
    tabBar_111_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL.getSkin());
    AS3.setBindable(tabPanel_96_5_$1,"tabBar" , tabBar_111_9_$1);
    var panel_114_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_114_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.DARK_200.getSkin());
    AS3.setBindable(panel_114_9_$1,"layout" , "anchor");
    tabPanel_96_5_$1["defaultType"] = panel_114_9_$1['xtype'];
    delete panel_114_9_$1['xtype'];
    delete panel_114_9_$1['xclass'];
    tabPanel_96_5_$1.defaults = panel_114_9_$1;
    config_$1.items = [container_71_5_$1, tabPanel_96_5_$1];
    var button_120_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_120_5_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationResultWindow.RETRY_BUTTON_ITEM_ID);
    button_120_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_120_5_$1,"scale" , "small");
    AS3.setBindable(button_120_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PublicationResultWindow_retry_btn_text')));
    AS3.setBindable(button_120_5_$1,"handler" ,AS3.bind( this,"retry"));
    var button_125_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_125_5_$1.itemId =net.jangaroo.ext.Exml.asString( PublicationResultWindow.CANCEL_BUTTON_ITEM_ID);
    button_125_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_125_5_$1,"scale" , "small");
    AS3.setBindable(button_125_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_125_5_$1,"handler" ,AS3.bind( this,"close"));
    config_$1.buttons = [button_120_5_$1, button_125_5_$1];
    var layout_VBox_132_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_132_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_132_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$SIST(config_$1);
  }/*

    /**
     a list of publication conflict and information messages.
     * /
    [Bindable]
    public var publicationResultItems:Array;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.publicationResultWindow",
      constructor: PublicationResultWindow$,
      super$SIST: function() {
        com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase.prototype.constructor.apply(this, arguments);
      },
      config: {publicationResultItems: null},
      statics: {
        CHANGE_SET_LIST_ITEM_ID: "changeSetList",
        CONFLICTS_PANEL_ITEM_ID: "conflicts",
        INFORMATION_PANEL_ITEM_ID: "information",
        RETRY_BUTTON_ITEM_ID: "retryBtn",
        CANCEL_BUTTON_ITEM_ID: "cancelBtn"
      },
      requires: [
        "Ext.String",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.FieldContainer",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.Fit",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.tab.Bar",
        "Ext.tab.Panel",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.publication.PublicationResultWindowBase",
        "com.coremedia.cms.editor.sdk.publication.Publisher_properties",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.components.SimpleContentList",
        "com.coremedia.cms.editor.sdk.publication.ApproveAndRetryPlugin",
        "com.coremedia.cms.editor.sdk.publication.PublicationBulkResultPanel"
      ]
    };
});
