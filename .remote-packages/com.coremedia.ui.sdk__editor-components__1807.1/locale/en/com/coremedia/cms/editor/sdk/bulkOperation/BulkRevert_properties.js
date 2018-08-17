/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkRevert_properties", {

  "bulkResult_error_window_title": "Error Reverting Contents",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be reverted because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be reverted because you do not have sufficient rights.",
  "bulkResult_error_documentCheckedOutByOther_sg_text": "The following content item could not be reverted because it is edited by another user.",
  "bulkResult_error_documentCheckedOutByOther_pl_text": "The following {0} content items could not be reverted because it is edited by another user.",
      /**
       * Should not be used.
      */
  "bulkResult_error_folderCannotRevert_sg_text": "Folders cannot be reverted.",
      /**
       * Should not be used.
      */
  "bulkResult_error_folderCannotRevert_pl_text": "Folders cannot be reverted."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkRevert_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkRevert_properties();
});