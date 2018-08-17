Ext.define("com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanelBase", function(InboxTaskListPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.store.BeanRecord;

import ext.Ext;
import ext.data.Model;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.panel.Panel;
import ext.selection.RowSelectionModel;

import js.HTMLElement;

public class InboxTaskListPanelBase extends Panel implements SwitchingWorkflowContainer {
  [Bindable]
  public var activeItemValueExpression:ValueExpression;

  [Bindable]
  public var taskListValueExpression:ValueExpression;

  private var taskValueExpression:ValueExpression;

  public*/ function InboxTaskListPanelBase$(config/*:InboxTaskListPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$E6v$(config);

    AS3.getBindable(this,"taskListValueExpression").addChangeListener(AS3.bind(this,"checkIfDetailTaskExists$E6v$"));

    var listGrid/*:GridPanel*/ =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel.WORKFLOW_LIST_ITEM_ID),  Ext.grid.Panel);
    this.mon(listGrid.getSelectionModel(), "selectionchange",AS3.bind( this,"onSelectionChange$E6v$"));
    this.mon(listGrid, "rowdblclick",AS3.bind( this,"handleClickGridPanel$E6v$"));
    this.mon(listGrid, "cellclick", function (self, td, cellIndex, record, tr, rowIndex, e, eOpts)/*:void*/ {
      if (e.position.column.xclass === Ext.getClassName(com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn)) {
        listGrid.getSelectionModel().select(record);
        this$.switchToDetail();
      }
    });
    this.mon(listGrid, "cellmousedown", function (self, td, cellIndex, record, tr, rowIndex, e, eOpts)/*:void*/ {
      listGrid.getSelectionModel().select(record);
    });
  }/*

  private*/ function checkIfDetailTaskExists()/*:void*/ {
    var taskList/*:Array*/ = AS3.getBindable(this,"taskListValueExpression").getValue();
    var task/*:Bean*/ = this.getSelectedTaskValueExpression().getValue();

    if (!task || !taskList || taskList.indexOf(task) === -1) {
      // task that is shown in detail view is no longer in the task list
      // thus, switch back to list
      this.switchToList();
    }
  }/*

  private*/ function handleClickGridPanel(grid/*:GridPanel*/, record/*:Model*/, tr/*:HTMLElement*/, rowIndex/*:Number*/, e/*:Event*/)/*:void*/ {
    this.switchToDetail();
  }/*

  private*/ function onSelectionChange(selectionModel/*:RowSelectionModel*/, selected/*:Array*/)/*:void*/ {
    if (AS3.getBindable(this,"activeItemValueExpression").getValue() === com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel.WORKFLOW_LIST_ITEM_ID) {
      var beanRecord/*:BeanRecord*/ = selected && selected.length > 0 && selected[0];
      beanRecord && this.getSelectedTaskValueExpression().setValue(beanRecord.getBean());
    }
  }/*

  public*/ function switchToDetail()/*:void*/ {
    AS3.getBindable(this,"activeItemValueExpression").setValue(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel.WORKFLOW_DETAIL_ITEM_ID);
  }/*

  public*/ function switchToList()/*:void*/ {
    AS3.getBindable(this,"activeItemValueExpression").setValue(com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel.WORKFLOW_LIST_ITEM_ID);
  }/*

  public*/ function getSelectedTaskValueExpression()/*:ValueExpression*/ {
    if (!this.taskValueExpression$E6v$) {
      this.taskValueExpression$E6v$ = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.taskValueExpression$E6v$;
  }/*

  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"taskListValueExpression").removeChangeListener(AS3.bind(this,"checkIfDetailTaskExists$E6v$"));

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer"],
      taskValueExpression$E6v$: null,
      constructor: InboxTaskListPanelBase$,
      super$E6v$: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      checkIfDetailTaskExists$E6v$: checkIfDetailTaskExists,
      handleClickGridPanel$E6v$: handleClickGridPanel,
      onSelectionChange$E6v$: onSelectionChange,
      switchToDetail: switchToDetail,
      switchToList: switchToList,
      getSelectedTaskValueExpression: getSelectedTaskValueExpression,
      beforeDestroy: beforeDestroy,
      config: {
        activeItemValueExpression: null,
        taskListValueExpression: null
      },
      requires: [
        "Ext",
        "Ext.grid.Panel",
        "Ext.panel.Panel",
        "com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.InboxTaskListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn"
      ]
    };
});
