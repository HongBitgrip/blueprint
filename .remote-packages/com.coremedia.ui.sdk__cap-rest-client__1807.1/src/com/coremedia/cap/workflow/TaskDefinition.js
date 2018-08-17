Ext.define("com.coremedia.cap.workflow.TaskDefinition", function(TaskDefinition) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.common.CapType;

/**
 * The definition of a task.
 * /
[PublicApi]
public interface TaskDefinition extends CapType {

  /**
   * Returns the containing process definition of this task definition.
   *
   * @return the containing process definition
   * /
  function getDeclaringDefinition():ProcessDefinition;

  /**
   * Returns the type of the task, which is one of the constants defined
   * in TaskDefinitionType.
   *
   * @return the type of the task
   * /
  function getType():TaskDefinitionType;

  /**
   * <p>Return whether this task is final (a or the last one in the process).</p>
   *
   * <p>Only user tasks and automated tasks may be final.</p>
   *
   * @return true, if this task is final (a or the last one in the process)
   * /
  function isFinal():Boolean;

  /**
   * Return whether this task can be executed again and again.
   *
   * @return true, if this task can be executed again and again
   * /
  function isReexecutable():Boolean;

  /**
   * The default priority for tasks which are instantiated
   * from this definition.
   *
   * <p>Priorities are positive integers. Zero means,
   * that no priority is set.</p>
   *
   * @return the default priority
   * /
  function getDefaultPriority():int;

  /**
   * Return the default timeout for tasks of this
   * task definition to be offered.
   *
   * <p>Default offer timeouts are measured in seconds
   * as positive integers.  Zero means, that no timeout
   * is set.</p>
   *
   * @return the default timeout for tasks of this
   * task definition to be offered
   * /
  function getDefaultOfferTimeout():int;

  /**
   * Returns the task definitions that succeed this task definition.
   *
   * <p>A task definition must either have at least one successor
   * definition or be final.</p>
   *
   * @return the task definitions that succeed this task definition
   *
   * @see TaskDefinition
   * /
  function getSuccessorDefinitions():Array;

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapType"],
      requires: ["com.coremedia.cap.common.CapType"]
    };
});
