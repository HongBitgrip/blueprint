Ext.define("com.coremedia.cms.editor.sdk.desktop.HeaderToolbar", function(HeaderToolbar) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import ext.Component;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
/**
  The vertical toolbar on the right of the studio main view.

  01/07/2017:
  Technically this is not an {@link ext.toolbar.Toolbar} (anymore) but an {@link ext.menu.MenuBar} - we kept its old
  name as there are too many usages that would need to be adjusted otherwise.
 * /
public class HeaderToolbar extends HeaderToolbarBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.MenuSkin;
    import com.coremedia.ui.util.EncodingUtil;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.headerToolbar";
    /**
     * The itemId of the user menu button.
     * /
    public static const USER_MENU_BUTTON_ITEM_ID:String = "userMenuButton";

    public*/function HeaderToolbar$(config/*:HeaderToolbar = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase,{});
    var defaults_$1/*:HeaderToolbar*/ =AS3.cast(HeaderToolbar,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_label'));
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.MenuSkin.HEADER_MENUBAR.getSkin());
    config_$1.plain = true;
    config_$1.getFocusablesFn =AS3.bind( this,"customGetFocusables");
    var component_38_5_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    component_38_5_$1["ariaRole"] = "menuitem";
    config_$1["defaultType"] = component_38_5_$1['xtype'];
    delete component_38_5_$1['xtype'];
    delete component_38_5_$1['xclass'];
    config_$1.defaults = component_38_5_$1;
    var button_41_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( HeaderToolbar.USER_MENU_BUTTON_ITEM_ID);
    button_41_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.MAIN_NAVIGATION.getSkin());
    AS3.setBindable(button_41_5_$1,"scale" , "medium");
    AS3.setBindable(button_41_5_$1,"maxWidth" , 270.0);
    button_41_5_$1.menuAlign = "tr-br?";
    var ui_BindPropertyPlugin_47_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_47_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_47_9_$1.transformer = com.coremedia.ui.util.EncodingUtil.encodeForHTML;
    ui_BindPropertyPlugin_47_9_$1.bindTo = this.getUserMenuTextValueExpression();
    button_41_5_$1.plugins = [ui_BindPropertyPlugin_47_9_$1];
    var editor_HeaderToolbarUserMenu_52_9_$1/*: com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu,{});
    button_41_5_$1.menu = editor_HeaderToolbarUserMenu_52_9_$1;
    config_$1.items = [button_41_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$zuw2(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.headerToolbar",
      constructor: HeaderToolbar$,
      super$zuw2: function() {
        com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase.prototype.constructor.apply(this, arguments);
      },
      statics: {USER_MENU_BUTTON_ITEM_ID: "userMenuButton"},
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.HeaderToolbarBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.MenuSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu"]
    };
});
