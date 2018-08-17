Ext.define("com.coremedia.cms.editor.controlroom.workflow.WorkflowLocalizationUtils", function(WorkflowLocalizationUtils) {/*package com.coremedia.cms.editor.controlroom.workflow {
import com.coremedia.cap.workflow.ProcessDefinition;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.TaskDefinition;

import mx.resources.ResourceManager;

/**
 * This class defines utility methods for localizing process definition names
 * and workflow states.
 * /
[ResourceBundle('com.coremedia.cms.editor.ProcessDefinitions')]
[PublicApi]
public class WorkflowLocalizationUtils {
  /**
   * Given a process definition name, return a localized name.
   * The given name is suffixed with '_text' and looked up in the
   * properties of the <code>ProcessDefinitions</code> resource bundle.
   * Add localization keys to that bundle to support additional process definitions.
   *
   * @param processDefinitionName the process definition name
   * @return the localized name
   *
   * @see com.coremedia.cap.workflow.ProcessDefinition#getName()
   * /
  public static*/ function getProcessDefinitionDisplayName$static(processDefinitionName/*:String*/)/*:String*/ {
    var propertyName/*:String*/ = (processDefinitionName + '_text');
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ProcessDefinitions', propertyName) || processDefinitionName;
  }/*

  /**
   * Given a process definition name and a process state, return a localized name.
   * A process state can be the name of a user task or of a next step.
   * The given process definition name is suffixed with '_state_', the
   * given state, and '_text', and looked up in the properties of the
   * <code>ProcessDefinitions</code> resource bundle. Add localization
   * keys to that bundle to support additional process states.
   *
   * @param processDefinitionName the process definition name
   * @param state the state
   * @return the localized name
   *
   * @see com.coremedia.cap.workflow.ProcessDefinition#getName()
   * /
  public static*/ function getWorkflowStateDisplayName$static(processDefinitionName/*:String*/, state/*:String*/)/*:String*/ {
    var propertyName/*:String*/ = (processDefinitionName + '_state_' + state + '_text');
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ProcessDefinitions', propertyName) || state;
  }/*

  /**
   * Given a task, return a localized name of the task's definition.
   * The given task's process definition name is suffixed with '_task_',
   * the task's task definition name, and '_text', and looked up in the
   * properties of the <code>ProcessDefinitions</code> resource bundle.
   * Add localization keys to that bundle to support additional task definitions.
   *
   * @param task the task
   * @return the localized name
   *
   * @see com.coremedia.cap.workflow.ProcessDefinition#getName()
   * @see com.coremedia.cap.workflow.TaskDefinition#getName()
   * /
  public static*/ function getTaskDefinitionDisplayNameOfTask$static(task/*:Task*/)/*:String*/ {
    var taskDefinition/*:TaskDefinition*/ = task.getDefinition();
    if (!taskDefinition) {
      return undefined;
    }

    var taskDefinitionName/*:String*/ = taskDefinition.getName();
    if (!taskDefinitionName) {
      return undefined;
    }

    var processDefinition/*:ProcessDefinition*/ = taskDefinition.getDeclaringDefinition();
    if (!processDefinition) {
      return undefined;
    }

    var processDefinitionName/*:String*/ = processDefinition.getName();
    if (!processDefinitionName) {
      return undefined;
    }
    return WorkflowLocalizationUtils.getTaskDefinitionDisplayName(processDefinitionName, taskDefinitionName);
  }/*

  /**
   * Given a process definition name and a task definition name,
   * return a localized name of the task definition.
   * The given process definition name is suffixed with '_task_',
   * the task definition name, and '_text', and looked up in the
   * properties of the <code>ProcessDefinitions</code> resource bundle.
   * Add localization keys to that class to support additional task definitions.
   *
   * @param processDefinitionName the process definition name
   * @param taskDefinitionName the task definition name
   * @return the localized name
   *
   * @see com.coremedia.cap.workflow.ProcessDefinition#getName()
   * @see com.coremedia.cap.workflow.TaskDefinition#getName()
   * /
  public static*/ function getTaskDefinitionDisplayName$static(processDefinitionName/*:String*/, taskDefinitionName/*:String*/)/*:String*/ {
    var propertyName/*:String*/ = processDefinitionName + '_task_' + taskDefinitionName + '_text';
    return mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.ProcessDefinitions', propertyName) || taskDefinitionName;
  }/*
}*/function WorkflowLocalizationUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: WorkflowLocalizationUtils$,
      statics: {
        getProcessDefinitionDisplayName: getProcessDefinitionDisplayName$static,
        getWorkflowStateDisplayName: getWorkflowStateDisplayName$static,
        getTaskDefinitionDisplayNameOfTask: getTaskDefinitionDisplayNameOfTask$static,
        getTaskDefinitionDisplayName: getTaskDefinitionDisplayName$static
      },
      requires: [
        "com.coremedia.cms.editor.ProcessDefinitions_properties",
        "mx.resources.ResourceManager"
      ]
    };
});
