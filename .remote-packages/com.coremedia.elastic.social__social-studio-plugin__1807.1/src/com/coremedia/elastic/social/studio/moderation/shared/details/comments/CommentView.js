Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView", function(CommentView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.comments{
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer;
import com.coremedia.ui.plugins.BindVisibilityPlugin;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.panel.Panel;
import ext.layout.container.FitLayout;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar;
import com.coremedia.elastic.social.studio.actions.ApproveCommentAction;
import com.coremedia.elastic.social.studio.actions.RejectCommentAction;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class CommentView extends CommentViewBase{

    import com.coremedia.elastic.social.studio.model.BlacklistAdministration;
    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.UserAdministration;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.DisplayFieldSkin;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.ToolbarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.commentView";

    public static const CENTER_CONTAINER_ITEM_ID:String = "center-container";

    public*/function CommentView$(config/*:CommentView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase,{});
    var defaults_$1/*:CommentView*/ =AS3.cast(CommentView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    var layout_VBox_56_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_56_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_56_5_$1);
    var es_ContributionStatusContainer_61_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer,{});
    es_ContributionStatusContainer_61_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.STATUS_VIEW_ID);
    AS3.setBindable(es_ContributionStatusContainer_61_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    var ui_BindVisibilityPlugin_64_9_$1/*:com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_64_9_$1.bindTo = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(AS3.getBindable(config,"showContributionHeader"));
    es_ContributionStatusContainer_61_5_$1.plugins = [ui_BindVisibilityPlugin_64_9_$1];
    es_ContributionStatusContainer_61_5_$1["plugins$at"] = net.jangaroo.ext.Exml.APPEND;
    var container_67_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_67_5_$1.itemId =net.jangaroo.ext.Exml.asString( CommentView.CENTER_CONTAINER_ITEM_ID);
    container_67_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    container_67_5_$1.flex = 1.0;
    AS3.setBindable(container_67_5_$1,"scrollable" , "y");
    var displayField_72_9_$1/*:ext.form.field.DisplayField*/ =AS3.cast(Ext.form.field.Display,{});
    displayField_72_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.DisplayFieldSkin.BOLD.getSkin());
    AS3.setBindable(displayField_72_9_$1,"value" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin','userdetail_details_title'));
    var panel_74_9_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_74_9_$1,"minHeight" , 150.0);
    panel_74_9_$1.flex = 1.0;
    panel_74_9_$1.header = false;
    var es_CommentToolbar_78_13_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbar*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbar,{});
    es_CommentToolbar_78_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.TOOLBAR_ITEM_ID);
    es_CommentToolbar_78_13_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ToolbarSkin.FIELD.getSkin());
    AS3.setBindable(es_CommentToolbar_78_13_$1,"abstractContribution" , AS3.getBindable(config,"abstractContributionAdministration"));
    AS3.setBindable(es_CommentToolbar_78_13_$1,"blacklistAdministration" , AS3.getBindable(config,"blacklistAdministration"));
    AS3.setBindable(es_CommentToolbar_78_13_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"richTextAreaId")));
    panel_74_9_$1.tbar = es_CommentToolbar_78_13_$1;
    var es_CommentRichtextArea_85_13_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextArea*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextArea,{});
    es_CommentRichtextArea_85_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.RICHTEXT_AREA_ITEM_ID);
    es_CommentRichtextArea_85_13_$1["id"] = AS3.getBindable(config,"richTextAreaId");
    AS3.setBindable(es_CommentRichtextArea_85_13_$1,"abstractContribution" , AS3.getBindable(config,"abstractContributionAdministration"));
    AS3.setBindable(es_CommentRichtextArea_85_13_$1,"blacklistAdministration" , AS3.getBindable(config,"blacklistAdministration"));
    AS3.setBindable(es_CommentRichtextArea_85_13_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( AS3.getBindable(config,"selectedProperty")));
    panel_74_9_$1.items = [es_CommentRichtextArea_85_13_$1];
    var layout_Fit_92_13_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(panel_74_9_$1,"layout" , layout_Fit_92_13_$1);
    var es_AttachmentPanel_95_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel,{});
    es_AttachmentPanel_95_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.ATTACHMENT_CONTAINER_ITEM_ID);
    AS3.setBindable(es_AttachmentPanel_95_9_$1,"contributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    var ui_BindVisibilityPlugin_98_13_$1/*: com.coremedia.ui.plugins.BindVisibilityPlugin*/ =AS3.cast(com.coremedia.ui.plugins.BindVisibilityPlugin,{});
    ui_BindVisibilityPlugin_98_13_$1.bindTo = this.getVisibleExp();
    es_AttachmentPanel_95_9_$1.plugins = [ui_BindVisibilityPlugin_98_13_$1];
    var es_CommentExtensionTabPanel_102_9_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentExtensionTabPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentExtensionTabPanel,{});
    es_CommentExtensionTabPanel_102_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.EXTENSION_TAB_PANEL_ITEM_ID);
    AS3.setBindable(es_CommentExtensionTabPanel_102_9_$1,"activeItem" , 0);
    AS3.setBindable(es_CommentExtensionTabPanel_102_9_$1,"minHeight" , 180.0);
    es_CommentExtensionTabPanel_102_9_$1.flex = 1.0;
    var es_CommentMetaDataPanel_107_13_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel,{});
    es_CommentMetaDataPanel_107_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.META_DATA_VIEW_ITEM_ID);
    AS3.setBindable(es_CommentMetaDataPanel_107_13_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_tab_info_title'));
    AS3.setBindable(es_CommentMetaDataPanel_107_13_$1,"contributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    AS3.setBindable(es_CommentMetaDataPanel_107_13_$1,"userAdministration" , AS3.getBindable(config,"userAdministration"));
    AS3.setBindable(es_CommentMetaDataPanel_107_13_$1,"authorProvider" ,AS3.bind( this,"provideAuthor"));
    var es_UserContributionAnnotationContainer_112_13_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer,{});
    es_UserContributionAnnotationContainer_112_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.USER_ANNOTATION_CONTAINER_ITEM_ID);
    AS3.setBindable(es_UserContributionAnnotationContainer_112_13_$1,"moderationContributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    AS3.setBindable(es_UserContributionAnnotationContainer_112_13_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_tab_info_annotation'));
    var es_CuratedContentPanel_115_13_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel,{});
    es_CuratedContentPanel_115_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.CURATED_CONTENT_PANEL_ITEM_ID);
    AS3.setBindable(es_CuratedContentPanel_115_13_$1,"abstractContribution" , AS3.getBindable(config,"abstractContributionAdministration"));
    es_CommentExtensionTabPanel_102_9_$1.items = [es_CommentMetaDataPanel_107_13_$1, es_UserContributionAnnotationContainer_112_13_$1, es_CuratedContentPanel_115_13_$1];
    container_67_5_$1.items = [displayField_72_9_$1, panel_74_9_$1, es_AttachmentPanel_95_9_$1, es_CommentExtensionTabPanel_102_9_$1];
    var ui_VerticalSpacingPlugin_121_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_67_5_$1.plugins = [ui_VerticalSpacingPlugin_121_9_$1];
    var layout_VBox_124_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_124_9_$1,"align" , "stretch");
    AS3.setBindable(container_67_5_$1,"layout" , layout_VBox_124_9_$1);
    config_$1.items = [es_ContributionStatusContainer_61_5_$1, container_67_5_$1];
    var es_ProcessContributionToolbar_131_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar,{});
    es_ProcessContributionToolbar_131_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.PROCESS_CONTRIBUTION_VIEW_ITEM_ID);
    AS3.setBindable(es_ProcessContributionToolbar_131_5_$1,"dock" , "bottom");
    es_ProcessContributionToolbar_131_5_$1["focusableContainer"] = false;
    AS3.setBindable(es_ProcessContributionToolbar_131_5_$1,"abstractContributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    var es_ApproveCommentAction_136_9_$1/*:com.coremedia.elastic.social.studio.actions.ApproveCommentAction*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ApproveCommentAction,{});
    AS3.setBindable(es_ApproveCommentAction_136_9_$1,"contributionValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                                                                  AS3.getBindable(config,"abstractContributionAdministration")));
    AS3.setBindable(es_ProcessContributionToolbar_131_5_$1,"approveAction" , new com.coremedia.elastic.social.studio.actions.ApproveCommentAction(es_ApproveCommentAction_136_9_$1));
    var es_RejectCommentAction_140_9_$1/*:com.coremedia.elastic.social.studio.actions.RejectCommentAction*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.RejectCommentAction,{});
    AS3.setBindable(es_RejectCommentAction_140_9_$1,"contributionValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                                                                  AS3.getBindable(config,"abstractContributionAdministration")));
    AS3.setBindable(es_ProcessContributionToolbar_131_5_$1,"rejectAction" , new com.coremedia.elastic.social.studio.actions.RejectCommentAction(es_RejectCommentAction_140_9_$1));
    config_$1.dockedItems = [es_ProcessContributionToolbar_131_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$x85T(config_$1);
  }/*

    [Bindable]
    public var abstractContributionAdministration:AbstractContributionAdministration;

    [Bindable]
    public var blacklistAdministration:BlacklistAdministration;

    [Bindable]
    public var userAdministration:UserAdministration;

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var richTextAreaId:String;


    [Bindable]
    public var selectedProperty:String;


    [Bindable]
    public var richtextContainerHeight:int;


    [Bindable]
    public var showContributionHeader:Boolean;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.commentView",
      constructor: CommentView$,
      super$x85T: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        abstractContributionAdministration: null,
        blacklistAdministration: null,
        userAdministration: null,
        moderation: null,
        richTextAreaId: null,
        selectedProperty: null,
        richtextContainerHeight: 0,
        showContributionHeader: false
      },
      statics: {CENTER_CONTAINER_ITEM_ID: "center-container"},
      requires: [
        "Ext.container.Container",
        "Ext.form.field.Display",
        "Ext.layout.container.Fit",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentViewBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.BindVisibilityPlugin",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.DisplayFieldSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.ToolbarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.actions.ApproveCommentAction",
        "com.coremedia.elastic.social.studio.actions.RejectCommentAction",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionStatusContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentExtensionTabPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentMetaDataPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentRichtextArea",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentToolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CuratedContentPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.attachment.AttachmentPanel"
      ]
    };
});
