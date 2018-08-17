Ext.define("com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyFieldContextMenu", function(TeaserOverlayPropertyFieldContextMenu) {/*package com.coremedia.cms.editor.sdk.premular.fields.teaser{
import ext.menu.Menu;
import net.jangaroo.ext.Exml;
import ext.menu.Item;
import com.coremedia.cms.editor.sdk.actions.OpenInTabAction;
import com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction;
import ext.menu.Separator;
import com.coremedia.ui.ckeditor.PropertiesAction;
public class TeaserOverlayPropertyFieldContextMenu extends Menu{

    import com.coremedia.ui.data.ValueExpression;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.teaserOverlayPropertyFieldContextMenu";

    /**
     * The itemId of the 'open in tab' menu item.
     * /
    public static const OPEN_IN_TAB_MENU_ITEM_ID:String = "openInTab";

    /**
     * The itemId of the 'open in browser' menu item.
     * /
    public static const OPEN_IN_BROWSER_TAB_MENU_ITEM_ID:String = "openInBrowserTab";

    public*/function TeaserOverlayPropertyFieldContextMenu$(config/*:TeaserOverlayPropertyFieldContextMenu = null*/){if(arguments.length<=0)config=null;
    var config_$1/*:ext.menu.Menu*/ =AS3.cast(Ext.menu.Menu,{});
    var defaults_$1/*:TeaserOverlayPropertyFieldContextMenu*/ =AS3.cast(TeaserOverlayPropertyFieldContextMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.plain = true;
    var menuItem_35_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyFieldContextMenu.OPEN_IN_TAB_MENU_ITEM_ID);
    var editor_OpenInTabAction_37_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInTabAction,{});
    AS3.setBindable(editor_OpenInTabAction_37_9_$1,"contentValueExpression" , AS3.getBindable(config,"internalLinkContentValueExpression"));
    menuItem_35_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInTabAction(editor_OpenInTabAction_37_9_$1);
    var menuItem_40_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_40_5_$1.itemId =net.jangaroo.ext.Exml.asString( TeaserOverlayPropertyFieldContextMenu.OPEN_IN_BROWSER_TAB_MENU_ITEM_ID);
    var editor_OpenInBrowserTabAction_42_9_$1/*:com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction*/ =AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction,{});
    AS3.setBindable(editor_OpenInBrowserTabAction_42_9_$1,"urlValueExpression" , AS3.getBindable(config,"externalLinkUrlValueExpression"));
    menuItem_40_5_$1.baseAction = new com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction(editor_OpenInBrowserTabAction_42_9_$1);
    var menuSeparator_45_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_46_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_46_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField.IMAGE_PROPERTIES_ITEM_ID);
    var ui_PropertiesAction_48_9_$1/*:com.coremedia.ui.ckeditor.PropertiesAction*/ =AS3.cast(com.coremedia.ui.ckeditor.PropertiesAction,{});
    AS3.setBindable(ui_PropertiesAction_48_9_$1,"disabled" , false);
    menuItem_46_5_$1.baseAction = new com.coremedia.ui.ckeditor.PropertiesAction(ui_PropertiesAction_48_9_$1);
    config_$1.items = [menuItem_35_5_$1, menuItem_40_5_$1, menuSeparator_45_5_$1, menuItem_46_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$T23U(config_$1);
  }/*

    [Bindable]
    public var internalLinkContentValueExpression:ValueExpression;

    [Bindable]
    public var externalLinkUrlValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.menu.Menu",
      alias: "widget.com.coremedia.cms.editor.sdk.config.teaserOverlayPropertyFieldContextMenu",
      constructor: TeaserOverlayPropertyFieldContextMenu$,
      super$T23U: function() {
        Ext.menu.Menu.prototype.constructor.apply(this, arguments);
      },
      config: {
        internalLinkContentValueExpression: null,
        externalLinkUrlValueExpression: null
      },
      statics: {
        OPEN_IN_TAB_MENU_ITEM_ID: "openInTab",
        OPEN_IN_BROWSER_TAB_MENU_ITEM_ID: "openInBrowserTab"
      },
      requires: [
        "Ext.menu.Item",
        "Ext.menu.Menu",
        "Ext.menu.Separator",
        "com.coremedia.ui.ckeditor.PropertiesAction",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction",
        "com.coremedia.cms.editor.sdk.actions.OpenInTabAction",
        "com.coremedia.cms.editor.sdk.premular.fields.teaser.TeaserOverlayPropertyField"
      ]
    };
});
