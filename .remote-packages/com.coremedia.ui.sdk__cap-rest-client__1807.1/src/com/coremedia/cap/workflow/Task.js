Ext.define("com.coremedia.cap.workflow.Task", function(Task) {/*package com.coremedia.cap.workflow {

import com.coremedia.cap.user.User;

/**
 * The instance of a task definition in the workflow repository.
 * A task is implicitly created during the creation of a process.
 * Use the modifying methods defined here to update a task's state.
 * /
[PublicApi]
public interface Task extends WorkflowObject {

  /**
   * Return the process which contains this task.
   * @return the process which contains this task
   *
   * @see TaskPropertyNames#CONTAINING_PROCESS
   * /
  function getContainingProcess():Process;

  /**
   * Returns the definition of this task.
   * @return the definition of this task.
   *
   * @see TaskPropertyNames#DEFINITION
   * /
  function getDefinition():TaskDefinition;

  /**
   * Return whether this is an automated task.
   *
   * @return true if this is an automated task, otherwise false.
   * /
  function isAutomatedTask():Boolean;

  /**
   * Return whether this is a user task.
   *
   * @return true if this is a user task, otherwise false.
   * /
  function isUserTask():Boolean;

  /**
   * Return whether this is a choice task.
   *
   * @return true if this is a choice task, otherwise false.
   * /
  function isChoiceTask():Boolean;

  /**
   * Return whether this is a switch task.
   *
   * @return true if this is a switch task, otherwise false.
   * /
  function isSwitchTask():Boolean;

  /**
   * Return whether this is an if task.
   *
   * @return true if this is an if task, otherwise false.
   * /
  function isIfTask():Boolean;

  /**
   * Return whether this is a fork task.
   *
   * @return true if this is a fork task, otherwise false.
   * /
  function isForkTask():Boolean;

  /**
   * Return whether this is a join task.
   *
   * @return true if this is a join task, otherwise false.
   * /
  function isJoinTask():Boolean;

  /**
   * Return whether this is a fork subprocess task.
   *
   * @return true if this is a fork subprocess task, otherwise false.
   * /
  function isForkSubprocessTask():Boolean;

  /**
   * Return whether this is a join subprocess task.
   *
   * @return true if this is a join subprocess task, otherwise false.
   * /
  function isJoinSubprocessTask():Boolean;

  /**
   * Returns the state of this task.
   *
   * <p>Note: This method is named getState() in the Unified API, but that name
   * would conflict with the method of the same name in the Bean interface.</p>
   *
   * @return the state of this task
   *
   * @see TaskPropertyNames#TASK_STATE
   * /
  function getTaskState():TaskState;

  /**
   * Returns the state this task was in before its process was suspended,
   * or null if it is not suspended.
   *
   * @return the state of this task when it was suspended
   *
   * @see TaskPropertyNames#SUSPENDED_STATE
   * /
  function getSuspendedState():TaskState;

  /**
   * Returns whether this task might be executed sometime.
   *
   * @return true, if this task might be executed sometime, otherwise false
   *
   * @see TaskPropertyNames#OPEN
   * @see #isClosed()
   * @see #getTaskState()
   * /
  function isOpen():Boolean;

  /**
   * Returns whether this task has been executed.
   *
   * @return true, if this task has been executed, otherwise false
   *
   * @see TaskPropertyNames#CLOSED
   * @see #isOpen()
   * @see #getTaskState()
   * /
  function isClosed():Boolean;

  /**
   * Returns whether this task has just been created and has not started yet.
   *
   * @return true, if this task has just been created and has not started yet, otherwise false
   *
   * @see TaskPropertyNames#NOT_STARTED
   * @see #isRunning()
   * @see #getTaskState()
   * /
  function isNotStarted():Boolean;

  /**
   * Returns whether the execution of this task is currently being performed.
   *
   * @return true, if the execution of this task is currently being performed, otherwise false
   *
   * @see TaskPropertyNames#RUNNING
   * @see #isTaskSuspended()
   * @see #isClosed()
   * @see #getTaskState()
   * /
  function isRunning():Boolean;

  /**
   * Returns whether this task currently cannot be executed.
   *
   * @return true, if this task currently cannot be executed, otherwise false
   *
   * @see TaskPropertyNames#NOT_RUNNING
   * @see #isNotStarted()
   * @see #getTaskState()
   * /
  function isNotRunning():Boolean;

  /**
   * Returns whether the execution of this task has been suspended.
   * In the Java version of this API, this method is called <code>isSuspended</code>.
   * It has been renamed to avoid a name clash with <code>ext.util.Observable#isSuspended()</code>.
   *
   * @return true, if the execution of this task has been suspended, otherwise false
   *
   * @see TaskPropertyNames#SUSPENDED
   * @see #isRunning()
   * @see #getTaskState()
   * /
  function isTaskSuspended():Boolean;

  /**
   * Returns whether this task has been executed successfully.
   *
   * @return true, if this task has been executed successfully, otherwise false
   *
   * @see TaskPropertyNames#COMPLETED
   * @see #isRunning()
   * @see #isClosed()
   * @see #getTaskState()
   * /
  function isCompleted():Boolean;

  /**
   * Returns whether this task has been executed successfully.
   *
   * @return true, if this task has been executed successfully, otherwise false
   *
   * @see TaskPropertyNames#COMPLETING
   * @see #isRunning()
   * @see #isClosed()
   * @see #getTaskState()
   * /
  function isCompleting():Boolean;

  /**
   * Returns whether this task has been irrevocably aborted because its process was aborted.
   *
   * @return true, this task has been abandoned for some reason, otherwise false
   *
   * @see TaskPropertyNames#ABORTED
   * @see #isRunning()
   * @see #isClosed()
   * @see #getTaskState()
   * /
  function isAborted():Boolean;

  /**
   * Returns whether this task is currently accepted by a user.
   * This method returns true even if the task has been suspended since being accepted,
   * taking the suspended state into account.
   *
   * @return true, if this task is currently accepted by a user
   *
   * @see TaskPropertyNames#ACCEPTED
   * @see #isTaskSuspended()
   * @see #getTaskState()
   * /
  function isAccepted():Boolean;

  /**
   * Return whether this task has encountered a retriable exception.
   *
   * <p>Possible causes for an escalation include expired timers, and exceptions thrown by customer code
   * deployed on the server-side, such as actions and expressions.</p>
   *
   * @return true, if this task this task has encountered a retriable exception.
   *
   * @see TaskPropertyNames#ESCALATED
   * /
  function isEscalated():Boolean;

  /**
   * Returns whether this task is waiting to be activated
   * and to check its guards.
   *
   * @return true, if this task is waiting to be activated
   *
   * @see TaskPropertyNames#WAITING
   * @see #isActivated()
   * @see #getTaskState()
   * /
  function isWaiting():Boolean;

  /**
   * Returns whether this task is waiting to be accepted (and to run
   * afterwards).
   *
   * @return true, if this task is waiting to be accepted
   *
   * @see TaskPropertyNames#ACTIVATED
   * @see #isRunning()
   * @see #getTaskState()
   * /
  function isActivated():Boolean;

  /**
   * Returns whether this task has been jumped over for some reason.
   *
   * @return true, if this task has been skipped
   *
   * @see TaskPropertyNames#SKIPPED
   * @see #isRunning()
   * @see #getTaskState()
   * /
  function isSkipped():Boolean;
  /**
   * The concrete priority for this task. Priorities are positive integers. Zero means
   * that no priority is set.
   *
   * @return the concrete priority of this task
   *
   * @see TaskPropertyNames#PRIORITY
   * /
  function getPriority():int;

  /**
   * Return the date on which this task was accepted.
   *
   * @return the date on which this task was accepted
   *
   * @see TaskPropertyNames#ACCEPTANCE_DATE
   * /
  function getAcceptanceDate():Date;

  /**
   * If this is an accepted,
   * return whether the condition evaluated to true, or false
   * otherwise.
   *
   * @return whether the condition evaluated to true, if this
   * is an accepted, or false
   * otherwise
   *
   * @see TaskPropertyNames#IF_TRUE
   * /
  function isIfTrue():Boolean;

  /**
   * Return the user who most recently accepted this task,
   * or null if this task has never been accepted.
   * The performer is always null if this is not a user task.
   *
   * @return the user who most recently accepted this task,
   * or null if this task has never been accepted.
   *
   * @see TaskPropertyNames#PERFORMER
   * /
  function getPerformer():User;

  /**
   * If this is a user task,
   * return the users to whom this task is offered when activated,
   * or null otherwise.
   *
   * <p>The returned set of users is computed by the server-side
   * performers policy, and may be influenced by assigning the task to
   * specific users or groups. It is
   * also influenced by the server-side actions ForceUser,
   * ExcludePerformer and PreferPerformer.</p>
   *
   * @return the users to whom this task is offered, if this is a
   * user task, or null otherwise
   *
   * @see TaskPropertyNames#OFFERED_TO
   * @see User
   * /
  function getOfferedTo():Array;

  /**
   * If this is a user task,
   * return whether this task was forced to be accepted
   * by the performer, or false otherwise.
   *
   * @return whether this task was forced to be accepted
   * by the performer, if this is a
   * user task, or false otherwise
   *
   * @see TaskPropertyNames#TASK_FORCED
   * /
  function isTaskForced():Boolean;

  /**
   * If this is a choice task,
   * return the task definition which was chosen, or null
   * otherwise.
   *
   * @return the task definition which was chosen, if this is a
   * choice task,
   * or null otherwise
   *
   * @see TaskPropertyNames#CHOICE
   * /
  function getChoice():TaskDefinition;

  /**
   * If this is a fork subprocess task,
   * return the child process, if it has been forked, or null
   * otherwise.
   *
   * @return the child process, if it has been forked and
   * this is a ForkSubprocess
   * task, or null otherwise
   *
   * @see TaskPropertyNames#CHILD
   * /
  function getChild():Process;

  /**
   * If this is an join subprocess task,
   * return whether the child process has completed, or false
   * otherwise.
   *
   * @return whether the child process has completed, if this
   * is an join subprocess task,
   * or false otherwise
   *
   * @see TaskPropertyNames#CHILD_HAS_COMPLETED
   * /
  function isChildHasCompleted():Boolean;

  /**
   * Returns the tasks that succeed this task.
   *
   * @return the tasks that succeed this task
   *
   * @see TaskPropertyNames#SUCCESSORS
   * @see Task
   * /
  function getSuccessors():Array;

  /**
   * Accept this currently not-accepted user task for the current user.
   *
   * <p>The current user will become the performer of this task.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function accept(callback:Function = null):void;

  /**
   * Completes this currently accepted task.
   *
   * <p>The current user will not be the performer
   * anymore and the next task will eventually be activated.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function complete(callback:Function = null):void;

  /**
   * Rejects this currently not-accepted task, which will not be offered
   * to the current user for acceptance anymore.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function reject(callback:Function = null):void;

  /**
   * Skips this task. The next task will be activated.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function skip(callback:Function = null):void;

  /**
   * Cancels this currently accepted task.
   *
   * <p> The current user will not be the performer
   * anymore and the task will be offered for acceptance again.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function cancel(callback:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.workflow.WorkflowObject"],
      requires: ["com.coremedia.cap.workflow.WorkflowObject"]
    };
});
