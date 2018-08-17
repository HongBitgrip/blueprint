Ext.define("com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenu", function(HeaderToolbarUserMenu) {/*package com.coremedia.cms.editor.sdk.desktop{
import com.coremedia.cms.editor.sdk.desktop.*;
import net.jangaroo.ext.Exml;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.toolbar.Toolbar;
import com.coremedia.ui.components.IconDisplayField;
import ext.menu.Item;
import com.coremedia.ui.actions.OpenDialogAction;
import com.coremedia.cms.editor.sdk.login.ChangePasswordWindow;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.cms.editor.sdk.preferences.PreferenceWindow;
import com.coremedia.cms.editor.sdk.about.AboutWindow;
import ext.menu.Separator;
import com.coremedia.ui.plugins.BEMMixin;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class HeaderToolbarUserMenu extends HeaderToolbarUserMenuBase{

    import com.coremedia.cap.common.SESSION;
    import com.coremedia.cms.editor.sdk.login.LogoutUtil;
    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.models.bem.BEMBlock;
    import com.coremedia.ui.models.bem.BEMElement;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;
    import com.coremedia.ui.skins.ToolbarSkin;
    import com.coremedia.ui.util.EncodingUtil;

    import ext.StringUtil;
    import ext.mixin.AdvancedFocusableContainerMixin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.headerToolbarUserMenu";

    public static const SITE_SELECTOR_ITEM_ID:String = "siteSelector";

    public static const BLOCK:BEMBlock =*/function BLOCK$static_(){HeaderToolbarUserMenu.BLOCK=( new com.coremedia.ui.models.bem.BEMBlock("cm-user-menu"));}/*;
    public static const ELEMENT_FIELD:BEMElement =*/function ELEMENT_FIELD$static_(){HeaderToolbarUserMenu.ELEMENT_FIELD=( HeaderToolbarUserMenu.BLOCK.createElement("field"));}/*;

    public*/function HeaderToolbarUserMenu$(config/*:HeaderToolbarUserMenu = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase,{});
    var defaults_$1/*:HeaderToolbarUserMenu*/ =AS3.cast(HeaderToolbarUserMenu,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["focusable"] = true;
    config_$1.defaultFocus = ":focusable";
    config_$1.ariaLabel =net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_userMenu_label'));
    config_$1.showSeparator = false;
    config_$1.shadow = "sides";
    config_$1.plain = true;
    AS3.setBindable(config_$1,"width" , 340);
    config_$1.tabNavigationMode = ext.mixin.AdvancedFocusableContainerMixin.TAB_NAVIGATION_MODE_ONLY;
    config_$1.ignoreInputFields = false;
    var ui_BEMPlugin_45_5_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_45_5_$1,"block" , HeaderToolbarUserMenu.BLOCK);
    config_$1.plugins = [ui_BEMPlugin_45_5_$1];
    var toolbar_48_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    toolbar_48_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.MENU_HEADER.getSkin());
    var ui_IconDisplayField_50_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_50_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.LOGO.getSkin());
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"scale" , "large");
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"width" , "100%");
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.coremedia));
    AS3.setBindable(ui_IconDisplayField_50_9_$1,"value" , com.coremedia.ui.util.EncodingUtil.encodeForHTML(this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_userPreferenceMenu_ci_text')) + '<br />' + com.coremedia.ui.util.EncodingUtil.encodeForHTML(com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase.getCMSVersion()));
    toolbar_48_5_$1.items = [ui_IconDisplayField_50_9_$1];
    config_$1.tbar = toolbar_48_5_$1;
    var menuItem_59_5_$1/*:ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_59_5_$1["id"] = "change-password-menu-item";
    AS3.setBindable(menuItem_59_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_changePassword_btn_text')));
    var ui_OpenDialogAction_62_9_$1/*:com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    var editor_ChangePasswordWindow_64_13_$1/*:com.coremedia.cms.editor.sdk.login.ChangePasswordWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.login.ChangePasswordWindow,{});
    AS3.setBindable(ui_OpenDialogAction_62_9_$1,"dialog" , editor_ChangePasswordWindow_64_13_$1);
    menuItem_59_5_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_62_9_$1);
    var ui_BindPropertyPlugin_69_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_69_9_$1.componentProperty = "visible";
    ui_BindPropertyPlugin_69_9_$1.transformer = function(value/*:String*/)/*:Boolean*/ {
                                   return !value;
                                 };
    var ui_ValueExpression_74_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_74_13_$1,"expression" , "user.external");
    AS3.setBindable(ui_ValueExpression_74_13_$1,"context" , com.coremedia.cap.common.SESSION);
    ui_BindPropertyPlugin_69_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_74_13_$1);
    menuItem_59_5_$1.plugins = [ui_BindPropertyPlugin_69_9_$1];
    var menuItem_80_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_80_5_$1["id"] = "preferences-menu-item";
    AS3.setBindable(menuItem_80_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'PreferenceWindow_title')));
    var ui_OpenDialogAction_83_9_$1/*: com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    var editor_PreferenceWindow_85_13_$1/*:com.coremedia.cms.editor.sdk.preferences.PreferenceWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.preferences.PreferenceWindow,{});
    AS3.setBindable(ui_OpenDialogAction_83_9_$1,"dialog" , editor_PreferenceWindow_85_13_$1);
    menuItem_80_5_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_83_9_$1);
    var menuItem_90_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_90_5_$1["id"] = "about-menu-item";
    AS3.setBindable(menuItem_90_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'AboutWindow_title')));
    var ui_OpenDialogAction_93_9_$1/*: com.coremedia.ui.actions.OpenDialogAction*/ =AS3.cast(com.coremedia.ui.actions.OpenDialogAction,{});
    var editor_AboutWindow_95_13_$1/*:com.coremedia.cms.editor.sdk.about.AboutWindow*/ =AS3.cast(com.coremedia.cms.editor.sdk.about.AboutWindow,{});
    AS3.setBindable(ui_OpenDialogAction_93_9_$1,"dialog" , editor_AboutWindow_95_13_$1);
    menuItem_90_5_$1.baseAction = new com.coremedia.ui.actions.OpenDialogAction(ui_OpenDialogAction_93_9_$1);
    var menuSeparator_100_5_$1/*:ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var editor_SiteSelectorComboBox_101_5_$1/*: com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBox*/ =AS3.cast(com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBox,{});
    AS3.setBindable(editor_SiteSelectorComboBox_101_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_siteSelector_label')));
    editor_SiteSelectorComboBox_101_5_$1.labelAlign = "top";
    editor_SiteSelectorComboBox_101_5_$1.labelSeparator = "";
    editor_SiteSelectorComboBox_101_5_$1.itemId =net.jangaroo.ext.Exml.asString( HeaderToolbarUserMenu.SITE_SELECTOR_ITEM_ID);
    editor_SiteSelectorComboBox_101_5_$1.grow = true;
    var ui_BEMMixin_108_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_108_9_$1,"bemElement" , HeaderToolbarUserMenu.ELEMENT_FIELD);

    delete ui_BEMMixin_108_9_$1['xtype'];
    delete ui_BEMMixin_108_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_SiteSelectorComboBox_101_5_$1, ui_BEMMixin_108_9_$1);
    var menuSeparator_111_5_$1/*: ext.menu.Separator*/ =AS3.cast(Ext.menu.Separator,{});
    var menuItem_112_5_$1/*: ext.menu.Item*/ =AS3.cast(Ext.menu.Item,{});
    menuItem_112_5_$1["id"] = "logout-menu-item";
    AS3.setBindable(menuItem_112_5_$1,"handler" , com.coremedia.cms.editor.sdk.login.LogoutUtil.logout);
    var ui_BindPropertyPlugin_115_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_115_9_$1.componentProperty = "text";
    ui_BindPropertyPlugin_115_9_$1.transformer = function(value/*:String*/)/*:String*/ {
                                                 return Ext.String.format(this$.resourceManager.getString('com.coremedia.cms.editor.Editor', 'HeaderToolbar_logout_btn_text'), com.coremedia.ui.util.EncodingUtil.encodeForHTML(value));
                                               };
    var ui_ValueExpression_120_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_120_13_$1,"expression" , "user.name");
    AS3.setBindable(ui_ValueExpression_120_13_$1,"context" , com.coremedia.cap.common.SESSION);
    ui_BindPropertyPlugin_115_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_120_13_$1);
    menuItem_112_5_$1.plugins = [ui_BindPropertyPlugin_115_9_$1];
    config_$1.items = [menuItem_59_5_$1, menuItem_80_5_$1, menuItem_90_5_$1, menuSeparator_100_5_$1, editor_SiteSelectorComboBox_101_5_$1, menuSeparator_111_5_$1, menuItem_112_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$FkXi(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.headerToolbarUserMenu",
      constructor: HeaderToolbarUserMenu$,
      super$FkXi: function() {
        com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase.prototype.constructor.apply(this, arguments);
      },
      statics: {
        SITE_SELECTOR_ITEM_ID: "siteSelector",
        BLOCK: undefined,
        ELEMENT_FIELD: undefined,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_FIELD$static_();
        }
      },
      requires: [
        "Ext.String",
        "Ext.menu.Item",
        "Ext.menu.Separator",
        "Ext.toolbar.Toolbar",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.desktop.HeaderToolbarUserMenuBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.actions.OpenDialogAction",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.models.bem.BEMBlock",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "com.coremedia.ui.util.EncodingUtil",
        "ext.mixin.AdvancedFocusableContainerMixin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.about.AboutWindow",
        "com.coremedia.cms.editor.sdk.desktop.SiteSelectorComboBox",
        "com.coremedia.cms.editor.sdk.login.ChangePasswordWindow",
        "com.coremedia.cms.editor.sdk.login.LogoutUtil",
        "com.coremedia.cms.editor.sdk.preferences.PreferenceWindow"
      ]
    };
});
