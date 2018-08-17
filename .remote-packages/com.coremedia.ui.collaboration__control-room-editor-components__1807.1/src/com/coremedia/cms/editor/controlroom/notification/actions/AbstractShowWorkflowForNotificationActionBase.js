Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationActionBase", function(AbstractShowWorkflowForNotificationActionBase) {/*package com.coremedia.cms.editor.controlroom.notification.actions {
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessState;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.notification.actions.NotificationAction;
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.RemoteBeanUtil;

public class AbstractShowWorkflowForNotificationActionBase extends NotificationAction {

  //noinspection JSFieldCanBeLocal
  private const ACTION_STATE_NOT_IN_WORKFLOWS:String = "notInWorkflows";
  //noinspection JSFieldCanBeLocal
  private const ACTION_STATE_NOT_ACCESSIBLE:String = "workflowNotAccessible";

  private var isFinishedWorkflow:Boolean = false;

  public*/ function AbstractShowWorkflowForNotificationActionBase$(config/*:AbstractShowWorkflowForNotificationAction = null*/) {if(arguments.length<=0)config=null;
    this.super$8XR5(config);
    this.registerActionStateHandler(this.ACTION_STATE_EXECUTABLE,AS3.bind( this,"showWorkflow$8XR5"));
    this.registerActionStateHandler(this.ACTION_STATE_NOT_IN_WORKFLOWS$8XR5,AS3.bind( this,"notInWorkflowsWarning"));
    this.registerActionStateHandler(this.ACTION_STATE_NOT_ACCESSIBLE$8XR5,AS3.bind( this,"destroyedWarning"));
  }/*

  override protected*/ function getActionState()/*:String*/ {
    var actionState/*:String*/ = com.coremedia.cms.editor.notification.actions.NotificationAction.prototype.getActionState.call(this);

    if (actionState !== this.ACTION_STATE_EXECUTABLE) {
      return actionState;
    } else {
      return this.getActionStateInternal$8XR5();
    }
  }/*

  /**
   * Check accessibility of Notification's workflow/task
   *
   * @return
   * /
  private*/ function getActionStateInternal()/*:String*/ {
    var notification/*:Notification*/ = this.getNotification();

    // after completion, the process' tasks may not be accessible, e.g. in Finished
    var process/*:Process*/ =AS3.as( notification.getParameters()[1],  com.coremedia.cap.workflow.Process);
    var processState/*:ProcessState*/ = process && process.getProcessState();
    if (processState && (processState.isCompleted() || processState.isAborted())) {
      this.isFinishedWorkflow$8XR5 = true;
      return this.getActionStateInternalForProcess$8XR5(process);
    }

    var task/*:Task*/ =AS3.as( notification.getParameters()[0],  com.coremedia.cap.workflow.Task);
    var stateForTask/*:String*/ = task && this.getStateForTask$8XR5(task);
    if (! !stateForTask) {
      return stateForTask;
    }

    return this.getActionStateInternalForTask$8XR5(task);
  }/*

  private*/ function getActionStateInternalForTask(task/*:Task*/)/*:String*/ {
    var process/*:Process*/ = task.getContainingProcess();
    var processState/*:String*/ = this.getStateForProcess$8XR5(process);
    if (! !processState) {
      return processState;
    }
    if (!this.getTabbedWorkflowPanel().containsTask(task)) {
      return this.ACTION_STATE_NOT_IN_WORKFLOWS$8XR5;
    }
    return this.ACTION_STATE_EXECUTABLE;
  }/*

  private*/ function getStateForTask(task/*:Task*/)/*:String*/ {
    switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(task)) {
      case undefined: return undefined;
      case false: return this.ACTION_STATE_NOT_ACCESSIBLE$8XR5;
    }
    var taskDefinition/*:RemoteBean*/ = AS3.cast(com.coremedia.ui.data.RemoteBean,task.getDefinition());
    switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(taskDefinition)) {
      case undefined: return undefined;
      case false: return this.ACTION_STATE_NOT_ACCESSIBLE$8XR5;
    }

    return null;
  }/*

  private*/ function getActionStateInternalForProcess(process/*:Process*/)/*:String*/ {
    var processState/*:String*/ = this.getStateForProcess$8XR5(process);
    if (! !processState) {
      return processState;
    }
    if (!this.getTabbedWorkflowPanel().containsProcess(process)) {
      return this.ACTION_STATE_NOT_IN_WORKFLOWS$8XR5;
    }
    return this.ACTION_STATE_EXECUTABLE;
  }/*

  private*/ function getStateForProcess(process/*:Process*/)/*:String*/ {
    switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(process)) {
      case undefined: return undefined;
      case false: return this.ACTION_STATE_NOT_ACCESSIBLE$8XR5;
    }
    var processDefinition/*:RemoteBean*/ = AS3.cast(com.coremedia.ui.data.RemoteBean,process.getDefinition());
    switch (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(processDefinition)) {
      case undefined: return undefined;
      case false: return this.ACTION_STATE_NOT_ACCESSIBLE$8XR5;
    }

    return null;
  }/*

  private*/ function showWorkflow()/*:void*/ {
    var notification/*:Notification*/ = this.getNotification();
    if (!this.isFinishedWorkflow$8XR5) {
      var task/*:Task*/ =AS3.as( notification.getParameters()[0],  com.coremedia.cap.workflow.Task);
      this.showTask$8XR5(task);
    } else {
      var process/*:Process*/ =AS3.as( notification.getParameters()[1],  com.coremedia.cap.workflow.Process);
      this.showProcess$8XR5(process);
    }
  }/*

  private*/ function showTask(task/*:Task*/)/*:void*/ {
    if (task) {
      this.getTabbedWorkflowPanel(true).switchToTaskInWorkflowPanel(task);
    }
  }/*

  private*/ function showProcess(process/*:Process*/)/*:void*/ {
    if (process) {
      this.getTabbedWorkflowPanel(true).switchToProcessInWorkflowPanel(process);
    }
  }/*

  internal*/ function getTabbedWorkflowPanel(show/*:Boolean = false*/)/*:TabbedWorkflowPanel*/ {if(arguments.length<=0)show=false;
    throw new AS3.Error("Abstract Method!");
  }/*

  internal*/ function notInWorkflowsWarning()/*:void*/ {
    throw new AS3.Error("Abstract Method!");
  }/*

  internal*/ function destroyedWarning()/*:void*/ {
    throw new AS3.Error("Abstract Method!");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.actions.NotificationAction",
      ACTION_STATE_NOT_IN_WORKFLOWS$8XR5: "notInWorkflows",
      ACTION_STATE_NOT_ACCESSIBLE$8XR5: "workflowNotAccessible",
      isFinishedWorkflow$8XR5: false,
      constructor: AbstractShowWorkflowForNotificationActionBase$,
      super$8XR5: function() {
        com.coremedia.cms.editor.notification.actions.NotificationAction.prototype.constructor.apply(this, arguments);
      },
      getActionState: getActionState,
      getActionStateInternal$8XR5: getActionStateInternal,
      getActionStateInternalForTask$8XR5: getActionStateInternalForTask,
      getStateForTask$8XR5: getStateForTask,
      getActionStateInternalForProcess$8XR5: getActionStateInternalForProcess,
      getStateForProcess$8XR5: getStateForProcess,
      showWorkflow$8XR5: showWorkflow,
      showTask$8XR5: showTask,
      showProcess$8XR5: showProcess,
      getTabbedWorkflowPanel: getTabbedWorkflowPanel,
      notInWorkflowsWarning: notInWorkflowsWarning,
      destroyedWarning: destroyedWarning,
      requires: [
        "AS3.Error",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cms.editor.notification.actions.NotificationAction",
        "com.coremedia.ui.data.RemoteBean",
        "com.coremedia.ui.data.RemoteBeanUtil"
      ]
    };
});
