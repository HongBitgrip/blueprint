Ext.define("com.coremedia.cms.editor.controlroom.project.components.ProjectContentsDragDropModel", function(ProjectContentsDragDropModel) {/*package com.coremedia.cms.editor.controlroom.project.components {
import com.coremedia.cap.content.Content;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.DragDropModel;

import ext.dd.DragSource;

public class ProjectContentsDragDropModel implements DragDropModel {

  private var project:Project;

  public*/ function ProjectContentsDragDropModel$(project/*:Project*/) {
    this.project$B53w = project;
  }/*

  public*/ function performDefaultAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var contentsForNodeIds/*:Array*/ = this.getContentsForNodeIds(droppedNodeIds);
    this.project$B53w.addContents(contentsForNodeIds);
  }/*

  public*/ function getContentsForNodeIds(droppedNodeIds/*:Array*/)/*:Array*/ {
    var result/*:Array*/ = [];
    droppedNodeIds.forEach(function (id/*:String*/)/*:void*/ {
      var index/*:int*/ = id.indexOf("content/");
      if (index >= 0) {
        var contentUri/*:String*/ = id.substr(index);
        result.push(AS3.cast(com.coremedia.cap.content.Content,com.coremedia.ui.data.beanFactory.getRemoteBean(contentUri)));
      }
    });
    return result;
  }/*

  public*/ function performAlternativeAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    // not allowed
  }/*

  public*/ function allowDefaultAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    return this.getContentsForNodeIds(nodeIds).every(function (content/*:Content*/)/*:Boolean*/ {
      return content.isDocument();
    });
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return undefined;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      project$B53w: null,
      constructor: ProjectContentsDragDropModel$,
      performDefaultAction: performDefaultAction,
      getContentsForNodeIds: getContentsForNodeIds,
      performAlternativeAction: performAlternativeAction,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      getModelItemId: getModelItemId,
      requires: [
        "com.coremedia.cap.content.Content",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.DragDropModel"
      ]
    };
});
