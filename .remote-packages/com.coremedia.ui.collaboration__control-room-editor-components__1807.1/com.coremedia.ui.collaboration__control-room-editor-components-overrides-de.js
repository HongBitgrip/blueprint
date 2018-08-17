Ext.define("com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties_de",{override:"com.coremedia.cms.editor.controlroom.notification.ControlRoomNotifications_properties","Notification_project_shared_msg":'{1} hat das Projekt "[u]{0}[/u]" mit Ihnen geteilt.',"Notification_project_todoAssigned_msg":'{1} hat Ihnen ein To-do im Projekt "[u]{0}[/u]" zugewiesen.',"Notification_showProjectForNotificationAction_error_title":"Projekt nicht gefunden","Notification_showProjectForNotificationAction_notInMyProjects_error_msg":"Das Projekt '{0}' befindet sich nicht mehr in Ihrer Projektliste. Wollen Sie es hinzufügen?",
"Notification_showProjectForNotificationAction_notInMyProjects_addButton_text":"Hinzufügen","Notification_showProjectForNotificationAction_destroyed_error_msg":"Das Projekt '{0}' existiert nicht mehr.","Notification_publicationWorkflow_offered_msg":'Der Publikations-Workflow "[u]{0}[/u]" ist neu in ihrem Workflow-Eingang.',"Notification_showPublicationWorkflowForNotificationAction_error_title":"Publikations-Workflow nicht gefunden","Notification_showPublicationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg":"Der Publikations-Workflow '{0}' ist nicht länger in Ihren Publikations-Workflows.",
"Notification_showPublicationWorkflowForNotificationAction_destroyed_error_msg":"Der Publikations-Workflow '{0}' existiert nicht mehr.","Notification_translationWorkflow_offered_msg":'Der Übersetzungs-Workflow "[u]{0}[/u]" ist neu in ihrem Workflow-Eingang.',"Notification_showTranslationWorkflowForNotificationAction_error_title":"Übersetzungs-Workflow nicht gefunden","Notification_showTranslationWorkflowForNotificationAction_notInPublicationWorkflows_error_msg":"Der Übersetzungs-Workflow '{0}' ist nicht länger in Ihren Übersetzungs-Workflows.",
"Notification_showTranslationWorkflowForNotificationAction_destroyed_error_msg":"Der Übersetzungs-Workflow '{0}' existiert nicht mehr."},function(){});Ext.define("com.coremedia.cms.editor.controlroom.actions.ContentSetErrors_properties_de",{override:"com.coremedia.cms.editor.controlroom.actions.ContentSetErrors_properties","contentSet_generalError_title":"Fehler","contentSet_generalError_message":"Ein Fehler ist aufgetreten: {0}","contentSet_cannotCreateContentSet_title":"Fehler","contentSet_cannotCreateContentSet_message":"Ein Projekt konnte nicht erstellt werden.","contentSet_cannotCreateContentSetDuplicateId_title":"Fehler","contentSet_cannotCreateContentSetDuplicateId_message":"Ein Projekt mit einer doppelten ID konnte nicht erstellt werden.",
"contentSet_cannotRenameContentSet_title":"Fehler","contentSet_cannotRenameContentSet_message":"Ein Projekt konnte nicht umbennant werden.","contentSet_cannotEditContentSet_title":"Fehler","contentSet_cannotEditContentSet_message":"Der Inhalt im Projekt konnte nicht verändert werden.","contentSet_cannotDeleteContentSet_title":"Fehler","contentSet_cannotDeleteContentSet_message":"Ein Projekt konnte nicht gelöscht werden.","contentSet_cannotOpenContentSet_title":"Fehler","contentSet_cannotOpenContentSet_message":"Ein Projekt konnte nicht geöffnet werden.",
"contentSet_cannotOpenContentSets_title":"Fehler","contentSet_cannotOpenContentSets_message":"Die Projekte eines bestimmten Typs konnten nicht geöffnet werden.","contentSet_cannotReadContentSetTimestamp_title":"Fehler","contentSet_cannotReadContentSetTimestamp_message":"Der Zeitstempel von Projekten konnte nicht gelesen werden.","contentSet_cannotReadContentSetReferrers_title":"Fehler","contentSet_cannotReadContentSetReferrers_message":"Die Verweise eines Projektes konnten nicht gelesen werden.",
"contentSet_cannotAccessContentSetNotAuthorized_title":"Fehler","contentSet_cannotAccessContentSetNotAuthorized_message":"Ein Projekt konnte wegen fehlender Rechte nicht gelesen werden.","contentSet_cannotSetContentSetPermissions_title":"Fehler","contentSet_cannotSetContentSetPermissions_message":"Einem Projekt konnten keine Rechte zugewiesen werden.","workflow_cannotStartWorkflow_title":"Fehler","workflow_cannotStartWorkflow_text":"Der Workflow konnte nicht starten.","workflow_workflowServerNotAvailable_title":"Fehler",
"workflow_workflowServerNotAvailable_text":"Workflow-Server ist nicht verfügbar.","workflow_workflowsNotAvailable_title":"Nicht genügend Rechte","workflow_workflowsNotAvailable_text":"Sie haben keine ausreichende Berechtigung, um den gewünschten Workflow zu starten.","workflow_contentSetIssue_extendedWorkflow_sg_text":"Die Publikationsmenge wurde erweitert.","workflow_contentSetIssue_extendedWorkflow_pl_text":"Die Publikationsmenge wurde erweitert.","workflow_contentSetIssue_limitforExtendedWorkflowExceeded_sg_text":"Die Vorschau der abhängigen Inhalte ist auf {0} Eintrag limitiert. Der Workflow wird nach dem Start mehr Inhalte anzeigen.",
"workflow_contentSetIssue_limitforExtendedWorkflowExceeded_pl_text":"Die Vorschau der abhängigen Inhalte ist auf {0} Einträge limitiert. Der Workflow wird nach dem Start mehr Inhalte anzeigen.","workflow_contentSetIssue_contentInvalid_sg_text":"Der folgende Inhalt beinhaltet Felder, die Sie überprüfen sollten.","workflow_contentSetIssue_contentInvalid_pl_text":"Die folgenden Inhalte beinhalten Felder, die Sie überprüfen sollten.","workflow_contentSetIssue_noContents_sg_text":"Die Publikationsmenge ist leer.",
"workflow_contentSetIssue_missingReadRightsForContents_sg_text":"Die Validierung wurde abgebrochen aufgrund fehlender Leserechte für ein oder mehrere Inhalte.","workflow_contentSetIssue_internalError_sg_text":"Die Validierung wurde aufgrund eines internen Fehlers abgebrochen.","workflow_contentSetIssue_contentWithoutSite_sg_text":"Der folgende Inhalt gehört nicht zu einer Site.","workflow_contentSetIssue_contentWithoutSite_pl_text":"Die folgenden Inhalte gehören nicht zu einer Site.","workflow_contentSetIssue_alreadyInTranslation_sg_text":"Der folgende Inhalt ist bereits in Übersetzung.",
"workflow_contentSetIssue_alreadyInTranslation_pl_text":"Die folgenden Inhalte sind bereits in Übersetzung.","workflow_contentSetIssue_inMultipleTranslations_sg_text":"Der folgende Inhalt ist gleichzeitig in mehreren Übersetzungs-Workflows.","workflow_contentSetIssue_inMultipleTranslations_pl_text":"Die folgenden Inhalte sind gleichzeitig in mehreren Übersetzungs-Workflows.","workflow_contentSetIssue_notReadable_sg_text":"Der folgende Inhalt ist nicht lesbar.","workflow_contentSetIssue_notReadable_pl_text":"Die folgenden Inhalte sind nicht lesbar.",
"workflow_contentSetIssue_mergeConflict_sg_text":"Einige nicht-textuelle Felder im folgenden Inhalt konnten nicht automatisch aktualisiert werden.","workflow_contentSetIssue_mergeConflict_pl_text":"Einige nicht-textuelle Felder in den folgenden Inhalten konnten nicht automatisch aktualisiert werden.","workflow_contentSetIssue_differentSites_sg_text":"Der folgende Inhalt gehört zu anderen Sites.","workflow_contentSetIssue_differentSites_pl_text":"Die folgenden Inhalte gehören zu unterschiedlichen Sites.",
"workflow_contentSetIssue_noSiteSelected_sg_text":"Keine Ziel-Locale ausgewählt.","workflow_contentSetIssue_noSiteAvailable_sg_text":"Keine Ziel-Locales verfügbar, in welche Inhalt lokalisiert werden könnte.","workflow_contentSetIssue_noContent_sg_text":"Es wurden noch keine Inhalte hinzugefügt.","workflow_contentSetIssue_noSyncSiteAvailable_sg_text":"Keine Ziel-Locales verfügbar, in welche Inhalt synchronisiert werden könnte.","workflow_contentSetIssue_notSiteManager_sg_text":"Fehlende Rechte um einen Workflow für diese Site zu starten.",
"workflow_contentSetIssue_notSiteManager_pl_text":"Fehlende Rechte um einen Workflow für diese Sites zu starten.","workflow_contentSetIssue_noMasterProperty_sg_text":"Der folgende Inhalt hat keine master property.","workflow_contentSetIssue_noMasterProperty_pl_text":"Die folgenden Inhalte haben keine master property.","workflow_contentSetIssue_noLocaleProperty_sg_text":"Der folgende Inhalt hat keine locale property.","workflow_contentSetIssue_noLocaleProperty_pl_text":"Die folgenden Inhalte haben keine locale property.",
"workflow_contentSetIssue_contentsCheckedOutByOthers_sg_text":"Der folgende Inhalt ist noch von einem anderen Benutzer ausgeliehen.","workflow_contentSetIssue_contentsCheckedOutByOthers_pl_text":"Die folgenden Inhalte sind noch von einem anderen Benutzer ausgeliehen.","workflow_contentSetIssue_contentHasErrors_sg_text":"Der folgende Inhalt hat Fehler.","workflow_contentSetIssue_contentHasErrors_pl_text":"Die folgenden Inhalte haben Fehler.","workflow_contentSetIssue_contentHasWarnings_sg_text":"Der folgende Inhalt hat Warnungen.",
"workflow_contentSetIssue_contentHasWarnings_pl_text":"Die folgenden Inhalte haben Warnungen.","workflow_contentSetIssue_contentCheckedOutHasErrors_sg_text":"Der folgende Inhalt hat Fehler und kann nicht automatisch eingecheckt werden.","workflow_contentSetIssue_contentCheckedOutHasErrors_pl_text":"Die folgenden Inhalte haben Fehler und können nicht automatisch eingecheckt werden.","workflow_contentSetIssue_contentCheckedOutHasWarnings_sg_text":"Der folgende Inhalt hat Warnungen und kann nicht automatisch eingecheckt werden.",
"workflow_contentSetIssue_contentCheckedOutHasWarnings_pl_text":"Die folgenden Inhalte haben Warnungen und können nicht automatisch eingecheckt werden.","workflow_contentSetIssue_assigneeNotAuthorized_sg_text":"Die im Workflow ausgewählte Person darf die Publikationsmenge nicht publizieren.","workflow_contentSetIssue_assigneesNotAuthorized_sg_text":"Die im Workflow ausgewählten Personen dürfen die Publikationsmenge nicht publizieren.","workflow_contentSetIssue_someAssigneesNotAuthorized_sg_text":"Einige der im Workflow ausgewählten Personen dürfen die Publikationsmenge nicht publizieren.",
"workflow_contentSetIssue_noAssignees_sg_text":"Der Workflow hat keine ausgewählten Personen."},function(){});Ext.define("com.coremedia.cms.editor.controlroom.ControlRoom_properties_de",{override:"com.coremedia.cms.editor.controlroom.ControlRoom_properties","ControlRoom_title":"Control-Room","ControlRoom_label":"Control-Room (F4)","ControlRoom_MyEditedContent_title":"Meine bearbeiteten Inhalte","ControlRoom_Projects_title":"Meine Projekte","ControlRoom_Publication_Workflows_title":"Publikations-Workflows","ControlRoom_Translation_Workflows_title":"Lokalisierungs-Workflows","ControlRoom_MyEditedContentToolbar_label":"Meine bearbeiteten Inhalte",
"ControlRoom_ProjectsPanelToolbar_label":"Meine Projekte","ProjectsPanel_drag_computing_drag_data":"Lade ...","ProjectsPanel_drag_singleselect_text_single_content":"{0} (1 Inhalt)","ProjectsPanel_drag_singleselect_text_multiple_contents":"{0} ({1} Inhalte)","ProjectsPanel_drag_multiselect_text_single_content":"{0} Projekte (1 Inhalt)","ProjectsPanel_drag_multiselect_text_multiple_contents":"{0} Projekte ({1} Inhalte)","Action_showInControlRoom_text":"In Control-Room anzeigen","Action_renameTabProjectAction_menu_text":"Umbenennen",
"Action_renameTabProjectAction_title_text":"Projekt umbenennen","Action_renameTabProjectAction_message_text":"Geben Sie einen neuen Namen für das Projekt an","Action_deleteEditedContents_selected_text":"Entfernen","Action_deleteEditedContents_selected_tooltip":"Ausgewählte Inhalte aus den bearbeiteten Inhalten entfernen","Action_deleteEditedContents_all_text":"Bearbeitete Inhalte leeren","Action_deleteEditedContents_all_tooltip":"Bearbeitete Inhalte leeren","Action_deleteEditedContents_confirm_title":"Bearbeitete Inhalte leeren",
"Action_deleteEditedContents_confirm_message":"Möchten Sie wirklich Ihre bearbeiteten Inhalte leeren?","Action_deleteEditedContents_confirm_buttonText":"Leeren","Action_pasteFromClipboardToProjects_text":"Einfügen","Action_pasteFromClipboardToProjects_tooltip":"Inhalte aus der Ablage einfügen","Action_createProject_tooltip":"Erzeuge ein neues Projekt aus bearbeiteten Inhalten","Action_createProject_all_text":"Erzeuge Projekt (alle)","Action_createProject_all_tooltip":"Erzeuge ein neues Projekt aus allen bearbeiteten Inhalten",
"Action_createProject_selected_text":"Erzeuge Projekt","Action_createProject_selected_tooltip":"Erzeuge ein neues Projekt aus den ausgewählten bearbeiteten Inhalten","Action_createProject_selected_non_tooltip":"Erzeuge ein neues Projekt aus allen bearbeiteten Inhalten","Action_createProject_empty_text":"Erzeuge Projekt (leer)","Action_createProject_empty_tooltip":"Erzeuge\x26nbsp;ein\x26nbsp;leeres\x26nbsp;Projekt","Action_createProject_new_name_text":"Neues Projekt","Action_leaveProjects_text":"Verlassen",
"Action_leaveProjects_tooltip":"Die ausgewählten Projekte verlassen","Action_leaveProjects_confirm_title":"Verlassen bestätigen","Action_leaveProjects_confirm_message":"Möchten Sie wirklich die ausgewählten Projekte verlassen?","Action_leaveProjects_confirm_buttonText":"Verlassen","Action_removeContentFromProject_text":"Entfernen","Action_removeContentFromProject_tooltip":"Den ausgewähten Inhalt aus dem Projekt entfernen","Action_cutContentFromProject_text":"Ausschneiden","Action_cutContentFromProject_tooltip":"Den ausgewähten Inhalt aus dem Projekt ausschneiden",
"TabbedWorkflowPanel_inbox_text":"Eingang","TabbedWorkflowPanel_pending_text":"Ausstehend","TabbedWorkflowPanel_finished_text":"Abgeschlossen","Action_start_publication_tooltip":"Publikations-Workflow starten","Action_showStartPublicationWorkflowWindow_text":"Publikations-Workflow starten...","Action_showStartPublicationWorkflowWindow_tooltip":"Publizieren","Action_globalShowStartPublicationWorkflowWindow_text":"Publikations-Workflow starten","Action_globalShowStartPublicationWorkflowWindow_tooltip":"Publizieren",
"Action_start_translation_tooltip":"Lokalisierungs-Workflow starten","Action_showStartTranslationWorkflowWindow_text":"Lokalisierungs-Workflow starten...","Action_showStartTranslationWorkflowWindow_tooltip":"Lokalisieren","Action_startPullTranslationWorkflow_text":"In die präferierte Site übersetzen","Action_startPullTranslationWorkflow_tooltip":"In die präferierte Site übersetzen","Action_startPullTranslationWorkflow_noContents_disabled_tooltip":"Es sind keine Inhalte zur Übersetzung in die präferierte Site ausgewählt.",
"Action_startPullTranslationWorkflow_contentsNotInMasterOfPreferred_disabled_tooltip":"Übersetzung in die präferierte Site ist nicht möglich, da die Auswahl Inhalte enthält, die nicht zum Master der präferierten Site gehören.","Action_startPullTranslationWorkflow_containsWorkingVersionOnlyContents_disabled_tooltip":"Übersetzung in die präferierte Site ist nicht möglich, da die Auswahl Inhalte enthält, die noch nie zurückgegeben wurden.","Action_startPullTranslationWorkflow_noPreferredSite_disabled_tooltip":"Es wurde keine präferierte Site ausgewählt.",
"StartPublicationWorkflowWindow_title":"Publikations-Workflow","StartTranslationWorkflowWindow_title":"Lokalisierungs-Workflow","StartWorkflowWindow_workflowNameTextField_label":"Workflow","StartWorkflowWindow_workflowNameTextField_emptyText":"Workflow-Namen eingeben.","StartWorkflowWindow_workflowTypeField_label":"Workflow-Typ","StartWorkflowWindow_contentItems_label":"Inhalte","StartWorkflowWindow_changeSetField_label":"Inhalte","StartWorkflowWindow_extendedChangeSetField_label":"Abhängige Inhalte",
"StartPublicationWorkflowWindow_extendedChangeSet_help_text":"Die hier aufgelisteten Inhalte sind für eine erfolgreiche Publikation zusätzlich erforderlich und werden ebenfalls publiziert.","StartTranslationWorkflowWindow_extendedChangeSet_help_text":"Die hier aufgelisteten Inhalte werden dem Bearbeiter des Workflows zusätzlich zur Übersetzung angezeigt, da sie nicht in allen Ziel-Locales auf dem aktuellen Stand sind.","StartWorkflowWindow_removeEditedContents_box_label":"Aus meinen bearbeiteten Inhalten entfernen",
"StartWorkflowWindow_nameNotValid":"Das Feld darf nicht leer sein","StartWorkflowWindow_states_label":"Nächster Workflow-Schritt","StartWorkflowWindow_sites_label":"Ziel-Locale","StartWorkflowWindow_masterSite_label":"Übersetze von {0} nach:","StartWorkflowWindow_masterSite_label_no_locale":"Keine Ziel-Locale verfügbar.","StartWorkflowWindow_selectAllSites":"Alle Sprachen","OpenWorkflowIssuesWindow_btn_text":"Fehler und Warnungen","OpenWorkflowIssuesWindow_btn_tooltip":"Liste der Fehler und Warnungen für diese Inhalte öffnen. Es liegen keine Fehler oder Warnungen vor.",
"OpenWorkflowIssuesWindow_btn_errorMessage":"Liste der Fehler und Warnungen für diese Inhalte öffnen. Es liegen Fehler oder Warnungen vor.","WorkflowIssuesWindow_title":"Fehler und Warnungen","WorkflowIssuesWindow_tooltip":"Dieses Fenster zeigt Fehler und Warnungen für die aktuellen Inhalte. Warnungen sind ausschließlich zu Informationszwecken. Fehler müssen behoben werden, da ansonsten kein Workflow gestartet werden kann.","WorkflowIssuesWindow_errorHeader_text":"Fehler","WorkflowIssuesWindow_noError_text":"Es liegen keine Fehler vor.",
"WorkflowIssuesWindow_warnHeader_text":"Warnungen","WorkflowIssuesWindow_noWarn_text":"Es liegen keine Warnungen vor.","WorkflowIssuesWindow_computingIssues_text":"Fehler und Warnungen werden ermittelt…","WorkflowInfoWindow_abortButton_label":"Workflow abbrechen","WorkflowInfoWindow_closeButton_label":"Schließen","AbortWorkflow_confirm_title":"Workflow abbrechen","AbortWorkflow_confirm_message":'Möchten Sie wirklich den Workflow "{0}" abbrechen?',"AbortWorkflow_yes_button":"Workflow abbrechen","AbortWorkflow_no_button":"Workflow nicht abbrechen",
"AbortWorkflow_warning_title":"Abgebrochener Workflow","AbortWorkflow_warning_message":'Der Workflow "{0}", an dem Sie gearbeitet haben, wurde abgebrochen.',"WorkflowDetailPanel_workflowType_label":"Workflow-Typ","WorkflowDetailPanel_workflowName_label":"Workflow-Name","WorkflowDetailPanel_contentItems_label":"Inhalt","WorkflowDetailPanel_targetSite_label":"Site","WorkflowDetailPanel_targetLocale_label":"Ziel-Locale","WorkflowDetailPanel_owner_label":"Gestartet von","WorkflowDetailPanel_owner_me":"Mir",
"WorkflowDetailPanelWrapper_acceptButton_label":"Task akzeptieren","WorkflowDetailPanelWrapper_applyButton_label":"Anwenden","WorkflowDetailPanelWrapper_cancelButton_label":"Abbrechen","WorkflowDetailPanelWrapper_workflow_completed":"Workflow beendet","WorkflowDetailPanelWrapper_states_label":"Workflow-Schritte","WorkflowDetailPanelWrapper_next_state_label":"Wähle nächsten Workflow-Schritt","WorkflowDetailColumn_tooltip_text":"Details","TaskWarningPanel_title":"Eskaliert","Action_showAddProjectMemberDialogAction_text":"Personen hinzufügen...",
"Action_showAddProjectMemberDialogAction_tooltip":"Personen zum Projekt hinzufügen","AddProjectMemberDialog_title_text":"Personen hinzufügen zu Projekt '{0}'","AddProjectMemberDialog_label_text":"Personen","AddProjectMemberDialog_button_text":"Hinzufügen","Action_removeProjectMember_text":"Entfernen","Action_removeProjectMember_tooltip":"Entferne die Auswahl","Action_removeProjectMember_openTodos_confirm_title":"Entfernen bestätigen","Action_removeProjectMember_openTodos_confirm_message":'{1} ist einem offenen To-Do zugewiesen. Wollen Sie {1} aus dem Projekt "{0}" entfernen?',
"Action_removeProjectMember_openTodos_confirm_messageSelf":'Sie haben noch offene To-Dos. Wollen Sie das Projekt "{0}" trotzdem verlassen?',"Action_removeProjectMember_openTodos_confirm_buttonText":"Entfernen","Action_removeProjectMember_openTodos_confirm_buttonTextSelf":"Projekt verlassen","Action_removeProjectMember_projectDeletion_confirm_title":"Entfernen bestätigen","Action_removeProjectMember_projectDeletion_confirm_message":'{1} ist das letzte Mitglied des Projekts "{0}". Wenn Sie {1} entfernen, wird es gelöscht. Wollen Sie {1} wirklich aus dem Projekt entfernen und es dann löschen?',
"Action_removeProjectMember_projectDeletion_confirm_messageSelf":'Sie sind das letzte Mitglied des Projekts "{0}". Wenn Sie es verlassen, wird es gelöscht. Wollen Sie das Projekt verlassen und löschen?',"Action_removeProjectMember_projectDeletion_confirm_buttonText":"Entfernen und löschen","Action_removeProjectMember_projectDeletion_confirm_buttonTextSelf":"Verlassen und löschen","Project_goals_title":"Über dieses Projekt","Project_dueDate_title":"Fälligkeitsdatum","Project_dueDate_emptyText":"Datum",
"Project_todos_title":"To-Dos","Project_todos_title_filtered_by_due_date":"To-Dos mit dem Fälligkeitsdatum '{0}'","Project_todos_add_button_text":"To-Do hinzufügen","Project_notes_title":"Notizen und Ziele","Project_users_title":"Personen","Project_users_me":"Ich","Project_calendar_title":"Kalender","Project_toolbar_project":"Projekt","Project_leaveProject_text":"Projekt verlassen","Project_leaveProject_tooltip":"Das Projekt verlassen","Project_uncheckTodoAssigneeNotInProject_confirm_title":"'{0}' neu einladen?",
"Project_uncheckTodoAssigneeNotInProject_confirm_message":"Die momentan zugewiesene Person ('{0}') ist nicht mehr ein Mitglied des Projekts. Möchten Sie '{0}' wieder zu dem Projekt hinzufügen? Alternativ können Sie die Zuweisung entfernen.","Project_uncheckTodoAssigneeNotInProject_confirm_primaryButtonText":"Einladen","Project_uncheckTodoAssigneeNotInProject_confirm_secondaryButtonText":"Zuweisung entfernen","Project_Todo_due_after_project_due_date_warning_text":"Das Fälligkeitsdatum des To-Dos liegt nach dem des Projektes.",
"Project_Todo_due_date_overdue_error_text":"Das To-Do ist überfällig.","Project_Todos_show_all":"Zeige alle To-Dos an","Project_Todos_select_day":"Wählen Sie einen Tag, um dessen To-Dos anzuzeigen.","Project_content_empty_text":"Dieses Projekt hat keine Inhalte.","Project_content_title":"Inhalte","ControlRoomPlugin_btn_show_tooltip":"Control-Room\x26nbsp;anzeigen (F4)","ControlRoomPlugin_btn_hide_tooltip":"Control-Room\x26nbsp;ausblenden","ControlRoomPlugin_btn_show_filter_options_tooltip":"Zeige Filter Optionen",
"ControlRoomPlugin_btn_show_actions_tooltip":"Zeige Aktionsmenä","ControlRoomPlugin_btn_back_to_list_tooltip":"Zurück zur Listenansicht","Workflow_StudioSimplePublication_start":"Workflow starten (aktueller Schritt)","Workflow_StudioSimplePublication_end":"Inhalte publiziert","Workflow_StudioTwoStepPublication_start":"Publikationsmenge zusammenstellen","Workflow_StudioTwoStepPublication_start_current":"Publikationsmenge zusammenstellen (aktueller Schritt)","Workflow_StudioTwoStepPublication_pending":"Publikation ausstehend",
"Workflow_StudioTwoStepPublication_pending_current":"Publikation ausstehend (aktueller Schritt)","Workflow_StudioTwoStepPublication_end":"Inhalte publiziert","Workflow_StudioTwoStepPublication_revision":"Benötigt Überarbeitung","Action_showProject_tooltip":"Im Tab öffnen","Action_showProject_text":"Im Tab öffnen","Action_renameProject_tooltip":"Project umbenennen","Action_renameProject_text":"Umbenennen","WorkflowNotesPanel_label":"Notizen","WorkflowNotesPanel_comment_too_long":"Das Feld darf nicht mehr als 2000 Zeichen enthalten",
"WorkflowNotesPanel_textArea_label":"Notizen Text","AssignMembersPanel_title":"Den Workflow Personen zuweisen","AssignMembersPanel_noUsersAssigned_error":"Sie müssen Personen auswählen","AssignMembersPanel_label":"Personen","Projects_Todos_Widget_type":"Offene To-Dos","Projects_Todos_Widget_name":"Meine offenen To-Dos","Projects_Todos_Widget_name_all":"Alle offenen To-Dos","Projects_Todos_Widget_name_with_project":"Meine offenen To-Dos: {0}","Projects_Todos_Widget_name_with_project_for_all":"Alle offenen To-Dos: {0}",
"Projects_Todos_Widget_description":"Dieses Widget zeigt die offenen To-Dos.","Projects_Todos_Widget_showAllTodosLink_text":"Alle zeigen","Projects_Todos_Widget_noOpenTodos_text":"Alles erledigt!","Projects_Todos_Widget_project_label":"Projekt","Projects_Todos_Widget_show_my_open_todos":"Nur die eigenen offenen To-Dos","Projects_Todos_Widget_show_all_open_todos":"Alle offenen To-Dos","Projects_Todos_Widget_project_selection_default":"Alle meine Projekte"},function(){});Ext.define("com.coremedia.cms.editor.controlroom.workflow.publication.PublicationProcessDefinitions_properties_de",{override:"com.coremedia.cms.editor.controlroom.workflow.publication.PublicationProcessDefinitions_properties","StudioSimplePublication_text":"Direkte Publikation","StudioTwoStepPublication_text":"Vier-Augen-Publikation","StudioTwoStepPublication_task_Approve_text":"Freigeben","StudioTwoStepPublication_task_Compose_text":"Erstellen","StudioTwoStepPublication_task_Publish_text":"Publizieren"},
function(){});
//# sourceMappingURL=com.coremedia.ui.collaboration__control-room-editor-components-overrides-de.js.map