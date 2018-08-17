/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.actions.Actions_properties", {

  requires: [
    "com.coremedia.icons.CoreIcons_properties"
  ],
      /**
       * Localization properties for CheckInAction
 * @see com.coremedia.cms.editor.sdk.actions.CheckInAction
      */
  "Action_checkIn_text": "Apply",
  "Action_checkIn_all_text": "Apply All Changes",
  "Action_checkIn_tooltip": "Finish editing and<br>apply all changes",
      /**
       * Localization properties for RevertAction
 * @see com.coremedia.cms.editor.sdk.actions.RevertAction
      */
  "Action_revert_text": "Revert",
  "Action_revert_all_text": "Revert All Changes",
  "Action_revert_tooltip": "Revert changes",
  "Action_revert_buttonText": "Revert",
  "Action_revert_verifyMessage_singleOld_title": "Revert Changes",
  "Action_revert_verifyMessage_singleOld_text": "All of your changes to the content item will be reverted.<br>You cannot undo this action.",
  "Action_revert_verifyMessage_singleNew_title": "Revert Changes and Delete Content Item",
  "Action_revert_verifyMessage_singleNew_text": "All your changes will be reverted and the content item will be deleted.<br>You cannot undo this action.",
  "Action_revert_verifyMessage_manyOld_title": "Revert Changes",
  "Action_revert_verifyMessage_manyOld_text": "All of your changes in {0} content item will be reverted.<br>You cannot undo this action.",
  "Action_revert_verifyMessage_manyOldOneNew_title": "Revert Changes and Delete New Content Item",
  "Action_revert_verifyMessage_manyOldOneNew_text": "All of your changes in {0} content item will be reverted and one of the content items will be deleted.<br>You cannot undo this action.",
  "Action_revert_verifyMessage_manyNew_title": "Revert Changes and Delete New Content Items",
  "Action_revert_verifyMessage_manyNew_text": "All of your changes in {0} content items will be reverted and {1} of the content items will be deleted.<br>You cannot undo this action.",
  "Action_revert_verifyMessage_allNew_title": "Revert Changes and Delete New Content Items",
  "Action_revert_verifyMessage_allNew_text": "All of your changes in {0} content items will be reverted and the content items will be deleted.<br>You cannot undo this action.",
      /**
       * Localization properties for ApproveAction
 * @see com.coremedia.cms.editor.sdk.actions.ApproveAction
      */
  "Action_approve_text": "Approve",
  "Action_approve_tooltip": "Approve",
      /**
       * Localization properties for DisapproveAction
 * @see com.coremedia.cms.editor.sdk.actions.DisapproveAction
      */
  "Action_disapprove_text": "Revoke Approve",
  "Action_disapprove_tooltip": "Revoke approve",
      /**
       * Localization properties for PublishAction
 * @see com.coremedia.cms.editor.sdk.actions.PublishAction
      */
  "Action_publish_text": "Publish",
  "Action_publish_tooltip": "Publish",
      /**
       * Localization properties for ApprovePublishAction
 * @see com.coremedia.cms.editor.sdk.actions.ApprovePublishAction
      */
  "Action_approvePublish_text": "Approve and Publish",
  "Action_approvePublish_tooltip": "Approve and publish",
      /**
       * Localization properties for RemoveAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksAction
      */
  "Action_deleteSelectedLinks_text": "Remove from List",
  "Action_deleteSelectedLinks_tooltip": "Remove items from list",
      /**
       * Localization properties for DeleteImageAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteImageLinkAction
      */
  "Action_deleteImageLink_text": "Remove Image",
  "Action_deleteImageLink_tooltip": "Remove image from list",
      /**
       * Localization properties for CopyToClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.CopyToClipboardAction
      */
  "Action_copyToClipboard_text": "Copy",
  "Action_copyToClipboard_tooltip": "Copy",
      /**
       * Localization properties for PasteFromClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.PasteFromClipboardAction
      */
  "Action_pasteFromClipboard_text": "Paste",
  "Action_pasteFromClipboard_tooltip": "Paste",
      /**
       * Localization properties for CutToClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.CutToClipboardAction
      */
  "Action_cutToClipboard_text": "Cut",
  "Action_cutToClipboard_tooltip": "Cut",
      /**
       * Localization properties for OpenInTabAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenInTabAction
      */
  "Action_openInTab_text": "Open in Tab",
  "Action_openInTab_tooltip": "Open in Tab",
  "Action_openInBackgroundTab_text": "Open in Background",
  "Action_openInBackgroundTab_tooltip": "Open in background",
      /**
       * Localization properties for OpenInTreeAction
 * @see com.coremedia.cms.editor.sdk.collectionview.OpenInTreeAction
      */
  "Action_openInTree_text": "Open",
  "Action_openInTree_tooltip": "Open folder",
      /**
       *Action_openInTree_icon=open-icon

 * Localization properties for OpenInBrowserTabAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction
      */
  "Action_openInBrowserTab_text": "Open in Browser",
  "Action_openInBrowserTab_tooltip": "Open in a new browser tab",
  "Action_openInBrowserTab_icon": "",
      /**
       * Localization properties for RenameMenuItemAction
 * @see com.coremedia.cms.editor.sdk.actions.RenameMenuItemAction
      */
  "Action_rename_text": "Rename",
  "Action_rename_tooltip": "Rename",
  "Action_rename_icon": "",
      /**
       * Localization properties for RestoreVersionAction
 * @see com.coremedia.cms.editor.sdk.actions.RestoreVersionAction
      */
  "Action_restoreVersion_text": "Restore Version",
  "Action_restoreVersion_tooltip": "Restore the selected version",
  "Action_restoreVersion_buttonText": "Restore",
  "Action_restoreVersion_verifyMessage_title": "Restore the Selected Version",
  "Action_restoreVersion_verifyMessage_text": "Your current changes will be overwritten. Are you sure?",
      /**
       * Localization properties for WithdrawAction
 * @see com.coremedia.cms.editor.sdk.actions.WithdrawAction
      */
  "Action_withdraw_text": "Withdraw",
  "Action_withdraw_tooltip": "Withdraw",
  "Action_withdraw_buttonText": "Withdraw",
  "Action_withdraw_folder_verifyMessage_title": "Withdraw Folder",
  "Action_withdraw_folder_verifyMessage_text": "Do you really want to withdraw the folder '{0}'?",
  "Action_withdraw_contents_verifyMessage_title": "Withdraw Contents",
  "Action_withdraw_contents_verifyMessage_text": "Do you really want to withdraw {0} contents?",
      /**
       * Localization properties for DeleteAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteAction
      */
  "Action_delete_text": "Delete",
  "Action_delete_tooltip": "Delete",
  "Action_delete_buttonText": "Delete",
  "Action_delete_document_verifyMessage_title": "Delete Content Item",
  "Action_delete_document_verifyMessage_text": "Do you really want to delete the content item '{0}'?",
  "Action_delete_folder_verifyMessage_title": "Delete Folder",
  "Action_delete_folder_verifyMessage_text": "Do you really want to delete the folder '{0}'?",
  "Action_delete_contents_verifyMessage_title": "Delete Contents",
  "Action_delete_contents_verifyMessage_text": "Do you really want to delete {0} contents?",
      /**
       * Localization properties for UndeleteAction
 * @see com.coremedia.cms.editor.sdk.actions.UndeleteAction
      */
  "Action_undelete_text": "Restore",
  "Action_undelete_tooltip": "Restore content item from trash bin",
      /**
       * Localization properties for WorkflowAction
 * @see com.coremedia.cms.editor.sdk.actions.WorkflowAction
      */
  "Action_workflow_text": "Workflow",
      /**
       * Localization properties for DeleteBlobAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteBlobAction
      */
  "Action_deleteBlob_text": "Remove",
  "Action_deleteBlob_tooltip": "Remove",
      /**
       * Localization properties for OpenBlobAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenBlobAction
      */
  "Action_openBlob_text": "Download",
  "Action_openBlob_tooltip": "Download the file",
      /**
       * Localization properties for NewContentAction
 * @see com.coremedia.cms.editor.sdk.actions.NewContentAction
      */
  "Action_newContent_newDocumentName_text": "New Content Item",
      /**
       * Localization properties for ShowInRepositoryAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction
      */
  "Action_showInTree_text": "Show in Library",
  "Action_showInTree_tooltip": "Show content item in Library",
  "Action_showInFolder_text": "Show in Folder",
  "Action_showInFolder_tooltip": "Show content item in Folder",
      /**
       * Localization properties for OpenSaveSearchWindowAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction
      */
  "Action_saveSearch_text": "Save search",
  "Action_saveSearch_tooltip": "Save search folder to favorites toolbar",
  "Action_saveSearch_notification_added": "The search has been saved.",
      /**
       * Localization properties for DeleteSavedSearchAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction
      */
  "Action_deleteSearch_text": "Remove Search Folder",
  "Action_deleteSearch_tooltip": "Remove search folder from the favorites toolbar",
      /**
       * Localization properties for ShowCollectionViewToSaveSearchAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction
      */
  "Action_addSearch_text": "Add Search Folder",
  "Action_addSearch_tooltip": "Add a new search folder to the favorites toolbar",
  "Action_addSearch_hint_text": "Click here to save the <\/br> current search and filters",
      /**
       * Localization properties for MoveUserItemAction
 * @see com.coremedia.cms.editor.sdk.actions.MoveUserItemAction
      */
  "Action_moveUserItemtoTop_text": "Move to Top",
  "Action_moveUserItemtoTop_tooltip": "Move the search folder to the top of the list",
  "Action_moveUserItemup_text": "Move Up",
  "Action_moveUserItemup_tooltip": "Move the search folder one position up",
  "Action_moveUserItemdown_text": "Move Down",
  "Action_moveUserItemdown_tooltip": "Move the search folder one position down",
  "Action_moveUserItemtoBottom_text": "Move to Bottom",
  "Action_moveUserItemtoBottom_tooltip": "Move the search folder to the bottom of the list",
      /**
       * Localization properties for ShowCollectionViewInSearchStateAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction
      */
  "Action_showSearch_text": "Open",
      /**
       * Localization properties for FullWidthAction
 * @see com.coremedia.cms.editor.sdk.preview.zoom.FullWidthAction
      */
  "Action_fullWidth_text": "Show full page in overview",
  "Action_fullWidth_tooltip": "Show full page in overview",
      /**
       * Localization properties for ScaleToOriginalAction
 * @see com.coremedia.cms.editor.sdk.preview.zoom.ScaleToOriginalAction
      */
  "Action_responsiveMode_text": "Show page in responsive mode",
  "Action_responsiveMode_tooltip": "Show page in responsive mode",
      /**
       * Localization properties for CloseTabsAction
 * @see com.coremedia.ui.actions.CloseTabsAction
      */
  "Action_closeTabsAction_closeTabText": "Close Tab",
  "Action_closeTabsAction_closeOtherTabsText": "Close Other Tabs",
  "Action_closeTabsAction_closeAllTabsText": "Close All Tabs",
      /**
       * Localization properties for ProcessAllContentTabsAction
 * @see com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction
      */
  "Action_revert_verifyMessage_allContentTabs_text": "All your changes in opened content items will be reverted.<br>You cannot undo this action.",
      /**
       * Localization properties for RenameTabContentAction
 * @see com.coremedia.cms.editor.sdk.actions.RenameTabContentAction
      */
  "Action_renameTabContentAction_menu_text": "Rename",
  "Action_renameTabContentAction_title_text": "Rename Content",
  "Action_renameTabContentAction_message_text": "Enter a new name for the content",
  "Action_addStructListItem_text": "Add Item",
  "Action_addStructListItem_tooltip": "Add item to ListProperty",
  "Action_deleteStructNode_text": "Remove Item",
  "Action_deleteStructNode_tooltip": "Remove item",
  "Action_cutStructNode_text": "Cut",
  "Action_cutStructNode_tooltip": "Cut",
  "Action_copyStructNode_text": "Copy",
  "Action_copyStructNode_tooltip": "Copy",
  "Action_pasteToStructNode_text": "Paste",
  "Action_pasteToStructNode_tooltip": "Paste",
  "Action_duplicateStructNode_text": "Duplicate",
  "Action_duplicateStructNode_tooltip": "Duplicate",
  "Action_moveStructListItemUp_text": "Move Up",
  "Action_moveStructListItemUp_tooltip": "Move up",
  "Action_moveStructListItemDown_text": "Move Down",
  "Action_moveStructListItemDown_tooltip": "Move down",
      /**
       * Localization properties for DownloadXliffAction
 * @see com.coremedia.cms.editor.sdk.actions.DownloadXliffAction
      */
  "Action_downloadXliff_text": "Download XLIFF",
  "Action_downloadXliff_tooltip": "Download an XLIFF file",
  "Action_openVersionComparison_text": "Compare Version with Current Content",
  "Action_openVersionComparison_tooltip": "Compare version with current content",
  "Action_translate_text": "Autotranslate",
  "Action_translate_tooltip": "Translate automatically to {0}",
  "Action_translate_inProgress": "Translation in progress…",
  "Action_translate_complete": "Translation complete ({0} translated, {1} errors).",
  "Action_setPreferredSite_text": "Set as Preferred Site",
  "Action_setPreferredSite_tooltip": "Select this site as the preferred site",
  "Action_openSiteHomepageInTab_text": "Open Home Page in Tab",
  "Action_openSiteHomepageInTab_tooltip": "Open the Homepage of the selected Site in Tab (CTRL+ALT+H)",
      /**
       * Answer from Server: currently non-allowed actions
      */
  "CHECKIN": "Apply Changes",
  "APPROVE": "Approve",
  "APPROVE_PUBLISH": "Approve and Publish"
}, function() {
  this.prototype["Action_checkIn_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.check_in_document;
  this.prototype["Action_revert_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.revert;
  this.prototype["Action_approve_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.approve;
  this.prototype["Action_disapprove_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.revert_approve;
  this.prototype["Action_publish_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.publish;
  this.prototype["Action_approvePublish_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.approve_and_publish;
  this.prototype["Action_deleteSelectedLinks_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["Action_deleteImageLink_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["Action_copyToClipboard_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.copy;
  this.prototype["Action_pasteFromClipboard_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.paste;
  this.prototype["Action_cutToClipboard_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.cut;
  this.prototype["Action_openInTab_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;
  this.prototype["Action_openInBackgroundTab_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.pencil;
  this.prototype["Action_restoreVersion_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.restore_version;
  this.prototype["Action_withdraw_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.withdraw;
  this.prototype["Action_delete_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.trash_bin;
  this.prototype["Action_undelete_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.undelete;
  this.prototype["Action_workflow_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.workflow;
  this.prototype["Action_deleteBlob_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["Action_openBlob_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.download;
  this.prototype["Action_showInTree_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.show_in_library;
  this.prototype["Action_showInFolder_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.show_in_library;
  this.prototype["Action_saveSearch_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.save;
  this.prototype["Action_fullWidth_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.preview_overview;
  this.prototype["Action_responsiveMode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.preview_responsive;
  /**
   * Localization properties for StructPropertyField
  */
  this.prototype["Action_addStructListItem_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.add_item_to_property_list;
  this.prototype["Action_deleteStructNode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.remove;
  this.prototype["Action_cutStructNode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.cut;
  this.prototype["Action_copyStructNode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.copy;
  this.prototype["Action_pasteToStructNode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.paste;
  this.prototype["Action_duplicateStructNode_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.duplicate;
  this.prototype["Action_moveStructListItemUp_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.move_up;
  this.prototype["Action_moveStructListItemDown_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.move_down;
  this.prototype["Action_downloadXliff_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.xliff;
  this.prototype["Action_openVersionComparison_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.version_comparison;
  this.prototype["Action_translate_icon"] =  com.coremedia.icons.CoreIcons_properties.INSTANCE.xliff;

  com.coremedia.cms.editor.sdk.actions.Actions_properties.INSTANCE = new com.coremedia.cms.editor.sdk.actions.Actions_properties();
});