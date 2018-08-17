Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanel", function(UserMetaDataPanel) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.ColumnLayout;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.BEMMixin;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel;
import com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserMetaDataPanel extends UserMetaDataPanelBase{

    import com.coremedia.elastic.social.studio.model.UserAdministration;
    import com.coremedia.elastic.social.studio.model.UserPropertyNames;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userMetaDataPanel";

    public static const FIELD_LABEL_WIDTH:Number = 150;

    public static const NOTES_CONTAINER_FIELD_LABEL_WIDTH:Number = 300;

    public*/function UserMetaDataPanel$(config/*:UserMetaDataPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase,{});
    var defaults_$1/*:UserMetaDataPanel*/ =AS3.cast(UserMetaDataPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_meta_data_info'));
    var layout_Column_34_5_$1/*:ext.layout.container.ColumnLayout*/ =AS3.cast(Ext.layout.container.Column,{});
    AS3.setBindable(config_$1,"layout" , layout_Column_34_5_$1);
    var displayField_37_5_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_37_5_$1.labelWidth = UserMetaDataPanel.FIELD_LABEL_WIDTH;
    displayField_37_5_$1.columnWidth = 0.5;
    config_$1["defaultType"] = displayField_37_5_$1['xtype'];
    delete displayField_37_5_$1['xtype'];
    delete displayField_37_5_$1['xclass'];
    config_$1.defaults = displayField_37_5_$1;
    var displayField_41_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_41_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_member_since_label')));
    var ui_BindPropertyPlugin_44_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_44_9_$1.transformer = com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.formatDate;
    ui_BindPropertyPlugin_44_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.REGISTRATION_DATE);
    displayField_41_5_$1.plugins = [ui_BindPropertyPlugin_44_9_$1];
    var displayField_48_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_48_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.CONTRIBUTIONS_ITEM_ID);
    AS3.setBindable(displayField_48_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_number_of_contributions_label')));
    var ui_BindPropertyPlugin_51_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_51_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_CONTRIBUTIONS);
    displayField_48_5_$1.plugins = [ui_BindPropertyPlugin_51_9_$1];
    var displayField_55_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_55_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.LAST_LOGIN_DATE_ITEM_ID);
    AS3.setBindable(displayField_55_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_last_login_date')));
    var ui_BindPropertyPlugin_58_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_58_9_$1.transformer = com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.formatDate;
    ui_BindPropertyPlugin_58_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.LAST_LOGIN_DATE);
    displayField_55_5_$1.plugins = [ui_BindPropertyPlugin_58_9_$1];
    var displayField_62_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_62_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.REJECTED_CONTRIBUTIONS_ITEM_ID);
    AS3.setBindable(displayField_62_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_number_of_rejected_contributions_label')));
    var ui_BindPropertyPlugin_65_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_65_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.REJECTED_CONTRIBUTIONS);
    displayField_62_5_$1.plugins = [ui_BindPropertyPlugin_65_9_$1];
    var displayField_69_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_69_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.NUMBER_OF_LOGINS_ITEM_ID);
    AS3.setBindable(displayField_69_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_number_of_logins')));
    var ui_BindPropertyPlugin_72_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_72_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.NUMBER_OF_LOGINS);
    displayField_69_5_$1.plugins = [ui_BindPropertyPlugin_72_9_$1];
    var displayField_76_5_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_76_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.LOCALE_LANGUAGE_ITEM_ID);
    AS3.setBindable(displayField_76_5_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_locale_language_label')));
    var ui_BindPropertyPlugin_79_9_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_79_9_$1.transformer = com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.evaluateUserLocale;
    ui_BindPropertyPlugin_79_9_$1.bindTo = this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")).extendBy(com.coremedia.elastic.social.studio.model.UserPropertyNames.LOCALE);
    displayField_76_5_$1.plugins = [ui_BindPropertyPlugin_79_9_$1];
    var ui_BEMMixin_83_9_$1/*:com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_83_9_$1,"bemElement" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM);

    delete ui_BEMMixin_83_9_$1['xtype'];
    delete ui_BEMMixin_83_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(displayField_76_5_$1, ui_BEMMixin_83_9_$1);
    var es_UserInternalNotesContainer_87_5_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserInternalNotesContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserInternalNotesContainer,{});
    es_UserInternalNotesContainer_87_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.USER_ANNOTATION_CONTAINER_ITEM_ID);
    AS3.setBindable(es_UserInternalNotesContainer_87_5_$1,"userAdministration" , AS3.getBindable(config,"userAdministration"));
    es_UserInternalNotesContainer_87_5_$1.columnWidth = 1.0;
    var editor_PropertyFieldLabel_91_9_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel,{});
    editor_PropertyFieldLabel_91_9_$1.labelWidth = UserMetaDataPanel.NOTES_CONTAINER_FIELD_LABEL_WIDTH;
    es_UserInternalNotesContainer_87_5_$1["defaultType"] = editor_PropertyFieldLabel_91_9_$1['xtype'];
    delete editor_PropertyFieldLabel_91_9_$1['xtype'];
    delete editor_PropertyFieldLabel_91_9_$1['xclass'];
    es_UserInternalNotesContainer_87_5_$1.defaults = editor_PropertyFieldLabel_91_9_$1;
    var ui_BEMMixin_94_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_94_9_$1,"bemElement" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM);

    delete ui_BEMMixin_94_9_$1['xtype'];
    delete ui_BEMMixin_94_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(es_UserInternalNotesContainer_87_5_$1, ui_BEMMixin_94_9_$1);
    var editor_PropertyFieldGroup_99_5_$1/*:com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup*/ =AS3.cast(com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup,{});
    editor_PropertyFieldGroup_99_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.ADDITIONAL_USER_INFO_CONTAINER_ITEM_ID);
    editor_PropertyFieldGroup_99_5_$1.columnWidth = 1.0;
    editor_PropertyFieldGroup_99_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.CARD_NESTED.getSkin());
    AS3.setBindable(editor_PropertyFieldGroup_99_5_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_additional_information_title'));
    AS3.setBindable(editor_PropertyFieldGroup_99_5_$1,"bindTo" , this.getEditedUserValueExpression(AS3.getBindable(config,"userAdministration")));
    var es_UserDetailsExtensionPoint_105_9_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPoint*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPoint,{});
    editor_PropertyFieldGroup_99_5_$1.items = [es_UserDetailsExtensionPoint_105_9_$1];
    var ui_BEMMixin_108_9_$1/*: com.coremedia.ui.plugins.BEMMixin*/ =AS3.cast(com.coremedia.ui.plugins.BEMMixin,{});
    AS3.setBindable(ui_BEMMixin_108_9_$1,"bemElement" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_ELEMENT_ITEM);

    delete ui_BEMMixin_108_9_$1['xtype'];
    delete ui_BEMMixin_108_9_$1['xclass'];
    net.jangaroo.ext.Exml.apply(editor_PropertyFieldGroup_99_5_$1, ui_BEMMixin_108_9_$1);
    config_$1.items = [displayField_41_5_$1, displayField_48_5_$1, displayField_55_5_$1, displayField_62_5_$1, displayField_69_5_$1, displayField_76_5_$1, es_UserInternalNotesContainer_87_5_$1, editor_PropertyFieldGroup_99_5_$1];
    var ui_VerticalSpacingPlugin_113_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_113_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_300);
    config_$1.plugins = [ui_VerticalSpacingPlugin_113_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$Bcg4(config_$1);
  }/*

    [Bindable]
    public var userAdministration:UserAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userMetaDataPanel",
      constructor: UserMetaDataPanel$,
      super$Bcg4: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {userAdministration: null},
      statics: {
        FIELD_LABEL_WIDTH: 150,
        NOTES_CONTAINER_FIELD_LABEL_WIDTH: 300
      },
      requires: [
        "Ext.form.field.Display",
        "Ext.layout.container.Column",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldGroup",
        "com.coremedia.cms.editor.sdk.premular.PropertyFieldLabel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserMetaDataPanelBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.plugins.BEMMixin",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsExtensionPoint",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserInternalNotesContainer"
      ]
    };
});
