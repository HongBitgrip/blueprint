Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowPublicationWorkflowForNotificationActionBase", function(ShowPublicationWorkflowForNotificationActionBase) {/*package com.coremedia.cms.editor.controlroom.notification.actions {
import com.coremedia.cap.workflow.Process;
import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications')]
public class ShowPublicationWorkflowForNotificationActionBase extends AbstractShowWorkflowForNotificationAction {
  public*/ function ShowPublicationWorkflowForNotificationActionBase$(config/*:ShowPublicationWorkflowForNotificationAction = null*/) {if(arguments.length<=0)config=null;
    this.super$K2t5(config);

  }/*

  internal override*/ function notInWorkflowsWarning()/*:void*/ {
    var process/*:Process*/ = (AS3.as(this.getNotification().getParameters()[1],  com.coremedia.cap.workflow.Process));
    if (process) {
      var workflowName/*:String*/ = process.getProperties().get("subject");
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showWarn(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showPublicationWorkflowForNotificationAction_error_title'),
              Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showPublicationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg'), workflowName));
    }
  }/*

  internal override*/ function destroyedWarning()/*:void*/ {
    var workflowName/*:String*/ = this.getNotification().getParameters()[2] || "";
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showWarn(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showPublicationWorkflowForNotificationAction_error_title'),
            Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showPublicationWorkflowForNotificationAction_destroyed_error_msg'), workflowName));
  }/*

  internal override*/ function getTabbedWorkflowPanel(show/*:Boolean = false*/)/*:TabbedWorkflowPanel*/ {if(arguments.length<=0)show=false;
    return com.coremedia.cms.editor.controlroom.controlRoomContext.getPublicationWfPanel(show, show);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationAction",
      constructor: ShowPublicationWorkflowForNotificationActionBase$,
      super$K2t5: function() {
        com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationAction.prototype.constructor.apply(this, arguments);
      },
      notInWorkflowsWarning: notInWorkflowsWarning,
      destroyedWarning: destroyedWarning,
      getTabbedWorkflowPanel: getTabbedWorkflowPanel,
      requires: [
        "Ext.String",
        "com.coremedia.cap.workflow.Process",
        "com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties",
        "com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationAction",
        "com.coremedia.cms.editor.sdk.util.MessageBoxUtil",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.editor.controlroom.controlRoomContext"]
    };
});
