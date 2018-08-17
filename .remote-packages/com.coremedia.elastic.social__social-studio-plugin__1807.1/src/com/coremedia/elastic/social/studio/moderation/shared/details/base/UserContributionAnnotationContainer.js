Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer", function(UserContributionAnnotationContainer) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.base{
import com.coremedia.elastic.social.studio.moderation.shared.details.base.*;
import net.jangaroo.ext.Exml;
import ext.container.Container;
import ext.form.field.DisplayField;
import com.coremedia.ui.components.IconDisplayField;
import ext.layout.container.HBoxLayout;
import ext.form.field.TextArea;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.exml.ValueExpression;
import ext.layout.container.VBoxLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class UserContributionAnnotationContainer extends UserContributionAnnotationContainerBase{

    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userContributionAnnotationContainer";

    public*/function UserContributionAnnotationContainer$(config/*:UserContributionAnnotationContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase,{});
    var defaults_$1/*:UserContributionAnnotationContainer*/ =AS3.cast(UserContributionAnnotationContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME_200_NO_TOP_BORDER.getSkin());
    var container_29_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    var displayField_31_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_31_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_title'));
    displayField_31_9_$1.flex = 1.0;
    displayField_31_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    var ui_IconDisplayField_34_9_$1/*:com.coremedia.ui.components.IconDisplayField*/ =AS3.cast(com.coremedia.ui.components.IconDisplayField,{});
    AS3.setBindable(ui_IconDisplayField_34_9_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'help')));
    AS3.setBindable(ui_IconDisplayField_34_9_$1,"tooltip" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_tooltip'));
    container_29_5_$1.items = [displayField_31_9_$1, ui_IconDisplayField_34_9_$1];
    var layout_HBox_38_9_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_38_9_$1,"align" , "stretch");
    AS3.setBindable(container_29_5_$1,"layout" , layout_HBox_38_9_$1);
    var textArea_41_5_$1/*:ext.form.field.TextArea*/ =AS3.cast(Ext.form.field.TextArea,{});
    textArea_41_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase.ANNOTATION_TEXTAREA_ITEM_ID);
    AS3.setBindable(textArea_41_5_$1,"emptyText" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_annotation_empty_text')));
    textArea_41_5_$1.checkChangeBuffer = 300.0;
    textArea_41_5_$1.flex = 1.0;
    var ui_BindPropertyPlugin_46_9_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_46_9_$1.bidirectional = true;
    ui_BindPropertyPlugin_46_9_$1.ifUndefined = "";
    var ui_ValueExpression_49_13_$1/*:com.coremedia.ui.exml.ValueExpression*/ =AS3.cast(com.coremedia.ui.exml.ValueExpression,{});
    AS3.setBindable(ui_ValueExpression_49_13_$1,"context" , AS3.getBindable(config,"moderationContributionAdministration"));
    AS3.setBindable(ui_ValueExpression_49_13_$1,"expression" , "notes.text");
    ui_BindPropertyPlugin_46_9_$1.bindTo = new com.coremedia.ui.exml.ValueExpression(ui_ValueExpression_49_13_$1);
    textArea_41_5_$1.plugins = [ui_BindPropertyPlugin_46_9_$1];
    config_$1.items = [container_29_5_$1, textArea_41_5_$1];
    var layout_VBox_57_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_57_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_57_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$5NCj(config_$1);
  }/*

    [Bindable]
    public var moderationContributionAdministration:AbstractContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userContributionAnnotationContainer",
      constructor: UserContributionAnnotationContainer$,
      super$5NCj: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderationContributionAdministration: null},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.form.field.TextArea",
        "Ext.layout.container.HBox",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainerBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.components.IconDisplayField",
        "com.coremedia.ui.exml.ValueExpression",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ]
    };
});
