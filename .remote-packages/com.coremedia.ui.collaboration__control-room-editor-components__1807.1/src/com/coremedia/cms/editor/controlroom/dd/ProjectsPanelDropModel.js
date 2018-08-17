Ext.define("com.coremedia.cms.editor.controlroom.dd.ProjectsPanelDropModel", function(ProjectsPanelDropModel) {/*package com.coremedia.cms.editor.controlroom.dd {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentProxyHelper;
import com.coremedia.cms.editor.controlroom.ProjectsPanelBase;
import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.ui.data.RemoteBean;
import com.coremedia.ui.data.beanFactory;
import com.coremedia.ui.models.DragDropModel;
import com.coremedia.ui.util.BeanCollectionDropZoneHelper;

import ext.Ext;

import ext.dd.DragSource;

public class ProjectsPanelDropModel implements DragDropModel {

  private var projectsPanel:ProjectsPanelBase;

  public*/ function ProjectsPanelDropModel$(projectsPanel/*:ProjectsPanelBase*/) {
    this.projectsPanel$UPO2 = projectsPanel;
  }/*

  public*/ function performDefaultAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    var droppedRemoteBeans/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.getRemoteBeansForNodes(droppedNodeIds);
    var contents/*:Array*/ = com.coremedia.cap.content.ContentProxyHelper.getContents(droppedRemoteBeans);
    if (droppedRemoteBeans.length !== contents.length) {
      // something is wrong, do nothing
      return;
    }
    if (targetNodeId === this.projectsPanel$UPO2.getItemId()) {
      var createProject/*:CreateProjectAction*/ = Ext.create(com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction, {
        mode: "selected",
        afterCreateHandler: com.coremedia.cms.editor.controlroom.project.ProjectHelper.renameProjectInMyProjects
      });
      createProject.setContents(contents);
      createProject.execute();
    } else {
      var project/*:Project*/ =AS3.as( com.coremedia.ui.data.beanFactory.getRemoteBean(targetNodeId),  com.coremedia.cms.editor.controlroom.project.rest.Project);
      if (project) {
        project.addContents(contents);
      }
    }
  }/*

  public*/ function performAlternativeAction(droppedNodeIds/*:Array*/, targetNodeId/*:String*/, callback/*:Function = undefined*/)/*:void*/ {
    // not allowed
  }/*

  public*/ function allowDefaultAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    if (!targetNodeId) {
      return false;
    }
    var mayBeMoved/*:Boolean*/ = true;
    var remoteBeansForNodes/*:Array*/ = com.coremedia.ui.util.BeanCollectionDropZoneHelper.getRemoteBeansForNodes(nodeIds);
    remoteBeansForNodes.forEach(function (remoteBean/*:RemoteBean*/)/*:void*/ {
      var content/*:Content*/ = com.coremedia.cap.content.ContentProxyHelper.getContent(remoteBean);
      if (!content || content.isFolder()) {
        mayBeMoved = false;
      }
    });
    return mayBeMoved;
  }/*

  public*/ function allowAlternativeAction(source/*:DragSource*/, nodeIds/*:Array*/, targetNodeId/*:String*/)/*:Boolean*/ {
    return false;
  }/*

  public*/ function getModelItemId()/*:String*/ {
    return this.projectsPanel$UPO2.getItemId();
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.models.DragDropModel"],
      projectsPanel$UPO2: null,
      constructor: ProjectsPanelDropModel$,
      performDefaultAction: performDefaultAction,
      performAlternativeAction: performAlternativeAction,
      allowDefaultAction: allowDefaultAction,
      allowAlternativeAction: allowAlternativeAction,
      getModelItemId: getModelItemId,
      requires: [
        "Ext",
        "com.coremedia.cap.content.ContentProxyHelper",
        "com.coremedia.ui.data.beanFactory",
        "com.coremedia.ui.models.DragDropModel",
        "com.coremedia.ui.util.BeanCollectionDropZoneHelper"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction",
        "com.coremedia.cms.editor.controlroom.project.rest.Project"
      ]
    };
});
