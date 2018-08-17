Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowDetailFormBase", function(DefaultTranslationWorkflowDetailFormBase) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.undoc.content.Content;
import com.coremedia.cap.workflow.Task;
import com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService;
import com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.validation.Issue;
import com.coremedia.ui.data.validation.Issues;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.data.validation.Validator;
import com.coremedia.ui.data.validation.Validators;
import com.coremedia.ui.data.validation.validate;

[PublicApi]
public class DefaultTranslationWorkflowDetailFormBase extends DefaultTranslationWorkflowFormBase {
  private var allIssuesValueExpression:ValueExpression;
  private var taskValueExpression:ValueExpression;
  private var runningStateValueExpression:ValueExpression;

  private var MERGE_CONFLICT_VALIDATOR:Validator;


  public*/ function DefaultTranslationWorkflowDetailFormBase$(config/*:DefaultTranslationWorkflowDetailForm = null*/) {if(arguments.length<=0)config=null;
    this.taskValueExpression$D17b = AS3.getBindable(config,"bindToTask");

    this.super$D17b(config);
    this.getRunningStateValueExpression$D17b().addChangeListener(AS3.bind(this,"onRunningStateChange$D17b"));
    this.getRunningStateValueExpression$D17b().addChangeListener(AS3.bind(this,"collectIssues$D17b"));
    this.collectIssues$D17b();

    this.MERGE_CONFLICT_VALIDATOR$D17b = new com.coremedia.ui.data.validation.Validators(
            new com.coremedia.cms.editor.controlroom.workflow.translation.MergeConflictValidator(this.taskValueExpression$D17b));
  }/*



  private*/ function collectIssues()/*:void*/ {var this$=this;
    var validationCode/*:String*/;
    if(this.getRunningStateValueExpression$D17b().getValue()){
      validationCode = 'translationWorkflowRunning';
    }else{
      validationCode = 'translationWorkflowNotRunning';
    }

    com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService.loadTranslationSetIssues(this.getDerivedContentsValueExpression().getValue(), [],
            validationCode,
            function (workflowSetIssues/*:WorkflowSetIssues*/)/*:void*/ {
              if (this$.getRunningStateValueExpression$D17b().getValue()) {
                // merge conflicts that could not be automatically resolved have to be shown somewhere - this is the place.
                var mergeIssues/*:Vector.<Issue>*/ = com.coremedia.ui.data.validation.validate([], this$.MERGE_CONFLICT_VALIDATOR$D17b);
                this$.getAllIssuesValueExpression().setValue(workflowSetIssues.getIssues(false).concat(mergeIssues));
              } else {
                this$.getAllIssuesValueExpression().setValue(workflowSetIssues.getIssues(false));
              }
            });
  }/*


  private*/ function onRunningStateChange() {
    if (this.runningStateValueExpression$D17b.getValue()) {
      // the task has been accepted and entry actions have been executed,
      // which means auto translate may have changed properties affecting other
      // contents' issues.
      // For good measure, invalidate all issues of all contents in the workflow.
      var contents/*:Array*/ = this.getDerivedContentsValueExpression().getValue();
      if (contents) {
        for/* each*/ (var $1=0;$1</* in*/ contents.length;++$1) {var content/*:Content*/ =contents[$1];
          var issues/*:Issues*/ = content.getIssues();
          if (issues) {
            issues.invalidate();
          }
        }
      }
    }
  }/*

  internal*/ function getAllIssuesValueExpression()/*:ValueExpression*/ {
    if (!this.allIssuesValueExpression$D17b) {
      this.allIssuesValueExpression$D17b = com.coremedia.ui.data.ValueExpressionFactory.createFromValue([]);
    }
    return this.allIssuesValueExpression$D17b;
  }/*


  private*/ function getRunningStateValueExpression()/*:ValueExpression*/ {var this$=this;
    return this.runningStateValueExpression$D17b ||
            (this.runningStateValueExpression$D17b = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
              var task/*:Task*/ = this$.taskValueExpression$D17b.getValue();
              if (!task) {
                return false;
              }
              return task.isRunning() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser();
            }));
  }/*

  override public*/ function isApplyButtonDisabled()/*:Boolean*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var issues/*:Array*/ = this.getAllIssuesValueExpression().getValue();
    if (issues === undefined) {
      return true;
    }
    for/* each*/ (var $1=0;$1</* in*/ issues.length;++$1) {var issue/*:Issue*/ =issues[$1];
      if (issue.severity === com.coremedia.ui.data.validation.Severity.ERROR) {
        return true;
      }
    }
    return false;
  }/*

  override protected*/ function onDestroy()/*:void*/ {
    com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.prototype.onDestroy.call(this);
    this.getRunningStateValueExpression$D17b().removeChangeListener(AS3.bind(this,"onRunningStateChange$D17b"));
  }/*
  }
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
      metadata: {"": ["PublicApi"]},
      allIssuesValueExpression$D17b: null,
      taskValueExpression$D17b: null,
      runningStateValueExpression$D17b: null,
      MERGE_CONFLICT_VALIDATOR$D17b: null,
      constructor: DefaultTranslationWorkflowDetailFormBase$,
      super$D17b: function() {
        com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase.prototype.constructor.apply(this, arguments);
      },
      collectIssues$D17b: collectIssues,
      onRunningStateChange$D17b: onRunningStateChange,
      getAllIssuesValueExpression: getAllIssuesValueExpression,
      getRunningStateValueExpression$D17b: getRunningStateValueExpression,
      isApplyButtonDisabled: isApplyButtonDisabled,
      onDestroy: onDestroy,
      requires: [
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.controlroom.workflow.translation.DefaultTranslationWorkflowFormBase",
        "com.coremedia.collaboration.controlroom.rest.TranslationSetIssuesService",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.data.validation.Validators",
        "com.coremedia.ui.data.validation.validate"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.translation.MergeConflictValidator"]
    };
});
