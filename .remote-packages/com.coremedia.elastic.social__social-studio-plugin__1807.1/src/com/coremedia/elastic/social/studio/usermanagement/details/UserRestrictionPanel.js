Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanel", function(UserRestrictionPanel) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.HBoxLayout;
import ext.form.RadioGroup;
import ext.form.field.Radio;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.button.Button;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserRestrictionPanel extends UserRestrictionPanelBase{

    import com.coremedia.elastic.social.studio.model.UserPropertyNames;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userRestrictionPanel";

    public*/function UserRestrictionPanel$(config/*:UserRestrictionPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase,{});
    var defaults_$1/*:UserRestrictionPanel*/ =AS3.cast(UserRestrictionPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_VBox_27_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_27_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_27_5_$1);
    var container_30_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_32_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_32_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_meta_data_restrictions'));
    displayField_32_9_$1.flex = 1.0;
    displayField_32_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var ui_IconDisplayField_35_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_35_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconDisplayField_35_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_tooltip'));
    container_30_5_$1.items = [displayField_32_9_$1, ui_IconDisplayField_35_9_$1];
    var layout_HBox_39_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_39_9_$1,"align" , "stretch");
    AS3.setBindable(container_30_5_$1,"layout" , layout_HBox_39_9_$1);
    var radioGroup_42_5_$1/*:ext.form.RadioGroup*/ =AS3.cast(Ext.form.RadioGroup,{});
    AS3.setBindable(radioGroup_42_5_$1,"width" , "auto");
    radioGroup_42_5_$1.columns = 1;
    radioGroup_42_5_$1.allowBlank = false;
    radioGroup_42_5_$1.hideLabel = true;
    radioGroup_42_5_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radioGroup_42_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    var radio_49_9_$1/*:ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_49_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_moderation_required')));
    radio_49_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radio_49_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_MODERATION_REQUIRED);
    radio_49_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_MODERATION_REQUIRED);
    var radio_53_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_53_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_activated')));
    radio_53_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radio_53_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_ACTIVATED);
    radio_53_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_ACTIVATED);
    var radio_57_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_57_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_ignored')));
    radio_57_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radio_57_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_IGNORED);
    radio_57_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_IGNORED);
    var radio_61_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_61_9_$1,"boxLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_state_blocked')));
    radio_61_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radio_61_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_BLOCKED);
    radio_61_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_BLOCKED);
    var radio_65_9_$1/*: ext.form.field.Radio*/ =AS3.cast(Ext.form.field.Radio,{});
    AS3.setBindable(radio_65_9_$1,"boxLabel" , "Anonymize");
    radio_65_9_$1.name =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.USER_STATE_RADIO_GROUP_ITEM_ID);
    radio_65_9_$1.inputValue =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_ANONYMIZED);
    radio_65_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RADIO_STATE_ANONYMIZED);
    AS3.setBindable(radio_65_9_$1,"hidden" , true);
    radioGroup_42_5_$1.items = [radio_49_9_$1, radio_53_9_$1, radio_57_9_$1, radio_61_9_$1, radio_65_9_$1];
    var ui_BindPropertyPlugin_72_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_9_$1.componentProperty = "value";
    ui_BindPropertyPlugin_72_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.STATE);
    ui_BindPropertyPlugin_72_9_$1.reverseTransformer =AS3.bind( this,"toExpressionValue");
    ui_BindPropertyPlugin_72_9_$1.transformer =AS3.bind( this,"toInputValue");
    ui_BindPropertyPlugin_72_9_$1.skipIfConsistent = false;
    ui_BindPropertyPlugin_72_9_$1.bidirectional = true;
    radioGroup_42_5_$1.plugins = [ui_BindPropertyPlugin_72_9_$1];
    var button_81_5_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_81_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.RESEND_REGISTRATION_MAIL_BUTTON_ITEM_ID);
    button_81_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_81_5_$1,"textAlign" , "right");
    AS3.setBindable(button_81_5_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_resend_registration_mail_button')));
    AS3.setBindable(button_81_5_$1,"handler" , AS3.getBindable(config,"resendRegistrationConfirmation"));
    config_$1.items = [container_30_5_$1, radioGroup_42_5_$1, button_81_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$uC2f(config_$1);
  }/*

    [Bindable]
    public var resendRegistrationConfirmation:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userRestrictionPanel",
      constructor: UserRestrictionPanel$,
      super$uC2f: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {resendRegistrationConfirmation: null},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.RadioGroup",
        "Ext.form.field.Display",
        "Ext.form.field.Radio",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserRestrictionPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: ["com.coremedia.elastic.social.studio.model.UserPropertyNames"]
    };
});
