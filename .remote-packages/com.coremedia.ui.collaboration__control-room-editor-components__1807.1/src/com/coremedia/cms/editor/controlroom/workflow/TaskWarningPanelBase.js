Ext.define("com.coremedia.cms.editor.controlroom.workflow.TaskWarningPanelBase", function(TaskWarningPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cap.workflow.impl.TaskImpl;
import com.coremedia.cms.editor.sdk.premular.CollapsiblePanel;
import com.coremedia.ui.data.ProblemDescription;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

public class TaskWarningPanelBase extends CollapsiblePanel {
  private var warningValueExpression:ValueExpression;

  public*/ function TaskWarningPanelBase$(config/*:TaskWarningPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$3eaH(config);
  }/*

  protected*/ function getWarningValueExpression(config/*:TaskWarningPanel*/)/*:ValueExpression*/ {
    if (!this.warningValueExpression$3eaH) {
      this.warningValueExpression$3eaH = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(computeWarning$static, AS3.getBindable(config,"taskValueExpression"));
    }
    return this.warningValueExpression$3eaH;
  }/*

  private static*/ function computeWarning$static(taskValueExpression/*:ValueExpression*/)/*:ProblemDescription*/ {
    var task/*:TaskImpl*/ = taskValueExpression.getValue();

    if (!task) {
      return null;
    }

    var escalationException/*:ProblemDescription*/ = task.getEscalationException();
    if (escalationException) {
      return escalationException;
    }
    var warnings/*:Array*/ = task.getWarnings();
    if (warnings && warnings.length > 0) {
      return warnings[0];
    }
    return null;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
      warningValueExpression$3eaH: null,
      constructor: TaskWarningPanelBase$,
      super$3eaH: function() {
        com.coremedia.cms.editor.sdk.premular.CollapsiblePanel.prototype.constructor.apply(this, arguments);
      },
      getWarningValueExpression: getWarningValueExpression,
      requires: [
        "com.coremedia.cms.editor.sdk.premular.CollapsiblePanel",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
