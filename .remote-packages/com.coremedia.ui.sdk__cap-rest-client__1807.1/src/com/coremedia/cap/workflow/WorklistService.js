Ext.define("com.coremedia.cap.workflow.WorklistService", function(WorklistService) {/*package com.coremedia.cap.workflow {

/**
 * The worklist aspect computes, for various states, all workflow objects that have the
 * respective state for the current user.
 * /
[PublicApi]
public interface WorklistService {

  /**
   * Return all enabled process definitions that the current user may create.
   *
   * @return all enabled process definitions that the current user may create
   *
   * @see ProcessDefinition
   * @see ProcessDefinition#isEnabled
   * /
  [ArrayElementType("com.coremedia.cap.workflow.ProcessDefinition")]
  function getProcessDefinitionsMayCreate():Array;

  /**
   * Return all processes that are not started and are owned by the current user.
   *
   * @return all processes that are not started and are owned by the current user
   *
   * @see Process
   * @see Process#getOwner
   * /
  function getProcessesNotStarted():Array;

  /**
   * Return all processes that are running or suspended and are owned by the current user.
   *
   * @return all processes that are running or suspended and are owned by the current user
   *
   * @see Process
   * @see Process#getOwner
   * /
  function getProcessesRunning():Array;

  /**
   * Return all tasks that are activated user tasks and offered to the current user.
   *
   * @return all tasks offered to the current user
   *
   * @see Task
   * /
  function getTasksOffered():Array;

  /**
   * Return all tasks that are accepted user tasks and performed by the current user.
   *
   * @return all tasks accepted by the current user
   *
   * @see Task
   * /
  function getTasksAccepted():Array;

  /**
   * Return all tasks that are escalated and have been performed by the current user
   * or are contained in a process owned by the current user.
   *
   * @return all escalated tasks
   *
   * @see Task
   * @see Task#isEscalated
   * /
  function getTasksEscalated():Array;

  /**
   * Return all tasks that have a warning
   * and whose process is owned by the current user.
   *
   * @return all tasks with warnings
   *
   * @see Task
   * /
  function getTasksWithWarning():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
