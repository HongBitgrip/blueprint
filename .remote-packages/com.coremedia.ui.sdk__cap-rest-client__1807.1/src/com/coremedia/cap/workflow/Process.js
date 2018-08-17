Ext.define("com.coremedia.cap.workflow.Process", function(Process) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.user.User;

/**
 * The process (workflow) remote bean. This Bean represents a subset of the unified api Process functionality.
 * /
[PublicApi]
public interface Process extends WorkflowObject {

  /**
   * Return the definition of this process.
   *
   * @return the definition of this process
   *
   * @see ProcessPropertyNames#DEFINITION
   * /
  function getDefinition():ProcessDefinition;

  /**
   * Returns whether this process is running detached (independent)
   * from its parent process if there is a parent process.
   *
   * @return true, if this process is running detached
   *
   * @see ProcessPropertyNames#DETACHED
   * /
  function isDetached():Boolean;

  /**
   * Return the parent process, or null, if no parent
   * process exists. The parent process is the process that forked this
   * process.
   *
   * @return the parent process, or null, if no parent
   * process exists
   *
   * @see ProcessPropertyNames#PARENT
   * /
  function getParent():Process;

  /**
   * Return the task with the given name,
   * or null, if no such task exists.
   *
   * @param name the name of the task to return
   * @return the task with the given name,
   * or null, if no such task exists
   * /
  function getTask(name:String):Task;

  /**
   * Return the tasks of this process.
   *
   * @return the tasks of this process
   *
   * @see Task
   *
   * @see ProcessPropertyNames#TASKS
   * /
  [ArrayElementType("com.coremedia.cap.workflow.Task")]
  function getTasks():Array;

  /**
   * Return the tasks of this process, indexed by their name.
   *
   * @return the tasks of this process, indexed by their name
   *
   * @see ProcessPropertyNames#TASKS_BY_NAME
   * @see Task
   * /
  function getTasksByName():Object;

  /**
   * Return the date on which this process was created.
   *
   * @return the date on which this process was created
   *
   * @see ProcessPropertyNames#CREATION_DATE
   * /
  function getCreationDate():Date;

  /**
   * Return the owner of this process.
   *
   * @return the owner
   *
   * @see ProcessPropertyNames#OWNER
   * /
  function getOwner():User;

  /**
   * Return the date on which this process was suspended.
   *
   * @return the date on which this process was suspended
   *
   * @see ProcessPropertyNames#SUSPENSION_DATE
   * /
  function getSuspensionDate():Date;

  /**
   * Return the date on which this process was resumed.
   *
   * @return the date on which this process was resumed
   *
   * @see ProcessPropertyNames#RESUME_DATE
   * /
  function getResumeDate():Date;

  /**
   * Return the date on which this process was completed.
   *
   * @return the date on which this process was completed
   *
   * @see ProcessPropertyNames#COMPLETION_DATE
   * /
  function getCompletionDate():Date;

  /**
   * Returns the state of this process.
   *
   * <p>Note: This method is named getState() in the Unified API, but that name
   * would conflict with the method of the same name in the Bean interface.</p>
   *
   * @return the state of this task
   *
   * @see ProcessPropertyNames#PROCESS_STATE
   * /
  function getProcessState():ProcessState;

  /**
   * Returns whether this process might be executed sometime.
   *
   * @return true, if this process might be executed sometime, otherwise false
   *
   * @see ProcessPropertyNames#OPEN
   * @see #isClosed()
   * @see #getProcessState()
   * /
  function isOpen():Boolean;

  /**
   * Returns whether this process has been executed.
   *
   * @return true, if this process has been executed, otherwise false
   *
   * @see ProcessPropertyNames#CLOSED
   * @see #isOpen()
   * @see #getProcessState()
   * /
  function isClosed():Boolean;

  /**
   * Returns whether this process has just been created and has not started yet.
   *
   * @return true, if this process has just been created and has not started yet, otherwise false
   *
   * @see ProcessPropertyNames#NOT_STARTED
   * @see #isRunning()
   * @see #getProcessState()
   * /
  function isNotStarted():Boolean;

  /**
   * Returns whether the execution of this process is currently being performed.
   *
   * @return true, if the execution of this process is currently being performed, otherwise false
   *
   * @see ProcessPropertyNames#RUNNING
   * @see #isProcessSuspended()
   * @see #isClosed()
   * @see #getProcessState()
   * /
  function isRunning():Boolean;

  /**
   * Returns whether this process currently cannot be executed.
   *
   * @return true, if this process currently cannot be executed, otherwise false
   *
   * @see ProcessPropertyNames#NOT_RUNNING
   * @see #isNotStarted()
   * @see #getProcessState()
   * /
  function isNotRunning():Boolean;

  /**
   * Returns whether the execution of this process has been suspended.
   * In the Java version of this API, this method is called <code>isSuspended</code>.
   * It has been renamed to avoid a name clash with <code>ext.util.Observable#isSuspended()</code>.
   *
   * @return true, if the execution of this process has been suspended, otherwise false
   *
   * @see ProcessPropertyNames#SUSPENDED
   * @see #isRunning()
   * @see #getProcessState()
   * /
  function isProcessSuspended():Boolean;

  /**
   * Returns whether this process has been executed successfully.
   *
   * @return true, if this process has been executed successfully, otherwise false
   *
   * @see ProcessPropertyNames#COMPLETED
   * @see #isRunning()
   * @see #isClosed()
   * @see #getProcessState()
   * /
  function isCompleted():Boolean;

  /**
   * Returns whether this process has been abandoned for some reason.
   *
   * <p>An aborted process will be removed from the database after a short while.
   * Since this may happen at any time, you should be prepared to catch an exception.</p>
   *
   * @return true, this process has been abandoned for some reason, otherwise false
   *
   * @see ProcessPropertyNames#ABORTED
   * @see #isRunning()
   * @see #isClosed()
   * @see #getProcessState()
   * /
  function isAborted():Boolean;

  /**
   * Start this process.
   * Fail if this process is already started or if the user does not have permissions to
   * start this process.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function start(callback:Function = null):void;

  /**
   * Abort this process and all its non-detached subprocesses.
   *
   * <p>An aborted process will be removed from the database after a short while.
   * Since this may happen at any time, it may seem to the caller as if the
   * process is immediately destroyed.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function abort(callback:Function = null):void;

  /**
   * Suspend this process. This suspends all tasks and all non-detached subprocesses, too.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function suspend(callback:Function = null):void;

  /**
   * Resume this process. This resumes all tasks and all non-detached subprocesses, too.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function resume(callback:Function = null):void;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.workflow.WorkflowObject"],
      requires: ["com.coremedia.cap.workflow.WorkflowObject"]
    };
});
