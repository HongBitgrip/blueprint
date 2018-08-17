Ext.define("com.coremedia.cms.editor.controlroom.notification.actions.ShowTranslationWorkflowForNotificationActionBase", function(ShowTranslationWorkflowForNotificationActionBase) {/*package com.coremedia.cms.editor.controlroom.notification.actions {
import com.coremedia.cap.workflow.Process;
import com.coremedia.cms.editor.controlroom.controlRoomContext;
import com.coremedia.cms.editor.controlroom.workflow.TabbedWorkflowPanel;
import com.coremedia.cms.editor.sdk.util.MessageBoxUtil;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications')]
public class ShowTranslationWorkflowForNotificationActionBase extends AbstractShowWorkflowForNotificationAction {
  public*/ function ShowTranslationWorkflowForNotificationActionBase$(config/*:ShowTranslationWorkflowForNotificationAction = null*/) {if(arguments.length<=0)config=null;
    this.super$JC7W(config);
  }/*

  internal override*/ function notInWorkflowsWarning()/*:void*/ {
    var process/*:Process*/ = (AS3.as(this.getNotification().getParameters()[1],  com.coremedia.cap.workflow.Process));
    if (process) {
      var workflowName/*:String*/ = process.getProperties().get("subject");
      com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showWarn(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showTranslationWorkflowForNotificationAction_error_title'),
              Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showTranslationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg'), workflowName));
    }
  }/*

  internal override*/ function destroyedWarning()/*:void*/ {
    var workflowName/*:String*/ = this.getNotification().getParameters()[2] || "";
    com.coremedia.cms.editor.sdk.util.MessageBoxUtil.showWarn(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showTranslationWorkflowForNotificationAction_error_title'),
            Ext.String.format(mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications', 'Notification_showTranslationWorkflowForNotificationAction_destroyed_error_msg'), workflowName));
  }/*

  internal override*/ function getTabbedWorkflowPanel(show/*:Boolean = false*/)/*:TabbedWorkflowPanel*/ {if(arguments.length<=0)show=false;
    return com.coremedia.cms.editor.controlroom.controlRoomContext.getTranslationWfPanel(show, show);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.editor.controlroom.notification.actions.AbstractShowWorkflowForNotificationAction",
      constructor: ShowTranslationWorkflowForNotificationActionBase$,
      super$JC7W: function() {
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
