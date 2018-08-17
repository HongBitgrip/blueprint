Ext.define("com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindowBase", function(ModerationStatisticsWindowBase) {/*package com.coremedia.elastic.social.studio.moderation.statistics {

import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;

public class ModerationStatisticsWindowBase extends StudioDialog {

  public static const MODERATION_STATISTICS_WINDOW_ID:String = "cm-elastic-social-moderation-statistics-window";
  public static const MODERATION_STATISTICS_PANEL_ITEM_ID:String = "cm-elastic-social-moderation-statistics-panel";
  public static const CLOSE_BUTTON_ID:String = "cm-elastic-social-moderation-statistics-close-button";
  public static const UPDATE_BUTTON_ID:String = "cm-elastic-social-moderation-statistics-update-button";

  private var moderationContributionAdministration:ModerationContributionAdministration;

  public*/ function ModerationStatisticsWindowBase$(config/*:ModerationStatisticsWindow = null*/) {if(arguments.length<=0)config=null;
    this.moderationContributionAdministration$8Eup = AS3.getBindable(config,"moderationContributionAdministration");
    this.super$8Eup(config);
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.moderationContributionAdministration$8Eup.getStatisticsValueExpression().setValue(null);
    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.beforeDestroy.call(this);
  }/*

  public*/ function updateStatistics()/*:void*/ {
    var moderationStatistics/*:ModerationStatisticsContainer*/ =AS3.as( this.queryById(ModerationStatisticsWindowBase.MODERATION_STATISTICS_PANEL_ITEM_ID),  com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer);
    moderationStatistics.updateStatistics();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      moderationContributionAdministration$8Eup: null,
      constructor: ModerationStatisticsWindowBase$,
      super$8Eup: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      beforeDestroy: beforeDestroy,
      updateStatistics: updateStatistics,
      statics: {
        MODERATION_STATISTICS_WINDOW_ID: "cm-elastic-social-moderation-statistics-window",
        MODERATION_STATISTICS_PANEL_ITEM_ID: "cm-elastic-social-moderation-statistics-panel",
        CLOSE_BUTTON_ID: "cm-elastic-social-moderation-statistics-close-button",
        UPDATE_BUTTON_ID: "cm-elastic-social-moderation-statistics-update-button"
      },
      requires: ["com.coremedia.cms.editor.sdk.components.StudioDialog"],
      uses: ["com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsContainer"]
    };
});
