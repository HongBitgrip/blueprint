Ext.define("com.coremedia.cap.workflow.impl.ProcessImpl", function(ProcessImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.CapType;
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.user.User;
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.logging.Logger;

[RestResource(uriTemplate="workflow/process/{id:[0-9]+}")]
/**
 * The process (workflow) remote bean. This Bean represents a subset of the unified api Process functionality.
 * /
public class ProcessImpl extends WorkflowObjectImpl implements Process {

  /**
   * Property field of Bean which contains the uri appendix to access start()
   * /
  private static const*/var START_URI$static/*:String*/ = 'startUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access abort()
   * /
  private static const*/var ABORT_URI$static/*:String*/ = 'abortUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access suspend()
   * /
  private static const*/var SUSPEND_URI$static/*:String*/ = 'suspendUri';/*
  /**
   * Property field of Bean which contains the uri appendix to access resume()
   * /
  private static const*/var RESUME_URI$static/*:String*/ = 'resumeUri';function static$0(){

  com.coremedia.ui.logging.Logger.debug("loading ProcessState: " + com.coremedia.cap.workflow.ProcessState.values);}/*

  private var numericId:int;

  public*/ function ProcessImpl$(path/*:String*/, vars/*:Object*/) {
    var id/*:**/ = vars['id'];
    this.numericId$s8r_ =AS3.is( id,  Number) ? id : parseInt(id);

    this.super$s8r_(path);

    this.setId("coremedia:///cap/process/" + this.numericId$s8r_);
  }/*

  override protected*/ function processReadResult(newValues/*:Object*/)/*:Object*/ {
    var state/*:ProcessState*/ = newValues[com.coremedia.cap.workflow.ProcessPropertyNames.PROCESS_STATE];

    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.OPEN] = state.isOpen();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.CLOSED] = state.isClosed();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.NOT_STARTED] = state.isNotStarted();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.RUNNING] = state.isRunning();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.NOT_RUNNING] = state.isNotRunning();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.SUSPENDED] = state.isSuspended();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.COMPLETED] = state.isCompleted();
    newValues[com.coremedia.cap.workflow.ProcessPropertyNames.ABORTED] = state.isAborted();

    return com.coremedia.cap.workflow.impl.WorkflowObjectImpl.prototype.processReadResult.call(this,newValues);
  }/*

  /**
   * provides the owner of the process
   * @return the owner as User
   * /
  public*/ function getOwner()/*:User*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.OWNER);
  }/*

  /**
   * Return the numeric ID of this process.
   * <p><b>Note:</b> Always use <code>getUriPath()</code> to externalize a process,
   * @return the numeric ID of this process
   *
   * @see #getUriPath()
   * /
  public*/ function getNumericId()/*:uint*/ {
    return this.numericId$s8r_;
  }/*

  /**
   * provides the create date of this process instance
   * @return the create date as Date
   * /
  public*/ function getCreationDate()/*:Date*/ {
    return AS3.as( this.get(com.coremedia.cap.workflow.ProcessPropertyNames.CREATION_DATE),  Date);
  }/*

  public*/ function getCompletionDate()/*:Date*/ {
    return AS3.as( this.get(com.coremedia.cap.workflow.ProcessPropertyNames.COMPLETION_DATE),  Date);
  }/*

  public*/ function getDefinition()/*:ProcessDefinition*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.DEFINITION);
  }/*

  override public*/ function getType_()/*:CapType*/ {
    return this.getDefinition();
  }/*

  public*/ function isDetached()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.DETACHED);
  }/*

  public*/ function getParent()/*:Process*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.PARENT);
  }/*

  public*/ function getTask(name/*:String*/)/*:Task*/ {
    var tasksByName/*:**/ = this.getTasksByName();
    return tasksByName ? tasksByName[name] || null : undefined;
  }/*

  public*/ function getTasks()/*:Array*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.TASKS);
  }/*

  public*/ function getTasksByName()/*:Object*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.TASKS_BY_NAME);
  }/*

  public*/ function getSuspensionDate()/*:Date*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.SUSPENSION_DATE);
  }/*

  public*/ function getResumeDate()/*:Date*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.RESUME_DATE);
  }/*

  public*/ function getProcessState()/*:ProcessState*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.PROCESS_STATE);
  }/*

  public*/ function isOpen()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.OPEN);
  }/*

  public*/ function isClosed()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.CLOSED);
  }/*

  public*/ function isNotStarted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.NOT_STARTED);
  }/*

  public*/ function isRunning()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.RUNNING);
  }/*

  public*/ function isNotRunning()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.NOT_RUNNING);
  }/*

  public*/ function isProcessSuspended()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.SUSPENDED);
  }/*

  public*/ function isCompleted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.COMPLETED);
  }/*

  public*/ function isAborted()/*:Boolean*/ {
    return this.get(com.coremedia.cap.workflow.ProcessPropertyNames.ABORTED);
  }/*

  public*/ function start(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flush(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(START_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  public*/ function abort(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flush(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(ABORT_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  public*/ function suspend(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flush(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(SUSPEND_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*

  public*/ function resume(callback/*:Function = null*/)/*:void*/ {var this$=this;if(arguments.length<=0)callback=null;
    this.flush(function ()/*:void*/ {
      this$.load(function ()/*:void*/ {
        var rsm/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(this$.getUriPath() + "/" + this$.get(RESUME_URI$static), "POST", true);
        rsm.request({}, function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
          if (callback) {
            callback(com.coremedia.cap.common.impl.OperationResultImpl.fromResponse(rsmr));
          }
        });
      });
    });
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cap.workflow.impl.WorkflowObjectImpl",
      mixins: ["com.coremedia.cap.workflow.Process"],
      metadata: {"": [
        "RestResource",
        [
          "uriTemplate",
          "workflow/process/{id:[0-9]+}"
        ]
      ]},
      numericId$s8r_: 0,
      constructor: ProcessImpl$,
      super$s8r_: function() {
        com.coremedia.cap.workflow.impl.WorkflowObjectImpl.prototype.constructor.apply(this, arguments);
      },
      processReadResult: processReadResult,
      getOwner: getOwner,
      getNumericId: getNumericId,
      getCreationDate: getCreationDate,
      getCompletionDate: getCompletionDate,
      getDefinition: getDefinition,
      getType_: getType_,
      isDetached: isDetached,
      getParent: getParent,
      getTask: getTask,
      getTasks: getTasks,
      getTasksByName: getTasksByName,
      getSuspensionDate: getSuspensionDate,
      getResumeDate: getResumeDate,
      getProcessState: getProcessState,
      isOpen: isOpen,
      isClosed: isClosed,
      isNotStarted: isNotStarted,
      isRunning: isRunning,
      isNotRunning: isNotRunning,
      isProcessSuspended: isProcessSuspended,
      isCompleted: isCompleted,
      isAborted: isAborted,
      start: start,
      abort: abort,
      suspend: suspend,
      resume: resume,
      statics: {__initStatics__: function() {
          static$0();
        }},
      requires: [
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cap.workflow.ProcessPropertyNames",
        "com.coremedia.cap.workflow.ProcessState",
        "com.coremedia.cap.workflow.impl.WorkflowObjectImpl",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.logging.Logger"
      ],
      uses: ["com.coremedia.cap.common.impl.OperationResultImpl"]
    };
});
