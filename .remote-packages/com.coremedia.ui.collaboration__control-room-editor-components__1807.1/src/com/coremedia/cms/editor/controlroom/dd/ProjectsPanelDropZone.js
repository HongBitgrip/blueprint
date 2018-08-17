Ext.define("com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropZone", function(ProjectsPanelDropZone) {/*package com.coremedia.cms.editor.controlroom.dd {
import com.coremedia.cms.editor.controlroom.ProjectsPanelBase;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.Ext;
import ext.dd.DragSource;
import ext.dd.DropZone;
import ext.dom.Element;
import ext.event.Event;

import js.HTMLElement;

/**
 * Drop zone for the projects panel. It supports two drop zone models:
 * <ul>
 *  <li> content set panel drop zone model - handles {@link ext.dd.DropZone#onContainerOver},
 *  {@link ext.dd.DropZone#onContainerDrop} </li>
 *  <li> content sets drop zone model - handles on {@link ext.dd.DropZone#onNodeOver},
 *  {@link ext.dd.DropZone#onNodeDrop} </li>
 *  </ul>
 * /
public class ProjectsPanelDropZone extends DropZone {

  private static const*/var ROW_CLASS$static/*:String*/ = "x-grid-row";/*
  private static const*/var ROW_OVER_CLASS$static/*:String*/ = "x-grid-row-over";/*

  private var nodesDropZoneHelper:BeanCollectionDropZoneHelper;   // dnd over project nodes
  private var projectsPanel:ProjectsPanelBase;
  private var lastNodeElementOver:Element;

  public*/ function ProjectsPanelDropZone$(el/*:Element*/, component/*:ProjectsPanelBase*/, config/*:DropZone*/) {
    this.super$s4cp(el, config);

    this.projectsPanel$s4cp = component;
    // plugin a drop model for the project nodes
    this.nodesDropZoneHelper$s4cp = new com.coremedia.ui.util.BeanCollectionDropZoneHelper(new com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropModel(component), false);
  }/*

  public override*/ function notifyEnter(source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    return this.nodesDropZoneHelper$s4cp.notifyEnter(source, event, data);
  }/*

  public override*/ function notifyOut(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:void*/ {
    this.lastNodeElementOver$s4cp && this.lastNodeElementOver$s4cp.removeCls(ROW_OVER_CLASS$static);
    this.nodesDropZoneHelper$s4cp.notifyOut(source, e, data);
  }/*

  public override*/ function onNodeOver(nodeData/*:Object*/, source/*:DragSource*/, event/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.dd.DropZone.prototype.onNodeOver.call(this,nodeData, source, event, data);

    if (data && data.projects) {
      return this.dropNotAllowed;
    }

    var row/*:Element*/ = getRowFromEvent$static(event);
    if (row) {
      this.lastNodeElementOver$s4cp = row;
      this.lastNodeElementOver$s4cp.addCls(ROW_OVER_CLASS$static);
    } else {
      this.lastNodeElementOver$s4cp = null;
    }

    return this.nodesDropZoneHelper$s4cp.onNodeOver(nodeData, source, event, data);
  }/*

  public override*/ function onNodeDrop(nodeData/*:Object*/, source/*:DragSource*/, dropEvent/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    Ext.dd.DropZone.prototype.onNodeDrop.call(this,nodeData, source, dropEvent, data);

    if (data && data.projects) {
      return false;
    }

    return this.nodesDropZoneHelper$s4cp.onNodeDrop(nodeData, source, dropEvent, data);
  }/*

  override public*/ function getTargetFromEvent(evt/*:Event*/)/*:Object*/ {
    this.lastNodeElementOver$s4cp && this.lastNodeElementOver$s4cp.removeCls(ROW_OVER_CLASS$static);

    var row/*:Element*/ = getRowFromEvent$static(evt);
    if (row) {
      var project/*:Project*/ = getProjectFromRow$static(this.projectsPanel$s4cp, row);
      var node/*:Object*/ = { id : project && project.getUriPath() }; //NOSONAR

      // Just to make sure ...
      row.removeCls(ROW_OVER_CLASS$static);
      return {node: node, ddel: row};
    }
    return null;
  }/*

  override public*/ function onContainerOver(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:String*/ {
    Ext.dd.DropZone.prototype.onContainerOver.call(this,source, e, data);

    if (data && data.projects) {
      return this.dropNotAllowed;
    }

    return this.nodesDropZoneHelper$s4cp.onContainerOver(source, e, data);
  }/*

  override public*/ function onContainerDrop(source/*:DragSource*/, e/*:Event*/, data/*:Object*/)/*:Boolean*/ {
    Ext.dd.DropZone.prototype.onContainerDrop.call(this,source, e, data);

    if (data && data.projects) {
      return false;
    }

    return this.nodesDropZoneHelper$s4cp.onContainerDrop(source, e, data);
  }/*


  private static*/ function getRowFromEvent$static(evt/*:Event*/)/*:Element*/ {
    var rowElement/*:HTMLElement*/ = evt.getTarget("." + ROW_CLASS$static);
    return Ext.get(rowElement);
  }/*

  private static*/ function getProjectFromRow$static(projectsPanel/*:ProjectsPanelBase*/, row/*:Element*/)/*:Project*/ {
    var targetRowIndex/*:int*/ = projectsPanel.getView().indexOf(row.dom);
    var beanRecord/*:BeanRecord*/ = (AS3.as(projectsPanel.getStore().getAt(targetRowIndex),  com.coremedia.ui.store.BeanRecord));
    if (beanRecord) {
      return AS3.as( beanRecord.getBean(),  com.coremedia.cms.editor.controlroom.project.rest.Project);
    }
    return null;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.dd.DropZone",
      nodesDropZoneHelper$s4cp: null,
      projectsPanel$s4cp: null,
      lastNodeElementOver$s4cp: null,
      constructor: ProjectsPanelDropZone$,
      super$s4cp: function() {
        Ext.dd.DropZone.prototype.constructor.apply(this, arguments);
      },
      notifyEnter: notifyEnter,
      notifyOut: notifyOut,
      onNodeOver: onNodeOver,
      onNodeDrop: onNodeDrop,
      getTargetFromEvent: getTargetFromEvent,
      onContainerOver: onContainerOver,
      onContainerDrop: onContainerDrop,
      requires: [
        "Ext",
        "Ext.dd.DropZone",
        "com.coremedia.ui.store.BeanRecord",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropModel",
        "com.coremedia.cms.editor.controlroom.project.rest.Project"
      ]
    };
});
