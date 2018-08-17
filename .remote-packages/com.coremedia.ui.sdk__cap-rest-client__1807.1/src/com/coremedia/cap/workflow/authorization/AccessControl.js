Ext.define("com.coremedia.cap.workflow.authorization.AccessControl", function(AccessControl) {/*package com.coremedia.cap.workflow.authorization {
import com.coremedia.cap.workflow.*;

/**
 * The access control determines which rights a
 * user has to interact with workflow objects.
 * Modeled after the facade pattern, all access control
 * aspects of workflow object are covered.
 * /
[PublicApi]
public interface AccessControl {

  /**
   * Returns whether the current user may read the
   * given workflow object. Returns undefined as long as the call to Server is pending.
   *
   * @param workflowObject the workflow object for which rights should be checked
   * @return true if the current user may read the
   * given workflow object, otherwise false
   * /
  function mayRead(workflowObject:WorkflowObject):*;

  /**
   * Returns whether the current user may write the
   * given workflow object. Returns undefined as long as the call to Server is pending.
   *
   * @param workflowObject the workflow object for which rights should be checked
   * @return true if the current user may write the
   * given workflow object, otherwise false
   * /
  function mayWrite(workflowObject:WorkflowObject):*;

  /**
   * Returns whether the current user may start the
   * given process. Returns undefined as long as the call to Server is pending.
   *
   * @param process the process for which rights should be checked
   * @return true if the current user may start the
   * given process, otherwise false
   * /
  function mayStart(process:Process):*;

  /**
   * Returns whether the current user may suspend the
   * given process. Returns undefined as long as the call to Server is pending.
   *
   * @param process the process for which rights should be checked
   * @return true if the current user may suspend the
   * given process, otherwise false
   * /
  function maySuspend(process:Process):*;

  /**
   * Returns whether the current user may resume the
   * given process. Returns undefined as long as the call to Server is pending.
   *
   * @param process the process for which rights should be checked
   * @return true if the current user may resume the
   * given process, otherwise false
   * /
  function mayResume(process:Process):*;

  /**
   * Returns whether the current user may abort the
   * given process. Returns undefined as long as the call to Server is pending.
   *
   * @param process the process for which rights should be checked
   * @return true if the current user may abort the
   * given process, otherwise false
   * /
  function mayAbort(process:Process):*;

  /**
   * Returns whether the current user may accept the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may accept the
   * given task, otherwise false
   * /
  function mayAccept(task:Task):*;

  /**
   * Returns whether the current user may cancel the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may cancel the
   * given task, otherwise false
   * /
  function mayCancel(task:Task):*;

  /**
   * Returns whether the current user may assign the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may assign the
   * given task, otherwise false
   * /
  function mayAssign(task:Task):*;

  /**
   * Returns whether the current user may reject the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may reject the
   * given task, otherwise false
   * /
  function mayReject(task:Task):*;

  /**
   * Returns whether the current user may delegate the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may delegate the
   * given task, otherwise false
   * /
  function mayDelegate(task:Task):*;

  /**
   * Returns whether the current user may complete the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may complete the
   * given task, otherwise false
   * /
  function mayComplete(task:Task):*;

  /**
   * Returns whether the current user may skip the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may skip the
   * given task, otherwise false
   * /
  function maySkip(task:Task):*;

  /**
   * Returns whether the current user may retry the
   * given task. Returns undefined as long as the call to Server is pending.
   *
   * @param task the task for which rights should be checked
   * @return true if the current user may retry the
   * given task, otherwise false
   * /
  function mayRetry(task:Task):*;

  /**
   * Returns whether the current user may create an instance of the given process definition.
   * Returns undefined as long as the call to Server is pending.
   *
   * @return whether the current user may create an instance of the given process definition
   * /
  function mayCreate(processDefintion:ProcessDefinition):*;

}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
