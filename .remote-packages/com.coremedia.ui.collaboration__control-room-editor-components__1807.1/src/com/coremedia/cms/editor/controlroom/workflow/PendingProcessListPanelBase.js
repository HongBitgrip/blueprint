Ext.define("com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanelBase", function(PendingProcessListPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

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

public class PendingProcessListPanelBase extends Panel implements SwitchingWorkflowContainer {
  [Bindable]
  public var activeItemValueExpression:ValueExpression;

  [Bindable]
  public var processListValueExpression:ValueExpression;

  private var processValueExpression:ValueExpression;

  public*/ function PendingProcessListPanelBase$(config/*:PendingProcessListPanel = null*/) {var this$=this;if(arguments.length<=0)config=null;
    this.super$VdVi(config);

    AS3.getBindable(this,"processListValueExpression").addChangeListener(AS3.bind(this,"checkIfDetailTaskExists$VdVi"));

    var listGrid/*:GridPanel*/ =AS3.as( this.queryById(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel.WORKFLOW_LIST_ITEM_ID),  Ext.grid.Panel);
    this.mon(listGrid.getSelectionModel(), "selectionchange",AS3.bind( this,"onSelectionChange$VdVi"));
    this.mon(listGrid, "rowdblclick",AS3.bind( this,"handleClickGridPanel$VdVi"));
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
    var processList/*:Array*/ = AS3.getBindable(this,"processListValueExpression").getValue();
    var process/*:Bean*/ = this.getSelectedProcessValueExpression().getValue();

    if (!process || !processList || processList.indexOf(process) === -1) {
      // process that is shown in detail view is no longer in the process list
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
      beanRecord && this.getSelectedProcessValueExpression().setValue(beanRecord.getBean());
    }
  }/*

  public*/ function switchToDetail()/*:void*/ {
    AS3.getBindable(this,"activeItemValueExpression").setValue(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel.WORKFLOW_DETAIL_ITEM_ID);
  }/*

  public*/ function switchToList()/*:void*/ {
    AS3.getBindable(this,"activeItemValueExpression").setValue(com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel.WORKFLOW_LIST_ITEM_ID);
  }/*

  public*/ function getSelectedProcessValueExpression()/*:ValueExpression*/ {
    if (!this.processValueExpression$VdVi) {
      this.processValueExpression$VdVi = com.coremedia.ui.data.ValueExpressionFactory.createFromValue(undefined);
    }
    return this.processValueExpression$VdVi;
  }/*


  override protected*/ function beforeDestroy()/*:void*/ {
    AS3.getBindable(this,"processListValueExpression").removeChangeListener(AS3.bind(this,"checkIfDetailTaskExists$VdVi"));

    Ext.panel.Panel.prototype.beforeDestroy.call(this);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      mixins: ["com.coremedia.cms.editor.controlroom.workflow.SwitchingWorkflowContainer"],
      processValueExpression$VdVi: null,
      constructor: PendingProcessListPanelBase$,
      super$VdVi: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      checkIfDetailTaskExists$VdVi: checkIfDetailTaskExists,
      handleClickGridPanel$VdVi: handleClickGridPanel,
      onSelectionChange$VdVi: onSelectionChange,
      switchToDetail: switchToDetail,
      switchToList: switchToList,
      getSelectedProcessValueExpression: getSelectedProcessValueExpression,
      beforeDestroy: beforeDestroy,
      config: {
        activeItemValueExpression: null,
        processListValueExpression: null
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
        "com.coremedia.cms.editor.controlroom.workflow.PendingProcessListPanel",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowDetailColumn"
      ]
    };
});
