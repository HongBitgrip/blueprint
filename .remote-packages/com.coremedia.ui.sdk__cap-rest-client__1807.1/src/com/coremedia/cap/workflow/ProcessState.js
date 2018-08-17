Ext.define("com.coremedia.cap.workflow.ProcessState", function(ProcessState) {/*package com.coremedia.cap.workflow {
import com.coremedia.ui.util.Enum;

/**
 * The states of a process.
 *
 * @see Process
 * /
[PublicApi]
public class ProcessState extends Enum {
 /**
   * This is the first state after a process has been created.
   * /
  public static const NOT_STARTED:ProcessState =*/function NOT_STARTED$static_(){ProcessState.NOT_STARTED=( new ProcessState(true, true, false));}/*;
  /**
   * This is the state, where the executing of the process is performed.
   * /
  public static const RUNNING:ProcessState =*/function RUNNING$static_(){ProcessState.RUNNING=( new ProcessState(false, true, false));}/*;
  /**
   * This is the state of all processes whose execution has been suspended.
   * /
  public static const SUSPENDED:ProcessState =*/function SUSPENDED$static_(){ProcessState.SUSPENDED=( new ProcessState(true, true, false));}/*;
  /**
   * This is the state of all processes that are in the transition of being completed.
   * /
  public static const COMPLETING:ProcessState =*/function COMPLETING$static_(){ProcessState.COMPLETING=( new ProcessState(false, false, false));}/*;
  /**
   * This is the state of all processes that have been executed successfully.
   * /
  public static const COMPLETED:ProcessState =*/function COMPLETED$static_(){ProcessState.COMPLETED=( new ProcessState(false, false, true));}/*;
  /**
   * This is the state of all processes that have been abandoned for some reason.
   * /
  public static const ABORTED:ProcessState =*/function ABORTED$static_(){ProcessState.ABORTED=( new ProcessState(false, false, true));}/*;

  /**
   * An array containing all process states.
   * /
  [ArrayElementType("com.coremedia.cap.workflow.ProcessState")]
  public static const values:Array =*/function values$static_(){ProcessState.values=( com.coremedia.ui.util.Enum.collectValues(ProcessState));}/*;

  /**
   * Return the process state with the given name.
   *
   * @param name the name of the process state
   * @return the process state
   * /
  public static*/ function named$static(name/*:String*/)/*:ProcessState*/ {
    return com.coremedia.ui.util.Enum.namedIn(name, ProcessState);
  }/*

  private var notRunning:Boolean;
  private var open:Boolean;
  private var closed:Boolean;*/

  function ProcessState$(notRunning/*:Boolean*/, open/*:Boolean*/, closed/*:Boolean*/) {this.super$kBK$();
    this.notRunning$kBK$ = notRunning;
    this.open$kBK$ = open;
    this.closed$kBK$ = closed;
  }/*

  /**
   * Return whether this is a state of a process that may be executed at some time.
   * @return true if this is a state of a process that may be executed at some time, otherwise false
   * /
  public*/ function isOpen()/*:Boolean*/ {
    return this.open$kBK$;
  }/*

  /**
   * Return whether this is a state of a process that is in the transition from open or closed.
   * @return true if this is a state of a process that is in the transition from open or closed, otherwise false
   * /
  public*/ function isClosing()/*:Boolean*/ {
    return this === ProcessState.COMPLETING;
  }/*

  /**
   * Return whether this is a state of a process that has been executed.
   * @return true if this is a state of a process that has been executed, otherwise false
   * /
  public*/ function isClosed()/*:Boolean*/ {
    return this.closed$kBK$;
  }/*

  /**
   * Return whether this is the state of a process that has been abandoned for
   * some reason.
   * /
  public*/ function isAborted()/*:Boolean*/ {
    return this === ProcessState.ABORTED;
  }/*

  /**
   * Return whether this is the first state after a process has been created.
   * /
  public*/ function isNotStarted()/*:Boolean*/ {
    return this === ProcessState.NOT_STARTED;
  }/*

  /**
   * Return whether this is the state, where the executing of a process is performed.
   * /
  public*/ function isRunning()/*:Boolean*/ {
    return this === ProcessState.RUNNING;
  }/*

  /**
   * Return whether this is a state of a process that currently cannot be
   * executed.
   * /
  public*/ function isNotRunning()/*:Boolean*/ {
    return this.notRunning$kBK$;
  }/*

  /**
   * Return whether this is the state of a process that has been suspended.
   * /
  public*/ function isSuspended()/*:Boolean*/ {
    return this === ProcessState.SUSPENDED;
  }/*

  /**
   * Return whether this is the state of a process that has been executed successfully.
   * /
  public*/ function isCompleted()/*:Boolean*/ {
    return this === ProcessState.COMPLETED;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.util.Enum",
      metadata: {"": ["PublicApi"]},
      notRunning$kBK$: false,
      open$kBK$: false,
      closed$kBK$: false,
      constructor: ProcessState$,
      super$kBK$: function() {
        com.coremedia.ui.util.Enum.prototype.constructor.apply(this, arguments);
      },
      isOpen: isOpen,
      isClosing: isClosing,
      isClosed: isClosed,
      isAborted: isAborted,
      isNotStarted: isNotStarted,
      isRunning: isRunning,
      isNotRunning: isNotRunning,
      isSuspended: isSuspended,
      isCompleted: isCompleted,
      statics: {
        NOT_STARTED: undefined,
        RUNNING: undefined,
        SUSPENDED: undefined,
        COMPLETING: undefined,
        COMPLETED: undefined,
        ABORTED: undefined,
        values: undefined,
        named: named$static,
        __initStatics__: function() {
          NOT_STARTED$static_();
          RUNNING$static_();
          SUSPENDED$static_();
          COMPLETING$static_();
          COMPLETED$static_();
          ABORTED$static_();
          values$static_();
        }
      },
      requires: ["com.coremedia.ui.util.Enum"]
    };
});
