Ext.define("com.coremedia.elastic.social.studio.email.EMailWindow", function(EMailWindow) {/*package com.coremedia.elastic.social.studio.email{
import com.coremedia.elastic.social.studio.email.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.layout.container.HBoxLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconDisplayField;
import com.coremedia.ui.components.LocalComboBox;
import com.coremedia.ui.plugins.BindListPlugin;
import ext.data.field.DataField;
import com.coremedia.ui.store.DataField;
import com.coremedia.ui.exml.ValueExpression;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.form.field.TextArea;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.toolbar.Toolbar;
import ext.toolbar.Fill;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class EMailWindow extends EMailWindowBase{

    import com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.WindowSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.eMailWindow";

    public*/function EMailWindow$(config/*:EMailWindow = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.email.EMailWindowBase*/ =AS3.cast(com.coremedia.elastic.social.studio.email.EMailWindowBase,{});
    var defaults_$1/*:EMailWindow*/ =AS3.cast(EMailWindow,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.modal = true;
    config_$1.closeAction = "close";
    config_$1["id"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.EMAIL_WINDOW_ID;
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.email.EMailWindowBase.EMAIL_WINDOW_ID);
    config_$1.resizable = false;
    config_$1.constrainHeader = true;
    config_$1.stateId = "emailWindowState";
    AS3.setBindable(config_$1,"stateful" , true);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'email_window_title'));
    AS3.setBindable(config_$1,"width" , 400);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.WindowSkin.GRID_200_LIGHT.getSkin());
    var layout_VBox_36_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_36_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_36_5_$1);
    var container_39_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_HBox_41_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(container_39_5_$1,"layout" , layout_HBox_41_9_$1);
    var displayField_44_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_44_9_$1.flex = 1.0;
    AS3.setBindable(displayField_44_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'email_window_type_combo_label'));
    displayField_44_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var ui_IconDisplayField_47_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_47_9_$1,"iconPosition" ,net.jangaroo.ext.Exml.asString( com.coremedia.ui.components.IconDisplayField.ICON_POSITION_AFTER_VALUE));
    AS3.setBindable(ui_IconDisplayField_47_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconDisplayField_47_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'email_window_tooltip'));
    container_39_5_$1.items = [displayField_44_9_$1, ui_IconDisplayField_47_9_$1];
    var ui_LocalComboBox_53_5_$1/*:com.coremedia.ui.components.LocalComboBox*/ =AS3.cast(com.coremedia.ui.components.LocalComboBox,{});
    ui_LocalComboBox_53_5_$1["id"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.SELECT_EMAIL_COMBO_ID;
    ui_LocalComboBox_53_5_$1.valueField = "type";
    AS3.setBindable(ui_LocalComboBox_53_5_$1,"displayField" , "localizedType");
    AS3.setBindable(ui_LocalComboBox_53_5_$1,"encodeItems" , true);
    var ui_BindListPlugin_58_9_$1/*:com.coremedia.ui.plugins.BindListPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindListPlugin,{});
    var data_AutoField_60_13_$1/*:ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_60_13_$1.name = "type";
    var ui_DataField_61_13_$1/*:com.coremedia.ui.store.DataField*/ =AS3.cast(com.coremedia.ui.store.DataField,{});
    ui_DataField_61_13_$1.name = "localizedType";
    ui_DataField_61_13_$1.mapping = "type";
    ui_DataField_61_13_$1["convert"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.convertMailType;
    ui_DataField_61_13_$1.encode = false;
    var data_AutoField_65_13_$1/*: ext.data.field.DataField*/ =AS3.cast(Ext.data.field.Field,{});
    data_AutoField_65_13_$1.name = "text";
    AS3.setBindable(ui_BindListPlugin_58_9_$1,"fields" , [data_AutoField_60_13_$1, ui_DataField_61_13_$1, data_AutoField_65_13_$1]);
    var ui_ValueExpression_68_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_68_13_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames.MODERATION_EMAILS));
    AS3.setBindable(ui_ValueExpression_68_13_$1,"context" , this);
    AS3.setBindable(ui_BindListPlugin_58_9_$1,"bindTo" , new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_68_13_$1));
    var ui_BindPropertyPlugin_72_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_9_$1.bindTo = this.getSelectedEmailTypeValueExpression();
    ui_BindPropertyPlugin_72_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_72_9_$1.componentEvent = "select";
    ui_LocalComboBox_53_5_$1.plugins = [ui_BindListPlugin_58_9_$1, ui_BindPropertyPlugin_72_9_$1];
    ui_LocalComboBox_53_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var displayField_78_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_78_5_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'email_window_text_label'));
    displayField_78_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var textArea_82_5_$1/*:ext.form.field.TextArea*/ =AS3.cast(Ext.form.field.TextArea,{});
    textArea_82_5_$1["id"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.TEXT_AREA_ID;
    AS3.setBindable(textArea_82_5_$1,"scrollable" , true);
    AS3.setBindable(textArea_82_5_$1,"height" , 150);
    var ui_BindPropertyPlugin_86_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_86_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_86_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_86_9_$1.reverseTransformer =AS3.bind( this,"setModified");
    var ui_ValueExpression_90_13_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_90_13_$1,"expression" , "currentEmail.text");
    AS3.setBindable(ui_ValueExpression_90_13_$1,"context" , this);
    ui_BindPropertyPlugin_86_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_90_13_$1);
    textArea_82_5_$1.plugins = [ui_BindPropertyPlugin_86_9_$1];
    config_$1.items = [container_39_5_$1, ui_LocalComboBox_53_5_$1, displayField_78_5_$1, textArea_82_5_$1];
    var ui_VerticalSpacingPlugin_98_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    config_$1.plugins = [ui_VerticalSpacingPlugin_98_5_$1];
    var toolbar_102_5_$1/*:ext.toolbar.Toolbar*/ =AS3.cast(Ext.toolbar.Toolbar,{});
    var tbFill_104_9_$1/*:ext.toolbar.Fill*/ =AS3.cast(Ext.toolbar.Fill,{});
    var button_105_9_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_105_9_$1["id"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.APPLY_BUTTON_ID;
    button_105_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_PRIMARY.getSkin());
    AS3.setBindable(button_105_9_$1,"scale" , "small");
    AS3.setBindable(button_105_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_apply')));
    AS3.setBindable(button_105_9_$1,"handler" ,AS3.bind( this,"apply"));
    AS3.setBindable(button_105_9_$1,"disabled" , true);
    var button_111_9_$1/*: ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_111_9_$1["id"] = com.coremedia.elastic.social.studio.email.EMailWindowBase.CANCEL_BUTTON_ID;
    button_111_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.FOOTER_SECONDARY.getSkin());
    AS3.setBindable(button_111_9_$1,"scale" , "small");
    AS3.setBindable(button_111_9_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'btn_cancel')));
    AS3.setBindable(button_111_9_$1,"handler" ,AS3.bind( this,"cancel"));
    toolbar_102_5_$1.items = [tbFill_104_9_$1, button_105_9_$1, button_111_9_$1];
    config_$1.fbar = toolbar_102_5_$1;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$4GqK(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.email.EMailWindowBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.eMailWindow",
      constructor: EMailWindow$,
      super$4GqK: function() {
        com.coremedia.elastic.social.studio.email.EMailWindowBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.data.field.Field",
        "Ext.form.field.Display",
        "Ext.form.field.TextArea",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "Ext.toolbar.Fill",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.email.EMailWindowBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.LocalComboBox",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindListPlugin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.WindowSkin",
        "com.coremedia.ui.store.DataField",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.UserAdministrationPropertyNames"]
    };
});
