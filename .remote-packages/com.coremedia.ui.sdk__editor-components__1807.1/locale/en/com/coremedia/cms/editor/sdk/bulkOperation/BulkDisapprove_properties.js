/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove_properties", {

  "bulkResult_error_window_title": "Error Disapproving Contents",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_documentAlreadyPublished_sg_text": "The following content item could not be disapproved because it is already published.",
  "bulkResult_error_documentAlreadyPublished_pl_text": "The following {0} content items could not be disapproved because it is already published.",
  "bulkResult_error_folderAlreadyPublished_sg_text": "The following folder could not be disapproved because it is already published.",
  "bulkResult_error_folderAlreadyPublished_pl_text": "The following {0} folders could not be disapproved because it is already published.",
  "bulkResult_error_documentDeleted_sg_text": "The following content item has been moved to the trash bin and cannot be disapproved.",
  "bulkResult_error_documentDeleted_pl_text": "The following {0} content items have been moved to the trash bin and cannot be disapproved.",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be disapproved because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be disapproved because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_sg_text": "The following folder could not be disapproved because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_pl_text": "The following {0} folders could not be disapproved because you do not have sufficient rights."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkDisapprove_properties();
});