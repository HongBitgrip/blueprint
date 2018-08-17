/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete_properties", {

  "bulkResult_error_window_title": "Error Deleting Contents",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_folderNotEmpty_sg_text": "The following folder could not be deleted because some children could not be deleted.",
  "bulkResult_error_folderNotEmpty_pl_text": "The following {0} folders could not be deleted because some children could not be deleted.",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_sg_text": "The following folder could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_pl_text": "The following {0} folders could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_documentStillPublished_sg_text": "The following content item could not be deleted because it is still published.",
  "bulkResult_error_documentStillPublished_pl_text": "The following {0} content items could not be deleted because they are still published.",
  "bulkResult_error_folderStillPublished_sg_text": "The following folder could not be deleted because it is still published.",
  "bulkResult_error_folderStillPublished_pl_text": "The following {0} folders could not be deleted because they are still published.",
  "bulkResult_error_documentCheckedOutByOther_sg_text": "The following content item could not be deleted because it is edited by another user.",
  "bulkResult_error_documentCheckedOutByOther_pl_text": "The following {0} content items could not be deleted because they are edited by another user."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkDelete_properties();
});