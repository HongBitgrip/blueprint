Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartSynchronizationWorkflowPanelBase", function(DefaultStartSynchronizationWorkflowPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {
import com.coremedia.cap.user.User;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

[PublicApi]
[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class DefaultStartSynchronizationWorkflowPanelBase extends DefaultStartTranslationWorkflowPanel {

  private static const*/var START_SYNCHRONIZATION_VALIDATION_CODE$static/*:String*/ = "syncWorkflowStart";/*

  public*/ function DefaultStartSynchronizationWorkflowPanelBase$(config/*:DefaultStartSynchronizationWorkflowPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$29_7(config);
  }/*

  override protected*/ function getValidationCode()/*:String*/ {
    return START_SYNCHRONIZATION_VALIDATION_CODE$static;
  }/*

  override internal*/ function getDerivedSites(masterSite/*:Site*/, currentUser/*:User*/)/*:Array*/ {var this$=this;
    var syncSites/*:Array*/ = this.getDirectlyDerivedSyncSites(masterSite);

    var allDerivedSites/*:Array*/ = syncSites;
    syncSites.forEach(function (syncSite/*:Site*/)/*:void*/ {
      allDerivedSites = allDerivedSites.concat(this$.getDerivedSites(syncSite, currentUser));
    });
    return allDerivedSites;
  }/*

  internal*/ function getDirectlyDerivedSyncSites(masterSite/*:Site*/)/*:Array*/ {
    var derivedSites/*:Array*/ = masterSite.getDerivedSites().concat();
    return derivedSites.filter(function (site/*:Site*/)/*:Boolean*/ {
      return site.isSynchronizationTargetSite();
    });
  }/*

  override internal*/ function getSelectedSites()/*:Array*/ {
    var masterSiteId/*:String*/ = this.getRootSiteIdValueExpression().getValue();
    if (!masterSiteId) {
      return [];
    }

    var masterSite/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(masterSiteId);
    if (!masterSite) {
      return [];
    }
    return this.getDirectlyDerivedSyncSites(masterSite);
  }/*

  internal*/ function getRootSiteIdValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var contents/*:Array*/ = this$.getUserChosenContentsValueExpression().getValue();
      var masterSite/*:Site*/ = com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase.getSite(contents);
      if (masterSite) {
        return masterSite.getId();
      }
      return null;
    });
  }/*

  override public*/ function computeProcessVariableMappings(callback/*:Function*/)/*:void*/ {
    var variables/*:Object*/ = {};
    variables[com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.MASTER_CONTENT_OBJECTS_VARIABLE] = this.getMasterContents();
    variables[com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.SITE_ID_VARIABLE] = this.getRootSiteIdValueExpression().getValue();
    variables[com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.PARENT_SITE_ID_VARIABLE] = null;
    variables[com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.COMMENT_VARIABLE] = this.getNotesValueExpression().getValue();
    callback([variables]);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanel",
      metadata: {"": ["PublicApi"]},
      constructor: DefaultStartSynchronizationWorkflowPanelBase$,
      super$29_7: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanel.prototype.constructor.apply(this, arguments);
      },
      getValidationCode: getValidationCode,
      getDerivedSites: getDerivedSites,
      getDirectlyDerivedSyncSites: getDirectlyDerivedSyncSites,
      getSelectedSites: getSelectedSites,
      getRootSiteIdValueExpression: getRootSiteIdValueExpression,
      computeProcessVariableMappings: computeProcessVariableMappings,
      requires: [
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanel",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.translation.DefaultStartTranslationWorkflowPanelBase"]
    };
});
