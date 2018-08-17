Ext.define("com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileView", function(UserProfileView) {/*package com.coremedia.elastic.social.studio.moderation.shared.details.user{
import com.coremedia.elastic.social.studio.moderation.shared.details.user.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.VBoxLayout;
import ext.container.Container;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer;
import com.coremedia.ui.plugins.VerticalSpacingPlugin;
import com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar;
import com.coremedia.elastic.social.studio.actions.ApproveUserAction;
import com.coremedia.elastic.social.studio.actions.RejectUserAction;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class UserProfileView extends UserProfileViewBase{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.data.ValueExpression;
    import com.coremedia.ui.data.ValueExpressionFactory;
    import com.coremedia.ui.skins.ContainerSkin;
    import com.coremedia.ui.skins.PanelSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.userProfileView";

    public*/function UserProfileView$(config/*:UserProfileView = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase,{});
    var defaults_$1/*:UserProfileView*/ =AS3.cast(UserProfileView,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.EMBEDDED.getSkin());
    var layout_VBox_39_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_39_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_39_5_$1);
    var es_UserProfileHeader_43_5_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader,{});
    es_UserProfileHeader_43_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.TOOLBAR_ITEM_ID);
    AS3.setBindable(es_UserProfileHeader_43_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    var container_45_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_45_5_$1.flex = 1.0;
    AS3.setBindable(container_45_5_$1,"scrollable" , "y");
    var es_UserProfileDetailsView_48_9_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView,{});
    es_UserProfileDetailsView_48_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.USER_DETAIL_VIEW_ITEM_ID);
    AS3.setBindable(es_UserProfileDetailsView_48_9_$1,"moderation" , AS3.getBindable(config,"moderation"));
    var container_50_9_$1/*: ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_50_9_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.ContainerSkin.GRID_200.getSkin());
    var es_UserProfileExtensionTabPanel_52_13_$1/*: com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileExtensionTabPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileExtensionTabPanel,{});
    es_UserProfileExtensionTabPanel_52_13_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.EXTENSION_TAB_PANEL_ITEM_ID);
    es_UserProfileExtensionTabPanel_52_13_$1.flex = 1.0;
    AS3.setBindable(es_UserProfileExtensionTabPanel_52_13_$1,"activeItem" , 0);
    var es_ContributionUserInformationPanel_56_17_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel,{});
    es_ContributionUserInformationPanel_56_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.META_DATA_VIEW_ITEM_ID);
    AS3.setBindable(es_ContributionUserInformationPanel_56_17_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_tab_info_title'));
    AS3.setBindable(es_ContributionUserInformationPanel_56_17_$1,"authorProvider" ,AS3.bind( this,"provideAuthor"));
    AS3.setBindable(es_ContributionUserInformationPanel_56_17_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    var es_UserContributionAnnotationContainer_60_17_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer,{});
    es_UserContributionAnnotationContainer_60_17_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.USER_ANNOTATION_CONTAINER_ITEM_ID);
    AS3.setBindable(es_UserContributionAnnotationContainer_60_17_$1,"moderationContributionAdministration" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    AS3.setBindable(es_UserContributionAnnotationContainer_60_17_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'contributiondetail_tab_info_annotation'));
    es_UserProfileExtensionTabPanel_52_13_$1.items = [es_ContributionUserInformationPanel_56_17_$1, es_UserContributionAnnotationContainer_60_17_$1];
    container_50_9_$1.items = [es_UserProfileExtensionTabPanel_52_13_$1];
    container_45_5_$1.items = [es_UserProfileDetailsView_48_9_$1, container_50_9_$1];
    var ui_VerticalSpacingPlugin_69_9_$1/*:com.coremedia.ui.plugins.VerticalSpacingPlugin*/ =AS3.cast(com.coremedia.ui.plugins.VerticalSpacingPlugin,{});
    container_45_5_$1.plugins = [ui_VerticalSpacingPlugin_69_9_$1];
    var layout_VBox_72_9_$1/*: ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_72_9_$1,"align" , "stretch");
    AS3.setBindable(container_45_5_$1,"layout" , layout_VBox_72_9_$1);
    config_$1.items = [es_UserProfileHeader_43_5_$1, container_45_5_$1];
    var es_ProcessContributionToolbar_79_5_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar,{});
    es_ProcessContributionToolbar_79_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.PROCESS_CONTRIBUTION_VIEW_ITEM_ID);
    AS3.setBindable(es_ProcessContributionToolbar_79_5_$1,"dock" , "bottom");
    es_ProcessContributionToolbar_79_5_$1["focusableContainer"] = false;
    AS3.setBindable(es_ProcessContributionToolbar_79_5_$1,"abstractContributionAdministration" , AS3.getBindable(config,"abstractContributionAdministration"));
    var es_ApproveUserAction_84_9_$1/*:com.coremedia.elastic.social.studio.actions.ApproveUserAction*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.ApproveUserAction,{});
    AS3.setBindable(es_ApproveUserAction_84_9_$1,"contributionValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                                                              AS3.getBindable(config,"abstractContributionAdministration")));
    AS3.setBindable(es_ApproveUserAction_84_9_$1,"invalidPropertyCallback" ,AS3.bind( this,"invalidPropertyCallback"));
    AS3.setBindable(es_ApproveUserAction_84_9_$1,"changesDiscardedCallback" ,AS3.bind( this,"changesDiscardedCallback"));
    AS3.setBindable(es_ProcessContributionToolbar_79_5_$1,"approveAction" , new com.coremedia.elastic.social.studio.actions.ApproveUserAction(es_ApproveUserAction_84_9_$1));
    var es_RejectUserAction_90_9_$1/*:com.coremedia.elastic.social.studio.actions.RejectUserAction*/ =AS3.cast(com.coremedia.elastic.social.studio.actions.RejectUserAction,{});
    AS3.setBindable(es_RejectUserAction_90_9_$1,"contributionValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.DISPLAYED,
                                                                              AS3.getBindable(config,"abstractContributionAdministration")));
    AS3.setBindable(es_RejectUserAction_90_9_$1,"invalidPropertyCallback" ,AS3.bind( this,"invalidPropertyCallback"));
    AS3.setBindable(es_ProcessContributionToolbar_79_5_$1,"rejectAction" , new com.coremedia.elastic.social.studio.actions.RejectUserAction(es_RejectUserAction_90_9_$1));
    config_$1.dockedItems = [es_ProcessContributionToolbar_79_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$KmEp(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;

    [Bindable]
    public var abstractContributionAdministration:AbstractContributionAdministration;

    [Bindable]
    public var collapsedValueExpression:ValueExpression;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.userProfileView",
      constructor: UserProfileView$,
      super$KmEp: function() {
        com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase.prototype.constructor.apply(this, arguments);
      },
      config: {
        moderation: null,
        abstractContributionAdministration: null,
        collapsedValueExpression: null
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.VBox",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileViewBase",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.plugins.VerticalSpacingPlugin",
        "com.coremedia.ui.skins.ContainerSkin",
        "com.coremedia.ui.skins.PanelSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.actions.ApproveUserAction",
        "com.coremedia.elastic.social.studio.actions.RejectUserAction",
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ContributionUserInformationPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.ProcessContributionToolbar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.base.UserContributionAnnotationContainer",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileDetailsView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileExtensionTabPanel",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileHeader"
      ]
    };
});
