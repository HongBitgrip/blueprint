Ext.define("com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapperBase", function(InboxDetailPanelWrapperBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.common.impl.OperationResultImpl;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessDefinition;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.impl.WorklistEvent;
import com.coremedia.ui.components.SwitchingContainer;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;
import com.coremedia.ui.util.ExecuteEventually;

import ext.button.Button;
import ext.container.Container;
import ext.panel.Panel;

public class InboxDetailPanelWrapperBase extends Panel {
  private const CLOSED_PROPERTY_NAME:String = "closed";

  private var taskValueExpression:ValueExpression;

  private var offeredStateValueExpression:ValueExpression;
  private var acceptedStateValueExpression:ValueExpression;
  private var footerDisplayedValueExpression:ValueExpression;

  private var applyButtonDisabledValueExpression:ValueExpression;
  private var backToListHandler:Function;

  private var isClosed:Boolean;
  private var showWorkflowAborted:Boolean = true;

  private var processTaskOperationExitFunctions:Object =*/function processTaskOperationExitFunctions_(){this.processTaskOperationExitFunctions$wvla=( {});}/*;

  private var acceptButton:Button;
  private var cancelButton:Button;
  private var applyButton:Button;

  private var currentTaskUriPath:String;
  private var workflowName:String;

  private var switchingContainer:SwitchingContainer;

  public*/ function InboxDetailPanelWrapperBase$(config/*:InboxDetailPanelWrapper = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.taskValueExpression$wvla = AS3.getBindable(config,"taskValueExpression");

    this.super$wvla(config);processTaskOperationExitFunctions_.call(this);;

    this.acceptButton$wvla =AS3.as( this.getFooterToolbar().queryById(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.ACCEPT_BUTTON_ITEM_ID),  Ext.button.Button);
    this.cancelButton$wvla =AS3.as( this.getFooterToolbar().queryById(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.CANCEL_BUTTON_ITEM_ID),  Ext.button.Button);
    this.applyButton$wvla =AS3.as( this.getFooterToolbar().queryById(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.APPLY_BUTTON_ITEM_ID),  Ext.button.Button);

    this.backToListHandler$wvla = AS3.getBindable(config,"backToListHandler");

    this.getFooterDisplayedValueExpression$wvla().addChangeListener(AS3.bind(this,"displayFooterToolbar$wvla"));

    this.on("afterrender",AS3.bind( this,"displayFooterToolbar$wvla"));
    this.on("beforehide", function ()/*:void*/ {
      this$.setClosed(true);
    });
    this.on("beforeshow", function ()/*:void*/ {
      this$.setClosed(false);
      this$.setButtonsDisabled$wvla(false);
    });

    this.taskValueExpression$wvla.addChangeListener(AS3.bind(this,"taskChanged"));

    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).addMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$wvla"));

    this.switchingContainer$wvla =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.SWITCHING_CONTAINER_ITEM_ID),  com.coremedia.ui.components.SwitchingContainer);
  }/*

  private*/ function getFooterDisplayedValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.footerDisplayedValueExpression$wvla) {
      this.footerDisplayedValueExpression$wvla = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
        if (!this$.taskValueExpression$wvla) {
          // no
          return false;
        } else if (!this$.taskValueExpression$wvla.getValue()) {
          // not yet determined
          return undefined;
        } else {
          return (this$.getOfferedStateValueExpression().getValue()
                  || this$.getAcceptedStateValueExpression().getValue()
                  || this$.getMayAbortValueExpression().getValue());
        }
      });
    }
    return this.footerDisplayedValueExpression$wvla;
  }/*

  private*/ function displayFooterToolbar()/*:void*/ {
    if (this.getFooterToolbar()) {
      var displayed/*:Boolean*/ = this.getFooterDisplayedValueExpression$wvla().getValue();
      if (displayed !== undefined && displayed !== this.getFooterToolbar().isVisible()) {
        this.getFooterToolbar().setVisible(this.getFooterDisplayedValueExpression$wvla().getValue());
      }
    }
  }/*

  private*/ function handleTask(operation/*:String*/, handler/*:Function*/)/*:void*/ {var this$=this;
    var task/*:Task*/ = this.taskValueExpression$wvla.getValue();
    if (task) {
      var switchContainer/*:SwitchingContainer*/ =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper.SWITCHING_CONTAINER_ITEM_ID),  com.coremedia.ui.components.SwitchingContainer);
      var workflowDetailForm/*:Container*/ =AS3.as( switchContainer.getActiveItem(),  Ext.container.Container);
      if (!workflowDetailForm) {
        throw new AS3.Error("Could not find workflow detail form in inbox");
      }

      // Use an ExecuteEventually to execute configured exit functions
      // that are to be executed before task operation calls (accept, complete, cancel)
      // are sent to the server.
      var execEventually/*:ExecuteEventually*/ = new com.coremedia.ui.util.ExecuteEventually(function ()/*:void*/ {
        handler(task, function (operationResult/*:OperationResultImpl*/)/*:void*/ {
          this$.setButtonsDisabled$wvla(false);
          // The callback function of task operations (accept, complete, cancel) calls the configured exit function callbacks.
          var exitFunctionsCallback/*:Array*/ = this$.getExitFunctions$wvla(task, operation, "callback");
          exitFunctionsCallback.forEach(function (exitFunctionCallback/*:Function*/)/*:void*/ {
            exitFunctionCallback(task, workflowDetailForm, operationResult);
          });
        });
      });

      // Exit functions that are executed before task operations (accept, complete, cancel) are sent to the server.
      var exitFunctionsBefore/*:Array*/ = this.getExitFunctions$wvla(task, operation, "before");
      exitFunctionsBefore.forEach(function (exitFunction/*:Function*/)/*:void*/ {
        execEventually.delay();
        exitFunction(task, workflowDetailForm,AS3.bind( execEventually,"proceed"));
      });
      execEventually.proceed();
    }
  }/*

  private*/ function setButtonsDisabled(disabled/*:Boolean*/)/*:void*/ {
    this.acceptButton$wvla.setDisabled(disabled);
    this.cancelButton$wvla.setDisabled(disabled);
    this.applyButton$wvla.setDisabled(this.getApplyButtonDisabledValueExpression().getValue());
  }/*

  protected*/ function acceptWorkflow()/*:void*/ {
    this.setButtonsDisabled$wvla(true);

    this.handleTask$wvla('accept', function (task/*:Task*/, callback/*:Function*/)/*:void*/ {
      task.accept(callback);
    });
  }/*

  protected*/ function completeTask()/*:void*/ {var this$=this;
    this.setButtonsDisabled$wvla(true);

    this.handleTask$wvla('complete', function (task/*:Task*/, callback/*:Function*/)/*:void*/ {
      task.complete(callback);
      this$.backToListHandler$wvla();
    });
  }/*

  protected*/ function cancelTask()/*:void*/ {var this$=this;
    this.setButtonsDisabled$wvla(true);

    this.handleTask$wvla('cancel', function (task/*:Task*/, callback/*:Function*/)/*:void*/ {
      task.cancel(callback);
      this$.backToListHandler$wvla();
    });
  }/*

  protected*/ function abortWorkflow()/*:void*/ {var this$=this;
    this.setButtonsDisabled$wvla(true);

    var task/*:Task*/ = this.taskValueExpression$wvla.getValue();
    if (task) {
      var process/*:Process*/ = task.getContainingProcess();
      com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.askAbortWorkflow(process, function (abort/*:Boolean*/)/*:void*/ {
        if (abort) {
          this$.showWorkflowAborted$wvla = false;
          this$.handleTask$wvla('abort', function ()/*:void*/ {
            process.abort();
            this$.backToListHandler$wvla();
          });
        } else {
          this$.setButtonsDisabled$wvla(false);
        }
      });
    }
  }/*

  protected*/ function getAcceptedStateValueExpression()/*:ValueExpression*/ {var this$=this;
    return this.acceptedStateValueExpression$wvla ||
            (this.acceptedStateValueExpression$wvla = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
              var task/*:Task*/ = this$.taskValueExpression$wvla.getValue();
              if (!task) {
                return false;
              }
              return task.isAccepted() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser();
            }));
  }/*

  protected*/ function getOfferedStateValueExpression()/*:ValueExpression*/ {var this$=this;
    return this.offeredStateValueExpression$wvla ||
            (this.offeredStateValueExpression$wvla = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
              var task/*:Task*/ = this$.taskValueExpression$wvla.getValue();
              if (!task) {
                return false;
              }
              var offeredTo/*:Array*/ = task.getOfferedTo();
              return offeredTo && offeredTo.indexOf(com.coremedia.cap.common.SESSION.getUser()) !== -1;
            }));
  }/*

  protected*/ function getMayAbortValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var task/*:Task*/ = this$.taskValueExpression$wvla.getValue();
      if (task) {
        var process/*:Process*/ = task.getContainingProcess();
        return com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.mayAbortWorkflow(process);
      }
      return false;
    });
  }/*

  protected*/ function getMayCancelValueExpression()/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Boolean*/ {
      var task/*:Task*/ = this$.taskValueExpression$wvla.getValue();
      if (task) {
        return task.isAccepted() && task.getPerformer() === com.coremedia.cap.common.SESSION.getUser() && !task.isTaskForced();
      }
      return false;
    });
  }/*

  public*/ function getReadOnly()/*:Boolean*/ {
    return !this.getAcceptedStateValueExpression().getValue();
  }/*

  [ProvideToExtChildren]
  public*/ function getClosed()/*:Boolean*/ {
    return this.isClosed$wvla;
  }/*

  public*/ function setClosed(value/*:**/)/*:void*/ {
    var oldValue/*:**/ = this.isClosed$wvla;
    this.isClosed$wvla = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, this.CLOSED_PROPERTY_NAME$wvla, oldValue, value);
  }/*

  protected*/ function getApplyButtonDisabledValueExpression()/*:ValueExpression*/ {
    if (!this.applyButtonDisabledValueExpression$wvla) {
      this.applyButtonDisabledValueExpression$wvla = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(AS3.bind(this,"computeApplyButtonDisabled$wvla"));
    }
    return this.applyButtonDisabledValueExpression$wvla;
  }/*

  private*/ function computeApplyButtonDisabled()/*:Boolean*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, 'afterrender');
    if (!this.switchingContainer$wvla) {
      return true;
    }

    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this.switchingContainer$wvla, 'afterrender');
    var workflowForm/*:WorkflowForm*/ =AS3.as( this.switchingContainer$wvla.getActiveItem(),  com.coremedia.cms.editor.controlroom.workflow.WorkflowForm);
    if (workflowForm) {
      return workflowForm.isApplyButtonDisabled();
    }
    return true;
  }/*

  public*/ function taskChanged()/*:void*/ {
    var task/*:Task*/ =AS3.as( this.taskValueExpression$wvla.getValue(),  com.coremedia.cap.workflow.Task);

    if (task) {

      // Remember URI path of current task for maybeShowProcessAbortedWarning() where taskValueExpression might already deliver null.
      this.currentTaskUriPath$wvla = task.getUriPath();

      if (task.getContainingProcess() && task.getContainingProcess().getProperties()) {
        this.workflowName$wvla = task.getContainingProcess().getProperties().get("subject");
      }
    } else {
      this.showWorkflowAborted$wvla = true;
      this.currentTaskUriPath$wvla = null;
    }
  }/*

  private*/ function maybeShowProcessAbortedWarning(message/*:Message*/)/*:void*/ {
    var workListEvent/*:WorklistEvent*/ = AS3.cast(com.coremedia.cap.workflow.impl.WorklistEvent,message.body);

    if (workListEvent.event === "taskAborted"
            &&AS3.as( workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)
            && (AS3.as(workListEvent.parameters[0],  com.coremedia.cap.workflow.Task)).getUriPath() === this.currentTaskUriPath$wvla) {

      if (this.showWorkflowAborted$wvla) {
        com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.showWorkflowAbortedMessage(this.workflowName$wvla);
      }
    }
  }/*

  //////////////////////////////////
  // Workflow Task Exit Functions //
  //////////////////////////////////

  /**
   * Registers client-side exit functions for workflow tasks.
   * Exit functions are configured for the combination of
   * (1) process type, (2) task type, (3) operation and (4) whether they are
   * to be executed before the call is sent to the server or as callbacks.
   *
   * Each exit function needs to have the following signature:
   *
   * <code>exitFunction(task:Task, panel:Panel, callback:Function),
   *
   * where task is the current task and panel is this InboxDetailPanelWrapper.
   * The callback function must be called at the end of the exit function.
   *
   * It is possible to registers multiple exit functions at once via this method.
   * For this purpose, an object as shown in the following has to be provided:
   *
   * <code>
   *   {
   *     ...
   *
   *     processType1: {
   *       taskType1: {
   *         complete: {
   *           before: [beforeCompleteFunction1, beforeCompleteFunction2],
   *           callback: [callbackCompleteFunction1]
   *         }
   *       },
   *       taskType2: {
   *         cancel: {
   *           before: [beforeCancelFunction1]
   *         }
   *       }
   *     }
   *
   *     ...
   *   }
   * </code>
   *
   * It is possible to use wildcards (*) for processType and taskType keys.
   * /
  public*/ function registerProcessTaskOperationExitFunctions(newExitFunctions/*:Object*/)/*:void*/ {
    this.processTaskOperationExitFunctions$wvla = mergeObjects$static(this.processTaskOperationExitFunctions$wvla, newExitFunctions);
  }/*

  private*/ function getExitFunctions(task/*:Task*/, operation/*:String*/, when/*:String*/)/*:Array*/ {
    var processDefinition/*:ProcessDefinition*/ = task.getContainingProcess().getDefinition();

    if (processDefinition) {
      // get specified exit functions for process, considering wildcards
      var processName/*:String*/ = processDefinition.getName();
      var taskOperationExitFunctionsObjects/*:Array*/ = [];
      for (var processKey/*:String*/ in this.processTaskOperationExitFunctions$wvla) {
        var processKeyRegExpString/*:String*/ = processKey.replace(/\*/g, ".*");
        var processKeyRegExp/*:RegExp*/ = new RegExp(processKeyRegExpString);
        var matchProcessKeyRegExpResult/*:Array*/ = processName.match(processKeyRegExp);
        if (matchProcessKeyRegExpResult && matchProcessKeyRegExpResult.indexOf(processName) !== -1) {
          taskOperationExitFunctionsObjects.push(this.processTaskOperationExitFunctions$wvla[processKey]);
        }
      }
      var taskOperationExitFunctions/*:Object*/ = mergeObjectList$static(taskOperationExitFunctionsObjects);

      if (taskOperationExitFunctions) {
        // get specified exit functions for task, considering wildcards
        var taskDefinitionName/*:String*/ = task.getDefinition ? task.getDefinition().getName() : "pseudo";
        var operationExitFunctionsObjects/*:Array*/ = [];
        for (var taskKey/*:String*/ in taskOperationExitFunctions) {
          var taskKeyRegExpString/*:String*/ = taskKey.replace(/\*/g, ".*");
          var taskKeyRegExp/*:RegExp*/ = new RegExp(taskKeyRegExpString);
          var matchTaskKeyRegExpResult/*:Array*/ = taskDefinitionName.match(taskKeyRegExp);
          if (matchTaskKeyRegExpResult && matchTaskKeyRegExpResult.indexOf(taskDefinitionName) !== -1) {
            operationExitFunctionsObjects.push(taskOperationExitFunctions[taskKey]);
          }
        }
        var operationExitFunctions/*:Object*/ = mergeObjectList$static(operationExitFunctionsObjects);

        if (operationExitFunctions) {
          var exitFunctionsWhen/*:Object*/ = operationExitFunctions[operation];
          if (exitFunctionsWhen) {
            var exitFunctions/*:Array*/ = exitFunctionsWhen[when];
            if (exitFunctions) {
              return exitFunctions;
            }
          }
        }
      }
    }
    return [];
  }/*

  private static*/ function mergeObjectList$static(objects/*:Array*/)/*:Object*/ {
    var merged/*:Object*/ = {};

    objects.forEach(function (object/*:Object*/)/*:void*/ {
      merged = mergeObjects$static(merged, object);
    });

    return merged;
  }/*

  private static*/ function mergeObjects$static(object1/*:Object*/, object2/*:Object*/)/*:Object*/ {
    var merged/*:Object*/ = {};
    var propsHandled/*:Array*/ = [];

    for (var prop/*:String*/ in object1) {
      var object2Prop/*:**/ = object2[prop];
      var object1Prop/*:**/ = object1[prop];
      if (object2Prop) {
        if (!(AS3.is(object1Prop,  Object))
                ||AS3.is( object1Prop,  Array)
                ||AS3.is( object1Prop,  Function)
                || !(AS3.is(object2Prop,  Object))
                ||AS3.is( object2Prop,  Array)
                ||AS3.is( object2Prop,  Function)) {
          // leaves
          merged[prop] = mergeArraysWithoutDuplicates$static(object1Prop.concat([]), object2Prop.concat([]));
        } else {
          merged[prop] = mergeObjects$static(object1Prop, object2Prop);
        }
      } else {
        merged[prop] = object1Prop;
      }

      propsHandled.push(prop);
    }

    for (prop in object2) {
      if (propsHandled.indexOf(prop) === -1) {
        merged[prop] = object2[prop];
      }
    }

    return merged;
  }/*

  private static*/ function mergeArraysWithoutDuplicates$static(array1/*:Array*/, array2/*:Array*/)/*:Array*/ {
    var merged/*:Array*/ = [];

    array1.concat(array2).forEach(function (item/*:**/)/*:void*/ {
      if (merged.indexOf(item) === -1) {
        merged.push(item);
      }
    });

    return merged;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    this.getFooterDisplayedValueExpression$wvla().removeChangeListener(AS3.bind(this,"displayFooterToolbar$wvla"));
    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).removeMessageListener("worklist",AS3.bind( this,"maybeShowProcessAbortedWarning$wvla"));
    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      metadata: {getClosed: ["ProvideToExtChildren"]},
      CLOSED_PROPERTY_NAME$wvla: "closed",
      taskValueExpression$wvla: null,
      offeredStateValueExpression$wvla: null,
      acceptedStateValueExpression$wvla: null,
      footerDisplayedValueExpression$wvla: null,
      applyButtonDisabledValueExpression$wvla: null,
      backToListHandler$wvla: null,
      isClosed$wvla: false,
      showWorkflowAborted$wvla: true,
      acceptButton$wvla: null,
      cancelButton$wvla: null,
      applyButton$wvla: null,
      currentTaskUriPath$wvla: null,
      workflowName$wvla: null,
      switchingContainer$wvla: null,
      constructor: InboxDetailPanelWrapperBase$,
      super$wvla: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      getFooterDisplayedValueExpression$wvla: getFooterDisplayedValueExpression,
      displayFooterToolbar$wvla: displayFooterToolbar,
      handleTask$wvla: handleTask,
      setButtonsDisabled$wvla: setButtonsDisabled,
      acceptWorkflow: acceptWorkflow,
      completeTask: completeTask,
      cancelTask: cancelTask,
      abortWorkflow: abortWorkflow,
      getAcceptedStateValueExpression: getAcceptedStateValueExpression,
      getOfferedStateValueExpression: getOfferedStateValueExpression,
      getMayAbortValueExpression: getMayAbortValueExpression,
      getMayCancelValueExpression: getMayCancelValueExpression,
      getReadOnly: getReadOnly,
      getClosed: getClosed,
      setClosed: setClosed,
      getApplyButtonDisabledValueExpression: getApplyButtonDisabledValueExpression,
      computeApplyButtonDisabled$wvla: computeApplyButtonDisabled,
      taskChanged: taskChanged,
      maybeShowProcessAbortedWarning$wvla: maybeShowProcessAbortedWarning,
      registerProcessTaskOperationExitFunctions: registerProcessTaskOperationExitFunctions,
      getExitFunctions$wvla: getExitFunctions,
      beforeDestroy: beforeDestroy,
      requires: [
        "AS3.Error",
        "Ext.button.Button",
        "Ext.container.Container",
        "Ext.panel.Panel",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.Task",
        "com.coremedia.cap.workflow.impl.WorklistEvent",
        "com.coremedia.ui.components.SwitchingContainer",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil",
        "com.coremedia.ui.util.ExecuteEventually"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.InboxDetailPanelWrapper",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowForm",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils"
      ]
    };
});
