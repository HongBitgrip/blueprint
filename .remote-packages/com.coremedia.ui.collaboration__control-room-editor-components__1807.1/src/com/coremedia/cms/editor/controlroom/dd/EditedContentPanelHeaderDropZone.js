Ext.define("com.coremedia.cms.editor.controlroom.dd.EditedContentPanelHeaderDropZone", function(EditedContentPanelHeaderDropZone) {/*package com.coremedia.cms.editor.controlroom.dd {
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class EditedContentPanelHeaderDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  public*/ function EditedContentPanelHeaderDropZone$(component/*:ContentGridPanel*/, editedContentsPanelDragDropModel/*:DragDropModel*/, config/*:DropZone*/) {
    this.super$sTvk(component.header.el, config);
    this.beanCollectionDropZoneHelper$sTvk = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(editedContentsPanelDragDropModel, false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$sTvk.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.beanCollectionDropZoneHelper$sTvk.notifyOut(source, e, data);
  }/*

  public override*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$sTvk.onContainerOver(source, e, data);
  }/*

  public override*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    return this.beanCollectionDropZoneHelper$sTvk.onContainerDrop(source, e, data);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$sTvk: null,
      constructor: EditedContentPanelHeaderDropZone$,
      super$sTvk: function() {
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
