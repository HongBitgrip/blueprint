Ext.define("com.coremedia.cms.editor.sdk.util.WorkflowUtils", function(WorkflowUtils) {/*package com.coremedia.cms.editor.sdk.util {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessDefinition;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.cap.workflow.WorklistService;
import com.coremedia.cap.workflow.impl.ProcessDefinitionImpl;
import com.coremedia.cap.workflow.results.ProcessCreateResult;
import com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames;
import com.coremedia.ui.data.BeanState;
import com.coremedia.ui.data.OperationResult;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.util.ArrayUtils;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.EditorErrors')]
public class WorkflowUtils {

  /**
   * Filters the given process definition names by all which the current user may create.
   *
   * @param configuredProcessDefNames process names to filter
   * @return filtered process names or undefined if it cannot yet be determined
   * /
  public static*/ function getAvailableProcessDefNames$static(configuredProcessDefNames/*:Array*/)/*:Array*/ {
    var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
    if (null === workflowRepository) {
      return [];
    }
    var worklistService/*:WorklistService*/ = workflowRepository.getWorklistService();
    var processDefinitionsMayCreate/*:Array*/ = worklistService.getProcessDefinitionsMayCreate() || [];
    var notYetLoaded/*:Boolean*/ = false;

    var available/*:Object*/ = {};
    processDefinitionsMayCreate.forEach(function (processDef/*:ProcessDefinitionImpl*/)/*:void*/ {
      var state/*:BeanState*/ = processDef.getState();
      if (state === com.coremedia.ui.data.BeanState.UNKNOWN) {
        processDef.load();
        notYetLoaded = true;
      } else {
        available[processDef.getName()] = true;
      }
    });

    return notYetLoaded ? undefined : configuredProcessDefNames.filter(function (configuredProcessDefName/*:String*/)/*:Boolean*/ {
      return available[configuredProcessDefName];
    });
  }/*

  /**
   * Starts a process / processes for the process definition with the given name.
   *
   * If processVariables is
   * <ul>
   *   <li>an Object: one process is started using the object's properties as process properties.</li>
   *   <li>an Array: for each item one process is started using the current item's properties as process properties.</li>
   *   <li>null / undefined: one process is started without setting any properties.
   * </ul>
   *
   * @param processDefinitionName the process definition
   * @param processVariables      the properties that are set on the process(es) before start
   * @param callback              a function called for each started process.
   *                              Signature: <code>function(process:Process, error:Error = null):void</code>
   *                              If an error occurred an Error object will be provided which may be a RemoteError.
   *                              In case of an error the process may be null.
   * /
  public static*/ function startProcess$static(processDefinitionName/*:String*/,
                                      processVariables/*:* = null*/,
                                      callback/*:Function = null*/)/*:void*/ {switch(Math.max(arguments.length,1)){case 1:processVariables=null;case 2:callback=null;}
    var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
    workflowRepository.getProcessDefinition(processDefinitionName, processDefinitionLoaded);

    function processDefinitionLoaded(processDefinition/*:ProcessDefinition*/)/*:void*/ {
      if (!processDefinition) {
        handleError('ProcessDefinition with name ' + processDefinitionName + ' not found');
        return;
      }

      var variablesArray/*:Array*/ = com.coremedia.ui.util.ArrayUtils.asArray(processVariables || {});
      if (processDefinitionName === com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames.SYNCHRONIZATION_WORKFLOW) {
        createAndStartProcess(processDefinition, variablesArray.pop());
      }
      else {
        for (var i/*:int*/ = 0; i < variablesArray.length; i++) {
          var variables/*:Object*/ = variablesArray[i];
          createAndStartProcess(processDefinition, variables);
        }
      }
    }

    function createAndStartProcess(processDefinition/*:ProcessDefinition*/, variables/*:Object*/)/*:void*/ {
      processDefinition.create(processCreated);

      function processCreated(result/*:ProcessCreateResult*/)/*:void*/ {
        var process/*:Process*/ = result.createdProcess;

        if (!process) {
          handleError('Could not create process for ProcessDefinition ' + processDefinitionName);
          return;
        }

        process.load(function ()/*:void*/ {
          process.getProperties().updateProperties(variables);
          process.start(function (result/*:OperationResult*/)/*:void*/ {
            processStarted(process, result);
          });
        });
      }

      function processStarted(process/*:Process*/, result/*:OperationResult*/)/*:void*/ {
        if (result.error) {
          handleError('Could not start process: ' + result.error.errorCode + ': ' + result.error.errorName, process);
          result.error.setHandled(true);
        } else {
          callback && callback(process);
        }
      }
    }

    function handleError(message/*:String*/, process/*:Process = null*/)/*:void*/ {if(arguments.length<=1)process=null;
      com.coremedia.ui.logging.Logger.error(message);
      callback && callback(process, new AS3.Error(message));
    }
  }/*

  public static*/ function showStartProcessErrorDialog$static()/*:void*/ {
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showError(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_failedMessage_title'),
            mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.EditorErrors', 'startWorkflow_failedMessage_text'));
  }/*

}*/function WorkflowUtils$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: WorkflowUtils$,
      statics: {
        getAvailableProcessDefNames: getAvailableProcessDefNames$static,
        startProcess: startProcess$static,
        showStartProcessErrorDialog: showStartProcessErrorDialog$static
      },
      requires: [
        "AS3.Error",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cms.editor.EditorErrors_properties",
        "com.coremedia.ui.data.BeanState",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.util.ArrayUtils",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.translate.SynchronizationProcessVariableNames",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil"
      ]
    };
});
