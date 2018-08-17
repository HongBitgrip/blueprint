Ext.define("com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab", function(ElasticSocialMainTab) {/*package com.coremedia.elastic.social.studio.moderation{
import com.coremedia.elastic.social.studio.moderation.*;
import net.jangaroo.ext.Exml;
import ext.tab.TabPanel;
import com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanel;
import com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel;
import com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbar;
import ext.layout.container.FitLayout;

    [ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
    [ResourceBundle('com.coremedia.icons.CoreIcons')]
public class ElasticSocialMainTab extends ElasticSocialMainTabBase{

    import com.coremedia.elastic.social.studio.model.ModerationPropertyNames;
    import com.coremedia.elastic.social.studio.model.impl.AbstractContributionAdministration;
    import com.coremedia.ui.skins.PanelSkin;
    import com.coremedia.ui.skins.TabBarSkin;

    public static const xtype:String = "com.coremedia.elastic.social.studio.config.elasticSocialMainTab";

    public*/function ElasticSocialMainTab$(config/*:ElasticSocialMainTab = null*/){var this$=this;if(arguments.length<=0)config=null;
    var config_$1/*: com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase,{});
    var defaults_$1/*:ElasticSocialMainTab*/ =AS3.cast(ElasticSocialMainTab,{});
    config = net.jangaroo.ext.Exml.apply(defaults_$1,config);
    AS3.setBindable(config_$1,"title" , this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'elastic_social_tab_title'));
    AS3.setBindable(config_$1,"closable" , true);
    config_$1["id"] = com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ID;
    AS3.setBindable(config_$1,"iconCls" ,net.jangaroo.ext.Exml.asString( this.resourceManager.getString('com.coremedia.icons.CoreIcons', 'moderation')));
    config_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ID);
    config_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.PanelSkin.FRAME.getSkin());
    var tabPanel_35_5_$1/*:ext.tab.TabPanel*/ =AS3.cast(Ext.tab.Panel,{});
    tabPanel_35_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.TAB_PANEL_ITEM_ID);
    tabPanel_35_5_$1.ui =net.jangaroo.ext.Exml.asString( com.coremedia.ui.skins.TabBarSkin.WORKAREA_PANEL);
    AS3.setBindable(tabPanel_35_5_$1,"activeTab" , 0);
    var es_ModerationTabPanel_39_9_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanel,{});
    es_ModerationTabPanel_39_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ES_MODERATION_TAB_PANEL_ITEM_ID);
    es_ModerationTabPanel_39_9_$1["id"] = "moderationTabId";
    AS3.setBindable(es_ModerationTabPanel_39_9_$1,"moderation" , com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration());
    AS3.setBindable(es_ModerationTabPanel_39_9_$1,"listeners" , {'activate': function()/*:void*/ {
                                    var moderationContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration().getModerationContributionAdministration();
                                    moderationContributionAdministration.startPolling();
                                    com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration().set(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.ACTIVE_CONTRIBUTION_ADMINISTRATION, moderationContributionAdministration);
                                    this$.getActiveTabValueExpression().setValue(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ACTIVE_TAB_MODERATION);
                                    }
                                 });
    var es_ArchiveTabPanel_49_9_$1/*:com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel,{});
    es_ArchiveTabPanel_49_9_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ES_ARCHIVE_TAB_PANEL_ITEM_ID);
    AS3.setBindable(es_ArchiveTabPanel_49_9_$1,"moderation" , com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration());
    AS3.setBindable(es_ArchiveTabPanel_49_9_$1,"listeners" , {'activate': function()/*:void*/ {
                                com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration().getModerationContributionAdministration().pausePolling();
                                var archiveContributionAdministration/*:AbstractContributionAdministration*/ = com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration().getArchiveContributionAdministration();
                                archiveContributionAdministration.startPolling();
                                archiveContributionAdministration.pausePolling();
                                com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration().set(com.coremedia.elastic.social.studio.model.ModerationPropertyNames.ACTIVE_CONTRIBUTION_ADMINISTRATION, archiveContributionAdministration);
                                this$.getActiveTabValueExpression().setValue(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ACTIVE_TAB_ARCHIVE);
                                }
                              });
    tabPanel_35_5_$1.items = [es_ModerationTabPanel_39_9_$1, es_ArchiveTabPanel_49_9_$1];
    config_$1.items = [tabPanel_35_5_$1];
    var es_ModerationPanelToolbar_64_5_$1/*:com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbar*/ =AS3.cast(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbar,{});
    es_ModerationPanelToolbar_64_5_$1.itemId =net.jangaroo.ext.Exml.asString( com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.TOOLBAR_ITEM_ID);
    AS3.setBindable(es_ModerationPanelToolbar_64_5_$1,"collapseHandler" , AS3.getBindable(config,"collapseHandler"));
    AS3.setBindable(es_ModerationPanelToolbar_64_5_$1,"height" , com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.ELASTIC_SOCIAL_START_TAB_TOOLBAR_HEIGHT);
    AS3.setBindable(es_ModerationPanelToolbar_64_5_$1,"moderation" , com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.getModeration());
    AS3.setBindable(es_ModerationPanelToolbar_64_5_$1,"activeTabValueExpression" , this.getActiveTabValueExpression());
    config_$1.tbar = es_ModerationPanelToolbar_64_5_$1;
    var layout_Fit_71_5_$1/*:ext.layout.container.FitLayout*/ =AS3.cast(Ext.layout.container.Fit,{});
    AS3.setBindable(config_$1,"layout" , layout_Fit_71_5_$1);
    net.jangaroo.ext.Exml.apply(config_$1,config);
    this.super$CKey(config_$1);
  }/*

    /** The function that will be called on collapse * /
    [Bindable]
    public var collapseHandler:Function;}}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase",
      alias: "widget.com.coremedia.elastic.social.studio.config.elasticSocialMainTab",
      constructor: ElasticSocialMainTab$,
      super$CKey: function() {
        com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase.prototype.constructor.apply(this, arguments);
      },
      config: {collapseHandler: null},
      requires: [
        "Ext.layout.container.Fit",
        "Ext.tab.Panel",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTabBase",
        "com.coremedia.icons.CoreIcons_properties",
        "com.coremedia.ui.skins.PanelSkin",
        "com.coremedia.ui.skins.TabBarSkin",
        "net.jangaroo.ext.Exml"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.ModerationPropertyNames",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanelToolbar",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationTabPanel"
      ]
    };
});
