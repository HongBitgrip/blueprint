Ext.define("com.coremedia.cap.workflow.impl.TaskImpl", function(TaskImpl) {/*package com.coremedia.cap.workflow.impl {

import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.data.ProblemDescription;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;

[RestResource(uriTemplate="workflow/task/{process:[0-9]+}/{id:[0-9]+}")]
/**
 * Task is a REST representation of the Unified API Task.
 * It implements a subset of the Unified API features by now.
 * /
public class TaskImpl extends WorkflowObjectImpl implements Task {

  /**
   * Property field of Bean which contains the uri appendix to access complete()
   * /
  private static const*/var COMPLETE_URI$static/*:String*/ = 'completeUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access accept()
   * /
  private static const*/var ACCEPT_URI$static/*:String*/ = 'acceptUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access reject()
   * /
  private static const*/var REJECT_URI$static/*:String*/ = 'rejectUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access skip()
   * /
  private static const*/var SKIP_URI$static/*:String*/ = 'skipUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access cancel()
   * /
  private static const*/var CANCEL_URI$static/*:String*/ = 'cancelUri';function static$0(){

  com.coremedia.ui.logging.Logger.debug("loading TaskState: " + com.coremedia.cap.workflow.TaskState.values);}/*

  private var numericId:int;
  private var numericProcessId:int;

  public*/ function TaskImpl$(path/*:String*/, vars/*:Object*/) {
    var id/*:**/ = vars['id'];
    var processId/*:**/ = vars['process'];
    this.numericId$4zDM =AS3.is( id,  Number) ? id : parseInt(id);
    this.numericProcessId$4zDM =AS3.is( processId,  Number) ? processId : parseInt(processId);

    this.super$4zDM(path);

    this.setId("coremedia:///cap/task/" + this.numericProcessId$4zDM + "/" + this.numericId$4zDM);
  }/*

  override protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    var state/*:TaskState*/ = newValues[com.coremedia.cap.workflow.TaskPropertyNames.TASK_STATE];

    // Compute implied properties.
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.ABORTED] = state.isAborted();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.ESCALATED] = state.isEscalated();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.OPEN] = state.isOpen();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.CLOSED] = state.isClosed();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.NOT_STARTED] = state.isNotStarted();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.RUNNING] = state.isRunning();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.NOT_RUNNING] = state.isNotRunning();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.SUSPENDED] = state.isSuspended();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.COMPLETING] = state.isCompleting();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.COMPLETED] = state.isCompleted();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.ACCEPTED] = state.isAccepted() || state.isSuspended() && newValues[com.coremedia.cap.workflow.TaskPropertyNames.SUSPENDED_STATE].isAccepted();
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.WAITING] = state === com.coremedia.cap.workflow.TaskState.WAITING;
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.ACTIVATED] = state == com.coremedia.cap.workflow.TaskState.ACTIVATED;
    newValues[com.coremedia.cap.workflow.TaskPropertyNames.SKIPPED] = state === com.coremedia.cap.workflow.TaskState.SKIPPED;

    return com.coremedia.cap.workflow.impl.WorkflowObjectImpl.prototype.processReadResult.call(this,newValues);
  }/*

  /**
   * Return the numeric ID of this task.
   * <p><b>Note:</b> Always use <code>getUriPath()</code> to externalize a task,
   * @return the numeric ID of this task
   *
   * @see #getUriPath()
   * /
  public*/ function getNumericId()/*:uint*/ {
    return this.numericId$4zDM;
  }/*

  /**
   * Return the numeric ID of this task's containing process.
   * @return the numeric ID of this task's containing process
   * /
  public*/ function getNumericProcessId()/*:uint*/ {
    return this.numericProcessId$4zDM;
  }/*

  public*/ function getContainingProcess()/*:Process*/ {
    var pathSegments/*:Array*/ = this.getUriPath().split("/");
    var processId/*:String*/ = pathSegments[pathSegments.length - 2];
    return AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean("workflow/process/" + processId),  com.coremedia.cap.workflow.Process);
  }/*

  private*/ function isOfType(expectedType/*:TaskDefinitionType*/)/*:Boolean*/ {
    var definition/*:TaskDefinition*/ = this.getDefinition();
    if (!definition) {
      return undefined;
    }
    var taskDefinitionType/*:TaskDefinitionType*/ = definition.getType();
    if (!taskDefinitionType) {
      return undefined;
    }
    return taskDefinitionType === expectedType;
  }/*

  public*/ function isAutomatedTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.AUTOMATED);
  }/*

  public*/ function isUserTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.USER);
  }/*

  public*/ function isChoiceTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.CHOICE);
  }/*

  public*/ function isSwitchTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.SWITCH);
  }/*

  public*/ function isIfTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.IF);
  }/*

  public*/ function isForkTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.FORK);
  }/*

  public*/ function isJoinTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.JOIN);
  }/*

  public*/ function isForkSubprocessTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.FORK_SUBPROCESS);
  }/*

  public*/ function isJoinSubprocessTask()/*:Boolean*/ {
    return this.isOfType$4zDM(com.coremedia.cap.workflow.TaskDefinitionType.JOIN_SUBPROCESS);
  }/*

  public*/ function getTaskState()/*:TaskState*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.TASK_STATE);
  }/*

  public*/ function getSuspendedState()/*:TaskState*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.SUSPENDED_STATE);
  }/*

  public*/ function isAborted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.ABORTED);
  }/*

  public*/ function isEscalated()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.ESCALATED);
  }/*

  public*/ function isOpen()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.OPEN);
  }/*

  public*/ function isClosed()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.CLOSED);
  }/*

  public*/ function isNotStarted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.NOT_STARTED);
  }/*

  public*/ function isRunning()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.RUNNING);
  }/*

  public*/ function isNotRunning()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.NOT_RUNNING);
  }/*

  public*/ function isTaskSuspended()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.SUSPENDED);
  }/*

  public*/ function isCompleting()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.COMPLETING);
  }/*

  public*/ function isCompleted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.COMPLETED);
  }/*

  public*/ function isAccepted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.ACCEPTED);
  }/*

  public*/ function isWaiting()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.WAITING);
  }/*

  public*/ function isActivated()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.ACTIVATED);
  }/*

  public*/ function isSkipped()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.SKIPPED);
  }/*

  public*/ function getPriority()/*:int*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.PRIORITY);
  }/*

  public*/ function getAcceptanceDate()/*:Date*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.ACCEPTANCE_DATE);
  }/*

  public*/ function isIfTrue()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.IF_TRUE);
  }/*

  public*/ function getPerformer()/*:User*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.PERFORMER);
  }/*

  public*/ function getOfferedTo()/*:Array*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.OFFERED_TO);
  }/*

  public*/ function isTaskForced()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.TASK_FORCED);
  }/*

  public*/ function getChoice()/*:TaskDefinition*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.CHOICE);
  }/*

  public*/ function getChild()/*:Process*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.CHILD);
  }/*

  public*/ function isChildHasCompleted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.CHILD_HAS_COMPLETED);
  }/*

  public*/ function getSuccessors()/*:Array*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.SUCCESSORS);
  }/*

  public*/ function getDefinition()/*:TaskDefinition*/ {
    return this.get(com.coremedia.cap.workflow.TaskPropertyNames.DEFINITION);
  }/*

  public override*/ function getType_()/*:CapType*/ {
    return this.getDefinition();
  }/*

  /**
   * Return the ProblemDescription representing the exception which led to the escalation of this workflow object.
   * Return null if the task is not escalated.
   *
   * @return the exception or null
   * /
  public*/ function getEscalationException()/*:ProblemDescription*/ {
    return this.get('escalationException');
  }/*

  /**
   * Return the array of ProblemDescription objects representing the
   * warnings of this workflow object.
   *
   * @return the problem descriptions
   * /
  [ArrayElementType("com.coremedia.ui.data.ProblemDescription")]
  public*/ function getWarnings()/*:Array*/ {
    return this.get('warnings');
  }/*

  /**
   * completes the task, if permitted for user
   * /
  public*/ function complete(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flushWithContainingProcess$4zDM(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(COMPLETE_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  /**
   * accepts the task for the user, if acceptable
   * /
  public*/ function accept(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flushWithContainingProcess$4zDM(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(ACCEPT_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  /**
   * reject the task for the assigned user
   * /
  public*/ function reject(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flushWithContainingProcess$4zDM(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(REJECT_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  /**
   * skips the task, if possible
   * /
  public*/ function skip(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flushWithContainingProcess$4zDM(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(SKIP_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  /**
   * cancels the task for the assigned user
   * /
  public*/ function cancel(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flushWithContainingProcess$4zDM(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(CANCEL_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  private*/ function flushWithContainingProcess(callback/*:Function = null*/)/*:void*/ {if(arguments.length<=0)callback=null;
    var toBeFlushed/*:Array*/ = [this];
    var containingProcess/*:Process*/ = this.getContainingProcess();
    // Might not be loaded.
    if (containingProcess) {
      toBeFlushed.push(containingProcess);
    }

    com.coremedia.ui.data.RemoteBeanUtil.flushAll(callback, toBeFlushed);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.workflow.impl.WorkflowObjectImpl",
      mixins: ["com.coremedia.cap.workflow.Task"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow/task/{process:[0-9]+}/{id:[0-9]+}"
        ]
      ]},
      numericId$4zDM: 0,
      numericProcessId$4zDM: 0,
      constructor: TaskImpl$,
      super$4zDM: function() {
        com.coremedia.cap.workflow.impl.WorkflowObjectImpl.prototype.constructor.apply(this, arguments);
      },
      processReadResult: processReadResult,
      getNumericId: getNumericId,
      getNumericProcessId: getNumericProcessId,
      getContainingProcess: getContainingProcess,
      isOfType$4zDM: isOfType,
      isAutomatedTask: isAutomatedTask,
      isUserTask: isUserTask,
      isChoiceTask: isChoiceTask,
      isSwitchTask: isSwitchTask,
      isIfTask: isIfTask,
      isForkTask: isForkTask,
      isJoinTask: isJoinTask,
      isForkSubprocessTask: isForkSubprocessTask,
      isJoinSubprocessTask: isJoinSubprocessTask,
      getTaskState: getTaskState,
      getSuspendedState: getSuspendedState,
      isAborted: isAborted,
      isEscalated: isEscalated,
      isOpen: isOpen,
      isClosed: isClosed,
      isNotStarted: isNotStarted,
      isRunning: isRunning,
      isNotRunning: isNotRunning,
      isTaskSuspended: isTaskSuspended,
      isCompleting: isCompleting,
      isCompleted: isCompleted,
      isAccepted: isAccepted,
      isWaiting: isWaiting,
      isActivated: isActivated,
      isSkipped: isSkipped,
      getPriority: getPriority,
      getAcceptanceDate: getAcceptanceDate,
      isIfTrue: isIfTrue,
      getPerformer: getPerformer,
      getOfferedTo: getOfferedTo,
      isTaskForced: isTaskForced,
      getChoice: getChoice,
      getChild: getChild,
      isChildHasCompleted: isChildHasCompleted,
      getSuccessors: getSuccessors,
      getDefinition: getDefinition,
      getType_: getType_,
      getEscalationException: getEscalationException,
      getWarnings: getWarnings,
      complete: complete,
      accept: accept,
      reject: reject,
      skip: skip,
      cancel: cancel,
      flushWithContainingProcess$4zDM: flushWithContainingProcess,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.TaskDefinitionType",
        "com.coremedia.cap.workflow.TaskPropertyNames",
        "com.coremedia.cap.workflow.TaskState",
        "com.coremedia.cap.workflow.impl.WorkflowObjectImpl",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: ["com.coremedia.cap.common.impl.OperationResultImpl"]
    };
});
