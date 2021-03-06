/**
 * Properties class for ResourceBundle "ControlRoom" and Locale "ja".
 */
Ext.define("com.coremedia.cms.editor.controlroom.ControlRoom_properties_ja", {
  override: "com.coremedia.cms.editor.controlroom.ControlRoom_properties",
      /**
       * Localization properties for Control Room Headers
      */
  "ControlRoom_title": "コントロールルーム",
  "ControlRoom_MyEditedContent_title": "私の編集済みコンテンツ",
  "ControlRoom_Projects_title": "私のプロジェクト",
  "ControlRoom_Publication_Workflows_title": "公開ワークフロー",
  "ControlRoom_Translation_Workflows_title": "翻訳ワークフロー",
  "ProjectsPanel_drag_computing_drag_data": "ロード中…",
  "ProjectsPanel_drag_singleselect_text_single_content": "{0} (1 コンテンツアイテム)",
  "ProjectsPanel_drag_singleselect_text_multiple_contents": "{0} ({1} コンテンツアイテム)",
  "ProjectsPanel_drag_multiselect_text_single_content": "{0} プロジェクト (1 コンテンツアイテム)",
  "ProjectsPanel_drag_multiselect_text_multiple_contents": "{0} プロジェクト ({1}コンテンツアイテム)",
  "Action_showInControlRoom_text": "コントロールルームで表示する",
  "Action_renameTabProjectAction_menu_text": "名前変更",
  "Action_renameTabProjectAction_title_text": "プロジェクトの名前変更",
  "Action_renameTabProjectAction_message_text": "プロジェクトの新しい名前を入力する",
      /**
       * Localization properties for DeleteEditedContentsAction
 * @see com.coremedia.cms.editor.controlroom.actions.DeleteEditedContentsAction
      */
  "Action_deleteEditedContents_selected_text": "削除する",
  "Action_deleteEditedContents_selected_tooltip": "編集済みコンテンツからコンテンツを削除する",
  "Action_deleteEditedContents_all_text": "私の編集済みコンテンツを空にする",
  "Action_deleteEditedContents_all_tooltip": "私の編集済みコンテンツを空にする",
  "Action_deleteEditedContents_confirm_title": "編集済みコンテンツを空にする",
  "Action_deleteEditedContents_confirm_message": "本当に編集済みコンテンツを空にしますか？",
  "Action_deleteEditedContents_confirm_buttonText": "空にする",
      /**
       * Localization properties for PasteFromClipboardToProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.PasteFromClipboardToProjectAction
      */
  "Action_pasteFromClipboardToProjects_text": "貼り付け",
  "Action_pasteFromClipboardToProjects_tooltip": "クリップボードからコンテンツアイテムを貼り付ける",
      /**
       * Localization properties for CreateProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.CreateProjectAction
      */
  "Action_createProject_tooltip": "編集済みコンテンツからプロジェクトを作成する",
  "Action_createProject_all_text": "プロジェクトを作成する (すべてに)",
  "Action_createProject_all_tooltip": "編集済みコンテンツすべてからプロジェクトを作成する",
  "Action_createProject_selected_text": "プロジェクトを作成する",
  "Action_createProject_selected_tooltip": "選択した編集済みコンテンツからプロジェクトを作成する",
  "Action_createProject_empty_text": "空のプロジェクトを作成する",
  "Action_createProject_empty_tooltip": "&nbsp;&nbsp;新しい&nbsp;空の&nbsp;プロジェクトを作成する",
  "Action_createProject_new_name_text": "新しいプロジェクト",
      /**
       * Localization properties for LeaveProjectsAction
 * @see com.coremedia.cms.editor.controlroom.actions.LeaveProjectsAction
      */
  "Action_leaveProjects_text": "離れる",
  "Action_leaveProjects_tooltip": "選択したプロジェクトから離れる",
  "Action_leaveProjects_confirm_title": "確定",
  "Action_leaveProjects_confirm_message": "本当に選択したプロジェクトから離れますか？",
  "Action_leaveProjects_confirm_buttonText": "離れる",
      /**
       * Localization properties for RemoveContentFromProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.RemoveContentFromProjectAction
      */
  "Action_removeContentFromProject_text": "削除する",
  "Action_removeContentFromProject_tooltip": "プロジェクトから選択したコンテンツを除外する",
      /**
       * Localization properties for CutContentFromProjectAction
 * @see com.coremedia.cms.editor.controlroom.project.actions.CutContentFromProjectAction
      */
  "Action_cutContentFromProject_text": "切り取り",
  "Action_cutContentFromProject_tooltip": "プロジェクトから選択したコンテンツを切り取る",
  "WorkflowsTabPanel_inbox_text": "インボックス",
  "WorkflowsTabPanel_pending_text": "保留中",
  "WorkflowsTabPanel_finished_text": "完了済み",
  "Action_start_publication_tooltip": "公開ワークフローの開始",
  "Action_showStartPublicationWorkflowWindow_text": "公開ワークフローを開始…",
  "Action_showStartPublicationWorkflowWindow_tooltip": "公開",
  "Action_globalShowStartPublicationWorkflowWindow_text": "公開ワークフローを開始…",
  "Action_globalShowStartPublicationWorkflowWindow_tooltip": "公開",
  "Action_start_translation_tooltip": "翻訳ワークフローの開始",
  "Action_showStartTranslationWorkflowWindow_text": "翻訳ワークフローを開始…",
  "Action_showStartTranslationWorkflowWindow_tooltip": "翻訳する",
  "Action_startPullTranslationWorkflow_text": "お好みのサイトへ翻訳",
  "Action_startPullTranslationWorkflow_tooltip": "お好みのサイトへ翻訳",
  "Action_startPullTranslationWorkflow_noContents_disabled_tooltip": "お好みのサイトへ翻訳するコンテンツが選択されていません。",
  "Action_startPullTranslationWorkflow_contentsNotInMasterOfPreferred_disabled_tooltip": "お好みのサイトへ翻訳するのは不可能です。選択したコンテンツにお好みのサイトのマスターに所属していないコンテンツがあるからです。",
  "Action_startPullTranslationWorkflow_containsWorkingVersionOnlyContents_disabled_tooltip": "お好みのサイトへ翻訳するのは不可能です。選択したコンテンツに一度もチェックインしていないコンテンツがあるからです。",
  "Action_startPullTranslationWorkflow_noPreferredSite_disabled_tooltip": "お好みのサイトが選択されていません。",
  "StartPublicationWorkflowWindow_title": "公開ワークフロー",
  "StartTranslationWorkflowWindow_title": "翻訳ワークフロー",
  "StartWorkflowWindow_workflowNameTextField_label": "ワークフロー",
  "StartWorkflowWindow_workflowNameTextField_emptyText": "ワークフローの名前を入力してください。",
  "StartWorkflowWindow_workflowTypeField_label": "ワークフロータイプ",
  "StartWorkflowWindow_contentItems_label": "コンテンツ",
  "StartWorkflowWindow_changeSetField_label": "公開セット",
  "StartWorkflowWindow_extendedChangeSetField_label": "依存するコンテンツ",
  "StartPublicationWorkflowWindow_extendedChangeSet_help_text": "このコンテンツアイテムのセットは公開を成功させるために必要です。",
  "StartWorkflowWindow_removeEditedContents_box_label": "私の編集済みコンテンツから除外する",
  "StartWorkflowWindow_nameNotValid": "このフィールドは空ではいけません。",
  "StartWorkflowWindow_states_label": "次のワークフロー手順",
  "StartWorkflowWindow_sites_label": "ターゲットロケール",
  "StartWorkflowWindow_masterSite_label": "{0}から以下にローカライズ:",
  "StartWorkflowWindow_masterSite_label_no_locale": "ターゲットロケールがありません。",
  "StartWorkflowWindow_selectAllSites": "すべてを選択",
  "OpenWorkflowIssuesWindow_btn_tooltip": "現在の公開セットのエラーと警告のリストを示す",
  "WorkflowIssuesWindow_title": "エラーと警告",
  "WorkflowIssuesWindow_tooltip": "このウィンドウは現在のコンテンツアイテムのエラーと警告を示しています。警告は情報として伝えただけで、解決する必要はありません。エラーは修正が必要です。さもないとワークフローを開始することができません。",
  "WorkflowIssuesWindow_errorHeader_text": "エラー",
  "WorkflowIssuesWindow_noError_text": "エラーはありません。",
  "WorkflowIssuesWindow_warnHeader_text": "警告",
  "WorkflowIssuesWindow_noWarn_text": "警告はありません。",
  "WorkflowIssuesWindow_computingIssues_text": "計算エラーと警告",
  "WorkflowInfoWindow_abortButton_label": "ワークフローを中止",
  "WorkflowInfoWindow_closeButton_label": "閉じる",
  "AbortWorkflow_confirm_title": "ワークフローを中止",
  "AbortWorkflow_confirm_message": "本当にワークフローを中止してもいいですか\"{0}\"？",
  "AbortWorkflow_yes_button": "ワークフローを中止",
  "AbortWorkflow_no_button": "ワークフローを中止しないでください",
  "AbortWorkflow_warning_title": "中止したワークフロー",
  "AbortWorkflow_warning_message": "作業中の\"{0}\"ワークフローは中止されました。",
  "WorkflowDetailPanel_workflowType_label": "ワークフロータイプ",
  "WorkflowDetailPanel_workflowName_label": "ワークフローの名前",
  "WorkflowDetailPanel_contentItems_label": "コンテンツアイテム",
  "WorkflowDetailPanel_targetSite_label": "サイト",
  "WorkflowDetailPanel_targetLocale_label": "ターゲットロケール",
  "WorkflowDetailPanel_owner_label": "開始者",
  "WorkflowDetailPanel_owner_me": "私です",
  "WorkflowDetailPanelWrapper_acceptButton_label": "タスクを承認する",
  "WorkflowDetailPanelWrapper_applyButton_label": "適用",
  "WorkflowDetailPanelWrapper_cancelButton_label": "取り消し",
  "WorkflowDetailPanelWrapper_workflow_completed": "ワークフローの完了",
  "WorkflowDetailPanelWrapper_states_label": "ワークフローの手順",
  "WorkflowDetailPanelWrapper_next_state_label": "次のワークフローステップを選択する",
      /**
       * Localization properties for ShowAddProjectMemberDialogAction
 * @see com.coremedia.cms.editor.controlroom.actions.ShowAddProjectMemberDialogAction
      */
  "Action_showAddProjectMemberDialogAction_text": "メンバーの追加…",
  "Action_showAddProjectMemberDialogAction_tooltip": "プロジェクトにメンバーを追加する",
  "AddProjectMemberDialog_title_text": "プロジェクトにメンバーを追加する '{0}'",
  "AddProjectMemberDialog_label_text": "メンバー",
  "AddProjectMemberDialog_button_text": "追加",
      /**
       * Localization properties for RemoveProjectMemberAction
      */
  "Action_removeProjectMember_text": "削除する",
  "Action_removeProjectMember_tooltip": "選択を削除する",
  "Action_removeProjectMember_openTodos_confirm_title": "削除を確定する",
  "Action_removeProjectMember_openTodos_confirm_message": "{1}は未実施のするべきことに割り振られたままです。プロジェクトから {1}を除外したいですか\"{0}\"？",
  "Action_removeProjectMember_openTodos_confirm_messageSelf": "まだ、未実施のするべきことがあります。プロジェクトを離れたいですか\"{0}\"？",
  "Action_removeProjectMember_openTodos_confirm_buttonText": "削除する",
  "Action_removeProjectMember_openTodos_confirm_buttonTextSelf": "離れる",
  "Action_removeProjectMember_projectDeletion_confirm_title": "削除を確定する",
  "Action_removeProjectMember_projectDeletion_confirm_message": "{1}はプロジェクトの最後のメンバーです\"{0}\"。{1}がこのプロジェクトから除外されると、このプロジェクトは削除されるでしょう。{1}を除外してこのプロジェクトを削除したいですか？",
  "Action_removeProjectMember_projectDeletion_confirm_messageSelf": "あなたはこのプロジェクトの最後のメンバーです\"{0}\"。あなたがこのプロジェクトを離れると、これは削除されます。このプロジェクトから離れプロジェクトを削除したいですか？",
  "Action_removeProjectMember_projectDeletion_confirm_buttonText": "除外して削除",
  "Action_removeProjectMember_projectDeletion_confirm_buttonTextSelf": "離れて削除",
  "Project_goals_title": "このプロジェクトについて",
  "Project_dueDate_title": "締め切り日",
  "Project_dueDate_emptyText": "日付",
  "Project_todos_title": "するべきこと",
  "Project_todos_title_filtered_by_due_date": "するべきことと締め切り日'{0}'",
  "Project_todos_add_button_text": "するべきことリストを作成する",
  "Project_notes_title": "注記と目標",
  "Project_users_title": "メンバー",
  "Project_users_me": "私です",
  "Project_calendar_title": "カレンダー",
  "Project_toolbar_project": "プロジェクト",
  "Project_leaveProject_text": "プロジェクトを離れる",
  "Project_leaveProject_tooltip": "このプロジェクトを離れる",
  "Project_uncheckTodoAssigneeNotInProject_confirm_title": "もう一度招待しますか'{0}'？",
  "Project_uncheckTodoAssigneeNotInProject_confirm_message": "このするべきことに正式に指定されていたメンバー'{0}' は、もはやこのプロジェクトに属していません。'{0}'をプロジェクトにもう一度加えますか？ そうしないと、このメンバーは除外されてしまいます。",
  "Project_uncheckTodoAssigneeNotInProject_confirm_primaryButtonText": "招待する",
  "Project_uncheckTodoAssigneeNotInProject_confirm_secondaryButtonText": "割り当てを削除する",
  "Project_Todo_due_after_project_due_date_warning_text": "するべきことの締め切り日はプロジェクトの締め切り日より後です。",
  "Project_Todo_due_date_overdue_error_text": "するべきことは締め切りを過ぎています。",
  "Project_Todos_show_all": "するべきことをすべて示す",
  "Project_Todos_select_day": "日付を選択してするべきことをフィルターする。",
  "Project_content_empty_text": "このプロジェクトにはコンテンツがありません。",
  "Project_content_title": "コンテンツ",
      /**
       * Localization properties for ControlRoomPlugin
 * @see com.coremedia.cms.editor.controlroom.ControlRoomPlugin
      */
  "ControlRoomPlugin_btn_show_tooltip": "&nbsp;コントロール&nbsp;ルームを表示する",
  "ControlRoomPlugin_btn_hide_tooltip": "&nbsp;コントロール&nbsp;ルームを非表示にする",
  "ControlRoomPlugin_btn_ItemId": "コントロールルームボタン",
  "Workflow_StudioSimplePublication_start": "ワークフローを開始する(現在のステップ)",
  "Workflow_StudioSimplePublication_end": "公開済みコンテンツ",
  "Workflow_StudioTwoStepPublication_start": "コンテンツアイテムを作成",
  "Workflow_StudioTwoStepPublication_start_current": "コンテンツアイテムを作成 (現在のステップ)",
  "Workflow_StudioTwoStepPublication_pending": "未定の公開",
  "Workflow_StudioTwoStepPublication_pending_current": "未定の公開 (現在のステータス)",
  "Workflow_StudioTwoStepPublication_end": "公開済みコンテンツ",
  "Workflow_StudioTwoStepPublication_revision": "修正が必要",
      /**
       * Localization properties for ShowProjectAction
      */
  "Action_showProject_tooltip": "タブで開く",
  "Action_showProject_text": "タブで開く",
      /**
       * Localization properties for RenameProjectAction
      */
  "Action_renameProject_tooltip": "プロジェクトの名前変更",
  "Action_renameProject_text": "名前変更",
      /**
       * Workflow Notes
      */
  "WorkflowNotesPanel_label": "注記",
  "WorkflowNotesPanel_comment_too_long": "フィールドには最大で2000文字を含むことができます。",
      /**
       * Assign Workflows
      */
  "AssignMembersPanel_title": "ワークフローを人々に割り当てる",
  "AssignMembersPanel_noUsersAssigned_error": "人々を選択しなければなりません",
      /**
       * Projects Todos Widget
      */
  "Projects_Todos_Widget_type": "これからするべきこと",
  "Projects_Todos_Widget_name": "私のこれからするべきこと",
  "Projects_Todos_Widget_name_all": "すべてのこれからするべきこと",
  "Projects_Todos_Widget_name_with_project": "私のこれからするべきことは以下のとおり。{0}",
  "Projects_Todos_Widget_name_with_project_for_all": "すべてのこれからするべきことは以下のとおり。{0}",
  "Projects_Todos_Widget_description": "このウィジェットにはこれからするべきことが表示されます",
  "Projects_Todos_Widget_showAllTodosLink_text": "すべて表示する",
  "Projects_Todos_Widget_noOpenTodos_text": "すべて完了！",
  "Projects_Todos_Widget_project_label": "プロジェクト",
  "Projects_Todos_Widget_show_my_open_todos": "私がこれからするべきことだけを表示",
  "Projects_Todos_Widget_show_all_open_todos": "すべてのこれからするべきことを表示",
  "Projects_Todos_Widget_project_selection_default": "私のプロジェクトすべて"
}, function() {
});