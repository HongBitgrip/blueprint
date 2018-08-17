Ext.define("com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanelBase", function(TabbedWorkflowPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Process;
import com.coremedia.cap.workflow.ProcessDefinition;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.WorkflowObject;
import com.coremedia.cap.workflow.WorkflowRepository;
import com.coremedia.cap.workflow.WorklistService;
import com.coremedia.cap.workflow.impl.ProcessImpl;
import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel;
import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelHeaderDropZone;
import com.coremedia.collaboration.controlroom.rest.CapList;
import com.coremedia.collaboration.controlroom.rest.CapListRepository;
import com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.Calendar;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.data.impl.RemoteService;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.ContextMenuUtil;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.createComponentSelector;

import ext.Component;
import ext.Ext;
import ext.container.Container;
import ext.dd.DropZone;
import ext.tab.TabPanel;

public class TabbedWorkflowPanelBase extends TabPanel {
  [ExtConfig]
  public var excludedTasks:Object;

  public static const WORKFLOW_LIST_INBOX_ITEM_ID:String = "workflowListInboxItemId";
  public static const WORKFLOW_LIST_PENDING_ITEM_ID:String = "workflowListPendingItemId";
  public static const WORKFLOW_LIST_FINISHED_ITEM_ID:String = "workflowListFinishedItemId";

  private static const*/var DEFAULT_BATCH_LIMIT$static/*:int*/ = 500;/*
  private static const*/var INBOX_TASKS$static/*:String*/ = 'InboxTasks';/*
  private static const*/var PENDING_PROCESSES$static/*:String*/ = 'PendingProcesses';/*
  private static const*/var INBOX_PROCESSES$static/*:String*/ = 'InboxProcesses';/*

  private var inboxTasksValueExpression:ValueExpression;
  private var pendingProcessesValueExpression:ValueExpression;
  private var finishedProcessesValueExpression:ValueExpression;

  private var activeInboxWorkflowPanelIdValueExpression:ValueExpression;
  private var activePendingWorkflowPanelIdValueExpression:ValueExpression;

  private var model:Bean;

  private var inboxTasksWaiting:Array;
  private var allPendingProcessesWaiting:Array;

  public*/ function TabbedWorkflowPanelBase$(config/*:TabbedWorkflowPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$7zBt(config);

    this.on("afterrender",AS3.bind( this,"onAfterRender$7zBt"));
  }/*

  public var processCategory:String;

  public*/ function getInboxTasksValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.inboxTasksValueExpression$7zBt) {
      this.inboxTasksValueExpression$7zBt = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var workflowRepository/*:WorkflowRepository*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository();
        if (null === workflowRepository) {
          return [];
        }
        var worklistService/*:WorklistService*/ = workflowRepository.getWorklistService();

        var escalatedTasks/*:Array*/ = worklistService.getTasksEscalated() || [];
        var tasksWithWarning/*:Array*/ = worklistService.getTasksWithWarning() || [];
        var acceptedTasks/*:Array*/ = worklistService.getTasksAccepted() || [];
        var offeredTasks/*:Array*/ = worklistService.getTasksOffered() || [];

        var allInboxTasks/*:Array*/ = escalatedTasks.concat(tasksWithWarning, acceptedTasks, offeredTasks);

        // 'inboxTasksWaiting' variable holds tasks waiting to be processed.
        // Only if it is not set, a 'filterWorkflowObjects' is directly issued.
        // Otherwise, another call is already underway. In this case, we update 'inboxTasksWaiting'.
        // A new call will be issued at the end of 'filterWorkflowObjects' processing.
        if (!this$.inboxTasksWaiting$7zBt) {
          this$.inboxTasksWaiting$7zBt = [];
          this$.filterWorkflowObjects$7zBt(allInboxTasks, 'tasks', INBOX_TASKS$static, {tasksExcluded: this$.excludedTasks});
        }
        else {
          this$.inboxTasksWaiting$7zBt = allInboxTasks;
        }

        return AS3.as( this$.model$7zBt.get(this$.processCategory + INBOX_TASKS$static),  Array) || [];
      });
    }

    return this.inboxTasksValueExpression$7zBt;
  }/*

  protected*/ function getPendingProcessesValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.pendingProcessesValueExpression$7zBt) {
      this.pendingProcessesValueExpression$7zBt = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var pendingProcesses/*:Array*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance().getPendingProcesses().getItems() || [];

        // 'allPendingProcessesWaiting' variable holds tasks waiting to be processed.
        // Only if it is not set, a 'filterWorkflowObjects' is directly issued.
        // Otherwise, another call is already underway. In this case, we update 'allPendingProcessesWaiting'.
        // A new call will be issued at the end of 'filterWorkflowObjects' processing.
        if (!this$.allPendingProcessesWaiting$7zBt) {
          this$.allPendingProcessesWaiting$7zBt = [];
          this$.filterWorkflowObjects$7zBt(pendingProcesses, 'processes', PENDING_PROCESSES$static);
        }
        else {
          this$.allPendingProcessesWaiting$7zBt = pendingProcesses;
        }

        return AS3.as( this$.model$7zBt.get(this$.processCategory + PENDING_PROCESSES$static),  Array) || [];
      });
    }

    return this.pendingProcessesValueExpression$7zBt;
  }/*


  /**
   * Requests to filter the given workflow objects in relation to this panel's 'processCategory'.
   * The method is asynchronous. No immediate value will be returned. Instead, the 'model' will have its
   * property $processCategory + $retrievalTarget set (e.g. "publication" + "InboxTasks")
   * after asynchronous processing has finished.
   *
   * @param allItems the workflow objets to filter.
   * @param wfObjectType the type of the workflow objects to filter ("tasks" vs. "processes").
   * @param retrievalTarget the target that this request aims at ("InboxTasks" vs. "PendingProcesses").
   * @param additionalRequestParameters additional request parameters.
   * /
  private*/ function filterWorkflowObjects(allItems/*:Array*/, wfObjectType/*:String*/, retrievalTarget/*:String*/, additionalRequestParameters/*:Object = null*/)/*:void*/ {var this$=this;if(arguments.length<=3)additionalRequestParameters=null;
    // We distinguish workflow objects that we already know about (their 'processCategory' and their 'creationDate')
    // from those that we do not know about. Only the unknown ones are sent to the server. The result is merged with
    // the known ones later on.
    var known/*:Array*/ = [];
    var unknown/*:Array*/ = [];
    var creationDateKey/*:String*/ = '___creationDate';
    var processCategoryKey/*:String*/ = '___processCategory';

    // For pending processes we need to filter those out for which a associated task is already in the inbox.
    var inboxProcesses/*:Array*/ = [];
    if (retrievalTarget === PENDING_PROCESSES$static) {
      inboxProcesses =AS3.as( this.model$7zBt.get(this.processCategory + INBOX_PROCESSES$static),  Array) || [];
    }

    allItems.forEach(function (wfObject/*:WorkflowObject*/)/*:void*/ {
      if (inboxProcesses.indexOf(wfObject) === -1) {
        if (wfObject[processCategoryKey] === this$.processCategory) {
          // We know that this workflow object is of our 'processCategory'
          known.push(wfObject);
        } else if (!wfObject[processCategoryKey]) {
          // We know nothing about this workflow object --> ask the server about it.
          unknown.push(wfObject);
        }
      }
    });

    var responseItems/*:Array*/ = [];
    var responseDates/*:Array*/ = [];

    // For performance reasons (more specifically to avoid request timeout) we do a batched request
    // and join the result as soon as all individual batch requests have returned.
    com.coremedia.ui.data.impl.RemoteService.batchedForkJoinRequest(
            // request batches sequentially
            true,

            // items to request
            unknown,

            // batch size for each request
            com.coremedia.cms.editor.controlroom.controlRoomContext.getFilterWFObjectsRequestBatchSize() || DEFAULT_BATCH_LIMIT$static,

            // uri
            "workflow/filter/" + wfObjectType,

            // method
            "POST",

            // additional request params
            Ext.apply({processCategory: this.processCategory}, additionalRequestParameters),

            // response handler function for each individual batch request
            function (rsmr/*:RemoteServiceMethodResponse*/)/*:void*/ {
              var json/*:Object*/ =AS3.as( rsmr.getResponseJSON(),  Object);
              if (json) {
                // Gather items and dates of individual requests.
                responseItems = responseItems.concat(AS3.as(json.items,  Array) || []);
                responseDates = responseDates.concat(AS3.as(json.dates,  Array) || []);
              }
            },

            // handler function after all batch requests have returned and their responses have been processed
            function ()/*:void*/ {
              responseItems.forEach(function (item/*:WorkflowObject*/, index/*:int*/)/*:void*/ {
                // Mark the filtered items and thus make them locally "known".
                item[creationDateKey] = responseDates[index];
                item[processCategoryKey] = this$.processCategory;
              });

              // Join the newly filtered items with the already known ones.
              responseItems = responseItems.concat(known);

              // Sort everything.
              responseItems.sort(function (val1/*:WorkflowObject*/, val2/*:WorkflowObject*/)/*:Number*/ {
                return (AS3.as(val1[creationDateKey],  com.coremedia.ui.data.Calendar)).getDate().getTime() >= (AS3.as(val2[creationDateKey],  com.coremedia.ui.data.Calendar)).getDate().getTime() ? -1 : 1;
              });

              // Set the model property --> Triggers the ValueExpression.
              this$.model$7zBt.set(this$.processCategory + retrievalTarget, responseItems);

              if (retrievalTarget === INBOX_TASKS$static) {
                // Remember which processes have one of their tasks in the inbox
                // These processes will not show as pending processes (see above).
                this$.model$7zBt.set(this$.processCategory + INBOX_PROCESSES$static, responseItems.map(function (task/*:Task*/)/*:Process*/ {
                  return task.getContainingProcess();
                }));

                if (this$.inboxTasksWaiting$7zBt && this$.inboxTasksWaiting$7zBt.length > 0) {
                  // If 'inboxTasksWaiting' is set and greater than 0, we have new inbox tasks waiting to be filtered
                  // and need to do a new request.
                  var waitingInboxTasks/*:Array*/ = this$.inboxTasksWaiting$7zBt.concat([]);
                  this$.inboxTasksWaiting$7zBt = [];
                  this$.filterWorkflowObjects$7zBt(waitingInboxTasks, wfObjectType, retrievalTarget, additionalRequestParameters);
                } else {
                  // Otherwise we are done for the moment and delete 'inboxTasksWaiting'.
                  this$.inboxTasksWaiting$7zBt = undefined;
                }
              }

              if (retrievalTarget === PENDING_PROCESSES$static) {
                if (this$.allPendingProcessesWaiting$7zBt && this$.allPendingProcessesWaiting$7zBt.length > 0) {
                  // If 'allPendingProcessesWaiting' is set and greater than 0, we have new pending processes waiting to be filtered
                  // and need to do a new request.
                  var waitingPendingProcesses/*:Array*/ = this$.allPendingProcessesWaiting$7zBt.concat([]);
                  this$.allPendingProcessesWaiting$7zBt = [];
                  this$.filterWorkflowObjects$7zBt(waitingPendingProcesses, wfObjectType, retrievalTarget, additionalRequestParameters);
                } else {
                  // Otherwise we are done for the moment and delete 'allPendingProcessesWaiting'.
                  this$.allPendingProcessesWaiting$7zBt = undefined;
                }
              }
            });
  }/*

  protected*/ function getFinishedProcessesValueExpression()/*:ValueExpression*/ {var this$=this;
    if (!this.finishedProcessesValueExpression$7zBt) {
      this.finishedProcessesValueExpression$7zBt = com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:Array*/ {
        var processes/*:Array*/ = [];
        var capListRepository/*:CapListRepository*/ = com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl.getInstance();
        var completedProcessesList/*:CapList*/ = capListRepository.getCompletedProcesses();
        var completedProcesses/*:Array*/ = completedProcessesList.getItems();

        if (completedProcesses === undefined) {
          return undefined;
        }

        if (completedProcesses) {
          completedProcesses.forEach(function (process/*:ProcessImpl*/)/*:void*/ {
            if (com.coremedia.ui.data.RemoteBeanUtil.isAccessible(process) && this$.isProcessOfConfiguredType(process)) {
              processes.push(process);
            }
          });
        }

        processes.sort(compareByCompletionDate$static);
        return processes;
      });
    }

    return this.finishedProcessesValueExpression$7zBt;
  }/*

  public*/ function isProcessOfConfiguredType(process/*:Process*/)/*:Boolean*/ {
    if (!process) {
      return undefined;
    }
    var definition/*:ProcessDefinition*/ = process.getDefinition();
    if (!definition) {
      return undefined;
    }
    var processName/*:String*/ = definition.getName();
    if (processName) {
      return processName.indexOf(this.processCategory) != -1;
    } else {
      return undefined;
    }
  }/*

  private static*/ function compareByCompletionDate$static(val1/*:Process*/, val2/*:Process*/)/*:Number*/ {
    var completionDate1/*:Date*/ = val1.getCompletionDate();
    var completionDate2/*:Date*/ = val2.getCompletionDate();

    if (completionDate1 && completionDate2) {
      return completionDate1.getTime() > completionDate2.getTime() ? -1 : 1;
    }

    if (!completionDate1) {
      return 1;
    } else if (!completionDate2) {
      return -1;
    }
    return 0;
  }/*

  internal*/ function getModel()/*:Bean*/ {
    if (!this.model$7zBt) {
      this.model$7zBt = com.coremedia.ui.data.beanFactory.createLocalBean({
        activeInboxWorkflowPanelId: com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel.WORKFLOW_LIST_ITEM_ID,
        activePendingWorkflowPanelId: com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel.WORKFLOW_LIST_ITEM_ID,
        activeFinishedWorkflowPanelId: com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel.WORKFLOW_LIST_ITEM_ID
      });
    }
    return this.model$7zBt;
  }/*

  protected*/ function getActiveInboxWorkflowPanelIdValueExpression()/*:ValueExpression*/ {
    return this.activeInboxWorkflowPanelIdValueExpression$7zBt ||
            (this.activeInboxWorkflowPanelIdValueExpression$7zBt = com.coremedia.ui.data.ValueExpressionFactory.create("activeInboxWorkflowPanelId",
                    this.getModel()));
  }/*

  protected*/ function getActivePendingWorkflowPanelIdValueExpression()/*:ValueExpression*/ {
    return this.activePendingWorkflowPanelIdValueExpression$7zBt ||
            (this.activePendingWorkflowPanelIdValueExpression$7zBt = com.coremedia.ui.data.ValueExpressionFactory.create("activePendingWorkflowPanelId",
                    this.getModel()));
  }/*

  private*/ function onAfterRender()/*:void*/ {
    this.mon(this.header, "contextmenu", com.coremedia.ui.util.ContextMenuUtil.disableContextMenu);
    this.mon(this.body, "contextmenu", com.coremedia.ui.util.ContextMenuUtil.disableContextMenu);
    this.setupDropZone$7zBt();
  }/*

  public*/ function containsTask(task/*:Task*/)/*:Boolean*/ {
    var itemId/*:String*/ = this.getItemIdOfListPanelContainingTask(task);
    if (itemId === undefined) {
      return undefined;
    }
    return ! !itemId;
  }/*

  public*/ function containsProcess(process/*:Process*/)/*:Boolean*/ {
    var itemId/*:String*/ = this.getItemIdOfListPanelContainingProcess(process);
    if (itemId === undefined) {
      return undefined;
    }
    return ! !itemId;
  }/*

  public*/ function getListPanelContainingTask(task/*:Task*/)/*:Component*/ {
    var itemId/*:String*/ = this.getItemIdOfListPanelContainingTask(task);
    if (itemId === undefined) {
      return undefined;
    }

    var found/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector().itemId(itemId).build());
    return found && found.length > 0 && found[0];
  }/*

  public*/ function getListPanelContainingProcess(process/*:Process*/)/*:Component*/ {
    var itemId/*:String*/ = this.getItemIdOfListPanelContainingProcess(process);
    if (itemId === undefined) {
      return undefined;
    }

    var found/*:Array*/ = this.query(com.coremedia.ui.util.createComponentSelector().itemId(itemId).build());
    return found && found.length > 0 && found[0];
  }/*

  public*/ function getItemIdOfListPanelContainingTask(task/*:Task*/)/*:String*/ {
    var inboxTasks/*:Array*/ = this.getInboxTasksValueExpression().getValue();
    if (inboxTasks && inboxTasks.indexOf(task) !== -1) {
      return TabbedWorkflowPanelBase.WORKFLOW_LIST_INBOX_ITEM_ID;
    }

    var process/*:Process*/ = task.getContainingProcess();
    var processPanelItemId/*:String*/ = this.getItemIdOfListPanelContainingProcess(process);
    if (! !processPanelItemId) {
      return processPanelItemId;
    }

    if (inboxTasks === undefined || processPanelItemId === undefined) {
      return undefined;
    }

    return null;
  }/*

  public*/ function getItemIdOfListPanelContainingProcess(process/*:Process*/)/*:String*/ {
    var pendingProcesses/*:Array*/ = this.getPendingProcessesValueExpression().getValue();
    if (pendingProcesses && pendingProcesses.indexOf(process) !== -1) {
      return TabbedWorkflowPanelBase.WORKFLOW_LIST_PENDING_ITEM_ID;
    }

    var finishedProcesses/*:Array*/ = this.getFinishedProcessesValueExpression().getValue();
    if (finishedProcesses && finishedProcesses.indexOf(process) !== -1) {
      return TabbedWorkflowPanelBase.WORKFLOW_LIST_FINISHED_ITEM_ID;
    }

    if (pendingProcesses === undefined || finishedProcesses === undefined) {
      return undefined;
    }

    return null;
  }/*

  /**
   * Switches to the task in the workflow panel (either in inbox, pending or finished) and either selects it or
   * directly opens the details.
   *
   * @param task task to switch to
   * @param openDetails if to directly open the details (<code>true</code>) or only select the task in the list
   *                    (<code>false</code>); defaults to <code>true</code>
   * /
  public*/ function switchToTaskInWorkflowPanel(task/*:Task*/, openDetails/*:Boolean = true*/)/*:void*/ {var this$=this;if(arguments.length<=1)openDetails=true;
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              return this$.containsTask(task);
            },
            function ()/*:void*/ {
              this$.doSwitchToTaskInWorkflowPanel$7zBt(task, openDetails);
            });
  }/*

  public*/ function switchToProcessInWorkflowPanel(process/*:Process*/)/*:void*/ {var this$=this;
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              return this$.containsProcess(process);
            },
            function ()/*:void*/ {
              this$.doSwitchToProcessInWorkflowPanel$7zBt(process);
            });
  }/*

  /**
   * Switches to the task in workflow panel's inbox and either selects it or directly opens the details.
   *
   * @param task task to switch to
   * @param openDetails if to directly open the details (<code>true</code>) or only select the task in the list
   *                    (<code>false</code>); defaults to <code>true</code>
   * /
  public*/ function switchToTaskInInbox(task/*:Task*/, openDetails/*:Boolean = true*/)/*:void*/ {var this$=this;if(arguments.length<=1)openDetails=true;
    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            function ()/*:Boolean*/ {
              var inboxTasks/*:Array*/ = this$.getInboxTasksValueExpression().getValue();
              return inboxTasks && inboxTasks.indexOf(task) !== -1;
            },
            function ()/*:void*/ {
              this$.doSwitchToTaskInWorkflowPanel$7zBt(task, openDetails);
            });
  }/*

  private*/ function doSwitchToTaskInWorkflowPanel(task/*:Task*/, openDetails/*:Boolean*/)/*:void*/ {var this$=this;
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
              this$.expand(true);
            }
    );

    var listPanelContainer/*:Component*/ = this.getListPanelContainingTask(task);
    this.setActiveTab(listPanelContainer);

    var switchingListPanel/*:SwitchingListPanel*/;
    // inbox & pending
    var found/*:Array*/ = AS3.cast(Ext.container.Container,listPanelContainer).queryBy(function (comp/*:Component*/)/*:Boolean*/ {
      return AS3.is( comp,  com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel);
    });
    if (found && found.length > 0) {
      switchingListPanel = found[0];
    }

    if (switchingListPanel) {AS3.is(
      listPanelContainer,  com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer) && AS3.cast(com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer,listPanelContainer).switchToList();AS3.is(

      switchingListPanel,  com.coremedia.cms.editor.controlroom.workflow.TaskListPanel) ?
              AS3.cast(com.coremedia.cms.editor.controlroom.workflow.TaskListPanel,switchingListPanel).setSelectedItems([task]) :
              AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel,switchingListPanel).setSelectedItems([task.getContainingProcess()]);

      if (openDetails) {
        var selectedPredicate/*:Function*/;
        if (AS3.is(listPanelContainer,  com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel)) {
          selectedPredicate = function ()/*:Boolean*/ {
            return AS3.cast(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel,listPanelContainer).getSelectedTaskValueExpression().getValue() === task;
          };
        } else if (AS3.is(listPanelContainer,  com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel)) {
          selectedPredicate = function ()/*:Boolean*/ {
            return AS3.cast(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel,listPanelContainer).getSelectedProcessValueExpression().getValue() ===AS3.bind( task,"getContainingProcess");
          };
        }
        if (selectedPredicate) {
          com.coremedia.ui.util.ConcurrentUtil.executeWhen(selectedPredicate,AS3.bind( switchingListPanel,"switchToDetail"));
        }
      }
    }
  }/*

  private*/ function doSwitchToProcessInWorkflowPanel(process/*:Process*/)/*:void*/ {var this$=this;
    com.coremedia.ui.util.EventUtil.invokeLater(function ()/*:void*/ {
              this$.expand(true);
            }
    );

    var listPanelContainer/*:Component*/ = this.getListPanelContainingProcess(process);
    this.setActiveTab(listPanelContainer);

    var switchingListPanel/*:SwitchingListPanel*/;
    if (AS3.is(listPanelContainer,  com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel)) {
      // this is the case for the finished panel
      switchingListPanel = AS3.cast(com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel,listPanelContainer);
    }

    if (switchingListPanel) {
      (AS3.is(listPanelContainer,  com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer))
      && AS3.cast(com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer,listPanelContainer).switchToList();

      (AS3.is(switchingListPanel,  com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel))
      && AS3.cast(com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel,switchingListPanel).setSelectedItems([process]);
    }
  }/*

  private*/ function setupDropZone()/*:void*/ {
    // drop zone
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{});
    dropZoneConfig.ddGroup = "ContentLinkDD";
    // workflow panel header drop zone
    var workflowHeaderDropZone/*:WorkflowPanelHeaderDropZone*/ = new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelHeaderDropZone(this,
            new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel(this), dropZoneConfig);
    workflowHeaderDropZone.addToGroup("ContentDD");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.tab.Panel",
      excludedTasks: null,
      inboxTasksValueExpression$7zBt: null,
      pendingProcessesValueExpression$7zBt: null,
      finishedProcessesValueExpression$7zBt: null,
      activeInboxWorkflowPanelIdValueExpression$7zBt: null,
      activePendingWorkflowPanelIdValueExpression$7zBt: null,
      model$7zBt: null,
      inboxTasksWaiting$7zBt: null,
      allPendingProcessesWaiting$7zBt: null,
      constructor: TabbedWorkflowPanelBase$,
      super$7zBt: function() {
        Ext.tab.Panel.prototype.constructor.apply(this, arguments);
      },
      processCategory: null,
      getInboxTasksValueExpression: getInboxTasksValueExpression,
      getPendingProcessesValueExpression: getPendingProcessesValueExpression,
      filterWorkflowObjects$7zBt: filterWorkflowObjects,
      getFinishedProcessesValueExpression: getFinishedProcessesValueExpression,
      isProcessOfConfiguredType: isProcessOfConfiguredType,
      getModel: getModel,
      getActiveInboxWorkflowPanelIdValueExpression: getActiveInboxWorkflowPanelIdValueExpression,
      getActivePendingWorkflowPanelIdValueExpression: getActivePendingWorkflowPanelIdValueExpression,
      onAfterRender$7zBt: onAfterRender,
      containsTask: containsTask,
      containsProcess: containsProcess,
      getListPanelContainingTask: getListPanelContainingTask,
      getListPanelContainingProcess: getListPanelContainingProcess,
      getItemIdOfListPanelContainingTask: getItemIdOfListPanelContainingTask,
      getItemIdOfListPanelContainingProcess: getItemIdOfListPanelContainingProcess,
      switchToTaskInWorkflowPanel: switchToTaskInWorkflowPanel,
      switchToProcessInWorkflowPanel: switchToProcessInWorkflowPanel,
      switchToTaskInInbox: switchToTaskInInbox,
      doSwitchToTaskInWorkflowPanel$7zBt: doSwitchToTaskInWorkflowPanel,
      doSwitchToProcessInWorkflowPanel$7zBt: doSwitchToProcessInWorkflowPanel,
      setupDropZone$7zBt: setupDropZone,
      statics: {
        WORKFLOW_LIST_INBOX_ITEM_ID: "workflowListInboxItemId",
        WORKFLOW_LIST_PENDING_ITEM_ID: "workflowListPendingItemId",
        WORKFLOW_LIST_FINISHED_ITEM_ID: "workflowListFinishedItemId"
      },
      requires: [
        "Ext",
        "Ext.container.Container",
        "Ext.dd.DropZone",
        "Ext.tab.Panel",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.collaboration.controlroom.rest.CapListRepositoryImpl",
        "com.coremedia.ui.data.Calendar",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.data.impl.RemoteService",
        "com.coremedia.ui.util.ConcurrentUtil",
        "com.coremedia.ui.util.ContextMenuUtil",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.createComponentSelector"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.controlRoomContext",
        "com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer",
        "com.coremedia.cms.editor.controlroom.workflow.TaskListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelHeaderDropZone"
      ]
    };
});
