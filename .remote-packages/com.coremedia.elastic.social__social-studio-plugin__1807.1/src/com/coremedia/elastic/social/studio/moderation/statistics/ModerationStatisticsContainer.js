Ext.define("com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer", function(ModerationStatisticsContainer) {/*package com.coremedia.elastic.social.studio.moderation.statistics{
import com.coremedia.elastic.social.studio.moderation.statistics.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.AutoLayout;
import ext.panel.Panel;
import ext.form.field.DisplayField;
import com.coremedia.ui.plugins.BindPropertyPlugin;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationStatisticsContainer extends ModerationStatisticsContainerBase{

    import com.coremedia.elastic.social.studio.model.ModerationPropertyNames;
    import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
    import com.coremedia.elastic.social.studio.model.impl.ModerationImpl;
    import com.coremedia.ui.bem.SpacingBEMEntities;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationStatisticsContainer";
    private static const*/var WIDTH_DISPLAYFIELD_LABEL$static/*:int*/ = 200;/*

    public*/function ModerationStatisticsContainer$(config/*:ModerationStatisticsContainer = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase,{});
    var defaults_$1/*:ModerationStatisticsContainer*/ =AS3.cast(ModerationStatisticsContainer,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var layout_Auto_32_5_$1/*:ext.layout.container.AutoLayout*/ =AS3.cast(Ext.layout.container.Auto,{});
    AS3.setBindable(config_$1,"layout" , layout_Auto_32_5_$1);
    var panel_36_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_36_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200.getSkin());
    AS3.setBindable(panel_36_5_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_tenant_title'));
    var displayField_39_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    AS3.setBindable(displayField_39_9_$1,"width" , WIDTH_DISPLAYFIELD_LABEL$static);
    var ui_BindPropertyPlugin_41_13_$1/*:com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_41_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_41_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_41_13_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.TENANT, com.coremedia.elastic.social.studio.model.impl.ModerationImpl.getInstance());
    displayField_39_9_$1.plugins = [ui_BindPropertyPlugin_41_13_$1];
    panel_36_5_$1.items = [displayField_39_9_$1];
    var panel_49_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_49_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200.getSkin());
    AS3.setBindable(panel_49_5_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_comments_title'));
    var displayField_52_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_52_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase.COMMENTS_TO_MODERATE_FIELD_ID);
    AS3.setBindable(displayField_52_9_$1,"width" , WIDTH_DISPLAYFIELD_LABEL$static);
    displayField_52_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.NUMBER.getSkin());
    AS3.setBindable(displayField_52_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_comments_to_moderate')));
    var ui_BindPropertyPlugin_57_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_57_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_57_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_57_13_$1.bindTo = AS3.getBindable(config,"moderationContributionAdministration").getStatisticsValueExpression().extendBy('commentsForModeration');
    displayField_52_9_$1.plugins = [ui_BindPropertyPlugin_57_13_$1];
    var displayField_62_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_62_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase.COMMENTS_ONLINE_FIELD_ID);
    AS3.setBindable(displayField_62_9_$1,"width" , WIDTH_DISPLAYFIELD_LABEL$static);
    displayField_62_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.NUMBER.getSkin());
    AS3.setBindable(displayField_62_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_comments_online')));
    var ui_BindPropertyPlugin_67_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_67_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_67_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_67_13_$1.bindTo = AS3.getBindable(config,"moderationContributionAdministration").getStatisticsValueExpression().extendBy('onlineComments');
    displayField_62_9_$1.plugins = [ui_BindPropertyPlugin_67_13_$1];
    panel_49_5_$1.items = [displayField_52_9_$1, displayField_62_9_$1];
    var panel_75_5_$1/*: ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    panel_75_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.CARD_200.getSkin());
    AS3.setBindable(panel_75_5_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_users_title'));
    var displayField_78_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_78_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase.USERS_TO_MODERATE_FIELD_ID);
    AS3.setBindable(displayField_78_9_$1,"width" , WIDTH_DISPLAYFIELD_LABEL$static);
    displayField_78_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.NUMBER.getSkin());
    AS3.setBindable(displayField_78_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_users_to_moderate')));
    var ui_BindPropertyPlugin_83_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_83_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_83_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_83_13_$1.bindTo = AS3.getBindable(config,"moderationContributionAdministration").getStatisticsValueExpression().extendBy('usersForModeration');
    displayField_78_9_$1.plugins = [ui_BindPropertyPlugin_83_13_$1];
    var displayField_88_9_$1/*: ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_88_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase.USERS_ACTIVATED_FIELD_ID);
    AS3.setBindable(displayField_88_9_$1,"width" , WIDTH_DISPLAYFIELD_LABEL$static);
    displayField_88_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.NUMBER.getSkin());
    AS3.setBindable(displayField_88_9_$1,"fieldLabel" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'moderation_statistics_users_activated')));
    var ui_BindPropertyPlugin_93_13_$1/*: com.coremedia.ui.plugins.BindPropertyPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindPropertyPlugin,{});
    ui_BindPropertyPlugin_93_13_$1.componentProperty = "value";
    ui_BindPropertyPlugin_93_13_$1.bidirectional = true;
    ui_BindPropertyPlugin_93_13_$1.bindTo = AS3.getBindable(config,"moderationContributionAdministration").getStatisticsValueExpression().extendBy('activatedUsers');
    displayField_88_9_$1.plugins = [ui_BindPropertyPlugin_93_13_$1];
    panel_75_5_$1.items = [displayField_78_9_$1, displayField_88_9_$1];
    config_$1.items = [panel_36_5_$1, panel_49_5_$1, panel_75_5_$1];
    var ui_VerticalSpacingPlugin_102_5_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    AS3.setBindable(ui_VerticalSpacingPlugin_102_5_$1,"modifier" , com.coremedia.ui.bem.SpacingBEMEntities.VERTICAL_SPACING_MODIFIER_200);
    config_$1.plugins = [ui_VerticalSpacingPlugin_102_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$j0hl(config_$1);
  }/*

    [Bindable]
    public var moderationContributionAdministration:ModerationContributionAdministration;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationStatisticsContainer",
      constructor: ModerationStatisticsContainer$,
      super$j0hl: function() {
        com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderationContributionAdministration: null},
      requires: [
        "Ext.form.field.Display",
        "Ext.layout.container.Auto",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase",
        "com.coremedia.ui.bem.SpacingBEMEntities",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindPropertyPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModerationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationImpl"
      ]
    };
});
