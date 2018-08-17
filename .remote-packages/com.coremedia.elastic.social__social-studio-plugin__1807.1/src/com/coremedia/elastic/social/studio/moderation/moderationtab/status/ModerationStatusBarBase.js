Ext.define("com.coremedia.elastic.social.studio.moderation.moderationtab.status.ModerationStatusBarBase", function(ModerationStatusBarBase) {/*package com.coremedia.elastic.social.studio.moderation.moderationtab.status {

import com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration;
import com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab;
import com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel;
import com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindow;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.StringUtil;
import ext.container.Container;
import ext.form.field.DisplayField;
import ext.toolbar.Toolbar;

[ResourceBundle('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin')]
public class ModerationStatusBarBase extends Toolbar {
  public static const MESSAGE_ID:String = "cm-elastic-social-layout-statusbar-message";
  public static const MODERATION_STATISTICS_BUTTON_ID:String = "cm-elastic-social-moderation-statistics-button";

  private var processedCounterMessageDisplayField:DisplayField;
  private var listContributionValueExpression:ValueExpression;
  private var processedCounterValueExpression:ValueExpression;
  private var moderatedContributionAdministrationImpl:ModerationContributionAdministration;

  public*/ function ModerationStatusBarBase$(config/*:ModerationStatusBar = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$Drwn(config);

    this.moderatedContributionAdministrationImpl$Drwn =AS3.as( AS3.getBindable(config,"moderation").getModerationContributionAdministration(),  com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration);
    this.listContributionValueExpression$Drwn = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
      return this$.moderatedContributionAdministrationImpl$Drwn.getModeratedItems();
    });
    this.processedCounterValueExpression$Drwn = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:uint*/ {
      return this$.moderatedContributionAdministrationImpl$Drwn.getProcessedCounter();
    });
    this.listContributionValueExpression$Drwn.addChangeListener(AS3.bind(this,"updateMessage"));
    this.processedCounterValueExpression$Drwn.addChangeListener(AS3.bind(this,"updateMessage"));

    this.mon(this.findParentByType(com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel.xtype), "activate",AS3.bind( this,"updateMessage"));
    this.mon(this.findParentByType(com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab.xtype), "activate",AS3.bind( this,"updateMessage"));
    this.updateMessage();
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    Ext.toolbar.Toolbar.prototype.onDestroy.call(this);
    this.listContributionValueExpression$Drwn.removeChangeListener(AS3.bind(this,"updateMessage"));
    this.processedCounterValueExpression$Drwn.removeChangeListener(AS3.bind(this,"updateMessage"));
  }/*

  public*/ function updateMessage()/*:void*/ {
    var moderatedItems/*:Array*/ = this.moderatedContributionAdministrationImpl$Drwn.getModeratedItems();
    if (moderatedItems) {
      var remaining/*:int*/ = moderatedItems.length;
      var message/*:String*/ = "";
      var processedCounter/*:uint*/ = this.moderatedContributionAdministrationImpl$Drwn.getProcessedCounter();
      if (processedCounter === 1) {
        message += this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'status_processed_singular');
      } else {
        message += Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'status_processed_plural'), processedCounter);
      }
      if (remaining >= 100) {
        message += " " + Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'status_remaining_more'), remaining);
      } else if (remaining === 1) {
        message += " " + this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'status_remaining_single');
      } else {
        message += " " + Ext.String.format(this.resourceManager.getString('com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin', 'status_remaining'), remaining);
      }
    }

    if (this.getProcessedCounterMessageDisplayField$Drwn()) {
      this.getProcessedCounterMessageDisplayField$Drwn().setValue(message);
      this.getProcessedCounterMessageDisplayField$Drwn().setWidth("auto");
    }
  }/*

  private*/ function getProcessedCounterMessageDisplayField()/*:DisplayField*/ {
    if (!this.processedCounterMessageDisplayField$Drwn) {
      this.processedCounterMessageDisplayField$Drwn =AS3.as( this.getComponent(ModerationStatusBarBase.MESSAGE_ID),  Ext.form.field.Display);
    }

    return this.processedCounterMessageDisplayField$Drwn;
  }/*

  public*/ function openStatistics()/*:void*/ {
    var windowCfg/*:ModerationStatisticsWindow*/ = AS3.cast(com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindow,{});
    AS3.setBindable(windowCfg,"moderationContributionAdministration" , this.moderatedContributionAdministrationImpl$Drwn);
    var statisticsWindow/*:ModerationStatisticsWindow*/ = new com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindow(windowCfg);
    statisticsWindow.expand(true);
    statisticsWindow.show();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      processedCounterMessageDisplayField$Drwn: null,
      listContributionValueExpression$Drwn: null,
      processedCounterValueExpression$Drwn: null,
      moderatedContributionAdministrationImpl$Drwn: null,
      constructor: ModerationStatusBarBase$,
      super$Drwn: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      onDestroy: onDestroy,
      updateMessage: updateMessage,
      getProcessedCounterMessageDisplayField$Drwn: getProcessedCounterMessageDisplayField,
      openStatistics: openStatistics,
      statics: {
        MESSAGE_ID: "cm-elastic-social-layout-statusbar-message",
        MODERATION_STATISTICS_BUTTON_ID: "cm-elastic-social-moderation-statistics-button"
      },
      requires: [
        "Ext.String",
        "Ext.form.field.Display",
        "Ext.toolbar.Toolbar",
        "com.coremedia.elastic.social.studio.ElasticSocialStudioPlugin_properties",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.elastic.social.studio.model.impl.ModerationContributionAdministration",
        "com.coremedia.elastic.social.studio.moderation.ElasticSocialMainTab",
        "com.coremedia.elastic.social.studio.moderation.moderationtab.ModerationPanel",
        "com.coremedia.elastic.social.studio.moderation.statistics.ModerationStatisticsWindow"
      ]
    };
});
