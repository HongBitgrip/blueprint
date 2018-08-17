Ext.define("com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanel", function(UserDetailsDataPanel) {/*package com.coremedia.elastic.social.studio.usermanagement.details{
import com.coremedia.elastic.social.studio.usermanagement.details.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.container.Container;
import ext.layout.container.CenterLayout;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.VBoxLayout;
import com.coremedia.ui.components.Image;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import ext.button.Button;
import com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import ext.form.field.TextField;
import com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin;
import com.coremedia.ui.plugins.HorizontalSpacingPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserDetailsDataPanel extends UserDetailsDataPanelBase{

    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.UserPropertyNames;
    import com.coremedia.icons.CoreIcons_properties;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.skins.ButtonSkin;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.IconDisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userDetailsDataPanel";

    public*/function UserDetailsDataPanel$(config/*:UserDetailsDataPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase,{});
    var defaults_$1/*:UserDetailsDataPanel*/ =AS3.cast(UserDetailsDataPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.GRID_200.getSkin());
    AS3.setBindable(config_$1,"minHeight" , 140.0);
    var layout_HBox_34_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(config_$1,"layout" , layout_HBox_34_5_$1);
    var container_37_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var container_39_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_39_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.FRAME_GRID_200);
    container_39_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.NO_IMAGE_ID);
    AS3.setBindable(container_39_9_$1,"width" , 120);
    AS3.setBindable(container_39_9_$1,"height" , 110);
    var layout_Center_44_13_$1/*:ext.layout.container.CenterLayout*/ =AS3.cast(Ext.layout.container.Center,{});
    AS3.setBindable(container_39_9_$1,"layout" , layout_Center_44_13_$1);
    var ui_IconDisplayField_47_13_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    ui_IconDisplayField_47_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.IconDisplayFieldSkin.DOUBLE.getSkin());
    AS3.setBindable(ui_IconDisplayField_47_13_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( com.coremedia.icons.CoreIcons_properties.INSTANCE.user));
    container_39_9_$1.items = [ui_IconDisplayField_47_13_$1];
    var container_51_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var layout_VBox_53_13_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(container_51_9_$1,"layout" , layout_VBox_53_13_$1);
    var ui_Image_56_13_$1/*:com.coremedia.ui.components.Image*/ =AS3.cast(com.coremedia.ui.components.Image,{});
    ui_Image_56_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.IMAGE_ID);
    AS3.setBindable(ui_Image_56_13_$1,"maxWidth" , 90.0);
    AS3.setBindable(ui_Image_56_13_$1,"margin" , "0 30 0 0");
    AS3.setBindable(ui_Image_56_13_$1,"maxHeight" , 90.0);
    var ui_BindPropertyPlugin_61_17_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_61_17_$1.componentProperty = "src";
    ui_BindPropertyPlugin_61_17_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE);
    ui_BindPropertyPlugin_61_17_$1.reverseTransformer =AS3.bind( this,"setModified");
    ui_BindPropertyPlugin_61_17_$1.transformer = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.transformBlobUri;
    ui_BindPropertyPlugin_61_17_$1.bidirectional = true;
    ui_Image_56_13_$1.plugins = [ui_BindPropertyPlugin_61_17_$1];
    var button_68_13_$1/*:ext.button.Button*/ =AS3.cast(Ext.button.Button,{});
    button_68_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ButtonSkin.SIMPLE.getSkin());
    AS3.setBindable(button_68_13_$1,"scale" , "small");
    AS3.setBindable(button_68_13_$1,"margin" , "0 0 0 -10");
    button_68_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.REMOVE_PROFILE_IMAGE_BUTTON_ITEM_ID);
    AS3.setBindable(button_68_13_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message_tooltip'));
    AS3.setBindable(button_68_13_$1,"text" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_delete_image_message_title')));
    var es_DeleteUserImageAction_75_17_$1/*:com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction*/ =AS3.cast(com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction,{});
    AS3.setBindable(es_DeleteUserImageAction_75_17_$1,"userValueExpression" , this.getUserImageValueExpression(AS3.getBindable(config,"moderation")));
    AS3.setBindable(es_DeleteUserImageAction_75_17_$1,"success" ,AS3.bind( this,"setModified"));
    AS3.setBindable(es_DeleteUserImageAction_75_17_$1,"iconCls" , "");
    button_68_13_$1.baseAction = new com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction(es_DeleteUserImageAction_75_17_$1);
    var ui_BindVisibilityPlugin_80_17_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_80_17_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.IMAGE);
    button_68_13_$1.plugins = [ui_BindVisibilityPlugin_80_17_$1];
    container_51_9_$1.items = [ui_Image_56_13_$1, button_68_13_$1];
    var ui_VerticalSpacingPlugin_85_13_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_51_9_$1.plugins = [ui_VerticalSpacingPlugin_85_13_$1];
    container_37_5_$1.items = [container_39_9_$1, container_51_9_$1];
    var container_90_5_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_90_5_$1.flex = 1.0;
    var layout_VBox_92_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_92_9_$1,"align" , "stretch");
    AS3.setBindable(container_90_5_$1,"layout" , layout_VBox_92_9_$1);
    var textField_95_9_$1/*:ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_95_9_$1.labelSeparator = "";
    container_90_5_$1["defaultType"] = textField_95_9_$1['xtype'];
    delete textField_95_9_$1['xtype'];
    delete textField_95_9_$1['xclass'];
    container_90_5_$1.defaults = textField_95_9_$1;
    var textField_98_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_98_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.NAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_98_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_name_field_label')));
    textField_98_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_102_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_102_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    ui_BindPropertyPlugin_102_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_102_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_102_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    var es_BeanValidatorPlugin_106_13_$1/*:com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin,{});
    AS3.setBindable(es_BeanValidatorPlugin_106_13_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME));
    es_BeanValidatorPlugin_106_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.NAME);
    textField_98_9_$1.plugins = [ui_BindPropertyPlugin_102_13_$1, es_BeanValidatorPlugin_106_13_$1];
    var textField_110_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_110_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.GIVEN_NAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_110_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_givenname_field_label')));
    textField_110_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_114_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_114_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.GIVENNAME);
    ui_BindPropertyPlugin_114_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_114_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_114_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    textField_110_9_$1.plugins = [ui_BindPropertyPlugin_114_13_$1];
    var textField_120_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_120_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.SURNAME_FIELD_ITEM_ID);
    AS3.setBindable(textField_120_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_surname_field_label')));
    textField_120_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_124_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_124_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.SURNAME);
    ui_BindPropertyPlugin_124_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_124_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_124_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    textField_120_9_$1.plugins = [ui_BindPropertyPlugin_124_13_$1];
    var textField_130_9_$1/*: ext.form.field.TextField*/ =AS3.cast(Ext.form.field.Text,{});
    textField_130_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.EMAIL_FIELD_ITEM_ID);
    AS3.setBindable(textField_130_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'userdetail_email_field_label')));
    textField_130_9_$1.allowBlank = false;
    textField_130_9_$1.checkChangeBuffer = 300.0;
    var ui_BindPropertyPlugin_135_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_135_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    ui_BindPropertyPlugin_135_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_135_13_$1.ifUndefined = "";
    ui_BindPropertyPlugin_135_13_$1.transformer =AS3.bind( this,"trimMail");
    ui_BindPropertyPlugin_135_13_$1.reverseTransformer =AS3.bind( this,"setModified");
    var es_BeanValidatorPlugin_140_13_$1/*: com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin*/ =AS3.cast(com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin,{});
    AS3.setBindable(es_BeanValidatorPlugin_140_13_$1,"property" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL));
    es_BeanValidatorPlugin_140_13_$1.bindTo = com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.getExtendedEditedUserValueExpressionPath(AS3.getBindable(config,"moderation"), com.coremedia.elastic.social.studio.model.UserPropertyNames.EMAIL);
    textField_130_9_$1.plugins = [ui_BindPropertyPlugin_135_13_$1, es_BeanValidatorPlugin_140_13_$1];
    container_90_5_$1.items = [textField_98_9_$1, textField_110_9_$1, textField_120_9_$1, textField_130_9_$1];
    var ui_VerticalSpacingPlugin_146_9_$1/*: com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_90_5_$1.plugins = [ui_VerticalSpacingPlugin_146_9_$1];
    config_$1.items = [container_37_5_$1, container_90_5_$1];
    var ui_HorizontalSpacingPlugin_151_5_$1/*:com.coremedia.ui.plugins.HorizontalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.HorizontalSpacingPlugin,{});
    AS3.setBindable(ui_HorizontalSpacingPlugin_151_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.HORIZONTAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_HorizontalSpacingPlugin_151_5_$1];
    config_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$WpTf(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userDetailsDataPanel",
      constructor: UserDetailsDataPanel$,
      super$WpTf: function() {
        com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      requires: [
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.form.field.Text",
        "Ext.layout.container.Center",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.usermanagement.details.UserDetailsDataPanelBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.components.Image",
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
        "com.coremedia.elastic.social.studio.model.UserPropertyNames",
        "com.coremedia.elastic.social.studio.plugins.BeanValidatorPlugin",
        "com.coremedia.elastic.social.studio.usermanagement.actions.DeleteUserImageAction"
      ]
    };
});
