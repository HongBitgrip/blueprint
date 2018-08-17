Ext.define("com.coremedia.cap.workflow.TaskPropertyNames", function(TaskPropertyNames) {/*package com.coremedia.cap.workflow {

/**
 * TaskPropertyNames is a container for static identifiers of task meta property names.
 * Use these if you want to attach listeners to task properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the Task interface.
 *
 * @see Task
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
[PublicApi]
public class TaskPropertyNames {
  /**
   * @eventType properties
   * @see Task#getProperties()
   * /
  public static const PROPERTIES:String = 'properties';

  /**
   * @eventType containingProcess
   * @see Task#getContainingProcess()
   * /
  public static const CONTAINING_PROCESS:String = 'containingProcess';

  /**
   * @eventType taskState
   * @see Task#getTaskState()
   * /
  public static const TASK_STATE:String = 'taskState';

  /**
   * @eventType suspendedState
   * @see Task#getSuspendedState()
   * /
  public static const SUSPENDED_STATE:String = 'suspendedState';

  /**
   * @eventType priority
   * @see Task#getPriority()
   * /
  public static const PRIORITY:String = "priority";

  /**
   * @eventType acceptanceDate
   * @see Task#getAcceptanceDate()
   * /
  public static const ACCEPTANCE_DATE:String = "acceptanceDate";

  /**
   * @eventType ifTrue
   * @see Task#isIfTrue()
   * /
  public static const IF_TRUE:String = "ifTrue";

  /**
   * @eventType performer
   * @see Task#getPerformer()
   * /
  public static const PERFORMER:String = "performer";

  /**
   * @eventType offeredTo
   * @see Task#getOfferedTo()
   * /
  public static const OFFERED_TO:String = "offeredTo";

  /**
   * @eventType taskForced
   * @see Task#isTaskForced()
   * /
  public static const TASK_FORCED:String = "taskForced";

  /**
   * @eventType choice
   * @see Task#getChoice()
   * /
  public static const CHOICE:String = "choice";

  /**
   * @eventType child
   * @see Task#getChild()
   * /
  public static const CHILD:String = "child";

  /**
   * @eventType childHasCompleted
   * @see Task#isChildHasCompleted()
   * /
  public static const CHILD_HAS_COMPLETED:String = "childHasCompleted";

  /**
   * @eventType successors
   * @see Task#getSuccessors()
   * /
  public static const SUCCESSORS:String = "successors";

  /**
   * @eventType definition
   * @see Task#getDefinition()
   * /
  public static const DEFINITION:String = 'definition';

  /**
   * @eventType aborted
   * @see Task#isAborted()
   * /
  public static const ABORTED:String = 'aborted';

  /**
   * @eventType escalated
   * @see Task#isEscalated()
   * /
  public static const ESCALATED:String = 'escalated';

  /**
   * @eventType open
   * @see Task#isOpen()
   * /
  public static const OPEN:String = 'open';

  /**
   * @eventType closed
   * @see Task#isClosed()
   * /
  public static const CLOSED:String = 'closed';

  /**
   * @eventType notStarted
   * @see Task#isNotStarted()
   * /
  public static const NOT_STARTED:String = 'notStarted';

  /**
   * @eventType running
   * @see Task#isRunning()
   * /
  public static const RUNNING:String = 'running';

  /**
   * @eventType notRunning
   * @see Task#isNotRunning()
   * /
  public static const NOT_RUNNING:String = 'notRunning';

  /**
   * @eventType suspended
   * @see Task#isTaskSuspended()
   * /
  public static const SUSPENDED:String = 'suspended';

  /**
   * @eventType completing
   * @see Task#isCompleting()
   * /
  public static const COMPLETING:String = 'completing';

  /**
   * @eventType completed
   * @see Task#isCompleted()
   * /
  public static const COMPLETED:String = 'completed';

  /**
   * @eventType accepted
   * @see Task#isAccepted()
   * /
  public static const ACCEPTED:String = 'accepted';

  /**
   * @eventType waiting
   * @see Task#isWaiting()
   * /
  public static const WAITING:String = 'waiting';

  /**
   * @eventType activated
   * @see Task#isActivated()
   * /
  public static const ACTIVATED:String = 'activated';

  /**
   * @eventType skipped
   * @see Task#isSkipped()
   * /
  public static const SKIPPED:String = 'skipped';

}*/function TaskPropertyNames$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: TaskPropertyNames$,
      statics: {
        PROPERTIES: 'properties',
        CONTAINING_PROCESS: 'containingProcess',
        TASK_STATE: 'taskState',
        SUSPENDED_STATE: 'suspendedState',
        PRIORITY: "priority",
        ACCEPTANCE_DATE: "acceptanceDate",
        IF_TRUE: "ifTrue",
        PERFORMER: "performer",
        OFFERED_TO: "offeredTo",
        TASK_FORCED: "taskForced",
        CHOICE: "choice",
        CHILD: "child",
        CHILD_HAS_COMPLETED: "childHasCompleted",
        SUCCESSORS: "successors",
        DEFINITION: 'definition',
        ABORTED: 'aborted',
        ESCALATED: 'escalated',
        OPEN: 'open',
        CLOSED: 'closed',
        NOT_STARTED: 'notStarted',
        RUNNING: 'running',
        NOT_RUNNING: 'notRunning',
        SUSPENDED: 'suspended',
        COMPLETING: 'completing',
        COMPLETED: 'completed',
        ACCEPTED: 'accepted',
        WAITING: 'waiting',
        ACTIVATED: 'activated',
        SKIPPED: 'skipped'
      }
    };
});
