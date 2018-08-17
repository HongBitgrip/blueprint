Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetSiteWorkflowDetailLabelBase", function(TargetSiteWorkflowDetailLabelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class TargetSiteWorkflowDetailLabelBase extends WorkflowDetailLabel {
  public*/ function TargetSiteWorkflowDetailLabelBase$(config/*:TargetSiteWorkflowDetailLabel = null*/) {if(arguments.length<=0)config=null;
    this.super$ojNj(config);
  }/*

  protected*/ function getTargetSiteValueExpression(processExpression/*:ValueExpression*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var targetSiteId/*:String*/ = processExpression.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
              com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.TARGET_SITE_ID_VARIABLE).getValue();
      if (!targetSiteId) {
        targetSiteId = processExpression.extendBy(com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
            com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.SITE_ID_VARIABLE).getValue();
      }

      if (targetSiteId) {
        var site/*:Site*/ = com.coremedia.cms.editor.sdk.editorContext.getSitesService().getSite(targetSiteId);
        if (site) {
          return site.getName();
        }
      }

      return "";
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
      constructor: TargetSiteWorkflowDetailLabelBase$,
      super$ojNj: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel.prototype.constructor.apply(this, arguments);
      },
      getTargetSiteValueExpression: getTargetSiteValueExpression,
      requires: [
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel",
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
