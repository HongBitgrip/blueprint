Ext.define("com.coremedia.cms.editor.sdk.dashboard.widgets.WidgetContextMenu", function(WidgetContextMenu) {/*package com.coremedia.cms.editor.sdk.dashboard.widgets{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
public class WidgetContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.widgetContextMenu";

    /**
     * The itemId of the open in tab menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the open in background menu item.
     * /
    public static const OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID:String = "openInBackgroundTab";

    /**
     * The itemId of the show in repository menu item.
     * /
    public static const SHOW_IN_REPOSITORY_MENU_ITEM_ID:String = "showInRepository";

    public*/function WidgetContextMenu$(config/*:WidgetContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:WidgetContextMenu*/ =AS3.cast(WidgetContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_40_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_40_5_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_42_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_42_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_40_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_42_9_$1);
    var menuItem_45_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_45_5_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetContextMenu.OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_47_9_$1/*: com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_47_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    AS3.setBindable(editor_OpenInTabAction_47_9_$1,"background" , true);
    menuItem_45_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_47_9_$1);
    var menuItem_51_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_5_$1.itemId =net.jangaroo.ext.Exml.asString( WidgetContextMenu.SHOW_IN_REPOSITORY_MENU_ITEM_ID);
    var editor_ShowInRepositoryAction_53_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_53_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedContentsValueExpression"));
    menuItem_51_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_53_9_$1);
    config_$1.items = [menuItem_40_5_$1, menuItem_45_5_$1, menuItem_51_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WU2N(config_$1);
  }/*

    /**
     * A value expression evaluating to an Array of selected Content items.
     * /
    [Bindable]
    public var selectedContentsValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.widgetContextMenu",
      constructor: WidgetContextMenu$,
      super$WU2N: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {selectedContentsValueExpression: null},
      statics: {
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        OPEN_IN_BACKGROUND_TAB_MENU_ITEM_ID: "openInBackgroundTab",
        SHOW_IN_REPOSITORY_MENU_ITEM_ID: "showInRepository"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction"
      ]
    };
});
