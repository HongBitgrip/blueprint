Ext.define("com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainerBase", function(ModerationStatisticsContainerBase) {/*package com.coremedia.elastic.social.studio.moderation.statistics {
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;

import ext.container.Container;

public class ModerationStatisticsContainerBase extends Container {
  protected static const USERS_TO_MODERATE_FIELD_ID:String = "cm-elastic-social-users-statistic-information-to-moderate";
  protected static const USERS_ACTIVATED_FIELD_ID:String = "cm-elastic-social-users-statistic-information-activated";
  protected static const COMMENTS_TO_MODERATE_FIELD_ID:String = "cm-elastic-social-comments-statistic-information-to-moderate";
  protected static const COMMENTS_ONLINE_FIELD_ID:String = "cm-elastic-social-comments-statistic-information-moderated";

  private var moderationContributionAdministration:ModerationContributionAdministration;

  public*/ function ModerationStatisticsContainerBase$(config/*:ModerationStatisticsContainer = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministration$vdPW = AS3.getBindable(config,"moderationContributionAdministration");
    this.updateStatistics();
    this.super$vdPW(config);
  }/*

  public*/ function updateStatistics()/*:void*/ {
    this.moderationContributionAdministration$vdPW.updateModerationStatistics();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      moderationContributionAdministration$vdPW: null,
      constructor: ModerationStatisticsContainerBase$,
      super$vdPW: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      updateStatistics: updateStatistics,
      statics: {
        USERS_TO_MODERATE_FIELD_ID: "cm-elastic-social-users-statistic-information-to-moderate",
        USERS_ACTIVATED_FIELD_ID: "cm-elastic-social-users-statistic-information-activated",
        COMMENTS_TO_MODERATE_FIELD_ID: "cm-elastic-social-comments-statistic-information-to-moderate",
        COMMENTS_ONLINE_FIELD_ID: "cm-elastic-social-comments-statistic-information-moderated"
      },
      requires: ["Ext.container.Container"]
    };
});
