Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowProjectForNotificationActionBase", function(ShowProjectForNotificationActionBase) {/*package com.coremedia.cms.editor.controlroom.notification.actions {

import com.coremedia.cms.editor.controlroom.project.ProjectHelper;
import com.coremedia.cms.editor.controlroom.project.rest.Project;
import com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl;
import com.coremedia.cms.editor.notification.actions.NotificationAction;
import com.coremedia.cms.editor.notification.model.Notification;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;
import com.coremedia.ui.data.RemoteBeanUtil;
import com.coremedia.ui.util.EventUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications')]
public class ShowProjectForNotificationActionBase extends NotificationAction {

  //noinspection JSFieldCanBeLocal
  private const ACTION_STATE_PROJECT_NOT_ACCESSIBLE:String = "projectNotAccessible";

  public*/ function ShowProjectForNotificationActionBase$(config/*:ShowProjectForNotificationAction = null*/) {if(arguments.length<=0)config=null;
    this.super$m0Vt(config);
    this.registerActionStateHandler(this.ACTION_STATE_EXECUTABLE,AS3.bind( this,"showProjects$m0Vt"));
    this.registerActionStateHandler(this.ACTION_STATE_PROJECT_NOT_ACCESSIBLE$m0Vt,AS3.bind( this,"showProjectDestroyedWarning$m0Vt"));
  }/*

  private*/ function showProjectDestroyedWarning()/*:void*/ {
    var projectName/*:String*/ = this.getNotification().getParameters()[2] || "";
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showWarn(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showProjectForNotificationAction_error_title'),
            Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showProjectForNotificationAction_destroyed_error_msg'), projectName));
  }/*

  private*/ function showProjects()/*:void*/ {
    var project/*:Project*/ =AS3.as( this.getNotification().getParameters()[0],  com.coremedia.cms.editor.controlroom.project.rest.Project);
    if (project) {

      function invokedLater(project/*:Project*/)/*:void*/ {
        com.coremedia.cms.editor.controlroom.project.ProjectHelper.selectProjectsInMyProjects(project);
        com.coremedia.cms.editor.controlroom.project.ProjectHelper.openProjectInTab(project);
      }

      com.coremedia.ui.util.EventUtil.invokeLater(invokedLater, project);
    }
  }/*

  override protected*/ function getActionState()/*:String*/ {
    var actionState/*:String*/ = com.coremedia.cms.editor.notification.actions.NotificationAction.prototype.getActionState.call(this);
    if (actionState !== this.ACTION_STATE_EXECUTABLE) {
      return actionState;
    } else {
      return this.getActionStateInternal$m0Vt();
    }
  }/*

  private*/ function getActionStateInternal()/*:String*/ {
    var notification/*:Notification*/ = this.getNotification();
    // Check accessibility of Notification's content set
    var project/*:Project*/ =AS3.as( notification.getParameters()[0],  com.coremedia.cms.editor.controlroom.project.rest.Project);
    var isAccessible/*:Boolean*/ =AS3.as( com.coremedia.ui.data.RemoteBeanUtil.isAccessible(project),  Boolean);
    if (isAccessible === undefined) {
      return undefined;
    }
    if (!isAccessible) {
      return this.ACTION_STATE_PROJECT_NOT_ACCESSIBLE$m0Vt;
    }

    return this.getActionStateInternalForMyProjects$m0Vt();
  }/*

  private*/ function getActionStateInternalForMyProjects()/*:String*/ {
    //noinspection JSMismatchedCollectionQueryUpdate
    var myProjectsBean/*:Array*/ = com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl.getInstance().getProjectsOfSessionUser();
    if (!myProjectsBean) {
      // ProjectRepository not yet loaded.
      return undefined;
    }
    return this.ACTION_STATE_EXECUTABLE;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.notification.actions.NotificationAction",
      ACTION_STATE_PROJECT_NOT_ACCESSIBLE$m0Vt: "projectNotAccessible",
      constructor: ShowProjectForNotificationActionBase$,
      super$m0Vt: function() {
        com.coremedia.cms.editor.notification.actions.NotificationAction.prototype.constructor.apply(this, arguments);
      },
      showProjectDestroyedWarning$m0Vt: showProjectDestroyedWarning,
      showProjects$m0Vt: showProjects,
      getActionState: getActionState,
      getActionStateInternal$m0Vt: getActionStateInternal,
      getActionStateInternalForMyProjects$m0Vt: getActionStateInternalForMyProjects,
      requires: [
        "Ext.String",
        "com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties",
        "com.coremedia.cms.editor.notification.actions.NotificationAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "com.coremedia.ui.data.RemoteBeanUtil",
        "com.coremedia.ui.util.EventUtil",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.controlroom.project.ProjectHelper",
        "com.coremedia.cms.editor.controlroom.project.rest.Project",
        "com.coremedia.cms.editor.controlroom.project.rest.impl.ProjectRepositoryImpl"
      ]
    };
});
