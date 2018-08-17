Ext.define("com.coremedia.cms.editor.controlroom.workflow.OpenWorkflowIssuesWindowButtonBase", function(OpenWorkflowIssuesWindowButtonBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cms.editor.sdk.validation.IssuesButton;

import ext.tip.QuickTipManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.ControlRoom')]
public class OpenWorkflowIssuesWindowButtonBase extends IssuesButton {

  public*/ function OpenWorkflowIssuesWindowButtonBase$(config/*:OpenWorkflowIssuesWindowButtonBase = null*/) {if(arguments.length<=0)config=null;
    this.super$qra9(config);
  }/*

  override protected*/ function afterRender()/*:void*/ {
    com.coremedia.cms.editor.sdk.validation.IssuesButton.prototype.afterRender.call(this);

    AS3.getBindable(this,"issuesVE","DUMMY").addChangeListener(AS3.bind(this,"checkIssuesLoading$qra9"));
    this.checkIssuesLoading$qra9();
    
    this.on("click", hideToolTip$static);
  }/*

  private static*/ function hideToolTip$static()/*:void*/ {
    if (Ext.tip.QuickTipManager.getQuickTip()) {
      Ext.tip.QuickTipManager.getQuickTip().hide();
    }
  }/*

  private*/ function checkIssuesLoading()/*:void*/ {
    if (AS3.getBindable(this,"issuesVE","DUMMY").getValue() === undefined) {
      this.addCssClass$qra9("cm-loading");
      this.setTooltip(this.resourceManager.getString('com.coremedia.cms.editor.controlroom.ControlRoom', 'WorkflowIssuesWindow_computingIssues_text'));
    } else {
      this.removeCssClass$qra9("cm-loading");
      this.setTooltip(this.transformDescription(AS3.getBindable(this,"issuesVE","DUMMY").getValue()));
    }
  }/*

  private*/ function addCssClass(className/*:String*/)/*:void*/ {
    if (!this.hasCls(className)) {
      this.addCls(className);
    }
  }/*

  private*/ function removeCssClass(className/*:String*/)/*:void*/ {
    if (this.hasCls(className)) {
      this.removeCls(className);
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"issuesVE","DUMMY").removeChangeListener(AS3.bind(this,"checkIssuesLoading$qra9"));
    com.coremedia.cms.editor.sdk.validation.IssuesButton.prototype.onDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.validation.IssuesButton",
      constructor: OpenWorkflowIssuesWindowButtonBase$,
      super$qra9: function() {
        com.coremedia.cms.editor.sdk.validation.IssuesButton.prototype.constructor.apply(this, arguments);
      },
      afterRender: afterRender,
      checkIssuesLoading$qra9: checkIssuesLoading,
      addCssClass$qra9: addCssClass,
      removeCssClass$qra9: removeCssClass,
      beforeDestroy: beforeDestroy,
      requires: [
        "Ext.tip.QuickTipManager",
        "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
        "com.coremedia.cms.editor.sdk.validation.IssuesButton"
      ]
    };
});
