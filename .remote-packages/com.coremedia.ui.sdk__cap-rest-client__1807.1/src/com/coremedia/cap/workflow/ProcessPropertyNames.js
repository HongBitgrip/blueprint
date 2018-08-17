Ext.define("com.coremedia.cap.workflow.ProcessPropertyNames", function(ProcessPropertyNames) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.common.CapTypePropertyNames;

/**
 * ProcessPropertyNames is a container for static identifiers of process meta property names.
 * Use these if you want to attach listeners to process properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the Process interface.
 *
 * @see Process
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
[PublicApi]
public class ProcessPropertyNames {
  /**
   * @eventType properties
   * @see Process#getProperties()
   * /
  public static const PROPERTIES:String = 'properties';

  /**
   * @eventType owner
   * @see Process#getOwner()
   * /
  public static const OWNER:String = 'owner';

  /**
   * @eventType creationDate
   * @see Process#getCreationDate()
   * /
  public static const CREATION_DATE:String = 'creationDate';

  /**
   * @eventType completionDate
   * @see Process#getCompletionDate()
   * /
  public static const COMPLETION_DATE:String = 'completionDate';

  /**
   * @eventType definition
   * @see Process#getDefinition()
   * /
  public static const DEFINITION:String = 'definition';

  /**
   * A shortcut property path for the name of the definition of a process.
   *
   * @see Process#getDefinition()
   * @see ProcessDefinition#getName()
   * /
  public static const DEFINITION_NAME_PATH:String =*/function DEFINITION_NAME_PATH$static_(){ProcessPropertyNames.DEFINITION_NAME_PATH=( ProcessPropertyNames.DEFINITION + '.' + com.coremedia.cap.common.CapTypePropertyNames.NAME);}/*;

  /**
   * @eventType detached
   * @see Process#isDetached()
   * /
  public static const DETACHED:String = 'detached';

  /**
   * @eventType parent
   * @see Process#getParent()
   * /
  public static const PARENT:String = 'parent';

  /**
   * @eventType tasks
   * @see Process#getTasks()
   * /
  public static const TASKS:String = 'tasks';

  /**
   * @eventType tasksByName
   * @see Process#getTasksByName()
   * /
  public static const TASKS_BY_NAME:String = 'tasksByName';

  /**
   * @eventType suspensionDate
   * @see Process#getSuspensionDate()
   * /
  public static const SUSPENSION_DATE:String = 'suspensionDate';

  /**
   * @eventType resumeDate
   * @see Process#getResumeDate()
   * /
  public static const RESUME_DATE:String = 'resumeDate';

  /**
   * @eventType processState
   * @see Process#getProcessState()
   * /
  public static const PROCESS_STATE:String = 'processState';

  /**
   * @eventType open
   * @see Process#isOpen()
   * /
  public static const OPEN:String = 'open';

  /**
   * @eventType closed
   * @see Process#isClosed()
   * /
  public static const CLOSED:String = 'closed';

  /**
   * @eventType notStarted
   * @see Process#isNotStarted()
   * /
  public static const NOT_STARTED:String = 'notStarted';

  /**
   * @eventType running
   * @see Process#isRunning()
   * /
  public static const RUNNING:String = 'running';

  /**
   * @eventType notRunning
   * @see Process#isNotRunning()
   * /
  public static const NOT_RUNNING:String = 'notRunning';

  /**
   * @eventType suspended
   * @see Process#isProcessSuspended()
   * /
  public static const SUSPENDED:String = 'suspended';

  /**
   * @eventType completed
   * @see Process#isCompleted()
   * /
  public static const COMPLETED:String = 'completed';

  /**
   * @eventType aborted
   * @see Process#isAborted()
   * /
  public static const ABORTED:String = 'aborted';
}*/function ProcessPropertyNames$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ProcessPropertyNames$,
      statics: {
        PROPERTIES: 'properties',
        OWNER: 'owner',
        CREATION_DATE: 'creationDate',
        COMPLETION_DATE: 'completionDate',
        DEFINITION: 'definition',
        DEFINITION_NAME_PATH: undefined,
        DETACHED: 'detached',
        PARENT: 'parent',
        TASKS: 'tasks',
        TASKS_BY_NAME: 'tasksByName',
        SUSPENSION_DATE: 'suspensionDate',
        RESUME_DATE: 'resumeDate',
        PROCESS_STATE: 'processState',
        OPEN: 'open',
        CLOSED: 'closed',
        NOT_STARTED: 'notStarted',
        RUNNING: 'running',
        NOT_RUNNING: 'notRunning',
        SUSPENDED: 'suspended',
        COMPLETED: 'completed',
        ABORTED: 'aborted',
        __initStatics__: function() {
          DEFINITION_NAME_PATH$static_();
        }
      },
      uses: ["com.coremedia.cap.common.CapTypePropertyNames"]
    };
});
