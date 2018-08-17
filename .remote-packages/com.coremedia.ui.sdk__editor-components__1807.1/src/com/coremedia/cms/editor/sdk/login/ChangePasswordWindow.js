Ext.define("com.coremedia.cms.editor.sdk.login.ChangePasswordWindow", function(ChangePasswordWindow) {/*package com.coremedia.cms.editor.sdk.login{
import com.coremedia.cms.editor.sdk.login.*;
import net.jangaroo.ext.Exml;
import ext.form.field.TextField;
import ext.button.Button;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ChangePasswordWindow extends ChangePasswordWindowBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.cms.editor.sdk.config.changePasswordWindow";

    public*/function ChangePasswordWindow$(config/*:ChangePasswordWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase*/ =AS3.cast(com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase,{});
    var defaults_$1/*:ChangePasswordWindow*/ =AS3.cast(ChangePasswordWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ChangePassword_title'));
    config_$1.stateId = "changePasswordWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.modal = true;
    AS3.setBindable(config_$1,"width" , 430);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200.getSkin());
    var textField_30_5_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_30_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase.OLD_PASSWORD);
    AS3.setBindable(textField_30_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ChangePassword_oldPassword_text')));
    textField_30_5_$1.inputType = "password";
    textField_30_5_$1.validator =AS3.bind( this,"validateOldPassword");
    textField_30_5_$1["id"] = "old-password";
    textField_30_5_$1.msgTarget = "dummy";
    var textField_36_5_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_36_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase.NEW_PASSWORD);
    AS3.setBindable(textField_36_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ChangePassword_newPassword_text')));
    textField_36_5_$1.inputType = "password";
    textField_36_5_$1.validator =AS3.bind( this,"validateNewPassword");
    textField_36_5_$1["id"] = "new-password";
    textField_36_5_$1.msgTarget = "dummy";
    var textField_42_5_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_42_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase.REPEAT_PASSWORD);
    AS3.setBindable(textField_42_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'ChangePassword_repeatPassword_text')));
    textField_42_5_$1.inputType = "password";
    textField_42_5_$1.validator =AS3.bind( this,"validateRepeatPassword");
    textField_42_5_$1["id"] = "repeat-password";
    textField_42_5_$1.msgTarget = "dummy";
    var object_49_9_$1/*:Object*/ = {};
    object_49_9_$1.specialkey =AS3.bind( this,"handleSpecialKey");
    AS3.setBindable(textField_42_5_$1,"listeners" , object_49_9_$1);
    config_$1.items = [textField_30_5_$1, textField_36_5_$1, textField_42_5_$1];
    var button_54_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_54_5_$1.itemId = "saveBtn";
    button_54_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_54_5_$1,"scale" , "small");
    AS3.setBindable(button_54_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultSubmitButton_text')));
    AS3.setBindable(button_54_5_$1,"handler" ,AS3.bind( this,"saveAndClose"));
    var ui_BindPropertyPlugin_60_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_9_$1.componentProperty = "disabled";
    ui_BindPropertyPlugin_60_9_$1.bindTo = this.getSaveDisabledValueExpression();
    button_54_5_$1.plugins = [ui_BindPropertyPlugin_60_9_$1];
    var button_64_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_64_5_$1.itemId = "cancelBtn";
    button_64_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_64_5_$1,"scale" , "small");
    AS3.setBindable(button_64_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.cms.editor.Editor', 'dialog_defaultCancelButton_text')));
    AS3.setBindable(button_64_5_$1,"handler" ,AS3.bind( this,"onlyClose"));
    config_$1.buttons = [button_54_5_$1, button_64_5_$1];
    var textField_71_5_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_71_5_$1.labelSeparator = "";
    textField_71_5_$1.labelAlign = "top";
    config_$1["defaultType"] = textField_71_5_$1['xtype'];
    delete textField_71_5_$1['xtype'];
    delete textField_71_5_$1['xclass'];
    config_$1.defaults = textField_71_5_$1;
    var ui_VerticalSpacingPlugin_75_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_75_5_$1];
    var layout_VBox_78_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_78_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_78_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Gwgw(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase",
      alias: "widget.com.coremedia.cms.editor.sdk.config.changePasswordWindow",
      constructor: ChangePasswordWindow$,
      super$Gwgw: function() {
        com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.form.field.Text",
        "Ext.layout.container.VBox",
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.cms.editor.sdk.login.ChangePasswordWindowBase",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
