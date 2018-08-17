Ext.define("com.coremedia.cms.editor.controlroom.workflow.TaskListPanelBase", function(TaskListPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.common.SESSION;
import com.coremedia.cap.workflow.Task;
import com.coremedia.cap.workflow.impl.TaskImpl;
import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel;
import com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone;
import com.coremedia.ui.components.ExtendableGrid;
import com.coremedia.ui.data.ProblemDescription;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.util.PropertyChangeEventUtil;

import ext.dd.DropZone;

public class TaskListPanelBase extends ExtendableGrid implements SwitchingListPanel {

  private var selectedItems:Array;

  public*/ function TaskListPanelBase$(config/*:TaskListPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$Z1oV(config);

    AS3.getBindable(this,"taskListValueExpression").addChangeListener(com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.invalidateWorkflowContentLockingForActivePremular);
    this.on("afterRender",AS3.bind( this,"setupDropZone$Z1oV"));
  }/*

  [Bindable]
  public var taskListValueExpression:ValueExpression;

  public native function get toolbarButtonsValueExpression():ValueExpression;

  public*/ function switchToDetail()/*:void*/ {
    this.switchToDetailHandler && this.switchToDetailHandler();
  }/*

  [ExtConfig]
  public var switchToDetailHandler:Function;

  [ProvideToExtChildren]
  public*/ function getSelectedItems()/*:Array*/ {
    return this.selectedItems$Z1oV;
  }/*

  public*/ function setSelectedItems(value/*:Array*/)/*:void*/ {
    var oldValue/*:Array*/ = this.selectedItems$Z1oV;
    this.selectedItems$Z1oV = value;
    com.coremedia.ui.data.util.PropertyChangeEventUtil.fireEvent(this, com.coremedia.cms.editor.controlroom.workflow.TaskListPanel.SELECTED_ITEMS_VARIABLE_NAME, oldValue, value);
  }/*

  protected*/ function convertAccepted(value/*:**/, task/*:Task*/)/*:Boolean*/ {
    if (task) {
      var tasksAccepted/*:Array*/ = com.coremedia.cap.common.SESSION.getConnection().getWorkflowRepository().getWorklistService().getTasksAccepted();
      return tasksAccepted.indexOf(task) !== -1;
    } else {
      return false;
    }
  }/*
  protected*/ function convertWarnings(value/*:**/, task/*:Task*/)/*:Boolean*/ {
    var taskImpl/*:TaskImpl*/ =AS3.as( task,  com.coremedia.cap.workflow.impl.TaskImpl);

    if (taskImpl) {
      var warnings/*:Array*/ = taskImpl.getWarnings();
      return warnings && warnings.length > 0;
    } else {
      return false;
    }
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"taskListValueExpression").removeChangeListener(com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils.invalidateWorkflowContentLockingForActivePremular);

    com.coremedia.ui.components.ExtendableGrid.prototype.beforeDestroy.call(this);
  }/*

  private*/ function setupDropZone()/*:void*/ {
    // drop zone
    var dropZoneConfig/*:DropZone*/ = AS3.cast(Ext.dd.DropZone,{});
    dropZoneConfig.ddGroup = "ContentLinkDD";
    // workflow panel drop zone
    var workflowDropZone/*:WorkflowPanelDropZone*/ = new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone(this, new com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel(this), dropZoneConfig);
    workflowDropZone.addToGroup("ContentDD");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.ExtendableGrid",
      mixins: ["com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel"],
      metadata: {getSelectedItems: ["ProvideToExtChildren"]},
      selectedItems$Z1oV: null,
      constructor: TaskListPanelBase$,
      super$Z1oV: function() {
        com.coremedia.ui.components.ExtendableGrid.prototype.constructor.apply(this, arguments);
      },
      switchToDetail: switchToDetail,
      switchToDetailHandler: null,
      getSelectedItems: getSelectedItems,
      setSelectedItems: setSelectedItems,
      convertAccepted: convertAccepted,
      convertWarnings: convertWarnings,
      beforeDestroy: beforeDestroy,
      setupDropZone$Z1oV: setupDropZone,
      config: {taskListValueExpression: null},
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.cap.common.SESSION",
        "com.coremedia.cap.workflow.impl.TaskImpl",
        "com.coremedia.cms.editor.controlroom.workflow.SwitchingListPanel",
        "com.coremedia.ui.components.ExtendableGrid",
        "com.coremedia.ui.data.util.PropertyChangeEventUtil"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.TaskListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowUtils",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDragDropModel",
        "com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone"
      ]
    };
});
