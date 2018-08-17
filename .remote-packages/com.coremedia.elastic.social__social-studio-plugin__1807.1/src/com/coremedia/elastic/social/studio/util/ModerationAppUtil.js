Ext.define("com.coremedia.elastic.social.studio.util.ModerationAppUtil", function(ModerationAppUtil) {/*package com.coremedia.elastic.social.studio.util {
import com.coremedia.cms.editor.sdk.actions.OpenTabAction;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.elastic.social.studio.model.Contribution;
import com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab;
import com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel;
import com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel;

import ext.tab.TabPanel;

public class ModerationAppUtil {

  public static*/ function showContributionInArchive$static(contribution/*:Contribution*/)/*:void*/ {
    var workArea/*:TabPanel*/ = com.coremedia.cms.editor.sdk.editorContext.getWorkArea();

    if (!workArea.getActiveTab() || workArea.getActiveTab().xtype !== com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab.xtype) {
      workArea.mon(workArea, "tabchange", function waitForElasticSocialMainTab()/*:void*/ {
        if (workArea.getActiveTab() && workArea.getActiveTab().xtype === com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab.xtype) {
          workArea.mun(workArea, "tabchange", waitForElasticSocialMainTab);
          openArchiveWithContribution$static(contribution);
        }
      });

      var openTabActConfig/*:OpenTabAction*/ = AS3.cast(com.coremedia.cms.editor.sdk.actions.OpenTabAction,{});
      AS3.setBindable(openTabActConfig,"tab" , AS3.cast(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab,{}));
      AS3.setBindable(openTabActConfig,"singleton" , true);
      var openTabAct/*:OpenTabAction*/ = new com.coremedia.cms.editor.sdk.actions.OpenTabAction(openTabActConfig);
      openTabAct.execute();
    } else {
      openArchiveWithContribution$static(contribution);
    }
  }/*

  private static*/ function openArchiveWithContribution$static(contribution/*:Contribution*/)/*:void*/ {
    var elasticSocialMainTab/*:ElasticSocialMainTab*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab);
    var elasticSocialTabPanel/*:TabPanel*/ =AS3.as( elasticSocialMainTab.queryById("tab-panel"),  Ext.tab.Panel);

    if (elasticSocialTabPanel.getActiveTab().xtype !== com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel.xtype) {
      elasticSocialTabPanel.mon(elasticSocialTabPanel, "tabchange", function waitForArchiveTab()/*:void*/ {
        elasticSocialTabPanel.mun(elasticSocialTabPanel, "tabchange", waitForArchiveTab);
        showContribution$static(contribution);
      });
      elasticSocialTabPanel.setActiveTab(1);
    } else {
      showContribution$static(contribution);
    }
  }/*

  private static*/ function showContribution$static(contribution/*:Contribution*/)/*:void*/ {
    var elasticSocialMainTab/*:ElasticSocialMainTab*/ =AS3.as( com.coremedia.cms.editor.sdk.editorContext.getWorkArea().getActiveTab(),  com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab);
    var archiveFilterPanel/*:ArchiveFilterPanel*/ =AS3.as( elasticSocialMainTab.queryById("filter-panel"),  com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel);

    archiveFilterPanel.showContribution(contribution);
  }/*
}*/function ModerationAppUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ModerationAppUtil$,
      statics: {showContributionInArchive: showContributionInArchive$static},
      requires: [
        "Ext.tab.Panel",
        "com.coremedia.cms.editor.sdk.actions.OpenTabAction",
        "com.coremedia.cms.editor.sdk.editorContext"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveFilterPanel",
        "com.coremedia.elastic.social.studio.moderation.archive.ArchiveTabPanel"
      ]
    };
});
