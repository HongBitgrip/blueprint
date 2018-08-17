Ext.define("com.coremedia.cms.editor.sdk.desktop.ActionsToolbar", function(ActionsToolbar) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.button.Button;
import ext.toolbar.Spacer;
import com.coremedia.ui.components.IconButton;
import ext.ActionRef;
import ext.toolbar.Separator;
import ext.Component;
import ext.container.Container;
import com.coremedia.ui.plugins.BindStyleClassPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.RotateStyleClassPlugin;
import ext.layout.container.VBoxLayout;
[PublicApi]
/**
 The toolbar on the right part of the Studio main view. This toolbar contains all the buttons that somehow start an
 action on the open tabular in the center of the main view.
 It is a context provider defining the following context variable:
 <ul>
 <li><code>CONTENT_VARIABLE_NAME</code></li>
 </ul>
 * /
public class ActionsToolbar extends ActionsToolbarBase{

    import com.coremedia.cms.editor.sdk.actions.ApproveAction;
    import com.coremedia.cms.editor.sdk.actions.ApprovePublishAction;
    import com.coremedia.cms.editor.sdk.actions.CheckInAction;
    import com.coremedia.cms.editor.sdk.actions.PublishAction;
    import com.coremedia.cms.editor.sdk.actions.RevertAction;
    import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
    import com.coremedia.cms.editor.sdk.publication.PublisherState;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.actionsToolbar";

    /**
     * The ID of the action toolbar
     * /
    public static const ID:String = "actions-toolbar";

    /**
     * The context property name for the content on which the actions will operate.
     * It is the current content in the workarea.
     * /
    public static const CONTENT_VARIABLE_NAME:String = "content";

    /**
     * The context property name for the entity on which the actions will operate.
     * It is the current entity in the workarea.
     * /
    public static const ENTITY_VARIABLE_NAME:String = "entity";

    /**
     * The itemId of the check in button.
     * /
    public static const CHECK_IN_BUTTON_ITEM_ID:String = "checkIn";

    /**
     * The itemId of the revert button.
     * /
    public static const REVERT_BUTTON_ITEM_ID:String = "revert";

    /**
     * The itemId of the approve button.
     * /
    public static const APPROVE_BUTTON_ITEM_ID:String = "approve";

    /**
     * The itemId of the disapprove button.
     * /
    public static const DISAPPROVE_BUTTON_ITEM_ID:String = "disapprove";

    /**
     * The itemId of the publish button.
     * /
    public static const PUBLISH_BUTTON_ITEM_ID:String = "publish";

    /**
     * The itemId of the finish button.
     * /
    public static const FINISH_BUTTON_ITEM_ID:String = "finish";

    /**
     * The itemId of the withdraw button.
     * /
    public static const WITHDRAW_BUTTON_ITEM_ID:String = "withdraw";
    private var contentValueExpression:com.coremedia.ui.data.ValueExpression;

    // called by generated constructor code
    //noinspection JSUnusedLocalSymbols
    private*/ function __initialize__(config/*:ActionsToolbar*/)/*:void*/ {
      this.contentValueExpression$WYVg = com.coremedia.cms.editor.sdk.desktop.WorkArea.ACTIVE_CONTENT_VALUE_EXPRESSION;
    }/*

    public*/function ActionsToolbar$(config/*:ActionsToolbar = null*/){if(arguments.length<=0)config=null;this.__initialize__$WYVg(config);
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase,{});
    var defaults_$1/*:ActionsToolbar*/ =AS3.cast(ActionsToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ActionsToolbar_label'));
    config_$1["id"] = ActionsToolbar.ID;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.SIDE.getSkin());
    config_$1.vertical = true;
    config_$1.padding = "0 4 0 2";
    var ui_HideObsoleteSeparatorsPlugin_101_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_101_5_$1];
    var button_104_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    AS3.setBindable(button_104_5_$1,"scale" , "medium");
    AS3.setBindable(button_104_5_$1,"width" , 24);
    button_104_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.HIGHLIGHT.getSkin());
    config_$1["defaultType"] = button_104_5_$1['xtype'];
    delete button_104_5_$1['xtype'];
    delete button_104_5_$1['xclass'];
    config_$1.defaults = button_104_5_$1;
    var tbSpacer_109_5_$1/*:ext.toolbar.Spacer*/ =AS3.cast(Ext.toolbar.Spacer,{});
    AS3.setBindable(tbSpacer_109_5_$1,"height" , 34);
    var ui_IconButton_110_5_$1/*:com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_110_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.CHECK_IN_BUTTON_ITEM_ID);
    var actionRef_112_9_$1/*:ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_112_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.CheckInAction.ACTION_ID);
    ui_IconButton_110_5_$1.baseAction = actionRef_112_9_$1;
    var ui_IconButton_115_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_115_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.REVERT_BUTTON_ITEM_ID);
    var actionRef_117_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_117_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.RevertAction.ACTION_ID);
    ui_IconButton_115_5_$1.baseAction = actionRef_117_9_$1;
    var ui_IconButton_120_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_120_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.APPROVE_BUTTON_ITEM_ID);
    var actionRef_122_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_122_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApproveAction.ACTION_ID);
    ui_IconButton_120_5_$1.baseAction = actionRef_122_9_$1;
    var ui_IconButton_125_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_125_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.PUBLISH_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_125_5_$1,"disabled" , true);
    var actionRef_128_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_128_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.PublishAction.ACTION_ID);
    ui_IconButton_125_5_$1.baseAction = actionRef_128_9_$1;
    var ui_IconButton_131_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_131_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.FINISH_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_131_5_$1,"disabled" , true);
    var actionRef_134_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_134_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.ApprovePublishAction.ACTION_ID);
    ui_IconButton_131_5_$1.baseAction = actionRef_134_9_$1;
    var tbSeparator_137_5_$1/*:ext.toolbar.Separator*/ =AS3.cast(Ext.toolbar.Separator,{});
    AS3.setBindable(tbSeparator_137_5_$1,"height" , 1);
    var ui_IconButton_138_5_$1/*: com.coremedia.ui.components.IconButton*/ =AS3.cast(com.coremedia.ui.components.IconButton,{});
    ui_IconButton_138_5_$1.itemId =net.jangaroo.ext.Exml.asString( ActionsToolbar.WITHDRAW_BUTTON_ITEM_ID);
    AS3.setBindable(ui_IconButton_138_5_$1,"disabled" , true);
    var actionRef_141_9_$1/*: ext.ActionRef*/ =AS3.cast(ext.ActionRef,{});
    actionRef_141_9_$1.actionId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.actions.WithdrawAction.ACTION_ID);
    ui_IconButton_138_5_$1.baseAction = actionRef_141_9_$1;
    var component_144_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_144_5_$1.flex = 1.0;
    var container_145_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_145_5_$1.itemId = "publisher-state";
    var ui_BindStyleClassPlugin_147_9_$1/*:com.coremedia.ui.plugins.BindStyleClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindStyleClassPlugin,{});
    AS3.setBindable(ui_BindStyleClassPlugin_147_9_$1,"transformer" , function(operation/*:String*/)/*:String*/ {return operation==='publish' ? 'publication-in-progress' : operation==='withdraw' ? 'withdrawal-in-progress' : operation==='approvePublish' ? 'simple-publication-in-progress' : undefined;});
    var ui_ValueExpression_150_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_150_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.publication.PublisherState.CURRENT_OPERATION_BEAN_NAME));
    ui_BindStyleClassPlugin_147_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_150_13_$1);
    var ui_RotateStyleClassPlugin_153_9_$1/*:com.coremedia.ui.plugins.RotateStyleClassPlugin*/ =AS3.cast(com.coremedia.ui.plugins.RotateStyleClassPlugin,{});
    AS3.setBindable(ui_RotateStyleClassPlugin_153_9_$1,"prefix" , "icon-phase-");
    AS3.setBindable(ui_RotateStyleClassPlugin_153_9_$1,"interval" , 60.0);
    AS3.setBindable(ui_RotateStyleClassPlugin_153_9_$1,"phases" , 16);
    var ui_ValueExpression_157_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_157_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.publication.PublisherState.ANIMATE_PROGRESS_ICON_BEAN_NAME));
    ui_RotateStyleClassPlugin_153_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_157_13_$1);
    container_145_5_$1.plugins = [ui_BindStyleClassPlugin_147_9_$1, ui_RotateStyleClassPlugin_153_9_$1];
    config_$1.items = [tbSpacer_109_5_$1, ui_IconButton_110_5_$1, ui_IconButton_115_5_$1, ui_IconButton_120_5_$1, ui_IconButton_125_5_$1, ui_IconButton_131_5_$1, tbSeparator_137_5_$1, ui_IconButton_138_5_$1, component_144_5_$1, container_145_5_$1];
    var layout_VBox_164_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_164_5_$1,"padding" , "0 0 6 0");
    AS3.setBindable(layout_VBox_164_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_164_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WYVg(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase",
      metadata: {"": ["PublicApi"]},
      alias: "widget.com.coremedia.cms.editor.sdk.config.actionsToolbar",
      contentValueExpression$WYVg: null,
      __initialize__$WYVg: __initialize__,
      constructor: ActionsToolbar$,
      super$WYVg: function() {
        com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        ID: "actions-toolbar",
        CONTENT_VARIABLE_NAME: "content",
        ENTITY_VARIABLE_NAME: "entity",
        CHECK_IN_BUTTON_ITEM_ID: "checkIn",
        REVERT_BUTTON_ITEM_ID: "revert",
        APPROVE_BUTTON_ITEM_ID: "approve",
        DISAPPROVE_BUTTON_ITEM_ID: "disapprove",
        PUBLISH_BUTTON_ITEM_ID: "publish",
        FINISH_BUTTON_ITEM_ID: "finish",
        WITHDRAW_BUTTON_ITEM_ID: "withdraw"
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Separator",
        "Ext.toolbar.Spacer",
        "com.coremedia.cms.editor.sdk.desktop.ActionsToolbarBase",
        "com.coremedia.ui.components.IconButton",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindStyleClassPlugin",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "com.coremedia.ui.plugins.RotateStyleClassPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "ext.ActionRef",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.ApprovePublishAction",
        "com.coremedia.cms.editor.sdk.actions.CheckInAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.RevertAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction",
        "com.coremedia.cms.editor.sdk.desktop.WorkArea",
        "com.coremedia.cms.editor.sdk.publication.PublisherState"
      ]
    };
});
