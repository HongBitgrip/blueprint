Ext.define("com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBox", function(ValidationMessageBox) {/*package com.coremedia.elastic.social.studio.usermanagement{
import com.coremedia.elastic.social.studio.usermanagement.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.layout.container.VBoxLayout;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ValidationMessageBox extends ValidationMessageBoxBase{

    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.validationMessageBox";

    public*/function ValidationMessageBox$(config/*:ValidationMessageBox = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase,{});
    var defaults_$1/*:ValidationMessageBox*/ =AS3.cast(ValidationMessageBox,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    config_$1.stateId = "validationMessageWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    config_$1.closeAction = "close";
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase.ID);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_DARK.getSkin());
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'email_window_title'));
    var container_36_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_36_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200);
    var displayField_38_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_38_9_$1["id"] = com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase.MESSAGE_FIELD_ID;
    AS3.setBindable(displayField_38_9_$1,"width" , "100%");
    AS3.setBindable(displayField_38_9_$1,"value" , AS3.getBindable(config,"message"));
    container_36_5_$1.items = [displayField_38_9_$1];
    var layout_VBox_43_9_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_43_9_$1,"align" , "stretch");
    AS3.setBindable(container_36_5_$1,"layout" , layout_VBox_43_9_$1);
    config_$1.items = [container_36_5_$1];
    var button_48_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_48_5_$1["id"] = com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase.CORRECT_BUTTON_ID;
    button_48_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_48_5_$1,"scale" , "small");
    AS3.setBindable(button_48_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validate_error_messagebox_correct_button')));
    AS3.setBindable(button_48_5_$1,"handler" ,AS3.bind( this,"correct"));
    var button_53_5_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_53_5_$1["id"] = com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase.DISCARD_BUTON_ID;
    button_53_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_53_5_$1,"scale" , "small");
    AS3.setBindable(button_53_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_validate_error_messagebox_discard_button')));
    AS3.setBindable(button_53_5_$1,"handler" ,AS3.bind( this,"discard"));
    config_$1.buttons = [button_48_5_$1, button_53_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$ziYN(config_$1);
  }/*

    [Bindable]
    public var message:String;


    [Bindable]
    public var discardCallback:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.validationMessageBox",
      constructor: ValidationMessageBox$,
      super$ziYN: function() {
        com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        message: null,
        discardCallback: null
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.ValidationMessageBoxBase",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
