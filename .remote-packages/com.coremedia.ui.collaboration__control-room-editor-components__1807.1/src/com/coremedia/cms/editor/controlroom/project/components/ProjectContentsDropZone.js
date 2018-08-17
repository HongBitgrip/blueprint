Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDropZone", function(ProjectContentsDropZone) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cap.content.Content;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.dependencies.DependencyTracker;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;
import com.coremedia.ui.util.ConcurrentUtil;
import com.coremedia.ui.util.EventUtil;

import ext.Component;
import ext.data.Store;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.event.Event;

public class ProjectContentsDropZone extends DropZone {

  private var beanCollectionDropZoneHelper:BeanCollectionDropZoneHelper;

  private var dropComponent:Component;
  private var customGetTargetFromEvent:Function;
  private var getActiveStoreOfComponent:Function;
  private var projectContentsDragDropModel:ProjectContentsDragDropModel;
  private var selectedItemsVE:ValueExpression;

  public*/ function ProjectContentsDropZone$(component/*:Component*/, projectContentsDragDropModel/*:ProjectContentsDragDropModel*/, config/*:DropZone*/, customGetTargetFromEvent/*:Function*/, getActiveStoreOfComponent/*:Function*/, selectedItemsVE/*:ValueExpression*/) {
    this.super$vwXd(component.getEl(), config);

    this.dropComponent$vwXd = component;
    this.customGetTargetFromEvent$vwXd = customGetTargetFromEvent;
    this.getActiveStoreOfComponent$vwXd = getActiveStoreOfComponent;
    this.projectContentsDragDropModel$vwXd = projectContentsDragDropModel;
    this.selectedItemsVE$vwXd = selectedItemsVE;

    this.beanCollectionDropZoneHelper$vwXd = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(projectContentsDragDropModel, false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.beanCollectionDropZoneHelper$vwXd.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.beanCollectionDropZoneHelper$vwXd.notifyOut(source, e, data);
  }/*

  public override*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.dd.DropZone.prototype.onNodeOver.call(this,nodeData, source, event, data);
    return this.beanCollectionDropZoneHelper$vwXd.onNodeOver(nodeData, source, event, data);
  }/*

  public override*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, dropEvent/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    var success/*:Boolean*/ = this.beanCollectionDropZoneHelper$vwXd.onNodeDrop(nodeData, source, dropEvent, data);

    // See to it that dropped nodes get selected if their parent is the currently selected folder.
    // Only necessary for the case of a move operation. The case of a copy operation
    // is taken care of elsewhere by means of tracking newly created content.
    if (success && !this.beanCollectionDropZoneHelper$vwXd.isAlternativeRequested(dropEvent) && this.getActiveStoreOfComponent$vwXd) {
      this.selectDroppedNodesIfVisible$vwXd(this.getActiveStoreOfComponent$vwXd(this.dropComponent$vwXd), com.coremedia.ui.util.BeanCollectionDropZoneHelper.extractNodeIds(data));
    }

    return success;
  }/*

  private*/ function selectDroppedNodesIfVisible(componentStore/*:Store*/, droppedContentsUris/*:Array*/)/*:void*/ {var this$=this;
    var droppedContents/*:Array*/ = this.projectContentsDragDropModel$vwXd.getContentsForNodeIds(droppedContentsUris) || [];

    com.coremedia.ui.util.ConcurrentUtil.executeWhen(
            // Predicate: all dropped contents need to be in the container's store
            function ()/*:Boolean*/ {
              var allContentsInStore/*:Boolean*/ = droppedContents.every(function (content/*:Content*/)/*:Boolean*/ {
                return componentStore.findBy(function (record/*:BeanRecord*/)/*:Boolean*/ {
                          return record.getBean() === content;
                        }) !== -1;
              });

              if (allContentsInStore) {
                return true;
              }

              com.coremedia.ui.data.dependencies.DependencyTracker.dependOnObservable(componentStore, "load");

              return false;
            },

            // Then: set selection of container to dropped contents
            function ()/*:void*/ {
              com.coremedia.ui.util.EventUtil.invokeLater(function()/*:void*/ {
                this$.selectedItemsVE$vwXd.setValue(droppedContents);
              });
            }
    );
  }/*

  override public*/ function getTargetFromEvent(e/*:Event*/)/*:Object*/ {
    return this.customGetTargetFromEvent$vwXd(e);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      beanCollectionDropZoneHelper$vwXd: null,
      dropComponent$vwXd: null,
      customGetTargetFromEvent$vwXd: null,
      getActiveStoreOfComponent$vwXd: null,
      projectContentsDragDropModel$vwXd: null,
      selectedItemsVE$vwXd: null,
      constructor: ProjectContentsDropZone$,
      super$vwXd: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onNodeOver: onNodeOver,
      onNodeDrop: onNodeDrop,
      selectDroppedNodesIfVisible$vwXd: selectDroppedNodesIfVisible,
      getTargetFromEvent: getTargetFromEvent,
      requires: [
        "Ext.dd.DropZone",
        "com.coremedia.ui.data.dependencies.DependencyTracker",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper",
        "com.coremedia.ui.util.ConcurrentUtil",
        "com.coremedia.ui.util.EventUtil"
      ]
    };
});
