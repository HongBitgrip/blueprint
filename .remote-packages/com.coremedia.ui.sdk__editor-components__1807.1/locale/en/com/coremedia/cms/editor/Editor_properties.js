/**
 *[PublicApi]
 * This class defined various localized texts used throughout CoreMedia Studio.
 */
Ext.define("com.coremedia.cms.editor.Editor_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
  "studio_window_title": "CoreMedia Studio",
  "message_box_title": "CoreMedia Studio",
  "EditorMain_loading_text": "Starting Studio…",
  "EditorMain_loadingPlugin_text": "Loading plugin&#160;'{0}'",
  "EditorMain_loadingProgress_text": "{0} of {1}",
  "EditorMain_loadingMainView_text": "Initializing Studio…",
  "studio_on_unload": "By leaving the site the CoreMedia Studio will be closed.",
  "dateFormat": "Y/m/d g:i A",
  "shortDateFormat": "Y/m/d",
  "calendarFormat": "m/d/Y g:i A",
  "content_type_any_txt": "Content",
  "Date_property_field": "Date",
  "Time_property_field": "Time",
  "dialog_defaultSubmitButton_text": "Confirm",
  "dialog_defaultCreateButton_text": "Create",
  "dialog_defaultCancelButton_text": "Cancel",
  "dialog_defaultCloseButton_text": "Close",
  "dialog_pasteErrorTitle_text": "Paste Error",
  "dialog_pasteErrorMessage_text": "The clipboard contains a content item '{0}' with the type '{1}' that doesn't match the linklist content type '{2}'.",
  "dialog_pasteErrorUnreadableMessage_text": "The clipboard contains an unreadable content item.",
  "dialog_confirmFolderMoveTitle_text": "Confirm Folder Move",
  "dialog_confirmFolderMoveMessage_text": "Your selection contains folders. Do you really want to move these content items?",
  "dialog_confirmFolderMoveOkButtonText_text": "Move",
  "dialog_confirmCrossSiteMoveTitle_text": "Confirm Cross-Site Move",
  "dialog_confirmCrossSiteMoveMessage_text": "You are about to change the site of the selected content items. Do you really want to move these content items?",
  "dialog_confirmCrossSiteMoveOkButtonText_text": "Move",
  "dialog_confirmFolderRenameTitle_text": "Confirm Folder Rename",
  "dialog_confirmFolderRenameMessage_text": "Do you really want to rename this folder?",
  "dialog_confirmFolderRenameOkButtonText_text": "Rename",
  "dialog_confirmLargeCopyOperationTitle_text": "Confirm Copy Operation",
  "dialog_confirmLargeCopyOperationMessage_text": "Do you really want to copy {0} items?",
  "dialog_confirmLargeCopyOperationOkButtonText_text": "Copy",
  "dialog_confirmLargeMoveOperationTitle_text": "Confirm Move Operation",
  "dialog_confirmLargeMoveOperationMessage_text": "Do you really want to move {0} items?",
  "dialog_confirmLargeMoveOperationOkButtonText_text": "Move",
  "FavoritesToolbarRegion_label": "Favorites Bar",
  "FavoritesToolbar_label": "Favorites",
  "FavoritesToolbar_lastEdited_btn_text": "Last edited",
  "FavoritesToolbar_extensions_btn_text": "Apps",
  "FavoritesToolbar_lastEdited_btn_height": "46",
  "Content_notReadable_text": "Element name not visible (ID: {0})",
  "SearchField_empty_text": "Search…",
  "SearchField_loading_text": "Loading suggestions…",
  "SearchArea_historyBack_btn_tooltip": "Back",
  "SearchArea_historyForward_btn_tooltip": "Forward",
  "SearchArea_search_btn_tooltip": "Start search",
  "SearchArea_breadcrump_label": "Search in:",
  "SearchArea_newFolderName_text": "New folder",
  "SearchArea_newFolder_btn_tooltip": "Create new folder",
  "SearchArea_newDocument_btn_tooltip": "Create new content",
  "SearchArea_listView_btn_tooltip": "Switch to list view",
  "SearchArea_treeView_btn_tooltip": "Switch to tree view",
  "SearchArea_thumbnailView_btn_tooltip": "Switch to thumbnail view",
  "SearchArea_repositoryMode_btn_tooltip": "Switch to browse mode",
  "SearchArea_searchMode_btn_tooltip": "Switch to search mode",
  "SearchArea_contenttypeselector_tooltip": "Content type selector",
  "SearchArea_header_toolbar": "Library search",
  "SearchArea_content_type_selector_empty_text": "Select content type",
  "SearchList_sorting_error_handling_ui_has_no_header_title": "Invalid Saved Search Folder",
  "SearchList_sorting_error_handling_ui_has_no_header_message": "Can not sort by sortfield {0}. It will be sorted by 'Last Modified' instead.",
  "CollectionView_searchArea_mode_toolbar_label": "Mode",
  "CollectionView_repositoryToolbar_label": "Library",
  "CollectionView_searchToolbar_label": "Search",
  "CollectionView_switchView_toolbar_label": "View",
  "CollectionView_title": "Library",
  "CollectionView_label": "Library (F3)",
  "CollectionView_emptySearch_text": "No search result.",
  "CollectionView_emptySearchNotRoot_text": "No search result, possibly because the search is limited to a specific folder.",
  "CollectionView_emptySearchNotRoot_link_text": "Retry Search in All Content",
  "CollectionView_emptyFolder_text": "This folder is empty.",
  "CollectionView_contentRootFolder_treenode_title": "All Content",
  "CollectionView_one_hit_text": "{0} search result",
  "CollectionView_many_hits_text": "{0} search results",
  "CollectionView_partial_hits_text": "{0} search results ({1} shown)",
  "CollectionView_contentState_deleted_text": "In the trash bin, original location: {0}",
  "CollectionView_thumnail_dataview": "Document thumbnail view",
  "CollectionView_repositorylist_text": "Document list view",
  "CollectionView_repositorytree_text": "Document tree view",
  "CollectionView_breadcrumb_toolbar_text": "Breadcrumb",
  "CollectionView_breadcrumb_root_text": "Breadcrumb root",
  "CollectionView_number_of_items_in_selected_folder": "{0} items",
  "DatePropertyField_dateFormat": "m/d/Y H:i",
  "DateTimePropertyField_dateFormat": "m/d/Y",
  "DateTimePropertyField_timeFormat": "g:i A",
  "DateTimePropertyField_timeSeparator": "at",
  "DateTimePropertyField_emptyDate": "Date",
  "DateTimePropertyField_emptyTime": "Time",
  "DateTimePropertyField_emptyTimeZone": "Time zone",
  "DateTimePropertyField_dateReset_text": "Reset",
  "DateTimePropertyField_dateValidator_message": "Invalid date format",
  "DateTimePropertyField_timeValidator_message": "Invalid time format",
  "DateTimePropertyField_timeZoneValidator_message": "Invalid time zone format",
  "DateTimeMenu_timeZone_title": "Time zone",
  "DateTimeMenu_time_title": "Time",
      /**
       * Deprecated and empty; use GridColumns.INSTANCE.creationDate_header instead; if you change this constant, you might not affect all grid columns, only the collection view.
      */
  "ListView_columnHeader_creationDate": "",
      /**
       * Deprecated; only used by the ListViewLifecycleStatusColumn.
      */
  "ListView_columnHeader_lifecycleStatus": "Status",
      /**
       * Deprecated and empty; use GridColumns.INSTANCE.name_header instead; if you change this constant, you might not affect all grid columns, only the collection view.
      */
  "ListView_columnHeader_name": "",
      /**
       * Deprecated and empty; use GridColumns.INSTANCE.status_header instead; if you change this constant, you might not affect all grid columns, only the collection view.
      */
  "ListView_columnHeader_status": "",
      /**
       * Deprecated and empty; use GridColumns.INSTANCE.type_header instead; if you change this constant, you might not affect all grid columns, only the collection view.
      */
  "ListView_columnHeader_type": "",
  "ListView_suffix": "List",
  "TreeView_repository": "Repository",
  "CollectionChooserWindow_title": "Choose a",
  "Filter_status_text": "Status",
  "Filter_status_dropdown_button_text": "Editorial States",
  "Filter_inProduction_text": "In Production",
  "Filter_checkedOutByMe_text": "Checked out by Me",
  "Filter_checkedOutByOthers_text": "Checked out by Others",
  "Filter_notCheckedOut_text": "Not Checked Out",
  "Filter_approved_text": "Approved",
  "Filter_published_text": "Published",
  "Filter_deleted_text": "Deleted",
  "Filter_lastEditedBy_text": "Last Edited By",
  "Filter_lastEditedByAnyone_text": "Anyone",
  "Filter_lastEditedByMe_text": "Me",
  "Filters": "Filters",
  "Filter_restore_btn_text": "Restore filter to their defaults",
  "Filter_restore_btn_style": "filter-panel-restore",
  "Filter_Site_text": "Site",
  "Filter_Site_preferred_site_button": "Preferred Site",
  "Filter_Site_all_content_button": "All Content",
  "Filter_TranslationStatus_text": "Translation",
  "Filter_TranslationStatus_site_text": "Target Site",
  "Filter_TranslationStatus_preferredSite_text": "Preferred Site",
  "Filter_TranslationStatus_noSite_text": "Select a Site",
  "Filter_TranslationStatus_locale_text": "Target Locale",
  "Filter_TranslationStatus_status_text": "Status",
  "Filter_TranslationStatus_status_new-in-master_text": "New in Master",
  "Filter_TranslationStatus_status_new-in-master_tooltip": "Show content items that exist only in the master site but not in the local site.",
  "Filter_TranslationStatus_status_not-up-to-date_text": "Master Updated",
  "Filter_TranslationStatus_status_not-up-to-date_tooltip": "Show content items that have been translated to the local site, but now have a newer version in the master site.",
  "Filter_TranslationStatus_status_not-localized-yet_text": "Not Translated Yet",
  "Filter_TranslationStatus_status_not-localized-yet_tooltip": "Show content items that have been copied to the local site but have not been translated, yet.",
  "Filter_TranslationStatus_status_in-translation_text": "In Translation",
  "Filter_TranslationStatus_status_in-translation_tooltip": "Show content items that are currently in translation to the local site.",
  "Filter_TranslationStatus_status_up-to-date_text": "Up to Date",
  "Filter_TranslationStatus_status_up-to-date_tooltip": "Show content items whose current version in the master site has already been translated to the local site.",
  "Filter_language_text": "Language",
  "Filter_language_all_text": "All",
  "Filter_date_modificationdate_text": "Last Modified",
  "Filter_date_publicationdate_text": "Published",
  "Filter_date_days_any_text": "Any",
  "Filter_date_days_1_text": "1 day ago",
  "Filter_date_days_7_text": "1 week ago",
  "Filter_date_days_14_text": "2 weeks ago",
  "Filter_date_days_30_text": "1 month ago",
  "Filter_date_days_365_text": "1 year ago",
  "DocumentFormToolbar_label": "Document Form",
  "DocumentFormToolbar_state_noRights_text": "Read-only",
  "DocumentFormToolbar_state_noRights_info": "You can view the content but you cannot edit it.",
  "DocumentFormToolbar_state_checkedOut_text": "Editing in progress",
  "DocumentFormToolbar_state_checkedOut_info": "You have started editing this content. It is now locked for other users.",
  "DocumentFormToolbar_state_checkedOutByOther_mayWrite_text": "Content is edited by '{0}'",
  "DocumentFormToolbar_state_checkedOutByOther_mayWrite_info": "This content item is being edited by another user. Once the user has completed this process, you can apply your changes.",
  "DocumentFormToolbar_state_checkedOutByOther_noRights_text": "Read-only, edited by '{0}'",
  "DocumentFormToolbar_state_checkedOutByOther_noRights_info": "You can view the content but you cannot edit it. Furthermore, this content is being edited by another user.",
  "DocumentFormToolbar_state_locked_workflow_text": "Locked by workflow",
  "DocumentFormToolbar_state_locked_workflow_helpTitle": "Locked by Workflow",
  "DocumentFormToolbar_state_locked_workflow_helpText": "You cannot edit the content because it is currently used in the workflow '{0}'.",
  "VersionSelector_version_default_text": "Version {0}",
  "VersionSelector_version_latestPublished_text": "Version {0} (Currently Published)",
  "VersionSelector_version_latestTranslated_text": "Version {0} (Currently Localized)",
  "VersionSelector_version_toBeTranslated_text": "Version {0} (To Be Localized)",
  "VersionSelector_versionTooltip_text": "<b>Version {0}<\/b><br/>Author: {1}<br/>Date: {2}<br/>State: {3}",
  "VersionSelector_versionTooltip_state_notPublished": "Not Published",
  "VersionSelector_versionTooltip_state_published": "Published by {0} on {1}",
  "VersionSelector_versionTooltip_state_latestPublished": "Currently Published by {0} on {1}",
  "VersionSelector_versionTooltip_state_latestTranslated_notPublished": "Not Published, Currently Localized",
  "VersionSelector_versionTooltip_state_latestTranslated_published": "Published by {0} on {1}, Currently Localized",
  "VersionSelector_versionTooltip_state_latestTranslated_latestPublished": "Currently Published by {0} on {1}, Currently Localized",
  "VersionSelector_versionTooltip_state_toBeTranslated_notPublished": "Not Published, To Be Localized",
  "VersionSelector_versionTooltip_state_toBeTranslated_published": "Published by {0} on {1}, To Be Localized",
  "VersionSelector_versionTooltip_state_toBeTranslated_latestPublished": "Currently Published by {0} on {1}, To Be Localized",
  "VersionSelector_enableDifferencing_versionComparison_text": "Compare with Current Content",
  "VersionSelector_enableDifferencing_masterComparison_text": "Compare with Currently Translated Version",
  "VersionSelector_versionSubMenu_text": "… ({2} Versions)",
  "VersionComparisonMenuItem_text": "<b>{0}<\/b> by {1} on {2}",
  "VersionComparisonMenuItem_newestVersion_text": "<b>{0}<\/b> by {1} on {2} (Current Version)",
  "VersionComparisonMenuItem_latestPublished_text": "<b>{0}<\/b> by {1} on {2} (Currently Published)",
  "VersionComparisonMenuItem_latestTranslated_text": "<b>{0}<\/b> by {1} on {2} (Currently Translated)",
  "VersionComparisonMenuItem_toBeTranslated_text": "<b>{0}<\/b> by {1} on {2} (To Be Translated)",
  "VersionComparisonMenuItem_derivedFrom_text": "<b>{0}<\/b> by {1} on {2} (Copied Version)",
  "SwitchDifferencingButton_master_tooltip": "Open master content item for comparison",
  "SwitchDifferencingButton_master_text": "Compare Languages",
  "SwitchDifferencingButton_version_tooltip": "Open version for comparison",
  "SwitchDifferencingButton_version_text": "Compare Versions",
  "SwitchDifferencingButton_hide_tooltip": "Close comparison view",
  "SwitchDifferencingButton_button_text": "Open Differencing Menu",
  "DifferencingView_fieldChanged_tooltip": "This field has changed.",
  "StartTab_tab_title": "Start",
  "StartTab_title": "welcome",
  "StartTab_question_text": "What can you do?",
  "StartTab_info_library_text": "With the Library (F3) you can reach your content items and search.",
  "StartTab_info_searchfolder_text": "With the search folders you get the results of prepared searches.",
  "StartTab_info_controlroom_text": "The Control Room (F4) is your tool to get an overview of your work.",
  "StartTab_info_dashboard_text": "The Dashboard (F2) shows different personalized reports.",
  "StartTab_warning_license_header": "Missing Licenses",
  "StartTab_warning_license_body": "The following components need to be licensed:",
  "MainNavigationToolbar_label": "Main Functions",
  "MainNavigationToolbar_showDashboard_btn_text": "Show Dashboard (F2)",
  "MainNavigationToolbar_showLibrary_btn_text": "Show Library (F3)",
  "MainNavigationToolbar_showLibrary_btn_tooltip": "<span style=\"white-space:nowrap\">Show Library (F3)<\/span>",
  "HeaderToolbar_label": "Header",
  "HeaderToolbar_logout_btn_text": "Log Out {0}",
  "HeaderToolbar_changePassword_btn_text": "Change Password",
  "HeaderToolbar_refreshData_btn_text": "Synchronize with server",
  "HeaderToolbar_siteSelector_label": "Preferred Site",
  "HeaderToolbar_siteSelector_empty_text": "All sites",
  "HeaderToolbar_siteSelector_none_text": "Not selected",
      /**
       * maybe overriden by customer: 0: site name, 1: locale language tag, 2: locale display name
      */
  "HeaderToolbar_siteSelector_displayName_pattern": "{0} - {2}",
  "HeaderToolbar_userPreferenceMenu_ci_logo_class": "logo-36",
  "HeaderToolbar_userPreferenceMenu_ci_text": "CoreMedia",
  "HeaderToolbar_userMenu_label": "User Menu",
  "Preview_panel_btn_tooltip": "Minimize preview or show standard view",
  "Document_panel_btn_tooltip": "Minimize form or show standard view",
  "Premular_closeMessage_title": "Apply Changes?",
  "Premular_closeMessage_title_named": "Apply Changes for '{0}'?",
  "Premular_closeMessage_text": "You are about to close a content item that has not been approved or published. Do you want to apply or revert your changes?",
  "Premular_closeMessage_text_named": "You are about to close the content item '{0}'. It has not been approved or published. Do you want to apply or revert your changes?",
  "Premular_closeMessage_btn_checkin": "Apply",
  "Premular_closeMessage_btn_revert": "Revert",
  "Premular_closeMessage_btn_cancel": "Cancel",
  "Premular_closedMessage_title": "Content Closed",
  "Premular_closedMessage_text": "A content item had to be closed because it was deleted concurrently.",
  "Premular_versionNumber_text": "Version {0}",
  "Premular_title_destroyed_text": "destroyed",
  "Premular_developmentMode_enable_tooltip": "Show preview with own theme",
  "Premular_developmentMode_disable_tooltip": "Stop showing preview with own theme",
  "Premular_form_label": "Form",
  "DocumentForm_title": "Content",
  "MetaDataPanel_title": "Properties",
  "MetaDataPanel_documentId_text": "Content ID",
  "MetaDataPanel_path_text": "Path",
  "MetaDataPanel_contentType_text": "Type",
  "MetaDataPanel_parentFolderId_text": "Folder ID",
  "MetaDataPanel_creator_text": "Creator",
  "MetaDataPanel_filing_text": "Filing",
  "MetaDataPanel_history_text": "Editing History",
  "MetaDataPanel_history_emptyText": "This document has no version yet.",
  "MetaDataPanel_history_version_text": "Version",
  "MetaDataPanel_history_editor_text": "Editor",
  "MetaDataPanel_history_date_text": "Date",
  "MetaDataPanel_history_state_text": "Status",
  "MetaDataPanel_history_state_latest_text": "Current",
  "MetaDataPanel_history_state_latestPublished_text": "Currently Published",
  "MetaDataPanel_history_state_formerlyPublished_text": "Previously Published",
  "MetaDataPanel_history_state_latestApproved_text": "Latest Approved",
  "MetaDataPanel_history_state_lastPublishedBy_text": "Published by",
  "MetaDataPanel_history_state_lastApprovedBy_text": "Approved by",
  "MetaDataPanel_history_state_initial_text": "Created",
  "TranslationStatus_translator_up-to-date_text": "unmodified",
  "TranslationStatus_translator_up-to-date_tooltip": "Master has not been modified since previous localization.",
  "TranslationStatus_translator_not-up-to-date_text": "",
  "TranslationStatus_translator_not-up-to-date_tooltip": "Master was modified. Localization needs to be updated.",
  "TranslationStatus_translator_not-localized-yet_text": "new",
  "TranslationStatus_translator_not-localized-yet_tooltip": "The content needs to be localized for the first time.",
  "TranslationStatus_translator_no-master_text": "no master",
  "TranslationStatus_translator_no-master_tooltip": "No master link specified.",
  "TranslationStatus_translator_master-version-destroyed_text": "master version destroyed",
  "TranslationStatus_translator_master-version-destroyed_tooltip": "Referenced master version was destroyed.",
  "TranslationStatus_translator_invalid_text": "invalid",
  "TranslationStatus_translator_invalid_tooltip": "Master version is invalid. Completing localization will re-adjust the version.",
  "TranslationStatus_provider_up-to-date_text": "",
  "TranslationStatus_provider_up-to-date_tooltip": "Master has not been modified since previous localization.",
  "TranslationStatus_provider_not-up-to-date_text": "needs update",
  "TranslationStatus_provider_not-up-to-date_tooltip": "Master was modified. Localization needs to be updated.",
  "TranslationStatus_provider_not-localized-yet_text": "new",
  "TranslationStatus_provider_not-localized-yet_tooltip": "The content needs to be localized for the first time.",
  "TranslationStatus_provider_no-master_text": "no master",
  "TranslationStatus_provider_no-master_tooltip": "No master link specified.",
  "TranslationStatus_provider_master-version-destroyed_text": "master version destroyed",
  "TranslationStatus_provider_master-version-destroyed_tooltip": "Referenced master version was destroyed.",
  "TranslationStatus_provider_invalid_text": "invalid",
  "TranslationStatus_provider_invalid_tooltip": "Master version is invalid.",
  "TranslationStatus_provider_in-translation_text": "in translation",
  "TranslationStatus_provider_in-translation_tooltip": "The content is in translation.",
  "DerivedContentsList_title": "Derived Content",
  "DerivedContentsList_emptyText": "No contents have been derived from this content.",
  "SiteInfo_name_text": "Name",
  "SiteInfo_locale_text": "Locale",
  "SiteInfo_header_text": "Site",
  "Blob_size_text": "File size",
  "Blob_size_bytes_text": "bytes",
  "Blob_contentType_text": "File format",
  "Blob_contentType_image": "Image",
  "Blob_contentType_image_helpText": "i.e. with suffix png, jpeg or gif",
  "Blob_contentType_image_x_icon_helpText": "i.e. with suffix ico",
  "Blob_contentType_all": "File",
  "Blob_contentType_all_helpText": "You can upload all kinds of file formats.",
  "Blob_uploadError_title": "Upload Failed",
  "Blob_uploadError_type_error": "Files with mime type '{0}' are mapped to '{1}' documents, but only subtypes of '{2}' documents are allowed for this list.",
  "Blob_uploadError_empty_type_error": "No target document type could be calculated. Check the upload settings and the default content type to use for uploads.",
  "Blob_uploadError_wrongType": "The uploaded file has the wrong type.",
  "Blob_uploadButton_text": "Upload {0}…",
  "url_trigger_btn_tooltip": "Refresh preview",
  "OpenIssuesWindow_btn_text": "Content Errors and Warnings",
  "OpenIssuesWindow_btn_tooltip": "Show list of content errors and warnings. There are no errors or warnings.",
  "OpenIssuesWindow_btn_errorMessage": "Show list of content errors and warnings. There are errors or warnings.",
  "IssuesWindow_globalProperty_text": "Global",
  "IssuesWindow_title": "Content Errors and Warnings",
  "IssuesWindow_errorHeader_text": "Content Errors ({0})",
  "IssuesWindow_warnHeader_text": "Content Warnings ({0})",
  "IssuesWindow_noError_text": "There are no errors.",
  "IssuesWindow_noWarn_text": "There are no warnings.",
  "IssuesWindow_tooltip": "If errors or warnings are present in the content item, they will be displayed here. They contain links to the corresponding fields.<br><b>Errors<\/b> must be corrected, otherwise the website might be broken.<br><b>Warnings<\/b> are less severe and should be resolved.",
  "IssuesDetectedWindow_title": "Write Error",
  "IssuesDetectedWindow_header_error_text": "The last change could not be performed.",
  "IssuesDetectedWindow_header_warn_text": "The last change might not have been executed correctly.",
  "IssuesDetectedWindow_singleMessagePrefix_text": "Reason:",
  "IssuesDetectedWindow_multiMessagePrefix_text": "The following problems were detected:",
  "OpenDifferencesWindow_text": "Changes",
  "OpenDifferencesWindow_btn_tooltip": "Show list of changes. There are no changes.",
  "OpenDifferencesWindow_btn_changesMessage": "Show list of changes. There are changes.",
  "DifferencesWindow_title": "Changes",
  "DifferencesWindow_headerVersion_text": "Changes since Version {0}",
  "DifferencesWindow_headerMaster_text": "Changes between Version {0} and the Currently Localized Version",
  "DifferencesWindow_noChanges_text": "There are no changes.",
  "DifferencesWindow_tooltip": "This window lists fields whose value has changed since creating the selected version.",
  "PublicationResultWindow_retry_btn_text": "Retry",
  "RemoteControl_unknown_command_error_title": "Unknown Command",
  "RemoteControl_unknown_command_error": "The command in the link is unknown. Contact the user who has sent you the link.",
  "RemoteControl_openContent_error_title": "Incorrect Link",
  "RemoteControl_openContent_error_item_not_exists": "The link does not work because the item with the given ID does not exist. Contact the user who has sent you the link.",
  "RemoteControl_openContent_error_document_deleted": "The link does not work because the content item with the given ID has been deleted. To recover the content item, contact your administrator.",
  "RemoteControl_openContent_error_document_is_folder": "The link does not work because the content item with the given ID is a folder. Contact the user who has sent you the link.",
  "RemoteControl_openContent_error_document_is_not_readable": "The link does not work because you don't have sufficient system privileges to read this content item.",
  "RemoteControl_openContent_error_document_not_specified": "The link does not work because it does not specify a content item to open. Contact the user who has sent you the link.",
  "Mail_SendDocumentLink_template": "Hello,\n\nUser '{0}' has sent you a link to the content item '{1}'.\n\nClick the link below to open the content item in CoreMedia Studio:\n\n{2}\n\nClick the link below if you want to see the preview without logging into CoreMedia Studio:\n{3}\n",
  "Mail_SendDocumentLinkWithoutPreview_template": "Hello,\n\nUser '{0}' has sent you a link to the content item '{1}'.\n\nClick the link below to open the content item in CoreMedia Studio:\n\n{2}\n\nNo preview exists for this content type.\n",
  "Mail_SendDocumentLink_subject": "URL for content item '{0}' (sent by CoreMedia Studio)",
  "Login_title": "Login",
  "Login_name": "Name",
  "Login_password": "Password",
  "Login_domain": "Domain",
  "Login_domain_empty_text": "Domain name",
  "Login_failedMessage": "Your login attempt was not successful, please try again.",
  "Login_failedMessageMargin": "208",
  "Login_submit": "Log In",
  "Login_remember_name_text": "Remember My Name",
  "Login_in_progress": "Logging In…",
  "Login_displayName_THE_DEFAULT_DOMAIN_ID": "System",
  "Login_margin_right": "0 120 0 11",
  "Login_autoLogout_title": "Auto Logout",
  "Login_autoLogout_message": "To protect your account, your session was automatically closed at {0} after a period of inactivity. Please log in again.",
  "ChangePassword_title": "Change Password",
  "ChangePassword_oldPassword_text": "Old Password",
  "ChangePassword_newPassword_text": "New Password",
  "ChangePassword_repeatPassword_text": "Repeat New Password",
  "ChangePassword_successMessage": "The password has been successfully changed.",
  "PreviewPanelToolbar_label": "Preview",
  "PreviewPanelToolbar_sendLink_btn_text": "Send link",
  "PreviewPanelToolbar_reload_btn_tooltip": "Reload preview",
  "PreviewPanelToolbar_openInBrowser_btn_tooltip": "Open preview in browser tab",
  "PreviewPanelToolbar_preview_loading": "Loading preview …",
  "PreviewPanel_emptyPreview": "No preview exists for this content or content type.",
  "PreviewPanel_label": "Preview",
  "PreviewIFrameToolbar_label": "Preview Sub",
  "PreviewZoomMenu_zoom-in_text": "zoom in",
  "PreviewZoomMenu_zoom-out_text": "zoom out",
  "PreferenceWindow_title": "Preferences",
  "PreferenceWindow_general_text": "Studio",
  "PreferenceWindow_reload_text_1": "Reload Preview after",
  "PreferenceWindow_reload_text_2": "Seconds",
  "PreferenceWindow_shortcuts_text": "Shortcuts",
  "PreferenceWindow_language_text": "Language",
  "PreferenceWindow_UserMenu_title": "User Menu",
  "PreferenceWindow_userMenuShowSiteCheckBox_text": "Show Site Name",
  "PreferenceWindow_userMenuShowSiteLocaleCheckBox_text": "Show Site Locale",
  "PreferenceWindow_userMenuShowUserNameCheckBox_text": "Show User Name",
  "PreferenceWindow_Preview_title": "Preview",
  "PreferenceWindow_showPreviewHoverFrames_text": "Highlight Content in the Preview on Mouse Over",
  "PreferenceWindow_showPreviewScrollbars_text": "Show Scrollbars in the Device Preview",
  "PreferenceWindow_showAllTabsInForm_title": "Tabs",
  "PreferenceWindow_showAllTabsInForm_text": "Always Show Advanced Tabs in Forms",
  "AboutWindow_title": "About",
  "AboutWindow_closeButton_text": "Close",
  "AboutWindow_coremedia_text": "CoreMedia Studio {0}",
  "AboutWindow_selectAll_text": "Select all for copying",
  "AboutWindow_property_userName": "Login name",
  "AboutWindow_property_userDomain": "Login domain",
  "AboutWindow_property_userDomain_default": "internal",
  "AboutWindow_property_licenceId": "Licence ID",
  "AboutWindow_property_licensee": "Licensee",
  "AboutWindow_property_licenseFeatures": "License features",
  "AboutWindow_property_requiredLicenses": "Required licenses",
  "AboutWindow_property_studio_locale": "Current locale",
  "AboutWindow_property_studio_locales": "Available locales",
  "AboutWindow_property_client_os": "Operating system",
  "AboutWindow_property_client_timezone": "Time zone",
  "AboutWindow_property_client_type": "Browser type",
  "AboutWindow_property_client_type_firefox": "Firefox",
  "AboutWindow_property_client_type_gecko": "Gecko-based browser",
  "AboutWindow_property_client_type_webkit": "WebKit-based browser",
  "AboutWindow_property_client_type_chrome": "Chrome",
  "AboutWindow_property_client_type_opera": "Opera",
  "AboutWindow_property_client_type_safari": "Safari",
  "AboutWindow_property_client_type_ie": "Internet Explorer",
  "AboutWindow_property_client_type_ie8": "Internet Explorer 8",
  "AboutWindow_property_client_type_ie9": "Internet Explorer 9",
  "AboutWindow_property_client_type_unknown": "unknown",
  "AboutWindow_property_client_userAgent": "Browser details",
  "AboutWindow_property_client_locale": "Browser locale",
  "AboutWindow_property_server_url": "Server address",
  "AboutWindow_property_server_os": "Server OS",
  "AboutWindow_property_server_jvm": "Server JVM",
  "AboutWindow_property_server_start": "Server start time",
  "AboutWindow_property_server_locale": "Server default locale",
  "AboutWindow_property_server_timeZone": "Server time zone",
  "AboutWindow_property_server_versions": "Module versions",
  "AboutWindow_property_cache_contents": "Cache contents",
  "AboutWindow_property_eventQueue_current": "Todo list, now",
  "AboutWindow_property_eventQueue_max": "Todo list, maximum",
  "Locale_en_text": "English",
  "Locale_de_text": "Deutsch",
  "Locale_ja_text": "日本人",
  "lifecycleStatus_checked-out-by-other_text": "Checked out by {0}",
  "lifecycleStatus_checked-out_text": "Checked out by me",
  "lifecycleStatus_in-production_text": "In Production",
  "lifecycleStatus_approved_text": "Approved",
  "lifecycleStatus_published_text": "Published",
  "lifecycleStatus_was_published_text": "Was Published",
  "lifecycleStatus_lock_text": "Locked",
  "lifecycleStatus_deleted_text": "Deleted",
  "lifecycleStatus_in-production_icon": "",
  "LinkListPropertyField_text": "Add content by dragging it from the Library here.",
  "LinkListPropertyFieldWithSuggestions_text": "Type here to search or drag and drop content onto this area.",
  "LinkListPropertyFieldWithSuggestions__button_focus_tooltip_text": "Open related content in List",
  "LinkListPropertyField_button_aria_label": "Open Library",
  "LinkListPropertyField__button_tooltip_text": "Open related content in Library.",
  "LinkListPropertyFieldWithSuggestions__button_tooltip_text": "Open Suggestions in Library",
  "LinkListPropertyField_boundlist_empty_text": "No results found",
  "LinkListPropertyField_class": "link-list-property-drop-container",
  "DragDropVisualFeedback_multiSelect_text": "{0} selected content items",
  "saveSearchWindow_title": "Save Search",
  "newSearchFolder_metaComboEntry_text": "Create New Search Folder",
  "newSearch_textField_label": "Name",
  "newSearch_defaultValue_text": "New Search",
  "newSearchWidget_metaComboEntry_text": "Create New Widget",
  "newSearchWidget_textField_label": "Search Widget Name",
  "newSearchWidget_defaultValue_text": "New Widget",
  "emptyMySearchesMenu_text": "No Saved Search Folders",
  "replaceExistingSearchFolder_text": "Replace Existing Search Folder",
  "saveSearchSubmitButton_text": "Save Search",
  "saveSearch_saveAsLabel_text": "Save as",
  "saveSearch_saveAsWidgetCheckbox_text": "Widget",
  "saveSearch_saveAsFolderCheckbox_text": "Search Folder",
  "UserItemsAreaButtonShowAll_text": "All",
  "UserItemsAreaButtonCollapse_text": "Back",
      /**
       * The name of the localized issue severity ERROR.
      */
  "ERROR": "Errors",
      /**
       * The name of the localized issue severity WARNING.
      */
  "WARN": "Warnings",
      /**
       * The name of the localized issue severity INFO.
      */
  "INFO": "Information",
  "ReferrerListPanel_list_header_site": "Site",
  "ReferrerListPanel_list_header_siteLocale": "Locale",
  "ReferrerListPanel_list_header_name": "Name",
  "ReferrerListPanel_list_include_deleted": "Include Deleted Contents",
  "ReferrerListPanel_label": "Content Items Linking to This Content Item",
  "ReferrerListPanel_emptyListLabel": "There is no readable content that links to this content item.",
  "ReferrerListPanel_listLimitLabel": "Showing only a part of the referrers list because it would be too large.",
  "ImageReferrers_name_column_text": "Content Item",
  "StartTranslationWorkflowPanel_empty_text": "Add content to localize by dragging it from the Library here.",
  "StartSynchronisationWorkflowPanel_empty_text": "Add content to synchronize by dragging it from the Library here.",
  "StartPublicationWorkflowPanel_empty_text": "Add content to publish by dragging it from the Library here.",
  "MemberSearchField_qtip_no_member_found": "No person or group by this name found",
  "MemberSearchField_emptyText": "Enter a name or a group name here.",
  "MemberSearchField_loading_text": "Loading members…",
  "SelectedMemberElement_group_suffix": "(Group)",
  "SelectedMemberElement_expand_btn_tooltip": "List all people of this group individually",
  "SelectedMemberElement_remove_btn_tooltip": "Remove",
  "SelectedMemberElement_offer": "Assign This Workflow to All Eligible People",
  "SelectedMemberElement_assign": "Assign This Workflow to the Following People:",
  "ContentGridPanel_empty_text": "Add content by dragging it from the Library here.",
      /**
       * Folder prompt
      */
  "CreateFolder_dialog_title": "Create Folder",
  "CreateFolder_dialog_title_message": "In the selected folder, the following child folders do not exist yet:",
  "CreateFolder_dialog_confirm_question": "Do you want to create these folders now?",
  "CreateFolder_dialog_ok_button": "Create",
  "MasterVersionPropertyField_translated_text": "The content has been localized from version {0}.",
  "MasterVersionPropertyField_notTranslated_text": "The content has been copied from version {0} and is not localized, yet.",
  "SynchronizationPropertyField_ignoreUpdates_boxLabel": "Keep synchronized with Master",
  "ExpandFolderLimit_exceeded_title": "Could Not Expand Folders",
  "ExpandFolderLimit_exceeded_text": "One or more selected folders exceed the limit of {0} contained content items.",
      /**
       * Bookmarks
      */
  "BookmarksMenuButton_label": "Bookmarks",
  "Bookmark_renameBookmarkAction_menu_text": "Rename",
  "Bookmark_renameBookmarkAction_title_text": "Rename Bookmark",
  "Bookmark_renameBookmarkAction_message_text": "Enter a new name for the bookmark",
  "Bookmark_toggle_text": "Toggle Bookmark",
  "Bookmark_bookmarkAction_menu_text": "Remove",
  "Bookmark_button_add_tooltip": "Bookmark the selected content item",
  "Bookmark_button_remove_tooltip": "Remove bookmark",
  "Bookmark_empty_list": "No bookmarks set",
  "Bookmark_button_add_text": "Add Bookmark",
  "Bookmark_button_remove_text": "Remove Bookmark",
  "Bookmark_button_text": "Bookmarks",
      /**
       * Premular tooltips
      */
  "WorkArea_Premular_tooltip_siteName": "Site",
  "WorkArea_Premular_tooltip_siteLocale": "Site Locale",
  "WorkArea_Premular_tooltip_contentLocale": "Content Locale",
  "WorkArea_Premular_tooltip_locale": "Locale",
  "WorkArea_Premular_tooltip_noSite": "<i>none<\/i>",
  "WorkArea_label": "Work Area",
      /**
       * TimeUtil properties
      */
  "date_today_text": "Today",
  "date_one_day_ago_text": "Yesterday",
  "date_in_one_day_text": "Tomorrow",
  "date_x_days_ago_text": "{0} days ago",
  "date_in_x_days_text": "In {0} days",
  "date_one_year_ago_text": "A year ago",
  "date_in_one_year_text": "In a year",
      /**
       * ApproveRetryPlugin
      */
  "ApproveAllAndRetryAction_text": "Approve All and Retry",
  "ApproveAllAndRetryAction_failure_title": "Approval Failed",
  "ApproveAllAndRetryAction_failure_text": "The approval process failed. The server says: {0}",
  "CheckBefore_validationErrorWindowTitle": "Content Item Contains Errors",
  "CheckBefore_validationErrorWindowTextSimple": "A content item contains errors, so that the attempted operation is not currently possible. Correct the errors and try again.",
      /**
       * Common labels
      */
  "btn_ok": "OK",
  "btn_start": "Start",
  "btn_cancel": "Cancel",
  "btn_remove": "Remove",
      /**
       * Image Link List
      */
  "ImageLinkList_no_data": "Could not generate thumbnail. Edit content item to upload a picture.",
      /**
       * New Content Menu
      */
  "CreateContentMenuButton_label": "New",
      /**
       *Permission checks
      */
  "Button_disabled_insufficient_privileges": "This function is not available due to insufficient privileges.",
      /**
       * Navigation Tree
 *################################################
 *Search Combo
      */
  "Navigation_show_all": "All",
      /**
       *Tree
      */
  "Navigation_root_suffix": "Navigation",
      /**
       *Action
      */
  "Navigation_action_show_hidden_items": "Show all Navigation Items",
  "Navigation_action_hide_items": "Show Only Visible Navigation",
      /**
       * Tree Relation message
      */
  "navigation_checkout_error_title": "Error Editing Navigation Tree",
  "navigation_checkout_error_message": "Failed to execute action because {0} '{1}' is checked out by another user.",
      /**
       * Action Toolbar
      */
  "ActionsToolbarRegion_label": "Actions Toolbar",
  "ActionsToolbar_label": "Actions"
}, function() {
  this.prototype["metadataTreeProperty_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.arrow_right;
  this.prototype["FavoritesToolbar_userItems_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.search_folder;
  this.prototype["FavoritesToolbar_extensions_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.apps;
  this.prototype["CollectionView_userHomeFolder_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.home;
  this.prototype["CollectionView_siteRootFolder_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.site;
  this.prototype["CollectionView_preferredSiteLink_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.site_link;
  this.prototype["CollectionView_synchronizedSite_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.site_synchronized;
  this.prototype["CollectionView_translatedSite_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.site_translated;
  this.prototype["CollectionView_folder_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.folder;
  this.prototype["Filter_restore_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["SwitchDifferencingButton_master_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.language_comparison;
  this.prototype["SwitchDifferencingButton_version_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.version_comparison;
  this.prototype["MainNavigationToolbar_showDashboard_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.dashboard;
  this.prototype["MainNavigationToolbar_showLibrary_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.library;
  this.prototype["Premular_checked_out_by_me_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;
  this.prototype["Premular_checked_out_by_other_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.edited_by_user;
  this.prototype["Blob_contentType_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype;
  this.prototype["Blob_contentType_image_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_picture;
  this.prototype["Blob_contentType_text_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_txt;
  this.prototype["Blob_contentType_video_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_video;
  this.prototype["Blob_contentType_application_default_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_object;
  this.prototype["Blob_contentType_image_x_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.type_picture;
  this.prototype["Blob_contentType_image_tiff_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_tiff;
  this.prototype["Blob_contentType_application_x_shockwave_flash_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_swf;
  this.prototype["Blob_contentType_application_pdf_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_pdf;
  this.prototype["Blob_contentType_application_zip_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_zip;
  /**
   *#Ms-Office-Mimetype-Icons
  */
  this.prototype["Blob_contentType_application_msword_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_doc;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_wordprocessingml_document_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_doc;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_wordprocessingml_template_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_doc;
  this.prototype["Blob_contentType_application_vnd_ms_word_document_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_doc;
  this.prototype["Blob_contentType_application_vnd_ms_word_template_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_doc;
  this.prototype["Blob_contentType_application_vnd_ms_excel_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_spreadsheetml_sheet_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_spreadsheetml_template_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_ms_excel_sheet_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_ms_excel_template_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_ms_excel_addin_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_ms_excel_sheet_binary_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_xls;
  this.prototype["Blob_contentType_application_vnd_ms_powerpoint_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_presentationml_presentation_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_presentationml_template_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_openxmlformats_officedocument_presentationml_slideshow_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_ms_powerpoint_addin_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_ms_powerpoint_presentation_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_ms_powerpoint_template_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["Blob_contentType_application_vnd_ms_powerpoint_slideshow_macroEnabled_12_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.mimetype_ppt;
  this.prototype["OpenDifferencesWindow_btn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.differencing_summary;
  this.prototype["lifecycleStatus_checked-out_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;
  this.prototype["lifecycleStatus_checked-out-by-other_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.edited_by_user;
  this.prototype["lifecycleStatus_approved_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.approve;
  this.prototype["lifecycleStatus_published_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.publish;
  this.prototype["lifecycleStatus_was_published_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.publish;
  this.prototype["lifecycleStatus_lock_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.no_rights;
  this.prototype["lifecycleStatus_deleted_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.trash_bin;
  this.prototype["LinkListPropertyField_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add;
  this.prototype["LinkListPropertyField_button_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.library;
  this.prototype["MySearchItem_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.search_folder;
  this.prototype["BookmarksMenuButton_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.favorites_folder;
  this.prototype["CreateContentMenuButton_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.create_content;

  com.coremedia.cms.editor.Editor_properties.INSTANCE = new com.coremedia.cms.editor.Editor_properties();
});