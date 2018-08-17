/**
 * Properties class for ResourceBundle "ControlRoom".
 */
Ext.define("com.coremedia.cms.editor.controlroom.ControlRoom_properties", {

  requires: [
    "com.coremedia.icons.CollaborationIcons_properties",
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * Localization properties for Control Room Headers
      */
  "ControlRoom_title": "Control Room",
  "ControlRoom_label": "Control Room (F4)",
  "ControlRoom_MyEditedContent_title": "My Edited Content",
  "ControlRoom_Projects_title": "My Projects",
  "ControlRoom_Publication_Workflows_title": "Publication Workflows",
  "ControlRoom_Translation_Workflows_title": "Localization Workflows",
  "ControlRoom_MyEditedContentToolbar_label": "My Edited Content",
  "ControlRoom_ProjectsPanelToolbar_label": "My Projects",
  "ProjectsPanel_drag_computing_drag_data": "Loading ...",
  "ProjectsPanel_drag_singleselect_text_single_content": "{0} (1 content item)",
  "ProjectsPanel_drag_singleselect_text_multiple_contents": "{0} ({1} content items)",
  "ProjectsPanel_drag_multiselect_text_single_content": "{0} projects (1 content item)",
  "ProjectsPanel_drag_multiselect_text_multiple_contents": "{0} projects ({1} content items)",
  "Action_showInControlRoom_text": "Show in Control Room",
  "Action_renameTabProjectAction_menu_text": "Rename",
  "Action_renameTabProjectAction_title_text": "Rename Project",
  "Action_renameTabProjectAction_message_text": "Enter a new name for the project",
      /**
       * Localization properties for DeleteEditedContentsAction
 * @see com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction
      */
  "Action_deleteEditedContents_selected_text": "Remove",
  "Action_deleteEditedContents_selected_tooltip": "Remove contents from edited content",
  "Action_deleteEditedContents_all_text": "Clear My Edited Content",
  "Action_deleteEditedContents_all_tooltip": "Clear my edited content",
  "Action_deleteEditedContents_confirm_title": "Clear Edited Content",
  "Action_deleteEditedContents_confirm_message": "Do you really want to clear your edited content?",
  "Action_deleteEditedContents_confirm_buttonText": "Clear",
      /**
       * Localization properties for PasteFromClipboardToProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction
      */
  "Action_pasteFromClipboardToProjects_text": "Paste",
  "Action_pasteFromClipboardToProjects_tooltip": "Paste content items from clipboard",
      /**
       * Localization properties for CreateProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction
      */
  "Action_createProject_selected_text": "Create Project",
  "Action_createProject_selected_tooltip": "Create a project from selected edited contents",
  "Action_createProject_selected_non_tooltip": "Create a project from all edited contents",
  "Action_createProject_empty_text": "Create Empty Project",
  "Action_createProject_empty_tooltip": "Create&nbsp;a&nbsp;new&nbsp;empty&nbsp;project",
  "Action_createProject_new_name_text": "New project",
      /**
       * Localization properties for LeaveProjectsAction
 * @see com.coremedia.cms.editor.controlroom.actions.LeaveProjectsAction
      */
  "Action_leaveProjects_text": "Leave",
  "Action_leaveProjects_tooltip": "Leave the selected projects",
  "Action_leaveProjects_confirm_title": "Confirm",
  "Action_leaveProjects_confirm_message": "Do you really want to leave the selected projects?",
  "Action_leaveProjects_confirm_buttonText": "Leave",
      /**
       * Localization properties for RemoveContentFromProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction
      */
  "Action_removeContentFromProject_text": "Remove",
  "Action_removeContentFromProject_tooltip": "Remove the selected content from project",
      /**
       * Localization properties for CutContentFromProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction
      */
  "Action_cutContentFromProject_text": "Cut",
  "Action_cutContentFromProject_tooltip": "Cut the selected content from project",
  "TabbedWorkflowPanel_inbox_text": "Inbox",
  "TabbedWorkflowPanel_pending_text": "Pending",
  "TabbedWorkflowPanel_finished_text": "Finished",
  "Action_start_publication_tooltip": "Start a publication workflow",
  "Action_showStartPublicationWorkflowWindow_text": "Start Publication Workflow...",
  "Action_showStartPublicationWorkflowWindow_tooltip": "Publish",
  "Action_globalShowStartPublicationWorkflowWindow_text": "Start Publication Workflow.",
  "Action_globalShowStartPublicationWorkflowWindow_tooltip": "Publish",
  "Action_start_translation_tooltip": "Start a localization workflow",
  "Action_showStartTranslationWorkflowWindow_text": "Start Localization Workflow...",
  "Action_showStartTranslationWorkflowWindow_tooltip": "Localize",
  "Action_startPullTranslationWorkflow_text": "Translate into the preferred site",
  "Action_startPullTranslationWorkflow_tooltip": "Translate into the preferred site",
  "Action_startPullTranslationWorkflow_noContents_disabled_tooltip": "No contents selected for translation into the preferred site.",
  "Action_startPullTranslationWorkflow_contentsNotInMasterOfPreferred_disabled_tooltip": "Translation into the preferred site is not possible as selection contains contents which do not belong to the master of the preferred site.",
  "Action_startPullTranslationWorkflow_containsWorkingVersionOnlyContents_disabled_tooltip": "Translation into the preferred site is not possible as selection contains contents which have never been checked in.",
  "Action_startPullTranslationWorkflow_noPreferredSite_disabled_tooltip": "No preferred site selected.",
  "StartPublicationWorkflowWindow_title": "Publication Workflow",
  "StartTranslationWorkflowWindow_title": "Localization Workflow",
  "StartWorkflowWindow_workflowNameTextField_label": "Workflow",
  "StartWorkflowWindow_workflowNameTextField_emptyText": "Enter Workflow Name.",
  "StartWorkflowWindow_workflowTypeField_label": "Workflow Type",
  "StartWorkflowWindow_contentItems_label": "Content",
  "StartWorkflowWindow_changeSetField_label": "Publication Set",
  "StartWorkflowWindow_extendedChangeSetField_label": "Dependent Content",
  "StartPublicationWorkflowWindow_extendedChangeSet_help_text": "This set of content items is required for a successful publication and also gets published.",
  "StartTranslationWorkflowWindow_extendedChangeSet_help_text": "This set of content items will also be shown to the editor of the workflow, since they are not up to date in all target sites.",
  "StartWorkflowWindow_removeEditedContents_box_label": "Remove from My Edited Content",
  "StartWorkflowWindow_nameNotValid": "This field must not be empty.",
  "StartWorkflowWindow_states_label": "Next Workflow Step",
  "StartWorkflowWindow_sites_label": "Target Locales",
  "StartWorkflowWindow_masterSite_label": "Localize from {0} to:",
  "StartWorkflowWindow_masterSite_label_no_locale": "No target locale available.",
  "StartWorkflowWindow_selectAllSites": "Select all",
  "OpenWorkflowIssuesWindow_btn_text": "Errors and Warnings",
  "OpenWorkflowIssuesWindow_btn_tooltip": "Show list of errors and warnings for the current content. There are no errors or warnings.",
  "OpenWorkflowIssuesWindow_btn_errorMessage": "Show list of errors and warnings for the current content. There are errors or warnings.",
  "WorkflowIssuesWindow_title": "Errors and Warnings",
  "WorkflowIssuesWindow_tooltip": "This window shows errors and warnings for the current content items. Warnings are for your information and do not need to be resolved. Errors must be corrected, otherwise a workflow cannot be started.",
  "WorkflowIssuesWindow_errorHeader_text": "Errors",
  "WorkflowIssuesWindow_noError_text": "There are no errors.",
  "WorkflowIssuesWindow_warnHeader_text": "Warnings",
  "WorkflowIssuesWindow_noWarn_text": "There are no warnings.",
  "WorkflowIssuesWindow_computingIssues_text": "Computing errors and warnings",
  "WorkflowInfoWindow_abortButton_label": "Abort Workflow",
  "WorkflowInfoWindow_closeButton_label": "Close",
  "AbortWorkflow_confirm_title": "Abort Workflow",
  "AbortWorkflow_confirm_message": "Do you really want to abort the workflow \"{0}\"?",
  "AbortWorkflow_yes_button": "Abort Workflow",
  "AbortWorkflow_no_button": "Do not Abort Workflow",
  "AbortWorkflow_warning_title": "Aborted Workflow",
  "AbortWorkflow_warning_message": "The workflow \"{0}\" that you were working on was aborted.",
  "WorkflowDetailPanel_workflowType_label": "Workflow Type",
  "WorkflowDetailPanel_workflowName_label": "Workflow Name",
  "WorkflowDetailPanel_contentItems_label": "Content Items",
  "WorkflowDetailPanel_targetSite_label": "Site",
  "WorkflowDetailPanel_targetLocale_label": "Target Locale",
  "WorkflowDetailPanel_owner_label": "Started By",
  "WorkflowDetailPanel_owner_me": "Me",
  "WorkflowDetailPanelWrapper_acceptButton_label": "Accept Task",
  "WorkflowDetailPanelWrapper_applyButton_label": "Apply",
  "WorkflowDetailPanelWrapper_cancelButton_label": "Cancel",
  "WorkflowDetailPanelWrapper_workflow_completed": "Workflow completed",
  "WorkflowDetailPanelWrapper_states_label": "Workflow Steps",
  "WorkflowDetailPanelWrapper_next_state_label": "Choose Next Workflow Step",
  "WorkflowDetailColumn_tooltip_text": "Details",
  "TaskWarningPanel_title": "Escalated",
  "Action_showAddProjectMemberDialogAction_text": "Add Members...",
  "Action_showAddProjectMemberDialogAction_tooltip": "Add members to the project",
  "AddProjectMemberDialog_title_text": "Add Members to Project '{0}'",
  "AddProjectMemberDialog_label_text": "Members",
  "AddProjectMemberDialog_button_text": "Add",
  "Action_removeProjectMember_text": "Remove",
  "Action_removeProjectMember_tooltip": "Remove selection",
  "Action_removeProjectMember_openTodos_confirm_title": "Confirm Removal",
  "Action_removeProjectMember_openTodos_confirm_message": "{1} is still assigned to an open to-do. Do you want to remove {1} from project \"{0}\"?",
  "Action_removeProjectMember_openTodos_confirm_messageSelf": "There are still open to-dos for you. Do you want to leave the project \"{0}\"?",
  "Action_removeProjectMember_openTodos_confirm_buttonText": "Remove",
  "Action_removeProjectMember_openTodos_confirm_buttonTextSelf": "Leave",
  "Action_removeProjectMember_projectDeletion_confirm_title": "Confirm Removal",
  "Action_removeProjectMember_projectDeletion_confirm_message": "{1} ist the last member of the project \"{0}\". When {1} is removed from this project, it will be deleted. Do you want to remove {1} and delete the project?",
  "Action_removeProjectMember_projectDeletion_confirm_messageSelf": "You are the last member of the project \"{0}\". When you leave the project, it will be deleted. Do you want to leave and delete the project?",
  "Action_removeProjectMember_projectDeletion_confirm_buttonText": "Remove and Delete",
  "Action_removeProjectMember_projectDeletion_confirm_buttonTextSelf": "Leave and Delete",
  "Project_goals_title": "About This Project",
  "Project_dueDate_title": "Due Date",
  "Project_dueDate_emptyText": "Date",
  "Project_todos_title": "To-Dos",
  "Project_todos_title_filtered_by_due_date": "To-Dos with due date '{0}'",
  "Project_todos_add_button_text": "Create To-Do",
  "Project_notes_title": "Notes and Goals",
  "Project_users_title": "Members",
  "Project_users_me": "Me",
  "Project_calendar_title": "Calendar",
  "Project_toolbar_project": "Project",
  "Project_leaveProject_text": "Leave Project",
  "Project_leaveProject_tooltip": "Leave the project",
  "Project_uncheckTodoAssigneeNotInProject_confirm_title": "Invite '{0}' again?",
  "Project_uncheckTodoAssigneeNotInProject_confirm_message": "The member '{0}' formally assigned to this To-Do is not part of the project anymore. Do you want to add '{0}' to the project again? Otherwise the assignee will be removed.",
  "Project_uncheckTodoAssigneeNotInProject_confirm_primaryButtonText": "Invite",
  "Project_uncheckTodoAssigneeNotInProject_confirm_secondaryButtonText": "Remove Assignment",
  "Project_Todo_due_after_project_due_date_warning_text": "The due date of the To-Do is later than the project due date.",
  "Project_Todo_due_date_overdue_error_text": "The To-Do is overdue.",
  "Project_Todos_show_all": "Show All To-Dos",
  "Project_Todos_select_day": "Select a date to filter the to-dos.",
  "Project_content_empty_text": "This project has no content.",
  "Project_content_title": "Content",
      /**
       * Localization properties for ControlRoomPlugin
 * @see com.coremedia.cms.editor.controlroom.ControlRoomPlugin
      */
  "ControlRoomPlugin_btn_show_tooltip": "Show&nbsp;Control&nbsp;Room (F4)",
  "ControlRoomPlugin_btn_show_filter_options_tooltip": "Show filter options",
  "ControlRoomPlugin_btn_show_actions_tooltip": "Show actions menu",
  "ControlRoomPlugin_btn_hide_tooltip": "Hide&nbsp;control&nbsp;room",
  "ControlRoomPlugin_btn_back_to_list_tooltip": "Back to list",
  "Workflow_StudioSimplePublication_start": "Starting Workflow (current step)",
  "Workflow_StudioSimplePublication_end": "Content Published",
  "Workflow_StudioTwoStepPublication_start": "Compose Content Items",
  "Workflow_StudioTwoStepPublication_start_current": "Compose Content Items (current step)",
  "Workflow_StudioTwoStepPublication_pending": "Pending Publication",
  "Workflow_StudioTwoStepPublication_pending_current": "Pending Publication (current status)",
  "Workflow_StudioTwoStepPublication_end": "Content Published",
  "Workflow_StudioTwoStepPublication_revision": "Needs Revision",
  "Action_showProject_tooltip": "Open in Tab",
  "Action_showProject_text": "Open in Tab",
  "Action_renameProject_tooltip": "Rename Project",
  "Action_renameProject_text": "Rename",
      /**
       * Workflow Notes
      */
  "WorkflowNotesPanel_label": "Notes",
  "WorkflowNotesPanel_comment_too_long": "Field must contain maximum 2000 characters.",
  "WorkflowNotesPanel_textArea_label": "Notes Text",
      /**
       * Assign Workflows
      */
  "AssignMembersPanel_title": "Assign Workflow To People",
  "AssignMembersPanel_noUsersAssigned_error": "You Have to Select People",
  "AssignMembersPanel_label": "Assignees",
      /**
       * Projects Todos Widget
      */
  "Projects_Todos_Widget_type": "Open To-Dos",
  "Projects_Todos_Widget_name": "My Open To-Dos",
  "Projects_Todos_Widget_name_all": "All Open To-Dos",
  "Projects_Todos_Widget_name_with_project": "My Open To-Dos: {0}",
  "Projects_Todos_Widget_name_with_project_for_all": "All Open To-Dos: {0}",
  "Projects_Todos_Widget_description": "This widget shows the open To-Dos",
  "Projects_Todos_Widget_icon": "search-widget-icon",
  "Projects_Todos_Widget_showAllTodosLink_text": "Show All",
  "Projects_Todos_Widget_noOpenTodos_text": "All done!",
  "Projects_Todos_Widget_project_label": "Project",
  "Projects_Todos_Widget_show_my_open_todos": "Show Only My Open To-Dos",
  "Projects_Todos_Widget_show_all_open_todos": "Show All Open To-Dos",
  "Projects_Todos_Widget_project_selection_default": "All My Projects"
}, function() {
  this.prototype["Action_deleteEditedContents_selected_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove_small;
  this.prototype["Action_deleteEditedContents_all_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.clear_edited_content;
  this.prototype["Action_pasteFromClipboardToProjects_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.paste;
  this.prototype["Action_createProject_selected_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_project;
  this.prototype["Action_createProject_empty_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_project;
  this.prototype["Action_leaveProjects_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.exit;
  this.prototype["Action_removeContentFromProject_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["Action_cutContentFromProject_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.cut;
  this.prototype["TabbedWorkflowPanel_inbox_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.inbox;
  this.prototype["TabbedWorkflowPanel_pending_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pending;
  this.prototype["TabbedWorkflowPanel_finished_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.finished;
  this.prototype["Action_showStartPublicationWorkflowWindow_icon"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.start_publication_workflow;
  this.prototype["Action_globalShowStartPublicationWorkflowWindow_icon"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.start_publication_workflow;
  this.prototype["Action_showStartTranslationWorkflowWindow_icon"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.start_localization_workflow;
  this.prototype["Action_startPullTranslationWorkflow_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.decentral_translation;
  /**
   * Localization properties for ShowAddProjectMemberDialogAction
 * @see com.coremedia.cms.editor.controlroom.actions.ShowAddProjectMemberDialogAction
  */
  this.prototype["Action_showAddProjectMemberDialogAction_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add_people_to_shared_content_set;
  /**
   * Localization properties for RemoveProjectMemberAction
  */
  this.prototype["Action_removeProjectMember_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove_small;
  this.prototype["ControlRoomPlugin_btn_icon"] =  com.coremedia.icons.CollaborationIcons_properties.INSTANCE.control_room;
  /**
   * Localization properties for ShowProjectAction
  */
  this.prototype["Action_showProject_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;
  /**
   * Localization properties for RenameProjectAction
  */
  this.prototype["Action_renameProject_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.project;
  this.prototype["Projects_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.project;

  com.coremedia.cms.editor.controlroom.ControlRoom_properties.INSTANCE = new com.coremedia.cms.editor.controlroom.ControlRoom_properties();
});