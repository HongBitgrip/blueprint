Ext.define("com.coremedia.cap.workflow.TaskState", function(TaskState) {/*package com.coremedia.cap.workflow {
import com.coremedia.ui.util.Enum;

/**
 * The states of a task.
 *
 * @see Task
 * /
[PublicApi]
public class TaskState extends Enum {
  /**
   * This is the first state after a task has been created.
   * /
  public static const NOT_STARTED:TaskState =*/function NOT_STARTED$static_(){TaskState.NOT_STARTED=( new TaskState(false, false, true, false));}/*;

  /**
   * This is the state of all tasks that are currently being executed.
   * /
  public static const RUNNING:TaskState =*/function RUNNING$static_(){TaskState.RUNNING=( new TaskState(false, false, false, true));}/*;

  /**
   * This is the state of all tasks whose execution has been suspended.
   * /
  public static const SUSPENDED:TaskState =*/function SUSPENDED$static_(){TaskState.SUSPENDED=( new TaskState(false, false, false, false));}/*;

  /**
   * This is the state of all tasks that are in the transition of being completed.
   * /
  public static const COMPLETING:TaskState =*/function COMPLETING$static_(){TaskState.COMPLETING=( new TaskState(true, false, false, false));}/*;

  /**
   * This is the state of all tasks that have been executed successfully.
   * /
  public static const COMPLETED:TaskState =*/function COMPLETED$static_(){TaskState.COMPLETED=( new TaskState(false, true, false, false));}/*;

  /**
   * This is the state of all tasks that encountered an exception, but may be retried.
   * /
  public static const ESCALATED:TaskState =*/function ESCALATED$static_(){TaskState.ESCALATED=( new TaskState(false, false, false, false));}/*;

  /**
   * This is the state of all tasks that are waiting to be activated
   * and to check their guards.
   * /
  public static const WAITING:TaskState =*/function WAITING$static_(){TaskState.WAITING=( new TaskState(false, false, true, false));}/*;

  /**
   * This is the state of all tasks that are waiting to be accepted (and to run
   * afterwards).
   * /
  public static const ACTIVATED:TaskState =*/function ACTIVATED$static_(){TaskState.ACTIVATED=( new TaskState(false, false, true, false));}/*;

  /**
   * This is the state of all tasks for which preconditions are checked and entry actions are executed.
   * /
  public static const PREPARING:TaskState =*/function PREPARING$static_(){TaskState.PREPARING=( new TaskState(false, false, false, true));}/*;

  /**
   * This is the state of all tasks for which postconditions are checked and exit actions are executed.
   * /
  public static const VALIDATING:TaskState =*/function VALIDATING$static_(){TaskState.VALIDATING=( new TaskState(false, false, false, true));}/*;

  /**
   * This is the state of all tasks that are in the transition of being skipped.
   * /
  public static const SKIPPING:TaskState =*/function SKIPPING$static_(){TaskState.SKIPPING=( new TaskState(true, false, false, false));}/*;

  /**
   * This is the state of all tasks that have been jumped over for some reason.
   * /
  public static const SKIPPED:TaskState =*/function SKIPPED$static_(){TaskState.SKIPPED=( new TaskState(false, true, false, false));}/*;

  /**
   * This is the state of all tasks that have been irrevocably aborted because their process was aborted.
   * /
  public static const ABORTED:TaskState =*/function ABORTED$static_(){TaskState.ABORTED=( new TaskState(false, false, false, false));}/*;

  /**
   * An array containing all task states.
   * /
  [ArrayElementType("com.coremedia.cap.workflow.TaskState")]
  public static const values:Array =*/function values$static_(){TaskState.values=( com.coremedia.ui.util.Enum.collectValues(TaskState));}/*;

  /**
   * Return the task state with the given name.
   *
   * @param name the name of the task state
   * @return the task state
   * /
  public static*/ function named$static(name/*:String*/)/*:TaskState*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, TaskState);
  }/*

  private var closing:Boolean;
  private var closed:Boolean;
  private var notRunning:Boolean;
  private var accepted:Boolean;*/

  function TaskState$(closing/*:Boolean*/, closed/*:Boolean*/, notRunning/*:Boolean*/, accepted/*:Boolean*/) {this.super$uOrF();
    this.closing$uOrF = closing;
    this.closed$uOrF = closed;
    this.notRunning$uOrF = notRunning;
    this.accepted$uOrF = accepted;
  }/*

  /**
   * Return whether this is a state of a task that may be executed at some time.
   * @return true if this is a state of a task that may be executed at some time, otherwise false
   * /
  public*/ function isOpen()/*:Boolean*/ {
    return this.notRunning$uOrF || this.accepted$uOrF;
  }/*

  /**
   * Return whether this is a state of a task that is in the transition from open to closed.
   * @return true if this is a state of a task that is in the transition from open to closed, otherwise false
   * /
  public*/ function isClosing()/*:Boolean*/ {
    return this.closing$uOrF;
  }/*

  /**
   * Return whether this is a state of a task that has been executed.
   * @return true if this is a state of a task that has been executed, otherwise false
   * /
  public*/ function isClosed()/*:Boolean*/ {
    return this.closed$uOrF;
  }/*

  /**
   * Return whether this is the state of a task that has
   * encountered an exception, but may be retried.
   * /
  public*/ function isEscalated()/*:Boolean*/ {
    return this === TaskState.ESCALATED;
  }/*

  /**
   * Return whether this is the state of a task that has
   * been irrevocably aborted because its process was aborted.
   * /
  public*/ function isAborted()/*:Boolean*/ {
    return this === TaskState.ABORTED;
  }/*

  /**
   * Return whether this is the first state after a task has been created.
   * /
  public*/ function isNotStarted()/*:Boolean*/ {
    return this === TaskState.NOT_STARTED;
  }/*

  /**
   * Return whether this is a state of a task that currently cannot be
   * executed.
   * /
  public*/ function isNotRunning()/*:Boolean*/ {
    return this.notRunning$uOrF;
  }/*

  /**
   * Return whether this is a state of a task that is accepted
   * by a user and is not suspended.
   * /
  public*/ function isAccepted()/*:Boolean*/ {
    return this.accepted$uOrF;
  }/*

  /**
   * Return whether this is the state, where the executing of a task is performed.
   * /
  public*/ function isRunning()/*:Boolean*/ {
    return this === TaskState.RUNNING;
  }/*

  /**
   * Return whether this is the state of a task that has been suspended.
   * /
  public*/ function isSuspended()/*:Boolean*/ {
    return this === TaskState.SUSPENDED;
  }/*

  /**
   * Return whether this is the state of a task that has been executed successfully.
   * /
  public*/ function isCompleted()/*:Boolean*/ {
    return this === TaskState.COMPLETED;
  }/*

  /**
   * Return whether this is the state of a task that is currently being completed.
   * /
  public*/ function isCompleting()/*:Boolean*/ {
    return this === TaskState.COMPLETING;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      closing$uOrF: false,
      closed$uOrF: false,
      notRunning$uOrF: false,
      accepted$uOrF: false,
      constructor: TaskState$,
      super$uOrF: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      isOpen: isOpen,
      isClosing: isClosing,
      isClosed: isClosed,
      isEscalated: isEscalated,
      isAborted: isAborted,
      isNotStarted: isNotStarted,
      isNotRunning: isNotRunning,
      isAccepted: isAccepted,
      isRunning: isRunning,
      isSuspended: isSuspended,
      isCompleted: isCompleted,
      isCompleting: isCompleting,
      statics: {
        NOT_STARTED: undefined,
        RUNNING: undefined,
        SUSPENDED: undefined,
        COMPLETING: undefined,
        COMPLETED: undefined,
        ESCALATED: undefined,
        WAITING: undefined,
        ACTIVATED: undefined,
        PREPARING: undefined,
        VALIDATING: undefined,
        SKIPPING: undefined,
        SKIPPED: undefined,
        ABORTED: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          NOT_STARTED$static_();
          RUNNING$static_();
          SUSPENDED$static_();
          COMPLETING$static_();
          COMPLETED$static_();
          ESCALATED$static_();
          WAITING$static_();
          ACTIVATED$static_();
          PREPARING$static_();
          VALIDATING$static_();
          SKIPPING$static_();
          SKIPPED$static_();
          ABORTED$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
