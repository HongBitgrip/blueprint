Ext.define("com.coremedia.collaboration.controlroom.rest.WorkflowSetIssues", function(WorkflowSetIssues) {/*package com.coremedia.collaboration.controlroom.rest {
import com.coremedia.ui.data.impl.LocalIssuesImpl;
import com.coremedia.ui.util.ObjectUtils;
import com.coremedia.ui.util.WithEquals;

public class WorkflowSetIssues extends LocalIssuesImpl implements WithEquals {

  public static const ERROR_CODE_INTERNAL_ERROR:String = "internalError";
  public static const INFO_CODE_EXTENDED_WORKFLOW:String = "extendedWorkflow";
  public static const WARNING_CODE_EXTENDED_WORKFLOW_EXCEEDED:String = "limitforExtendedWorkflowExceeded";
  public static const CODE_ASSIGNEES_NOT_AUTHORIZED:String = "assigneesNotAuthorized";
  //noinspection JSUnusedGlobalSymbols
  public static const ERROR_CODE_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
  //noinspection JSUnusedGlobalSymbols
  public static const ERROR_CODE_CONTENT_INVALID:String = "contentInvalid";
  //noinspection JSUnusedGlobalSymbols
  public static const ERROR_CODE_CONTENT_UNREMOVABLE_WITHDRAWAL:String = "contentUnremovableWithdrawal";

  public*/ function WorkflowSetIssues$(entity/*:**/) {
    this.super$BpVu(entity);
  }/*

  public*/ function equals(o/*:Object*/)/*:Boolean*/ {
    var that/*:WorkflowSetIssues*/ =AS3.as( o,  WorkflowSetIssues);
    return that && com.coremedia.ui.util.ObjectUtils.equal(this.getIssues(false), that.getIssues(false));
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.data.impl.LocalIssuesImpl",
      mixins: ["com.coremedia.ui.util.WithEquals"],
      constructor: WorkflowSetIssues$,
      super$BpVu: function() {
        com.coremedia.ui.data.impl.LocalIssuesImpl.prototype.constructor.apply(this, arguments);
      },
      equals: equals,
      statics: {
        ERROR_CODE_INTERNAL_ERROR: "internalError",
        INFO_CODE_EXTENDED_WORKFLOW: "extendedWorkflow",
        WARNING_CODE_EXTENDED_WORKFLOW_EXCEEDED: "limitforExtendedWorkflowExceeded",
        CODE_ASSIGNEES_NOT_AUTHORIZED: "assigneesNotAuthorized",
        ERROR_CODE_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther",
        ERROR_CODE_CONTENT_INVALID: "contentInvalid",
        ERROR_CODE_CONTENT_UNREMOVABLE_WITHDRAWAL: "contentUnremovableWithdrawal"
      },
      requires: [
        "com.coremedia.ui.data.impl.LocalIssuesImpl",
        "com.coremedia.ui.util.ObjectUtils",
        "com.coremedia.ui.util.WithEquals"
      ]
    };
});
