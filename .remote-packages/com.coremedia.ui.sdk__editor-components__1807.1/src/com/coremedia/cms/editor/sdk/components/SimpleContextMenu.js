Ext.define("com.coremedia.cms.editor.sdk.components.SimpleContextMenu", function(SimpleContextMenu) {/*package com.coremedia.cms.editor.sdk.components{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.actions.ApproveAction;
import com.coremedia.cms.editor.sdk.actions.PublishAction;
import com.coremedia.cms.editor.sdk.actions.WithdrawAction;
public class SimpleContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.simpleContextMenu";

    /**
     * The itemId of the open in tab menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the show in repository menu item.
     * /
    public static const SHOW_IN_REPOSITORY_MENU_ITEM_ID:String = "showInRepository";

    /**
     * The itemId of the approve menu item.
     * /
    public static const APPROVE_MENU_ITEM_ID:String = "approve";

    /**
     * The itemId of the publish menu item.
     * /
    public static const PUBLISH_MENU_ITEM_ID:String = "publish";

    /**
     * The itemId of the withdraw menu item.
     * /
    public static const WITHDRAW_MENU_ITEM_ID:String = "withdraw";

    public*/function SimpleContextMenu$(config/*:SimpleContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:SimpleContextMenu*/ =AS3.cast(SimpleContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_61_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_61_5_$1];
    var menuItem_65_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_65_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_67_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_67_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_65_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_67_9_$1);
    var menuItem_70_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_70_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleContextMenu.SHOW_IN_REPOSITORY_MENU_ITEM_ID);
    var editor_ShowInRepositoryAction_72_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_72_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_70_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_72_9_$1);
    var menuSeparator_75_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_76_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_76_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleContextMenu.APPROVE_MENU_ITEM_ID);
    AS3.setBindable(menuItem_76_5_$1,"hidden" , AS3.getBindable(config,"showApprove") === false);
    var editor_ApproveAction_79_9_$1/*:com.coremedia.cms.editor.sdk.actions.ApproveAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ApproveAction,{});
    AS3.setBindable(editor_ApproveAction_79_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_76_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ApproveAction(editor_ApproveAction_79_9_$1);
    var menuItem_82_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_82_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleContextMenu.PUBLISH_MENU_ITEM_ID);
    AS3.setBindable(menuItem_82_5_$1,"hidden" , AS3.getBindable(config,"showPublish") === false);
    var editor_PublishAction_85_9_$1/*:com.coremedia.cms.editor.sdk.actions.PublishAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.PublishAction,{});
    AS3.setBindable(editor_PublishAction_85_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_82_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.PublishAction(editor_PublishAction_85_9_$1);
    var menuSeparator_88_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_89_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_89_5_$1.itemId =net.jangaroo.ext.Exml.asString( SimpleContextMenu.WITHDRAW_MENU_ITEM_ID);
    AS3.setBindable(menuItem_89_5_$1,"hidden" , AS3.getBindable(config,"showWithdraw") === false);
    var editor_WithdrawAction_92_9_$1/*:com.coremedia.cms.editor.sdk.actions.WithdrawAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.WithdrawAction,{});
    AS3.setBindable(editor_WithdrawAction_92_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_89_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.WithdrawAction(editor_WithdrawAction_92_9_$1);
    config_$1.items = [menuItem_65_5_$1, menuItem_70_5_$1, menuSeparator_75_5_$1, menuItem_76_5_$1, menuItem_82_5_$1, menuSeparator_88_5_$1, menuItem_89_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$voOU(config_$1);
  }/*

    /**
     * A value expression evaluating to an Array of selected Content items.
     * /
    [Bindable]
    public var selectedContentsValueExpression:ValueExpression;

    /** Whether to show the approve menu item; default true * /
    [Bindable]
    public var showApprove:Boolean;


    /** Whether to show the publish menu item; default true * /
    [Bindable]
    public var showPublish:Boolean;


    /** Whether to show the withdraw menu item; default true * /
    [Bindable]
    public var showWithdraw:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.simpleContextMenu",
      constructor: SimpleContextMenu$,
      super$voOU: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        selectedContentsValueExpression: null,
        showApprove: false,
        showPublish: false,
        showWithdraw: false
      },
      statics: {
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        SHOW_IN_REPOSITORY_MENU_ITEM_ID: "showInRepository",
        APPROVE_MENU_ITEM_ID: "approve",
        PUBLISH_MENU_ITEM_ID: "publish",
        WITHDRAW_MENU_ITEM_ID: "withdraw"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.ApproveAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.PublishAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.WithdrawAction"
      ]
    };
});
