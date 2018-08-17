Ext.define("com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelDropZone", function(WorkflowPanelDropZone) {/*package com.coremedia.cms.editor.controlroom.workflow.dd {

import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.Component;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class WorkflowPanelDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  public*/ function WorkflowPanelDropZone$(component/*:Component*/,
                                        workflowPanelDragDropModel/*:DragDropModel*/,
                                        config/*:DropZone*/) {
    this.super$tMtb(component.getEl(), config);

    this.beanCollectionDropZoneHelper$tMtb = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(workflowPanelDragDropModel, false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$tMtb.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.beanCollectionDropZoneHelper$tMtb.notifyOut(source, e, data);
  }/*

  public override*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$tMtb.onContainerOver(source, e, data);
  }/*

  public override*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    return this.beanCollectionDropZoneHelper$tMtb.onContainerDrop(source, e, data);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$tMtb: null,
      constructor: WorkflowPanelDropZone$,
      super$tMtb: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onContainerOver: onContainerOver,
      onContainerDrop: onContainerDrop,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ]
    };
});
