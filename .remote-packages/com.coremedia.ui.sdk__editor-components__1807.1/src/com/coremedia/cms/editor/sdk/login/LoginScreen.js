Ext.define("com.coremedia.cms.editor.sdk.login.LoginScreen", function(LoginScreen) {/*package com.coremedia.cms.editor.sdk.login{
import com.coremedia.cms.editor.sdk.login.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.plugins.BEMPlugin;
import ext.panel.Panel;
import ext.Component;
import com.coremedia.ui.plugins.BEMMixin;
import ext.form.field.DisplayField;
import ext.form.field.TextField;
import com.coremedia.ui.components.LocalComboBox;
import ext.view.BoundListView;
import ext.button.Button;
import ext.layout.container.AnchorLayout;
import ext.form.Labelable;
import ext.layout.container.HBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class LoginScreen extends LoginScreenBase{

    import com.coremedia.cap.common.CapLoginService;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.loginScreen";

    public*/function LoginScreen$(config/*:LoginScreen = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.login.LoginScreenBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.login.LoginScreenBase,{});
    var defaults_$1/*:LoginScreen*/ =AS3.cast(LoginScreen,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1["ariaRole"] = null;
    AS3.setBindable(config_$1,"layout" , "fit");
    var container_40_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_40_5_$1,"minHeight" , 680.0);
    var layout_VBox_42_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_42_9_$1,"align" , "stretch");
    AS3.setBindable(container_40_5_$1,"layout" , layout_VBox_42_9_$1);
    var ui_BEMPlugin_45_9_$1/*:com.coremedia.ui.plugins.BEMPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BEMPlugin,{});
    AS3.setBindable(ui_BEMPlugin_45_9_$1,"block" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.BLOCK);
    container_40_5_$1.plugins = [ui_BEMPlugin_45_9_$1];
    var container_49_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_49_9_$1.flex = 1.0;
    var panel_52_13_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_52_13_$1["id"] = "login_form";
    AS3.setBindable(panel_52_13_$1,"width" , 360);
    panel_52_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.LoginScreenBase.FORM_PANEL_ITEMID);
    panel_52_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_200.getSkin());
    var object_59_17_$1/*:Object*/ = {};
    object_59_17_$1.tag = "form";
    object_59_17_$1.method = "POST";
    object_59_17_$1.action = "blank.html";
    object_59_17_$1.target = "submitTarget";
    panel_52_13_$1.autoEl = object_59_17_$1;
    var box_65_17_$1/*:ext.Component*/ =AS3.cast(Ext.Component,{});
    AS3.setBindable(box_65_17_$1,"height" , 180);
    var ui_BEMMixin_67_21_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_67_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.LOGO_ELEMENT);

    delete ui_BEMMixin_67_21_$1['xtype'];
    delete ui_BEMMixin_67_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(box_65_17_$1, ui_BEMMixin_67_21_$1);
    var displayField_70_17_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_70_17_$1,"value" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_title'));
    displayField_70_17_$1.ui = "bold";
    displayField_70_17_$1.anchor = "100%";
    var ui_BEMMixin_74_21_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_74_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.TITLE_ELEMENT);

    delete ui_BEMMixin_74_21_$1['xtype'];
    delete ui_BEMMixin_74_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(displayField_70_17_$1, ui_BEMMixin_74_21_$1);
    var textField_77_17_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_77_17_$1.anchor = "100%";
    AS3.setBindable(textField_77_17_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_name')));
    textField_77_17_$1.labelAlign = "top";
    textField_77_17_$1.name = "username";
    textField_77_17_$1["id"] = "username";
    textField_77_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.LoginScreenBase.USERNAME_FIELD_ITEMID);
    var ui_BEMMixin_84_21_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_84_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.USERNAME_ELEMENT);

    delete ui_BEMMixin_84_21_$1['xtype'];
    delete ui_BEMMixin_84_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(textField_77_17_$1, ui_BEMMixin_84_21_$1);
    var textField_87_17_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_87_17_$1.anchor = "100%";
    AS3.setBindable(textField_87_17_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_password')));
    textField_87_17_$1.name = "password";
    textField_87_17_$1["id"] = "password";
    textField_87_17_$1.labelAlign = "top";
    textField_87_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.LoginScreenBase.PASSWD_FIELD_ITEMID);
    textField_87_17_$1.inputType = "password";
    textField_87_17_$1.enableKeyEvents = true;
    var ui_BEMMixin_96_21_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_96_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.PASSWORD_ELEMENT);

    delete ui_BEMMixin_96_21_$1['xtype'];
    delete ui_BEMMixin_96_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(textField_87_17_$1, ui_BEMMixin_96_21_$1);
    var ui_LocalComboBox_99_17_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_99_17_$1.anchor = "100%";
    ui_LocalComboBox_99_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.LoginScreenBase.DOMAIN_FIELD_ITEMID);
    AS3.setBindable(ui_LocalComboBox_99_17_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_domain')));
    ui_LocalComboBox_99_17_$1.labelAlign = "top";
    AS3.setBindable(ui_LocalComboBox_99_17_$1,"displayField" , "displayName");
    ui_LocalComboBox_99_17_$1.valueField = "id";
    AS3.setBindable(ui_LocalComboBox_99_17_$1,"encodeItems" , true);
    AS3.setBindable(ui_LocalComboBox_99_17_$1,"store" , this.getDomainStore(config));
    AS3.setBindable(ui_LocalComboBox_99_17_$1,"value" , this.getInitialDomain(config));
    ui_LocalComboBox_99_17_$1.enableKeyEvents = true;
    var ui_BEMMixin_110_21_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_110_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.DOMAIN_ELEMENT);

    delete ui_BEMMixin_110_21_$1['xtype'];
    delete ui_BEMMixin_110_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(ui_LocalComboBox_99_17_$1, ui_BEMMixin_110_21_$1);
    var boundList_113_21_$1/*:ext.view.BoundListView*/ =AS3.cast(Ext.view.BoundList,{});
    AS3.setBindable(boundList_113_21_$1,"minWidth" , 236.0);
    ui_LocalComboBox_99_17_$1.listConfig = boundList_113_21_$1;
    var component_118_17_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_118_17_$1["id"] = "submitTarget";
    component_118_17_$1.autoEl = {tag: 'iframe', name: 'submitTarget', style: 'display:none'};
    component_118_17_$1.anchor = "100%";
    var component_121_17_$1/*: ext.Component*/ =AS3.cast(Ext.Component,{});
    component_121_17_$1["id"] = "submitButton";
    component_121_17_$1.autoEl = {tag: 'input', type: 'submit', name: 'submitButton', style: 'display:none'};
    component_121_17_$1.anchor = "100%";
    var container_125_17_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_125_17_$1.anchor = "100%";
    var ui_BEMMixin_127_21_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_127_21_$1,"bemElement" , com.coremedia.cms.editor.sdk.login.LoginScreenBase.BUTTON_ELEMENT);

    delete ui_BEMMixin_127_21_$1['xtype'];
    delete ui_BEMMixin_127_21_$1['xclass'];
    net.jangaroo.ext.Exml.apply(container_125_17_$1, ui_BEMMixin_127_21_$1);
    var button_130_21_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_130_21_$1["id"] = com.coremedia.cms.editor.sdk.login.LoginScreenBase.LOGIN_BTN_ID;
    button_130_21_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.LoginScreenBase.LOGIN_BTN_ITEMID);
    button_130_21_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.VIVID.getSkin());
    AS3.setBindable(button_130_21_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'Login_submit')));
    AS3.setBindable(button_130_21_$1,"handler" , function()/*:void*/ {this$.loginButtonPressed();});
    container_125_17_$1.items = [button_130_21_$1];
    panel_52_13_$1.items = [box_65_17_$1, displayField_70_17_$1, textField_77_17_$1, textField_87_17_$1, ui_LocalComboBox_99_17_$1, component_118_17_$1, component_121_17_$1, container_125_17_$1];
    var layout_Anchor_139_17_$1/*:ext.layout.container.AnchorLayout*/ =AS3.cast(Ext.layout.container.Anchor,{});
    AS3.setBindable(panel_52_13_$1,"layout" , layout_Anchor_139_17_$1);
    var labelable_142_17_$1/*:ext.form.Labelable*/ =AS3.cast(Ext.form.Labelable,{});
    labelable_142_17_$1.labelSeparator = "";
    panel_52_13_$1["defaultType"] = labelable_142_17_$1['xtype'];
    delete labelable_142_17_$1['xtype'];
    delete labelable_142_17_$1['xclass'];
    panel_52_13_$1.defaults = labelable_142_17_$1;
    container_49_9_$1.items = [panel_52_13_$1];
    var layout_HBox_148_13_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_148_13_$1,"pack" , "center");
    AS3.setBindable(layout_HBox_148_13_$1,"align" , "middle");
    AS3.setBindable(container_49_9_$1,"layout" , layout_HBox_148_13_$1);
    var container_153_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    AS3.setBindable(container_153_9_$1,"height" , 26);
    var displayField_155_13_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_155_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.MOUSEPRINT.getSkin());
    AS3.setBindable(displayField_155_13_$1,"value" , 'Studio Version ' + AS3.cast(com.coremedia.cap.common.CapLoginService,AS3.getBindable(config,"capLoginService")).getVersion());
    AS3.setBindable(displayField_155_13_$1,"margin" , "0 12 0 0");
    container_153_9_$1.items = [displayField_155_13_$1];
    var layout_HBox_160_13_$1/*: ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_160_13_$1,"pack" , "end");
    AS3.setBindable(container_153_9_$1,"layout" , layout_HBox_160_13_$1);
    container_40_5_$1.items = [container_49_9_$1, container_153_9_$1];
    config_$1.items = [container_40_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$gx7M(config_$1);
  }/*

    /**
     * The CMS login service to use for retrieving version and domains and for login.
     * /
    [Bindable]
    public var capLoginService:CapLoginService;

    /**
     The function to call after the login is complete.
     * /
    [Bindable]
    public var callback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.login.LoginScreenBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.loginScreen",
      constructor: LoginScreen$,
      super$gx7M: function() {
        com.coremedia.cms.editor.sdk.login.LoginScreenBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        capLoginService: null,
        callback: null
      },
      requires: [
        "Ext.Component",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.Labelable",
        "Ext.form.field.Display",
        "Ext.form.field.Text",
        "Ext.layout.container.Anchor",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.view.BoundList",
        "com.coremedia.cap.common.CapLoginService",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.login.LoginScreenBase",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BEMPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
