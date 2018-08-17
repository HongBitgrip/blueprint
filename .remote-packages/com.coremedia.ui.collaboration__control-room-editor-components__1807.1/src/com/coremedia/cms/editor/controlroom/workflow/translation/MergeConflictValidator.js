Ext.define("com.coremedia.cms.editor.controlroom.workflow.translation.MergeConflictValidator", function(MergeConflictValidator) {/*package com.coremedia.cms.editor.controlroom.workflow.translation {

import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cap.workflow.TaskPropertyNames;
import com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.validation.LocalIssues;
import com.coremedia.ui.data.validation.Severity;
import com.coremedia.ui.data.validation.Validator;

public class MergeConflictValidator implements Validator {
  public static const MERGE_CONFLICT:String = 'mergeConflict';
  private var mergeConflictsValueExpression:ValueExpression;

  public*/ function MergeConflictValidator$(taskValueExpression/* :ValueExpression*/) {
    this.mergeConflictsValueExpression$gc_O = taskValueExpression.extendBy(
            com.coremedia.cap.workflow.TaskPropertyNames.CONTAINING_PROCESS,
            com.coremedia.cap.workflow.ProcessPropertyNames.PROPERTIES,
            com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames.AUTO_MERGE_CONFLICTS_VARIABLE);
  }/*

  public*/ function getEntityClass()/*:Class*/ {
    return Array;
  }/*

  public*/ function validate(entity/*:**/, issues/*:LocalIssues*/)/*:void*/ {
    // this slightly unusual validator does not consider its entity, because the contents to be validated
    // are always a superset of those that have conflicts.

    var mergeConflicts/*:Array*/ = this.mergeConflictsValueExpression$gc_O.getValue();

    if (mergeConflicts && mergeConflicts.length > 0) {
      issues.addIssue(com.coremedia.ui.data.validation.Severity.WARN, MergeConflictValidator.MERGE_CONFLICT, null, mergeConflicts);
    }
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.validation.Validator"],
      mergeConflictsValueExpression$gc_O: null,
      constructor: MergeConflictValidator$,
      getEntityClass: getEntityClass,
      validate: validate,
      statics: {MERGE_CONFLICT: 'mergeConflict'},
      requires: [
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cap.workflow.TaskPropertyNames",
        "com.coremedia.cms.editor.sdk.translate.TranslationProcessVariableNames",
        "com.coremedia.ui.data.validation.Severity",
        "com.coremedia.ui.data.validation.Validator"
      ]
    };
});
