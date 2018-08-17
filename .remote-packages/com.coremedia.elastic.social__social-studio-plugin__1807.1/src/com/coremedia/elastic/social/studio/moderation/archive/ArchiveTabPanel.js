Ext.define("com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel", function(ArchiveTabPanel) {/*package com.coremedia.elastic.social.studio.moderation.archive{
import com.coremedia.elastic.social.studio.moderation.archive.*;
import net.jangaroo.ext.Exml;
import ext.layout.container.HBoxLayout;
import ext.container.Container;
import com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsView;
import ext.layout.container.FitLayout;
import ext.resizer.Splitter;
import ext.panel.Panel;
import com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView;
import com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView;
import com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailView;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ArchiveTabPanel extends ArchiveTabPanelBase{

    import com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames;
    import com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase;
    import com.coremedia.ui.skins.SplitterSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.archiveTabPanel";

    public*/function ArchiveTabPanel$(config/*:ArchiveTabPanel = null*/){if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase,{});
    var defaults_$1/*:ArchiveTabPanel*/ =AS3.cast(ArchiveTabPanel,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'main_tab_title_archive'));
    var es_ArchiveFilterPanel_24_5_$1/*: com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel,{});
    es_ArchiveFilterPanel_24_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.FILTER_PANEL_ITEM_ID);
    AS3.setBindable(es_ArchiveFilterPanel_24_5_$1,"contributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    AS3.setBindable(es_ArchiveFilterPanel_24_5_$1,"moderation" , AS3.getBindable(config,"moderation"));
    config_$1.tbar = es_ArchiveFilterPanel_24_5_$1;
    var layout_HBox_30_5_$1/*:ext.layout.container.HBoxLayout*/ =AS3.cast(Ext.layout.container.HBox,{});
    AS3.setBindable(layout_HBox_30_5_$1,"align" , "stretch");
    AS3.setBindable(config_$1,"layout" , layout_HBox_30_5_$1);
    var container_34_5_$1/*:ext.container.Container*/ =AS3.cast(Ext.container.Container,{});
    container_34_5_$1.flex = 1.0;
    var es_ArchivedItemsView_36_9_$1/*:com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsView,{});
    es_ArchivedItemsView_36_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.ARCHIVED_ITEMS_VIEW_ID);
    AS3.setBindable(es_ArchivedItemsView_36_9_$1,"archiveContributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    container_34_5_$1.items = [es_ArchivedItemsView_36_9_$1];
    var layout_Fit_40_9_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(container_34_5_$1,"layout" , layout_Fit_40_9_$1);
    var splitter_44_5_$1/*:ext.resizer.Splitter*/ =AS3.cast(Ext.resizer.Splitter,{});
    AS3.setBindable(splitter_44_5_$1,"width" , "4px");
    splitter_44_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.SplitterSkin.DARK.getSkin());
    var panel_50_5_$1/*:ext.panel.Panel*/ =AS3.cast(Ext.panel.Panel,{});
    AS3.setBindable(panel_50_5_$1,"layout" , "card");
    panel_50_5_$1.flex = 1.0;
    panel_50_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.ARCHIVED_SWITCHING_CONTAINER_ITEM_ID);
    AS3.setBindable(panel_50_5_$1,"activeItem" , 0);
    AS3.setBindable(panel_50_5_$1,"listeners" , {'afterrender':AS3.bind( this,"switchDetailViewOnInit")});
    var es_ArchiveDetailStatusHeader_58_9_$1/*: com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeader*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeader,{});
    es_ArchiveDetailStatusHeader_58_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.ARCHIVED_COMMENT_STATUS_HEADER_ITEM_ID);
    AS3.setBindable(es_ArchiveDetailStatusHeader_58_9_$1,"contributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    panel_50_5_$1.tbar = es_ArchiveDetailStatusHeader_58_9_$1;
    var es_EmptyDetailView_64_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView,{});
    es_EmptyDetailView_64_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.EMPTY_DETAIL_VIEW_ITEM_ID);
    var es_CommentView_66_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView,{});
    es_CommentView_66_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.COMMENT_VIEW_ITEM_ID);
    AS3.setBindable(es_CommentView_66_9_$1,"showContributionHeader" , false);
    AS3.setBindable(es_CommentView_66_9_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.ARCHIVE_COMMENT_RICHTEXT_AREA_ID));
    AS3.setBindable(es_CommentView_66_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    AS3.setBindable(es_CommentView_66_9_$1,"blacklistAdministration" , AS3.getBindable(config,"moderation").getBlacklistAdministration());
    AS3.setBindable(es_CommentView_66_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_CommentView_66_9_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_CONTRIBUTION));
    var es_ReviewView_73_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView,{});
    es_ReviewView_73_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase.REVIEW_VIEW_ITEM_ID);
    AS3.setBindable(es_ReviewView_73_9_$1,"showContributionHeader" , false);
    AS3.setBindable(es_ReviewView_73_9_$1,"richTextAreaId" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.ARCHIVE_REVIEW_RICHTEXT_AREA_ID));
    AS3.setBindable(es_ReviewView_73_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    AS3.setBindable(es_ReviewView_73_9_$1,"blacklistAdministration" , AS3.getBindable(config,"moderation").getBlacklistAdministration());
    AS3.setBindable(es_ReviewView_73_9_$1,"userAdministration" , AS3.getBindable(config,"moderation").getUserAdministration());
    AS3.setBindable(es_ReviewView_73_9_$1,"selectedProperty" ,net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames.SELECTED_ARCHIVE_CONTRIBUTION));
    var es_MultiCommentDetailView_81_9_$1/*:com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailView*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailView,{});
    es_MultiCommentDetailView_81_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.MULTI_COMMENT_DETAIL_VIEW_ITEM_ID);
    AS3.setBindable(es_MultiCommentDetailView_81_9_$1,"abstractContributionAdministration" , AS3.getBindable(config,"moderation").getArchiveContributionAdministration());
    panel_50_5_$1.items = [es_EmptyDetailView_64_9_$1, es_CommentView_66_9_$1, es_ReviewView_73_9_$1, es_MultiCommentDetailView_81_9_$1];
    config_$1.items = [container_34_5_$1, splitter_44_5_$1, panel_50_5_$1];
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$NIt3(config_$1);
  }/*}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.archiveTabPanel",
      constructor: ArchiveTabPanel$,
      super$NIt3: function() {
        com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase.prototype.constructor.apply(this, arguments);
      },
      requires: [
        "Ext.container.Container",
        "Ext.layout.container.Fit",
        "Ext.layout.container.HBox",
        "Ext.panel.Panel",
        "Ext.resizer.Splitter",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanelBase",
        "com.coremedia.ui.skins.SplitterSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ContributionAdministrationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveDetailStatusHeader",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel",
        "com.coremedia.elastic.social.studio.moderation.archive.archiveditems.ArchivedItemsView",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelBase",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.CommentView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.comments.ReviewView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.empty.EmptyDetailView",
        "com.coremedia.elastic.social.studio.moderation.shared.details.multicomment.MultiCommentDetailView"
      ]
    };
});
