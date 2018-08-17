Ext.define("com.coremedia.cms.editor.sdk.premular.fields.PropertyFieldContextMenu", function(PropertyFieldContextMenu) {/*package com.coremedia.cms.editor.sdk.premular.fields{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction;
import ext.menu.Separator;
import com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction;
import com.coremedia.cms.editor.sdk.actions.UndeleteAction;
public class PropertyFieldContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.propertyFieldContextMenu";

    /**
     * The itemId of the 'open in tab' menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the 'restore from trash' menu item.
     * /
    public static const UNDELETE_MENU_ITEM_ID:String = "undelete";

    /**
     * The itemId of the 'open in tab' menu item.
     * /
    public static const SHOW_IN_REPOSITORY_MENU_ITEM_ID:String = "open";

    /**
     * The itemId of the 'restore from trash' menu item.
     * /
    public static const COPY_TO_CLIPBOARD_MENU_ITEM_ID:String = "copyToClipboard";

    public*/function PropertyFieldContextMenu$(config/*:PropertyFieldContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:PropertyFieldContextMenu*/ =AS3.cast(PropertyFieldContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var ui_HideObsoleteSeparatorsPlugin_43_5_$1/*:com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin,{});
    config_$1.plugins = [ui_HideObsoleteSeparatorsPlugin_43_5_$1];
    var menuItem_46_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( PropertyFieldContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_48_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_48_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    menuItem_46_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_48_9_$1);
    var menuItem_51_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_51_5_$1.itemId =net.jangaroo.ext.Exml.asString( PropertyFieldContextMenu.SHOW_IN_REPOSITORY_MENU_ITEM_ID);
    var editor_ShowInRepositoryAction_53_9_$1/*:com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction,{});
    AS3.setBindable(editor_ShowInRepositoryAction_53_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    menuItem_51_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction(editor_ShowInRepositoryAction_53_9_$1);
    var menuSeparator_56_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_57_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_57_5_$1.itemId =net.jangaroo.ext.Exml.asString( PropertyFieldContextMenu.COPY_TO_CLIPBOARD_MENU_ITEM_ID);
    var editor_CopyToClipboardAction_59_9_$1/*:com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction,{});
    AS3.setBindable(editor_CopyToClipboardAction_59_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    menuItem_57_5_$1.baseAction = new com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction(editor_CopyToClipboardAction_59_9_$1);
    var menuSeparator_62_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_63_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_63_5_$1.itemId =net.jangaroo.ext.Exml.asString( PropertyFieldContextMenu.UNDELETE_MENU_ITEM_ID);
    var editor_UndeleteAction_65_9_$1/*:com.coremedia.cms.editor.sdk.actions.UndeleteAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.UndeleteAction,{});
    AS3.setBindable(editor_UndeleteAction_65_9_$1,"contentValueExpression" , AS3.getBindable(config,"selectedItemsVE"));
    menuItem_63_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.UndeleteAction(editor_UndeleteAction_65_9_$1);
    config_$1.items = [menuItem_46_5_$1, menuItem_51_5_$1, menuSeparator_56_5_$1, menuItem_57_5_$1, menuSeparator_62_5_$1, menuItem_63_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Iusy(config_$1);
  }/*

    [Bindable]
    public var selectedItemsVE:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.propertyFieldContextMenu",
      constructor: PropertyFieldContextMenu$,
      super$Iusy: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {selectedItemsVE: null},
      statics: {
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        UNDELETE_MENU_ITEM_ID: "undelete",
        SHOW_IN_REPOSITORY_MENU_ITEM_ID: "open",
        COPY_TO_CLIPBOARD_MENU_ITEM_ID: "copyToClipboard"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.plugins.HideObsoleteSeparatorsPlugin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction",
        "com.coremedia.cms.editor.sdk.actions.UndeleteAction",
        "com.coremedia.cms.editor.sdk.clipboard.CopyToClipboardAction"
      ]
    };
});
