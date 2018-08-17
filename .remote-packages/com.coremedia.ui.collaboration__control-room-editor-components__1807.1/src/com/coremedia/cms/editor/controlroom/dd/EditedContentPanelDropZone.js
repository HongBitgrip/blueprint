Ext.define("com.coremedia.cms.editor.controlroom.dd.EditedContentPanelDropZone", function(EditedContentPanelDropZone) {/*package com.coremedia.cms.editor.controlroom.dd {
import com.coremedia.cms.editor.sdk.components.ContentGridPanel;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class EditedContentPanelDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  public*/ function EditedContentPanelDropZone$(component/*:ContentGridPanel*/, editedContentsDragDropModel/*:DragDropModel*/, config/*:DropZone*/) {
    this.super$mP51(component.getEl(), config);
    this.beanCollectionDropZoneHelper$mP51 = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(editedContentsDragDropModel, false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$mP51.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.beanCollectionDropZoneHelper$mP51.notifyOut(source, e, data);
  }/*

  public override*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$mP51.onContainerOver(source, e, data);
  }/*

  public override*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    return this.beanCollectionDropZoneHelper$mP51.onContainerDrop(source, e, data);
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$mP51: null,
      constructor: EditedContentPanelDropZone$,
      super$mP51: function() {
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
