Ext.define("com.coremedia.cms.editor.controlroom.workflow.dd.WorkflowPanelHeaderDropZone", function(WorkflowPanelHeaderDropZone) {/*package com.coremedia.cms.editor.controlroom.workflow.dd {

import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;
import ext.panel.Panel;

public class WorkflowPanelHeaderDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;
  private var panel:Panel;
  private var expandHoverTimer:Object;

  public*/ function WorkflowPanelHeaderDropZone$(panel/*:Panel*/,
                                              workflowPanelDragDropModel/*:DragDropModel*/,
                                              config/*:DropZone*/) {
    this.panel$7h0I = panel;
    this.super$7h0I(panel.header.el, config);
    this.beanCollectionDropZoneHelper$7h0I = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(workflowPanelDragDropModel, false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    var dropAllowed/*:String*/ = this.beanCollectionDropZoneHelper$7h0I.notifyEnter(source, event, data);

    if (!this.expandHoverTimer$7h0I) {
      this.expandHoverTimer$7h0I = window.setTimeout(AS3.bind(this,"expandOnHover$7h0I"), 1000);
    }

    return dropAllowed;
  }/*

  private*/ function expandOnHover()/*:void*/ {
    this.expandHoverTimer$7h0I = null;
    this.panel$7h0I.expand(true);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.expandHoverTimer$7h0I && window.clearTimeout(this.expandHoverTimer$7h0I);
    this.expandHoverTimer$7h0I = null;

    this.beanCollectionDropZoneHelper$7h0I.notifyOut(source, e, data);
  }/*

  public override*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$7h0I.onContainerOver(source, e, data);
  }/*

  public override*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    this.expandHoverTimer$7h0I && window.clearTimeout(this.expandHoverTimer$7h0I);
    this.expandHoverTimer$7h0I = null;

    var dropped/*:Boolean*/ = this.beanCollectionDropZoneHelper$7h0I.onContainerDrop(source, e, data);

    if (dropped) {
      this.panel$7h0I.expand(true);
    }

    return dropped;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$7h0I: null,
      panel$7h0I: null,
      expandHoverTimer$7h0I: null,
      constructor: WorkflowPanelHeaderDropZone$,
      super$7h0I: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      expandOnHover$7h0I: expandOnHover,
      notifyOut: notifyOut,
      onContainerOver: onContainerOver,
      onContainerDrop: onContainerDrop,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ]
    };
});
