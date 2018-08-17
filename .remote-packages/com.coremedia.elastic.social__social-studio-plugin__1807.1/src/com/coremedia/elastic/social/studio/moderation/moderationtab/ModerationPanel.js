Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel", function(ModerationPanel) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab{
import com.coremedia.elastic.social.studio.moderation.moderationtab.*;
import net.jangaroo.ext.Exml;
import ext.panel.Panel;
import com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView;
import com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileView;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView;
import ext.layout.container.CardLayout;
import ext.resizer.Splitter;
import com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsContainer;
import com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBar;
import ext.layout.container.VBoxLayout;
public class ModerationPanel extends ModerationPanelBase{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.model.Moderation;
    import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
    import com.coremedia.ui.skins.SplitterSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.moderationPanel";

    public static const DETAIL_VIEW_HEIGHT:int = 430;

    public*/function ModerationPanel$(config/*:ModerationPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase,{});
    var defaults_$1/*:ModerationPanel*/ =AS3.cast(ModerationPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    var panel_27_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_27_5_$1,"activeItem" , 0);
    panel_27_5_$1.flex = 1.0;
    panel_27_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.CARD_LAYOUT_CONTAINER_ID);
    AS3.setBindable(panel_27_5_$1,"minHeight" , ModerationPanel.DETAIL_VIEW_HEIGHT);
    var es_EmptyDetailView_32_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView,{});
    es_EmptyDetailView_32_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.EMPTY_DETAIL_VIEW_ID);
    AS3.setBindable(es_EmptyDetailView_32_9_$1,"height" , 300);
    var es_UserProfileView_34_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileView,{});
    es_UserProfileView_34_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.USER_PROFILE_VIEW_ITEM_ID);
    AS3.setBindable(es_UserProfileView_34_9_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_UserProfileView_34_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    var es_CommentView_37_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView,{});
    es_CommentView_37_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.COMMENT_VIEW_ITEM_ID);
    AS3.setBindable(es_CommentView_37_9_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_CommentView_37_9_$1,"showContributionHeader" , true);
    AS3.setBindable(es_CommentView_37_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    AS3.setBindable(es_CommentView_37_9_$1,"blacklistAdministration" , AS3.getBindable(config,"moderation").getBlacklistAdministration());
    AS3.setBindable(es_CommentView_37_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_CommentView_37_9_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.MODERATION_COMMENT_RICHTEXT_AREA_ID));
    AS3.setBindable(es_CommentView_37_9_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION));
    var es_ReviewView_45_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView,{});
    es_ReviewView_45_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.REVIEW_VIEW_ITEM_ID);
    AS3.setBindable(es_ReviewView_45_9_$1,"moderation" , AS3.getBindable(config,"moderation"));
    AS3.setBindable(es_ReviewView_45_9_$1,"showContributionHeader" , true);
    AS3.setBindable(es_ReviewView_45_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getModerationContributionAdministration());
    AS3.setBindable(es_ReviewView_45_9_$1,"blacklistAdministration" , AS3.getBindable(config,"moderation").getBlacklistAdministration());
    AS3.setBindable(es_ReviewView_45_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_ReviewView_45_9_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.MODERATION_REVIEW_RICHTEXT_AREA_ID));
    AS3.setBindable(es_ReviewView_45_9_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_MODERATION_CONTRIBUTION));
    panel_27_5_$1.items = [es_EmptyDetailView_32_9_$1, es_UserProfileView_34_9_$1, es_CommentView_37_9_$1, es_ReviewView_45_9_$1];
    var layout_Card_55_9_$1/*:ext.layout.container.CardLayout*/ =AS3.cast(Ext.layout.container.Card,{});
    AS3.setBindable(panel_27_5_$1,"layout" , layout_Card_55_9_$1);
    var splitter_58_5_$1/*:ext.resizer.Splitter*/ =AS3.cast(Ext.resizer.Splitter,{});
    AS3.setBindable(splitter_58_5_$1,"height" , "4px");
    splitter_58_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.DARK.getSkin());
    var es_ModeratedItemsContainer_60_5_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsContainer*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsContainer,{});
    es_ModeratedItemsContainer_60_5_$1.flex = 1.0;
    AS3.setBindable(es_ModeratedItemsContainer_60_5_$1,"moderationContributionAdministration" ,AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration));
    config_$1.items = [panel_27_5_$1, splitter_58_5_$1, es_ModeratedItemsContainer_60_5_$1];
    var es_ModerationStatusBar_64_5_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBar*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBar,{});
    es_ModerationStatusBar_64_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.STATUS_BAR_ID);
    AS3.setBindable(es_ModerationStatusBar_64_5_$1,"dock" , "bottom");
    es_ModerationStatusBar_64_5_$1["focusableContainer"] = false;
    AS3.setBindable(es_ModerationStatusBar_64_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    config_$1.dockedItems = [es_ModerationStatusBar_64_5_$1];
    var layout_VBox_70_5_$1/*:ext.layout.container.VBoxLayout*/ =AS3.cast(Ext.layout.container.VBox,{});
    AS3.setBindable(layout_VBox_70_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_VBox_70_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$J1TT(config_$1);
  }/*

    [Bindable]
    public var moderation:Moderation;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.moderationPanel",
      constructor: ModerationPanel$,
      super$J1TT: function() {
        com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.prototype.constructor.apply(this, arguments);
      },
      config: {moderation: null},
      statics: {DETAIL_VIEW_HEIGHT: 430},
      requires: [
        "Ext.layout.container.Card",
        "Ext.layout.container.VBox",
        "Ext.panel.Panel",
        "Ext.resizer.Splitter",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase",
        "com.coremedia.ui.skins.SplitterSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.moderateditems.ModeratedItemsContainer",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBar",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.user.UserProfileView"
      ]
    };
});
