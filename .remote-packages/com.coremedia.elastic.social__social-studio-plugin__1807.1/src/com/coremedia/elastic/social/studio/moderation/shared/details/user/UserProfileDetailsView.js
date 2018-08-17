Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView", function(UserProfileDetailsView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user{
import com.coremedia.elastic.social.studio.moderation.shared.details.user.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.container.Container;
import ext.layout.container.CenterLayout;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.button.Button;
import com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.form.field.TextField;
import com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserProfileDetailsView extends UserProfileDetailsViewBase{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.UserPropertyNames;
    import com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil;
    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userProfileDetailsView";

    public*/function UserProfileDetailsView$(config/*:UserProfileDetailsView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase,{});
    var defaults_$1/*:UserProfileDetailsView*/ =AS3.cast(UserProfileDetailsView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    AS3.setBindable(config_$1,"minHeight" , 140.0);
    var layout_HBox_32_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_32_5_$1);
    var container_35_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var container_37_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_37_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME_GRID_200);
    AS3.setBindable(container_37_9_$1,"width" , 90);
    container_37_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.NO_IMAGE_ID);
    AS3.setBindable(container_37_9_$1,"margin" , "0 30 0 0");
    AS3.setBindable(container_37_9_$1,"height" , 90);
    var layout_Center_43_13_$1/*:ext.layout.container.CenterLayout*/ =AS3.cast(Ext.layout.container.Center,{});
    AS3.setBindable(container_37_9_$1,"layout" , layout_Center_43_13_$1);
    var ui_IconDisplayField_46_13_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_46_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.DOUBLE.getSkin());
    AS3.setBindable(ui_IconDisplayField_46_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.user));
    container_37_9_$1.items = [ui_IconDisplayField_46_13_$1];
    var container_50_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_VBox_52_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(container_50_9_$1,"layout" , layout_VBox_52_13_$1);
    var ui_Image_55_13_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_55_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.IMAGE_ID);
    AS3.setBindable(ui_Image_55_13_$1,"maxWidth" , 90.0);
    AS3.setBindable(ui_Image_55_13_$1,"margin" , "0 30 0 0");
    AS3.setBindable(ui_Image_55_13_$1,"maxHeight" , 90.0);
    var ui_BindPropertyPlugin_60_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_60_17_$1.componentProperty = "src";
    ui_BindPropertyPlugin_60_17_$1.transformer =AS3.bind( this,"getBlobUri");
    ui_BindPropertyPlugin_60_17_$1.bidirectional = true;
    ui_BindPropertyPlugin_60_17_$1.ifUndefined = "";
    var ui_ValueExpression_65_21_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_65_21_$1,"context" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    AS3.setBindable(ui_ValueExpression_65_21_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                                        com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                        com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE])));
    ui_BindPropertyPlugin_60_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_65_21_$1);
    ui_Image_55_13_$1.plugins = [ui_BindPropertyPlugin_60_17_$1];
    var button_73_13_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_73_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_73_13_$1,"scale" , "small");
    AS3.setBindable(button_73_13_$1,"textAlign" , "left");
    AS3.setBindable(button_73_13_$1,"margin" , "0 0 0 -10");
    button_73_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.DELETE_USER_IMAGE_BUTTON_ITEM_ID);
    AS3.setBindable(button_73_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message_tooltip'));
    AS3.setBindable(button_73_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message_title')));
    var es_DeleteUserImageAction_81_17_$1/*:com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction,{});
    AS3.setBindable(es_DeleteUserImageAction_81_17_$1,"userValueExpression" , this.getUserImageValueExpressionPath(AS3.getBindable(config,"moderation")));
    AS3.setBindable(es_DeleteUserImageAction_81_17_$1,"iconCls" , "");
    button_73_13_$1.baseAction = new com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction(es_DeleteUserImageAction_81_17_$1);
    var ui_BindVisibilityPlugin_85_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    var ui_ValueExpression_87_21_$1/*: com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_87_21_$1,"context" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    AS3.setBindable(ui_ValueExpression_87_21_$1,"expression" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil.createPath([
                                        com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                        com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE])));
    ui_BindVisibilityPlugin_85_17_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_87_21_$1);
    button_73_13_$1.plugins = [ui_BindVisibilityPlugin_85_17_$1];
    container_50_9_$1.items = [ui_Image_55_13_$1, button_73_13_$1];
    var ui_VerticalSpacingPlugin_97_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_50_9_$1.plugins = [ui_VerticalSpacingPlugin_97_13_$1];
    container_35_5_$1.items = [container_37_9_$1, container_50_9_$1];
    var container_102_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_102_5_$1.flex = 1.0;
    container_102_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.DETAILS_FORM_ITEM_ID);
    var textField_105_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_105_9_$1.labelSeparator = "";
    container_102_5_$1["defaultType"] = textField_105_9_$1['xtype'];
    delete textField_105_9_$1['xtype'];
    delete textField_105_9_$1['xclass'];
    container_102_5_$1.defaults = textField_105_9_$1;
    var layout_VBox_108_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_108_9_$1,"align" , "stretch");
    AS3.setBindable(container_102_5_$1,"layout" , layout_VBox_108_9_$1);
    var textField_111_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_111_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.NAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_111_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_name_field_label')));
    textField_111_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_115_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_115_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    ui_BindPropertyPlugin_115_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_115_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_115_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    var es_BeanValidatorPlugin_119_13_$1/*:com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin,{});
    AS3.setBindable(es_BeanValidatorPlugin_119_13_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME));
    es_BeanValidatorPlugin_119_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    textField_111_9_$1.plugins = [ui_BindPropertyPlugin_115_13_$1, es_BeanValidatorPlugin_119_13_$1];
    var textField_123_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_123_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.GIVEN_NAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_123_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_givenname_field_label')));
    textField_123_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_127_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_127_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.GIVENNAME);
    ui_BindPropertyPlugin_127_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_127_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_127_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    textField_123_9_$1.plugins = [ui_BindPropertyPlugin_127_13_$1];
    var textField_133_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_133_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.SURNAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_133_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_surname_field_label')));
    textField_133_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_137_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_137_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.SURNAME);
    ui_BindPropertyPlugin_137_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_137_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_137_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    textField_133_9_$1.plugins = [ui_BindPropertyPlugin_137_13_$1];
    var textField_143_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_143_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.EMAIL_FIELD_ITEM_ID);
    AS3.setBindable(textField_143_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_email_field_label')));
    textField_143_9_$1.allowBlank = false;
    textField_143_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_148_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_148_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    ui_BindPropertyPlugin_148_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_148_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_148_13_$1.transformer =AS3.bind( this,"trimMail");
    ui_BindPropertyPlugin_148_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    var es_BeanValidatorPlugin_153_13_$1/*: com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin,{});
    AS3.setBindable(es_BeanValidatorPlugin_153_13_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL));
    es_BeanValidatorPlugin_153_13_$1.bindTo = com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.getUserValueExpressionFor(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    textField_143_9_$1.plugins = [ui_BindPropertyPlugin_148_13_$1, es_BeanValidatorPlugin_153_13_$1];
    container_102_5_$1.items = [textField_111_9_$1, textField_123_9_$1, textField_133_9_$1, textField_143_9_$1];
    var ui_VerticalSpacingPlugin_159_9_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_102_5_$1.plugins = [ui_VerticalSpacingPlugin_159_9_$1];
    config_$1.items = [container_35_5_$1, container_102_5_$1];
    var ui_HorizontalSpacingPlugin_164_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_164_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_HorizontalSpacingPlugin_164_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$wpiv(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userProfileDetailsView",
      constructor: UserProfileDetailsView$,
      super$wpiv: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Text",
        "Ext.layout.container.Center",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsViewBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.Image",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.HorizontalSpacingPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ButtonSkin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.IconDisplayFieldSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.model.utils.ValueExpressionUtil",
        "com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin",
        "com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction"
      ]
    };
});
