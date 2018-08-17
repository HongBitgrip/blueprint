/**
 * Properties class for ResourceBundle "ControlRoomNotifications".
 */
Ext.define("com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties", {

  requires: [
    "com.coremedia.icons.CollaborationIcons_properties",
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "Notification_project_shared_msg": "{1} has shared the project \"[u]{0}[/u]\" with you.",
  "Notification_project_todoAssigned_msg": "{1} has assigned a to-do in the project \"[u]{0}[/u]\" to you.",
  "Notification_showProjectForNotificationAction_error_title": "Project Not Found",
  "Notification_showProjectForNotificationAction_notInMyProjects_error_msg": "The project '{0}' is no longer in your project list. Do you want to add it?",
  "Notification_showProjectForNotificationAction_notInMyProjects_addButton_text": "Add",
  "Notification_showProjectForNotificationAction_destroyed_error_msg": "The project '{0}' does no longer exist.",
  "Notification_publicationWorkflow_offered_msg": "The publication workflow \"[u]{0}[/u]\" is new in your inbox.",
  "Notification_showPublicationWorkflowForNotificationAction_error_title": "Publication Workflow Not Found",
  "Notification_showPublicationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg": "The publication workflow '{0}' is no longer in your publication workflows.",
  "Notification_showPublicationWorkflowForNotificationAction_destroyed_error_msg": "The publication workflow '{0}' no longer exist.",
  "Notification_translationWorkflow_offered_msg": "The translation workflow \"[u]{0}[/u]\" is new in your Inbox.",
  "Notification_showTranslationWorkflowForNotificationAction_error_title": "Translation Workflow Not Found",
  "Notification_showTranslationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg": "The translation workflow '{0}' is no longer in your translation workflows.",
  "Notification_showTranslationWorkflowForNotificationAction_destroyed_error_msg": "The translation workflow '{0}' no longer exist."
}, function() {
  this.prototype["Notification_project_iconCls"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.project;
  this.prototype["Notification_publicationWorkflow_iconCls"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.start_publication_workflow;
  this.prototype["Notification_translationWorkflow_iconCls"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.start_translation_workflow;

  com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties.INSTANCE = new com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties();
});