Ext.define("com.coremedia.cap.workflow.WorkflowObject", function(WorkflowObject) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.common.CapObject;

/**
 * The uniform aspects of processes and tasks.
 *
 * @see Process
 * @see Task
 * /
[PublicApi]
public interface WorkflowObject extends CapObject {
  /**
   * Return the workflow this workflow object comes from.
   *
   * @return the workflow this workflow object comes from
   * /
  function getRepository():WorkflowRepository;

  /**
   * Return a <code>WorkflowProperties</code> object representing the variables of this workflow object.
   *
   * @return a <code>WorkflowProperties</code> object representing the variables of this workflow object
   * /
  function getProperties():WorkflowObjectProperties;

  /**
   * Return true, if this object represents a process.
   *
   * @return true, if this object represents a process.
   *
   * @see Process
   * /
  function isProcess():Boolean;

  /**
   * Return true, if this object represents a task.
   *
   * @return true, if this object represents a task.
   *
   * @see Task
   * /
  function isTask():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapObject"],
      requires: ["com.coremedia.cap.common.CapObject"]
    };
});
