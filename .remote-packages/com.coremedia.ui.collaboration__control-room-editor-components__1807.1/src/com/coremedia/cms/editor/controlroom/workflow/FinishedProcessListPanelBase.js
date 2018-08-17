Ext.define("com.coremedia.cms.editor.controlroom.workflow.FinishedProcessListPanelBase", function(FinishedProcessListPanelBase) {/*package com.coremedia.cms.editor.controlroom.workflow {

import com.coremedia.cap.workflow.Process;
import com.coremedia.ui.logging.Logger;
import com.coremedia.ui.store.BeanRecord;

import ext.Component;
import ext.Ext;
import ext.data.Model;
import ext.event.Event;
import ext.grid.GridPanel;
import ext.panel.Panel;
import ext.selection.RowSelectionModel;

import js.HTMLElement;

public class FinishedProcessListPanelBase extends Panel {
  public*/ function FinishedProcessListPanelBase$(config/*:FinishedProcessListPanel = null*/) {if(arguments.length<=0)config=null;
    this.super$4DqD(config);
    this.mon(this.getComponent(0), "rowdblclick",AS3.bind( this,"handleDblClickGridPanel$4DqD"));
    this.mon(this.getComponent(0), "rowkeydown",AS3.bind( this,"handleDblClickGridPanel$4DqD"));
  }/*

  protected static*/ function getDefaultColumns$static()/*:Array*/ {
    var columns/*:Array*/ = [];
    columns.push(new com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn());
    columns.push(Ext.create(com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn, {flex:"1"}));

    return columns;
  }/*

  internal native function get workflowInfoPanels():Array;

  private*/ function handleDblClickGridPanel(grid/*:GridPanel*/, record/*:Model*/, tr/*:HTMLElement*/, rowIndex/*:Number*/, e/*:Event*/)/*:void*/ {
    if (e.getKey() && e.getKey() !== 13) {
      return;
    }

    (AS3.as(grid.getSelectionModel(),  Ext.selection.RowModel)).select(rowIndex, e.ctrlKey);
    var processRecord/*:BeanRecord*/ =AS3.as( (AS3.as(grid.getSelectionModel(),  Ext.selection.RowModel)).getSelection()[0],  com.coremedia.ui.store.BeanRecord);
    var process/*:Process*/ = AS3.cast(com.coremedia.cap.workflow.Process,processRecord.getBean());
    var processName/*:String*/ = process.getDefinition().getName();

    var panelsForProcess/*:Array*/ = this.workflowInfoPanels.filter(function (component/*:Component*/)/*:Boolean*/ {
      return component['itemId'] === processName;
    });

    if (panelsForProcess && panelsForProcess.length === 1) {
      var infoPanelConfig/*:WorkflowForm*/ = panelsForProcess[0];
      com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase.showProcessInfoWindow(process, infoPanelConfig);
      e.preventDefault();
    } else {
      com.coremedia.ui.logging.Logger.warn('FinishedProcessListPanel - no workflowInfoPanel configured for process ' + processName);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.panel.Panel",
      constructor: FinishedProcessListPanelBase$,
      super$4DqD: function() {
        Ext.panel.Panel.prototype.constructor.apply(this, arguments);
      },
      handleDblClickGridPanel$4DqD: handleDblClickGridPanel,
      statics: {getDefaultColumns: getDefaultColumns$static},
      requires: [
        "Ext",
        "Ext.panel.Panel",
        "Ext.selection.RowModel",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.ui.logging.Logger",
        "com.coremedia.ui.store.BeanRecord"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.workflow.ProcessIconColumn",
        "com.coremedia.cms.editor.controlroom.workflow.ProcessInfoWindowBase",
        "com.coremedia.cms.editor.controlroom.workflow.WorkflowNameColumn"
      ]
    };
});
