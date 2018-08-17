Ext.define("com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase", function(ProcessInfoWindowBase) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cap.common.CapTypePropertyNames;
import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessPropertyNames;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.impl.WorklistEvent;
import com.coremedia.cms.editor.sdk.components.StudioDialog;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.ComponentManager;
import ext.Ext;


public class ProcessInfoWindowBase extends StudioDialog {
  private var process:Process;
  private var processUriPath:String;
  private var workflowName:String;
  private var showWorkflowAborted:Boolean = true;

  public*/ function ProcessInfoWindowBase$(config/*:ProcessInfoWindow = null*/) {if(arguments.length<=0)config=null;
    this.process$e5eh = AS3.getBindable(config,"process");
    this.processUriPath$e5eh = this.process$e5eh.getUriPath();
    this.workflowName$e5eh = this.process$e5eh.getProperties().get("subject");

    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).addMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$e5eh"));

    this.super$e5eh(config);
  }/*

  protected*/ function abortWorkflow()/*:void*/ {var this$=this;
    com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.askAbortWorkflow(this.process$e5eh, function (abort/*:Boolean*/)/*:void*/ {
      if (abort) {
        this$.showWorkflowAborted$e5eh = false;
        this$.process$e5eh.abort();
        this$.close();
      }
    });
  }/*

  protected*/ function createAbortButtonVisibilityValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      return com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.mayAbortWorkflow(this$.process$e5eh);
    });
  }/*

  protected*/ function getTitleVE()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      var title/*:String*/ = "";
      if (this$.process$e5eh) {
        title = this$.process$e5eh.getProperties().get('subject');
        if (this$.process$e5eh.isRunning()) {
          var tasks/*:Array*/ = this$.process$e5eh.getTasks();
          if (tasks) {
            var activeTask/*:Task*/;
            tasks.forEach(function (task/*:Task*/)/*:void*/ {
              if (task.isActivated() || task.isRunning()) {
                activeTask = task;
              }
            });
            if (activeTask) {
              title = title + " (" + com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils.getTaskDefinitionDisplayNameOfTask(activeTask) + ")";
            }
          }
        }
      }
      return title;
    });
  }/*

  private*/ function maybeShowProcessAbortedWarning(message/*:Message*/)/*:void*/ {
    var workListEvent/*:WorklistEvent*/ = AS3.cast(com.coremedia.cap.workflow.impl.WorklistEvent,message.body);

    if (workListEvent.event === "taskAborted"
            &&AS3.as( workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)
            && (AS3.as(workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)).getContainingProcess()
            && (AS3.as(workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)).getContainingProcess().getUriPath() === this.processUriPath$e5eh) {

      if (this.showWorkflowAborted$e5eh) {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.showWorkflowAbortedMessage(this.workflowName$e5eh);
        this.close();
      }
    }
  }/*

  /**
   * Show the given process in an info window using the given info view.
   * @param process the process
   * @param infoPanelConfig the view configuration
   * /
  public static*/ function showProcessInfoWindow$static(process/*:Process*/, infoPanelConfig/*:WorkflowForm*/)/*:void*/ {
    com.coremedia.ui.data.ValueExpressionFactory.create(com.coremedia.cap.workflow.ProcessPropertyNames.DEFINITION + '.' + com.coremedia.cap.common.CapTypePropertyNames.NAME, process).loadValue(function (processName/*:String*/)/*:void*/ {
      var processInfoWindowCfg/*:ProcessInfoWindow*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindow,{});
      var workflowFormCfg/*:WorkflowForm*/ = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.WorkflowForm,{});
      AS3.setBindable(workflowFormCfg,"bindTo" , com.coremedia.ui.data.ValueExpressionFactory.createFromValue(process));
      AS3.setBindable(workflowFormCfg,"forceReadOnlyValueExpression" , com.coremedia.ui.data.ValueExpressionFactory.TRUE_VALUE_EXPRESSION);
      workflowFormCfg.processDefinitionName = processName;
      processInfoWindowCfg.items = [Ext.apply(workflowFormCfg, infoPanelConfig)];
      AS3.setBindable(processInfoWindowCfg,"process" , process);
      Ext.ComponentManager.create(processInfoWindowCfg).show();
    });
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).removeMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$e5eh"));

    com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.sdk.components.StudioDialog",
      process$e5eh: null,
      processUriPath$e5eh: null,
      workflowName$e5eh: null,
      showWorkflowAborted$e5eh: true,
      constructor: ProcessInfoWindowBase$,
      super$e5eh: function() {
        com.coremedia.cms.editor.sdk.components.StudioDialog.prototype.constructor.apply(this, arguments);
      },
      abortWorkflow: abortWorkflow,
      createAbortButtonVisibilityValueExpression: createAbortButtonVisibilityValueExpression,
      getTitleVE: getTitleVE,
      maybeShowProcessAbortedWarning$e5eh: maybeShowProcessAbortedWarning,
      beforeDestroy: beforeDestroy,
      statics: {showProcessInfoWindow: showProcessInfoWindow$static},
      requires: [
        "Ext",
        "Ext.ComponentManager",
        "com.coremedia.cap.common.CapTypePropertyNames",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.impl.WorklistEvent",
        "com.coremedia.cms.editor.sdk.components.StudioDialog",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindow",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils"
      ]
    };
});
