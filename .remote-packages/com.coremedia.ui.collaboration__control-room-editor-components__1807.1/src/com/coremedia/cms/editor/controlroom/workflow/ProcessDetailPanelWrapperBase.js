Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessDetailPanelWrapperBase", function(ProcessDetailPanelWrapperBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.impl.WorklistEvent;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.panel.Panel;

use namespace SESSION;

public class ProcessDetailPanelWrapperBase extends Panel {

  private var processValueExpression:ValueExpression;
  private var backToListHandler:Function;
  private var currentProcessUriPath:String;
  private var workflowName:String;
  private var showWorkflowAborted:Boolean = true;

  private var footerDisplayedValueExpression:ValueExpression;

  public*/ function ProcessDetailPanelWrapperBase$(config/*:ProcessDetailPanelWrapper = null*/) {if(arguments.length<=0)config=null;
    this.processValueExpression$2GlD = AS3.getBindable(config,"processValueExpression");

    this.super$2GlD(config);

    this.backToListHandler$2GlD = AS3.getBindable(config,"backToListHandler");

    this.processValueExpression$2GlD.addChangeListener(AS3.bind(this,"processChanged"));

    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).addMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$2GlD"));

    this.getFooterDisplayedValueExpression$2GlD().addChangeListener(AS3.bind(this,"displayFooterToolbar$2GlD"));
    this.on("afterrender",AS3.bind( this,"displayFooterToolbar$2GlD"));
  }/*

  [ProvideToExtChildren]
  public*/ function getProcess()/*:Object*/ {
    return this.processValueExpression$2GlD.getValue();
  }/*

  public*/ function processChanged()/*:void*/ {
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, "process", undefined, this.processValueExpression$2GlD.getValue());
    var process/*:Process*/ =AS3.as( this.processValueExpression$2GlD.getValue(),  com.coremedia.cap.workflow.Process);
    if (process) {
      // Remember URI path of current process for maybeShowProcessAbortedWarning() where processValueExpression might already deliver null.
      this.currentProcessUriPath$2GlD = process.getUriPath();

      this.workflowName$2GlD = process.getProperties().get("subject");
    } else {
      this.showWorkflowAborted$2GlD = true;
      this.currentProcessUriPath$2GlD = null;
    }
  }/*

  private*/ function maybeShowProcessAbortedWarning(message/*:Message*/)/*:void*/ {
    var workListEvent/*:WorklistEvent*/ = AS3.cast(com.coremedia.cap.workflow.impl.WorklistEvent,message.body);

    if (workListEvent.event === "taskAborted"
            &&AS3.as( workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)
            && (AS3.as(workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)).getContainingProcess()
            && (AS3.as(workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)).getContainingProcess().getUriPath() === this.currentProcessUriPath$2GlD) {

      if (this.showWorkflowAborted$2GlD) {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.showWorkflowAbortedMessage(this.workflowName$2GlD);
      }
    }
  }/*

  protected*/ function abortWorkflow()/*:void*/ {var this$=this;
    var process/*:Process*/ =AS3.as( this.getProcess(),  com.coremedia.cap.workflow.Process);
    com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.askAbortWorkflow(process, function (abort/*:Boolean*/)/*:void*/ {
      if (abort) {
        this$.showWorkflowAborted$2GlD = false;
        process.abort();
        this$.backToListHandler$2GlD();
      }
    });
  }/*

  protected*/ function getMayAbortValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      return com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.mayAbortWorkflow(AS3.as(this$.getProcess(),  com.coremedia.cap.workflow.Process));
    });
  }/*

  private*/ function getFooterDisplayedValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.footerDisplayedValueExpression$2GlD) {
      var wrapper/*:ProcessDetailPanelWrapperBase*/ = this;
      this.footerDisplayedValueExpression$2GlD = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(wrapper, "process");
        if (!this$.getProcess()) {
          // no
          return false;
        } else {
          return this$.getMayAbortValueExpression().getValue();
        }
      });
    }
    return this.footerDisplayedValueExpression$2GlD;
  }/*

  private*/ function displayFooterToolbar()/*:void*/ {
    if (this.getFooterToolbar()) {
      var displayed/*:Boolean*/ = this.getFooterDisplayedValueExpression$2GlD().getValue();
      if (displayed !== undefined && displayed !== this.getFooterToolbar().isVisible()) {
        this.getFooterToolbar().setVisible(this.getFooterDisplayedValueExpression$2GlD().getValue());
      }
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.processValueExpression$2GlD.removeChangeListener(AS3.bind(this,"processChanged"));
    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).removeMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$2GlD"));
    this.getFooterDisplayedValueExpression$2GlD().removeChangeListener(AS3.bind(this,"displayFooterToolbar$2GlD"));

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      metadata: {getProcess: ["ProvideToExtChildren"]},
      processValueExpression$2GlD: null,
      backToListHandler$2GlD: null,
      currentProcessUriPath$2GlD: null,
      workflowName$2GlD: null,
      showWorkflowAborted$2GlD: true,
      footerDisplayedValueExpression$2GlD: null,
      constructor: ProcessDetailPanelWrapperBase$,
      super$2GlD: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getProcess: getProcess,
      processChanged: processChanged,
      maybeShowProcessAbortedWarning$2GlD: maybeShowProcessAbortedWarning,
      abortWorkflow: abortWorkflow,
      getMayAbortValueExpression: getMayAbortValueExpression,
      getFooterDisplayedValueExpression$2GlD: getFooterDisplayedValueExpression,
      displayFooterToolbar$2GlD: displayFooterToolbar,
      beforeDestroy: beforeDestroy,
      requires: [
        "Ext.panel.Panel",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.impl.WorklistEvent",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils"]
    };
});
