Ext.define("com.coremedia.cap.workflow.impl.WorklistServiceImpl", function(WorklistServiceImpl) {/*package com.coremedia.cap.workflow.impl {
import com.coremedia.cap.common.Message;
import com.coremedia.cap.common.MessageService;
import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.user.User;
import com.coremedia.cap.user.impl.UserImpl;
import com.coremedia.cap.workflow.*;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.data.impl.RemoteServiceMethod;
import com.coremedia.ui.data.impl.RemoteServiceMethodResponse;
import com.coremedia.ui.util.EventUtil;
import com.coremedia.ui.util.ObjectUtils;

import ext.util.Observable;

public class WorklistServiceImpl extends Observable implements WorklistService {
  // constants for the names of all worklists
  private static const*/var PROCESS_DEFINITIONS_MAY_CREATE$static/*:String*/ = "processDefinitionsMayCreate";/*
  private static const*/var PROCESSES_NOT_STARTED$static/*:String*/ = "processesNotStarted";/*
  private static const*/var PROCESSES_RUNNING$static/*:String*/ = "processesRunning";/*
  private static const*/var TASKS_OFFERED$static/*:String*/ = "tasksOffered";/*
  private static const*/var TASKS_ACCEPTED$static/*:String*/ = "tasksAccepted";/*
  private static const*/var TASKS_ESCALATED$static/*:String*/ = "tasksEscalated";/*
  private static const*/var TASKS_WITH_WARNING$static/*:String*/ = "tasksWithWarning";/*

  /**
   * An object mapping numeric process ids (as strings) to objects
   * mapping task id (URIs) to escalated tasks.
   * /
  private var tasksEscalatedByProcess:Object;

  // an object managing all worklists by name
  private var state:Object =*/function state_(){this.state$QW4L=( {});}/*;

  private var dirtyWorklists:Object = null;

  private var pendingMessages:Array =*/function pendingMessages_(){this.pendingMessages$QW4L=( []);}/*;
  private var initialized:Boolean = false;

  public*/ function WorklistServiceImpl$() {this.super$QW4L();state_.call(this);pendingMessages_.call(this);
    AS3.cast(com.coremedia.cap.common.MessageService,com.coremedia.cap.common.SESSION.getConnection()).addMessageListener("worklist",AS3.bind( this,"processWorklistMessage$QW4L"));
    this.loadWorklists();
  }/*

  /**
   * Loads (or reloads) all worklists. While the worklists are loading,
   * events are blocked and replayed later on.
   * /
  public*/ function loadWorklists()/*:void*/ {
    this.initialized$QW4L = false;
    var worklistUri/*:String*/ = AS3.cast(com.coremedia.cap.user.impl.UserImpl,com.coremedia.cap.common.SESSION.getUser()).getWorklistUri();
    var worklistMethod/*:RemoteServiceMethod*/ = new com.coremedia.ui.data.impl.RemoteServiceMethod(worklistUri, "GET");
    worklistMethod.request({},AS3.bind( this,"worklistLoaded$QW4L"));
  }/*

  private*/ function worklistLoaded(response/*:RemoteServiceMethodResponse*/)/*:void*/ {
    if (response.success) {
      var worklists/*:Object*/ = response.getResponseJSON();
      for (var worklistName/*:String*/ in worklists) {
        this.state$QW4L[worklistName] = this.indexById$QW4L(worklists[worklistName]);
        this.sendEventEventually$QW4L(worklistName);
      }

      this.tasksEscalatedByProcess$QW4L = {};
      var tasksEscalated/*:Object*/ = this.state$QW4L[TASKS_ESCALATED$static];
      for/* each*/ (var $2 in tasksEscalated) {var task/*:Task*/ =tasksEscalated[$2];
        this.addToTasksEscalatedByProcess$QW4L(task);
      }
    }
    this.initialized$QW4L = true;
    for (var i/*:int*/ = 0; i < this.pendingMessages$QW4L.length; i++) {
      this.processWorklistMessage$QW4L(this.pendingMessages$QW4L[i]);
    }
    this.pendingMessages$QW4L = [];
  }/*

  // -------------------------------------------------------------------------------------
  // object handling
  // -------------------------------------------------------------------------------------

  private*/ function getIdOf(object/*:Object*/)/*:**/ {
    return object.getUriPath(); // TODO check
  }/*

  private*/ function indexById(items/*:Array*/)/*:Object*/ {
    var map/*:Object*/ = {};
    for (var j/*:int*/ = 0; j < items.length; j++) {
      var object/*:Object*/ = items[j];
      var id/*:**/ = this.getIdOf$QW4L(object);
      map[id] = object;
    }
    return map;
  }/*

  // -------------------------------------------------------------------------------------
  // Eventually send events after updates
  // -------------------------------------------------------------------------------------

  private*/ function sendEvents()/*:void*/ {
    if (this.dirtyWorklists$QW4L) {
      var toSend/*:Object*/ = this.dirtyWorklists$QW4L;
      this.dirtyWorklists$QW4L = null;

      for (var name/*:String*/ in toSend) {
        //noinspection JSUnfilteredForInLoop
        this.fireEvent(name);
      }
    }
  }/*

  private*/ function sendEventEventually(name/*:String*/)/*:void*/ {
    if (!this.dirtyWorklists$QW4L) {
      this.dirtyWorklists$QW4L = {};
      com.coremedia.ui.util.EventUtil.invokeLater(AS3.bind(this,"sendEvents$QW4L"));
    }
    this.dirtyWorklists$QW4L[name] = true;
  }/*

  // -------------------------------------------------------------------------------------
  // Manager index of escalated tasks
  // -------------------------------------------------------------------------------------

  private*/ function addToTasksEscalatedByProcess(task/*:Task*/)/*:void*/ {
    var processId/*:int*/ = AS3.cast(com.coremedia.cap.workflow.impl.TaskImpl,task).getNumericProcessId();
    var processTasksEscalated/*:Object*/ = this.tasksEscalatedByProcess$QW4L[processId];
    if (!processTasksEscalated) {
      processTasksEscalated = {};
      this.tasksEscalatedByProcess$QW4L[processId] = processTasksEscalated;
    }
    processTasksEscalated[this.getIdOf$QW4L(task)] = task;
  }/*

  private*/ function removeFromTasksEscalatedByProcess(task/*:Task*/)/*:void*/ {
    var processId/*:int*/ = AS3.cast(com.coremedia.cap.workflow.impl.TaskImpl,task).getNumericProcessId();
    var processTasksEscalated/*:Object*/ = this.tasksEscalatedByProcess$QW4L[processId];
    if (processTasksEscalated) {
      delete processTasksEscalated[this.getIdOf$QW4L(task)];
      if (com.coremedia.ui.util.ObjectUtils.isEmpty(processTasksEscalated)) {
        delete this.tasksEscalatedByProcess$QW4L[processId];
      }
    }
  }/*

  // -------------------------------------------------------------------------------------
  // Framework Event Handling
  // -------------------------------------------------------------------------------------

  private*/ function processWorklistMessage(message/*:Message*/)/*:void*/ {
    if (this.initialized$QW4L) {
      var event/*:WorklistEvent*/ = AS3.cast(com.coremedia.cap.workflow.impl.WorklistEvent,message.body);
      AS3.cast(Function,this[event.event]).apply(this, event.parameters);
    } else {
      this.pendingMessages$QW4L.push(message);
    }
  }/*

  /**
   * Add the given object from the indicated worklist, returning true if the object was
   * not previously present in the set. If no object is given, simply return false;
   *
   * @param object the object, which must define a getUriPath() method
   * @param name the name of the worklist
   * @return true iff the object was not previously present in the set
   * /
  private*/ function addTo(object/*:**/, name/*:String*/)/*: void*/  {
    var objects/*:Object*/ = this.state$QW4L[name];
    if (object) {
      var id/*:**/ = object.getUriPath(); // TODO check
      var result/*:Boolean*/ = !objects.hasOwnProperty(id);
      objects[id] = object;
      this.sendEventEventually$QW4L(name);
    }
  }/*

  /**
   * Remove the given object from the indicated worklist, returning true if the object was
   * previously present in the set. If no object is given, simply return false;
   *
   * @param object the object, which must define a getUriPath() method
   * @param name the name of the worklist
   * @return true iff the object was previously present in the set
   * /
  private*/ function removeFrom(object/*: **/, name/*:String*/)/*: void*/ {
    var objects/*:Object*/ = this.state$QW4L[name];
    if (object) {
      var id/*:**/ = object.getUriPath(); // TODO check
      var result/*:Boolean*/ = objects.hasOwnProperty(id);
      delete objects[id];
      this.sendEventEventually$QW4L(name);
    }
  }/*

  /**
   * The task is no longer escalated. remove from all lists.
   * /
  private*/ function taskNoLongerEscalated(task/*: Task*/)/*: void*/ {
    this.removeFrom$QW4L(task, TASKS_ESCALATED$static);
    this.removeFromTasksEscalatedByProcess$QW4L(task);
  }/*

  private*/ function tasksOfProcessNoLongerEscalated(process/*: Process*/)/*:void*/ {
    var processId/*:uint*/ = AS3.cast(com.coremedia.cap.workflow.impl.ProcessImpl,process).getNumericId();
    var escalatedTasksOfProcess/*:Array*/ = this.tasksEscalatedByProcess$QW4L[processId];
    if (escalatedTasksOfProcess) {
      delete this.tasksEscalatedByProcess$QW4L[processId];
      for (var i/*:int*/ = 0; i < escalatedTasksOfProcess.length; i++) {
        var task/*:Task*/ = escalatedTasksOfProcess[i];
        this.removeFrom$QW4L(task, TASKS_ESCALATED$static);
      }
    }
  }/*

  // TODO: check that all callers are called for all users
  private*/ function taskNoLongerOffered(task/*: Task*/)/*:void*/ {
    this.removeFrom$QW4L(task, TASKS_OFFERED$static);
  }/*

  private*/ function taskNoLongerAccepted(task/*: Task*/)/*:void*/ {
    this.removeFrom$QW4L(task, TASKS_ACCEPTED$static);
  }/*

  private*/ function taskNoLongerHasWarnings(task/*: Task*/)/*:void*/ {
    this.removeFrom$QW4L(task, TASKS_WITH_WARNING$static);
  }/*

  /** remove all traces of a process that has no offered or accepted tasks any more. * /
  private*/ function removeClosedProcess(process/*:Process*/)/*:void*/ {
    this.removeFrom$QW4L(process, PROCESSES_NOT_STARTED$static);
    this.removeFrom$QW4L(process, PROCESSES_RUNNING$static);
  }/*

  // -------------------------------------------------------------------------------------
  // Events
  // -------------------------------------------------------------------------------------

  public*/ function processDefinitionEnabled(definition/*: ProcessDefinition*/) {
    this.addTo$QW4L(definition, PROCESS_DEFINITIONS_MAY_CREATE$static);
  }/*

  public*/ function processDefinitionDisabled(definition/*: ProcessDefinition*/) {
    this.removeFrom$QW4L(definition, PROCESS_DEFINITIONS_MAY_CREATE$static);
  }/*

  public*/ function processCreated(process/*: Process*/)/*:void*/ {
    this.addTo$QW4L(process, PROCESSES_NOT_STARTED$static);
  }/*

  public*/ function taskWarningsChanged(task/*: Task*/) {
    this.addTo$QW4L(task, TASKS_WITH_WARNING$static);
  }/*

  public*/ function taskWarningsCleared(task/*: Task*/) {
    this.removeFrom$QW4L(task, TASKS_WITH_WARNING$static);
  }/*

  public*/ function processStarted(process/*: Process*/) {
    this.removeFrom$QW4L(process, PROCESSES_NOT_STARTED$static);
    this.addTo$QW4L(process, PROCESSES_RUNNING$static);
  }/*

  public*/ function processAborted(process/*: Process*/) {
    // all tasks have already been aborted. only need to remove the process itself.
    this.removeClosedProcess$QW4L(process);
  }/*

  // Receive by all, if any escalated tasks; receive by owner
  public*/ function processCompleted(process/*: Process*/) {
    // only escalated tasks may be left, all others are closed.
    // even if the process itself is not managed, its tasks may be (because of their performer).
    this.tasksOfProcessNoLongerEscalated$QW4L(process);
    this.removeClosedProcess$QW4L(process);
  }/*

  public*/ function taskOffered(task/*: Task*/) {
    this.addTo$QW4L(task, TASKS_OFFERED$static);
  }/*

  public*/ function taskRevoked(task/*: Task*/) {
    this.removeFrom$QW4L(task, TASKS_OFFERED$static);
  }/*

  public*/ function taskAccepted(task/*: Task*/, performer/*: User*/) {
    this.taskNoLongerOffered$QW4L(task);
    if (performer === com.coremedia.cap.common.SESSION.getUser()) {
      this.addTo$QW4L(task, TASKS_ACCEPTED$static);
    }
  }/*

  // TODO: It would help if we could get the old performer from the event
  public*/ function taskExited(task/*: Task*/) {
    this.taskNoLongerAccepted$QW4L(task);
  }/*

  // TODO: It would help if we could get the old performer from the event
  public*/ function taskCanceled(task/*: Task*/) {
    this.taskNoLongerAccepted$QW4L(task);
  }/*

  public*/ function taskEscalated(task/*: Task*/) {
    this.addTo$QW4L(task, TASKS_ESCALATED$static);
    this.addToTasksEscalatedByProcess$QW4L(task);
  }/*

  // TODO: It would help if we could get the old performer from the event
  public*/ function taskAborted(task/*: Task*/) {
    this.taskNoLongerEscalated$QW4L(task);
    this.taskNoLongerAccepted$QW4L(task);
    this.taskNoLongerHasWarnings$QW4L(task);
    this.taskNoLongerOffered$QW4L(task);
  }/*

  // TODO: It would help if we could get the old performer from the event
  public*/ function taskRetried(task/*: Task*/, performer/*:User*/) {
    this.taskNoLongerEscalated$QW4L(task);
    if (performer === com.coremedia.cap.common.SESSION.getUser()) {
      this.addTo$QW4L(task, TASKS_ACCEPTED$static);
    }
  }/*

  public*/ function taskSkipped(task/*: Task*/) {
    this.taskNoLongerOffered$QW4L(task);
  }/*

  public*/ function taskDelegated(task/*: Task*/, delegatedTo/*:User*/) {
    this.removeFrom$QW4L(task, TASKS_ACCEPTED$static);
    if (delegatedTo === com.coremedia.cap.common.SESSION.getUser()) {
      this.addTo$QW4L(task, TASKS_ACCEPTED$static);
    }
  }/*

  public*/ function taskDeactivated(task/*: Task*/) {
    // from NOT_STARTED, ACTIVATED, or WAITING to NOT_STARTED.
    // also clears warnings.
    this.taskNoLongerOffered$QW4L(task);
    this.taskNoLongerHasWarnings$QW4L(task);
  }/*

  // -------------------------------------------------------------------------------------
  // API
  // -------------------------------------------------------------------------------------

  private*/ function getWorklist(name/*:String*/)/*:Array*/ {
    com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(this, name);
    var result/*:Array*/ = [];var $2;
    for/* each*/ (var $1 in $2= this.state$QW4L[name]) {var object/*:Object*/ =$2[$1];
      result.push(object);
    }
    return result;
  }/*

  public*/ function getTasksAccepted()/*:Array*/ {
    return this.getWorklist$QW4L(TASKS_ACCEPTED$static);
  }/*

  public*/ function getProcessDefinitionsMayCreate()/*:Array*/ {
    return this.getWorklist$QW4L(PROCESS_DEFINITIONS_MAY_CREATE$static);
  }/*

  public*/ function getProcessesNotStarted()/*:Array*/ {
    return this.getWorklist$QW4L(PROCESSES_NOT_STARTED$static);
  }/*

  public*/ function getProcessesRunning()/*:Array*/ {
    return this.getWorklist$QW4L(PROCESSES_RUNNING$static);
  }/*

  public*/ function getTasksOffered()/*:Array*/ {
    return this.getWorklist$QW4L(TASKS_OFFERED$static);
  }/*

  public*/ function getTasksEscalated()/*:Array*/ {
    return this.getWorklist$QW4L(TASKS_ESCALATED$static);
  }/*

  public*/ function getTasksWithWarning()/*:Array*/ {
    return this.getWorklist$QW4L(TASKS_WITH_WARNING$static);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.util.Observable",
      mixins: ["com.coremedia.cap.workflow.WorklistService"],
      tasksEscalatedByProcess$QW4L: null,
      dirtyWorklists$QW4L: null,
      initialized$QW4L: false,
      constructor: WorklistServiceImpl$,
      super$QW4L: function() {
        Ext.util.Observable.prototype.constructor.apply(this, arguments);
      },
      loadWorklists: loadWorklists,
      worklistLoaded$QW4L: worklistLoaded,
      getIdOf$QW4L: getIdOf,
      indexById$QW4L: indexById,
      sendEvents$QW4L: sendEvents,
      sendEventEventually$QW4L: sendEventEventually,
      addToTasksEscalatedByProcess$QW4L: addToTasksEscalatedByProcess,
      removeFromTasksEscalatedByProcess$QW4L: removeFromTasksEscalatedByProcess,
      processWorklistMessage$QW4L: processWorklistMessage,
      addTo$QW4L: addTo,
      removeFrom$QW4L: removeFrom,
      taskNoLongerEscalated$QW4L: taskNoLongerEscalated,
      tasksOfProcessNoLongerEscalated$QW4L: tasksOfProcessNoLongerEscalated,
      taskNoLongerOffered$QW4L: taskNoLongerOffered,
      taskNoLongerAccepted$QW4L: taskNoLongerAccepted,
      taskNoLongerHasWarnings$QW4L: taskNoLongerHasWarnings,
      removeClosedProcess$QW4L: removeClosedProcess,
      processDefinitionEnabled: processDefinitionEnabled,
      processDefinitionDisabled: processDefinitionDisabled,
      processCreated: processCreated,
      taskWarningsChanged: taskWarningsChanged,
      taskWarningsCleared: taskWarningsCleared,
      processStarted: processStarted,
      processAborted: processAborted,
      processCompleted: processCompleted,
      taskOffered: taskOffered,
      taskRevoked: taskRevoked,
      taskAccepted: taskAccepted,
      taskExited: taskExited,
      taskCanceled: taskCanceled,
      taskEscalated: taskEscalated,
      taskAborted: taskAborted,
      taskRetried: taskRetried,
      taskSkipped: taskSkipped,
      taskDelegated: taskDelegated,
      taskDeactivated: taskDeactivated,
      getWorklist$QW4L: getWorklist,
      getTasksAccepted: getTasksAccepted,
      getProcessDefinitionsMayCreate: getProcessDefinitionsMayCreate,
      getProcessesNotStarted: getProcessesNotStarted,
      getProcessesRunning: getProcessesRunning,
      getTasksOffered: getTasksOffered,
      getTasksEscalated: getTasksEscalated,
      getTasksWithWarning: getTasksWithWarning,
      requires: [
        "Ext.util.Observable",
        "com.coremedia.cap.common.MessageService",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.WorklistService",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.data.impl.RemoteServiceMethod",
        "com.coremedia.ui.util.EventUtil",
        "com.coremedia.ui.util.ObjectUtils"
      ],
      uses: [
        "com.coremedia.cap.user.impl.UserImpl",
        "com.coremedia.cap.workflow.impl.ProcessImpl",
        "com.coremedia.cap.workflow.impl.TaskImpl",
        "com.coremedia.cap.workflow.impl.WorklistEvent"
      ]
    };
});
