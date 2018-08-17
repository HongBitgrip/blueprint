Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.TargetLocaleWorkflowDetailLabelBase", function(TargetLocaleWorkflowDetailLabelBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel;
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.cms.editor.sdk.sites.Site;
import com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class TargetLocaleWorkflowDetailLabelBase extends WorkflowDetailLabel {
  public*/ function TargetLocaleWorkflowDetailLabelBase$(config/*:TargetLocaleWorkflowDetailLabel = null*/) {if(arguments.length<=0)config=null;
    this.super$RCMw(config);
  }/*

  protected*/ function getTargetLocaleValueExpression(processExpression/*:ValueExpression*/)/*:ValueExpression*/ {
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
          return site.getLocale().getDisplayName();
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
      constructor: TargetLocaleWorkflowDetailLabelBase$,
      super$RCMw: function() {
        com.coremedia.cms.editor.controlroom.workflow.components.WorkflowDetailLabel.prototype.constructor.apply(this, arguments);
      },
      getTargetLocaleValueExpression: getTargetLocaleValueExpression,
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
