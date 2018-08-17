/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.actions.Actions_properties_ja", {
  override: "com.coremedia.cms.editor.sdk.actions.Actions_properties",
      /**
       * Localization properties for CheckInAction
 * @see com.coremedia.cms.editor.sdk.actions.CheckInAction
      */
  "Action_checkIn_text": "適用",
  "Action_checkIn_tooltip": "編集を終了して、<br>すべての変更を適用する",
      /**
       * Localization properties for RevertAction
 * @see com.coremedia.cms.editor.sdk.actions.RevertAction
      */
  "Action_revert_text": "元に戻す",
  "Action_revert_all_text": "すべての変更を元に戻す",
  "Action_revert_tooltip": "変更を元に戻す",
  "Action_revert_buttonText": "元に戻す",
  "Action_revert_verifyMessage_singleOld_title": "変更を元に戻す",
  "Action_revert_verifyMessage_singleOld_text": "ドキュメントに対するすべての変更を元に戻します。<br>このアクションを取り消すことはできません。",
  "Action_revert_verifyMessage_singleNew_title": "変更を元に戻して、ドキュメントを削除する",
  "Action_revert_verifyMessage_singleNew_text": "ドキュメントに対するすべての変更を元に戻し、ドキュメントを削除します。<br>このアクションを取り消すことはできません。",
  "Action_revert_verifyMessage_manyOld_title": "変更を元に戻す",
  "Action_revert_verifyMessage_manyOld_text": "{0}件のドキュメントに対するすべての変更を元に戻します。<br>このアクションを取り消すことはできません。",
  "Action_revert_verifyMessage_manyOldOneNew_title": "変更を元に戻して、新しいドキュメントを削除する",
  "Action_revert_verifyMessage_manyOldOneNew_text": "{0}件のドキュメントに対するすべての変更を元に戻し、そのうちの1件のドキュメントを削除します。<br>このアクションを取り消すことはできません。",
  "Action_revert_verifyMessage_manyNew_title": "変更を元に戻して、新しいドキュメントを削除する",
  "Action_revert_verifyMessage_manyNew_text": "{0}件のドキュメントに対するすべての変更を元に戻し、そのうちの{1}件のドキュメントを削除します。<br>このアクションを取り消すことはできません。",
  "Action_revert_verifyMessage_allNew_title": "変更を元に戻して、新しいドキュメントを削除する",
  "Action_revert_verifyMessage_allNew_text": "{0}件のドキュメントに対するすべての変更を元に戻し、ドキュメントを削除します。<br>このアクションを取り消すことはできません。",
      /**
       * Localization properties for ApproveAction
 * @see com.coremedia.cms.editor.sdk.actions.ApproveAction
      */
  "Action_approve_text": "承認",
  "Action_approve_tooltip": "承認",
      /**
       * Localization properties for DisapproveAction
 * @see com.coremedia.cms.editor.sdk.actions.DisapproveAction
      */
  "Action_disapprove_text": "承認の取り消し",
  "Action_disapprove_tooltip": "承認の取り消し",
      /**
       * Localization properties for PublishAction
 * @see com.coremedia.cms.editor.sdk.actions.PublishAction
      */
  "Action_publish_text": "発行",
  "Action_publish_tooltip": "発行",
      /**
       * Localization properties for PublishAction
 * @see com.coremedia.cms.editor.sdk.actions.ApprovePublishAction
      */
  "Action_approvePublish_text": "承認＋発行",
  "Action_approvePublish_tooltip": "承認＋発行",
      /**
       * Localization properties for PublishAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteSelectedLinksAction
      */
  "Action_deleteSelectedLinks_text": "削除",
  "Action_deleteSelectedLinks_tooltip": "リストからアイテムを削除",
      /**
       * Localization properties for PublishAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteImageLinkAction
      */
  "Action_deleteImageLink_text": "画像の削除",
  "Action_deleteImageLink_tooltip": "リストから画像を削除",
      /**
       * Localization properties for an action that opens the collection with images
      */
  "Action_replaceImageLink_text": "置換",
  "Action_replaceImageLink_tooltip": "",
      /**
       * Localization properties for CopyToClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.CopyToClipboardAction
      */
  "Action_copyToClipboard_text": "コピー",
  "Action_copyToClipboard_tooltip": "コピー",
      /**
       * Localization properties for PasteFromClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.PasteFromClipboardAction
      */
  "Action_pasteFromClipboard_text": "貼り付け",
  "Action_pasteFromClipboard_tooltip": "貼り付け",
      /**
       * Localization properties for CutToClipboardAction
 * @see com.coremedia.cms.editor.sdk.actions.CutToClipboardAction
      */
  "Action_cutToClipboard_text": "切り取り",
  "Action_cutToClipboard_tooltip": "切り取り",
      /**
       * Localization properties for OpenInTabAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenInTabAction
      */
  "Action_openInTab_text": "タブで開く",
  "Action_openInTab_tooltip": "タブで開く",
  "Action_openInBackgroundTab_text": "背景に開く",
  "Action_openInBackgroundTab_tooltip": "背景に開く",
      /**
       * Localization properties for OpenInTreeAction
 * @see com.coremedia.cms.editor.sdk.collectionview.OpenInTreeAction
      */
  "Action_openInTree_text": "開く",
  "Action_openInTree_tooltip": "コンテンツアイテムをタブで開くか、フォルダを入力する",
      /**
       * Localization properties for OpenInBrowserTabAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenInBrowserTabAction
      */
  "Action_openInBrowserTab_text": "ブラウザで開く",
  "Action_openInBrowserTab_tooltip": "新しいブラウザタブで開く",
      /**
       * Localization properties for RenameMenuItemAction
 * @see com.coremedia.cms.editor.sdk.actions.RenameMenuItemAction
      */
  "Action_rename_text": "名前変更",
  "Action_rename_tooltip": "名前変更",
  "Action_rename_icon": "openInBrowserTab-icon",
      /**
       * Localization properties for RestoreVersionAction
 * @see com.coremedia.cms.editor.sdk.actions.RestoreVersionAction
      */
  "Action_restoreVersion_tooltip": "選択したバージョンの復元",
  "Action_restoreVersion_verifyMessage_title": "選択したバージョンの復元",
  "Action_restoreVersion_verifyMessage_text": "現在の変更が上書きされます。よろしいですか?",
      /**
       * Localization properties for WithdrawAction
 * @see com.coremedia.cms.editor.sdk.actions.WithdrawAction
      */
  "Action_withdraw_text": "取り下げ",
  "Action_withdraw_tooltip": "取り下げ",
  "Action_withdraw_folder_verifyMessage_title": "フォルダの取り下げ",
  "Action_withdraw_folder_verifyMessage_text": "「{0}」のフォルダを取り下げてもよろしいですか?",
  "Action_withdraw_contents_verifyMessage_title": "コンテンツの取り下げ",
  "Action_withdraw_contents_verifyMessage_text": "「{0}」のコンテンツを取り下げてもよろしいですか?",
      /**
       * Localization properties for DeleteAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteAction
      */
  "Action_delete_text": "削除",
  "Action_delete_tooltip": "削除",
  "Action_delete_document_verifyMessage_title": "ドキュメントの削除",
  "Action_delete_document_verifyMessage_text": "「{0}」のドキュメントを削除してもよろしいですか?",
  "Action_delete_folder_verifyMessage_title": "フォルダの削除",
  "Action_delete_folder_verifyMessage_text": "「{0}」のフォルダを削除してもよろしいですか?",
  "Action_delete_contents_verifyMessage_title": "コンテンツの削除",
  "Action_delete_contents_verifyMessage_text": "「{0}」のコンテンツを削除してもよろしいですか?",
      /**
       * Localization properties for UndeleteAction
 * @see com.coremedia.cms.editor.sdk.actions.UndeleteAction
      */
  "Action_undelete_text": "復元する",
  "Action_undelete_tooltip": "コンテンツアイテムをごみ箱から復元する",
  "Action_undelete_icon": "undelete-icon",
      /**
       * Localization properties for WorkflowAction
 * @see com.coremedia.cms.editor.sdk.actions.WorkflowAction
      */
  "Action_workflow_text": "ワークフロー",
      /**
       * Localization properties for DeleteBlobAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteBlobAction
      */
  "Action_deleteBlob_text": "削除",
  "Action_deleteBlob_tooltip": "削除",
      /**
       * Localization properties for OpenBlobAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenBlobAction
      */
  "Action_openBlob_text": "ダウンロード",
  "Action_openBlob_tooltip": "ファイルをダウンロードする",
      /**
       * Localization properties for NewContentAction
 * @see com.coremedia.cms.editor.sdk.actions.NewContentAction
      */
  "Action_newContent_newDocumentName_text": "新しいドキュメント",
      /**
       * Localization properties for ShowInRepositoryAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowInRepositoryAction
      */
  "Action_showInTree_text": "ライブラリに表示する",
  "Action_showInTree_tooltip": "ドキュメントをライブラリに表示する",
      /**
       * Localization properties for OpenSaveSearchWindowAction
 * @see com.coremedia.cms.editor.sdk.actions.OpenSaveSearchWindowAction
      */
  "Action_saveSearch_text": "検索の保存",
  "Action_saveSearch_tooltip": "検索フォルダをお気に入りツールバーに追加する",
  "Action_saveSearch_notification_added": "検索が保存されました。",
  "Action_saveSearch_notification_replaced": "検索が置き換えられました。",
      /**
       * Localization properties for DeleteSavedSearchAction
 * @see com.coremedia.cms.editor.sdk.actions.DeleteSavedSearchAction
      */
  "Action_deleteSearch_text": "検索フォルダの削除",
  "Action_deleteSearch_tooltip": "検索フォルダをお気に入りツールバーから削除する",
      /**
       * Localization properties for ShowCollectionViewToSaveSearchAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewToSaveSearchAction
      */
  "Action_addSearch_text": "検索フォルダの追加",
  "Action_addSearch_tooltip": "新しい検索フォルダをお気に入りツールバーに追加する",
  "Action_addSearch_hint_text": "<\/br>の検索パラメータを設定して、検索フォルダをここに保存します",
      /**
       * Localization properties for MoveUserItemAction
 * @see com.coremedia.cms.editor.sdk.actions.MoveUserItemAction
      */
  "Action_moveUserItemtoTop_text": "一番上に移動",
  "Action_moveUserItemtoTop_tooltip": "検索フォルダをリストの一番上に移動します",
  "Action_moveUserItemup_text": "上に移動",
  "Action_moveUserItemup_tooltip": "検索フォルダを1つ上の位置に移動します",
  "Action_moveUserItemdown_text": "下に移動",
  "Action_moveUserItemdown_tooltip": "検索フォルダを1つ下の位置に移動します",
  "Action_moveUserItemtoBottom_text": "一番下に移動",
  "Action_moveUserItemtoBottom_tooltip": "検索フォルダをリストの一番下に移動します",
      /**
       * Localization properties for ShowCollectionViewInSearchStateAction
 * @see com.coremedia.cms.editor.sdk.actions.ShowCollectionViewInSearchStateAction
      */
  "Action_showSearch_text": "開く",
      /**
       * Localization properties for FullWidthAction
 * @see com.coremedia.cms.editor.sdk.preview.zoom.FullWidthAction
      */
  "Action_fullWidth_text": "概要でページ全体を表示する",
  "Action_fullWidth_tooltip": "概要でページ全体を表示する",
  "Action_fullWidth_icon": "preview-width-icon",
      /**
       * Localization properties for CloseTabsAction
 * @see com.coremedia.ui.actions.CloseTabsAction
      */
  "Action_closeTabsAction_closeTabText": "タブを閉じる",
  "Action_closeTabsAction_closeOtherTabsText": "他のタブを閉じる",
  "Action_closeTabsAction_closeAllTabsText": "タブをすべて閉じる",
      /**
       * Localization properties for ProcessAllContentTabsAction
 * @see com.coremedia.cms.editor.sdk.actions.ProcessAllContentTabsAction
      */
  "Action_revert_verifyMessage_allContentTabs_text": "開いているコンテンツアイテムに加えた変更はすべて取り消されます。<br>このアクションを元に戻すことはできません。",
      /**
       * Localization properties for RenameTabContentAction
 * @see com.coremedia.cms.editor.sdk.actions.RenameTabContentAction
      */
  "Action_renameTabContentAction_menu_text": "名前変更",
  "Action_renameTabContentAction_title_text": "コンテンツの名前を変える",
  "Action_renameTabContentAction_message_text": "新しいコンテンツの名前を入力する",
      /**
       * Localization properties for StructPropertyField
      */
  "Action_addStructListItem_icon": "btn-toolbar-add-list-item-icon",
  "Action_deleteStructNode_icon": "remove-icon",
  "Action_duplicateStructNode_icon": "copy-icon",
  "Action_moveStructListItemUp_icon": "up-icon",
  "Action_moveStructListItemDown_icon": "down-icon",
  "Action_addStructListItem_text": "アイテムを追加する",
  "Action_addStructListItem_tooltip": "リストプロパティにアイテムを追加する",
  "Action_deleteStructNode_text": "アイテムを削除する",
  "Action_deleteStructNode_tooltip": "アイテムを削除する",
  "Action_duplicateStructNode_text": "複製する",
  "Action_duplicateStructNode_tooltip": "複製する",
  "Action_moveStructListItemUp_text": "上へ移動する",
  "Action_moveStructListItemUp_tooltip": "上へ移動する",
  "Action_moveStructListItemDown_text": "下へ移動する",
  "Action_moveStructListItemDown_tooltip": "下へ移動する",
      /**
       * Localization properties for DownloadXliffAction
 * @see com.coremedia.cms.editor.sdk.actions.DownloadXliffAction
      */
  "Action_downloadXliff_text": "XLIFFをダウンロードする",
  "Action_downloadXliff_tooltip": "XLIFFファイルをダウンロードする",
  "Action_downloadXliff_icon": "xliff-download-icon",
  "Action_openVersionComparison_text": "現在のコンテンツとバージョンを比較する",
  "Action_openVersionComparison_tooltip": "現在のコンテンツとバージョンを比較する",
  "Action_openVersionComparison_icon": "open-version-comparison",
  "Action_translate_text": "自動翻訳",
  "Action_translate_tooltip": "自動的に{0}へ翻訳",
  "Action_translate_icon": "xliff-download-icon",
  "Action_translate_inProgress": "翻訳中です…",
  "Action_translate_complete": "翻訳が完了しました ({0} 翻訳されました、{1} エラー)。",
  "Action_setPreferredSite_text": "優先サイトを設定する",
  "Action_setPreferredSite_tooltip": "このサイトを優先サイトとして選択する",
  "Action_openSiteHomepageInTab_text": "ホームページをタブで開く",
  "Action_openSiteHomepageInTab_tooltip": "選択したサイトのホームページをタブで開く",
      /**
       * Localization properties for ScaleToOriginalAction
 * @see com.coremedia.cms.editor.sdk.preview.zoom.ScaleToOriginalAction
      */
  "Action_scaleToOriginal_text": "フルサイズにする",
  "Action_scaleToOriginal_tooltip": "フルサイズにする",
      /**
       * Answer from Server: currently non-allowed actions
      */
  "CHECKIN": "変更の適用",
  "APPROVE": "承認",
  "APPROVE_PUBLISH": "承認＋発行",
  "Action_checkIn_all_text": "全ての変更を適用",
  "Action_delete_buttonText": "削除",
  "Action_responsiveMode_text": "ページをレスポンシブモードで表示する",
  "Action_responsiveMode_tooltip": "ページをレスポンシブモードで表示する",
  "Action_restoreVersion_buttonText": "復元する",
  "Action_restoreVersion_text": "バージョンを復元する",
  "Action_withdraw_buttonText": "取り下げ"
}, function() {
});