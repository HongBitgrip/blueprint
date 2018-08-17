Ext.define("com.coremedia.cap.workflow.ProcessDefinition", function(ProcessDefinition) {/*package com.coremedia.cap.workflow {
import com.coremedia.cap.common.CapType;

/**
 * The definition of a process. It is be used as template
 * for new process instances.
 * /
[PublicApi]
public interface ProcessDefinition extends CapType {

  /**
   * Return whether an instance of this process definition
   * can be created as a top level process or only
   * as a subprocess of another process.
   *
   * @return true, if an instance of this process definition
   * can be created only as a subprocess
   * /
  function isSubprocessOnly():Boolean;

  /**
   * Returns whether this process definition is enabled or not
   * @return process definition enabled or not
   * /
  function isEnabled():Boolean;

  /**
   * Returns whether this process definition is disabled or not
   * @return process definition enabled or not
   * /
  function isDisabled():Boolean;

  /**
   * Return whether this process definition is the latest
   * definition with its name.  All other
   * process definitions with this name are disabled.
   *
   * @return true if this process definition is the latest
   * definition with its name, otherwise false
   * /
  function isLatest():Boolean;

  /**
   * Return whether a newer process definition with the same name
   * exists.  If true, this process definition is disabled.
   *
   * @return true if a newer process definition with the same name
   * exists, otherwise false
   * /
  function isSuperseded():Boolean;

  /**
   * Returns the task definition, which is
   * the start task in this process definition.
   *
   * @return the task definition which is
   * the start task in this process definition
   * /
  function getStartTaskDefinition():TaskDefinition;

  /**
   * Return the task definition with the given name,
   * or null, if no such task definition exists.
   *
   * @param name the name of the task definition to return
   * @return the task definition with the given name,
   * or null, if no such task definition exists
   * /
  function getTaskDefinition(name:String):TaskDefinition;

  /**
   * Returns all the task definitions of this
   * process definition.
   *
   * @return all the task definitions of this process definition
   *
   * @see TaskDefinition
   * /
  function getTaskDefinitions():Array;

  /**
   * Creates a process instance from this definition.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>ProcessCreateResult</code>
   * object as its only argument.</p>
   *
   * @param callback the callback called after successful process definition
   *
   * @see com.coremedia.cap.workflow.results.ProcessCreateResult
   * /
  function create(callback:Function = null):void;



}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapType"],
      requires: ["com.coremedia.cap.common.CapType"]
    };
});
