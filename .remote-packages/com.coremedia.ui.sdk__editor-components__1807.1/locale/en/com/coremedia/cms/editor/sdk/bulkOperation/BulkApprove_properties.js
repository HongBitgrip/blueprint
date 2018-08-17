/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove_properties", {

  "bulkResult_error_window_title": "Error Approving Content Items",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_sg_text": "The following folder could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_pl_text": "The following {0} folders could not be deleted because you do not have sufficient rights.",
  "bulkResult_error_documentNotValid_sg_text": "The following content item contains errors and cannot be approved.",
  "bulkResult_error_documentNotValid_pl_text": "The following {0} content items contain errors and cannot be approved.",
  "bulkResult_error_folderNotValid_sg_text": "The following folder contains errors and cannot be approved.",
  "bulkResult_error_folderNotValid_pl_text": "The following {0} folders contain errors and cannot be approved.",
  "bulkResult_error_documentDeleted_sg_text": "The following content item has been moved to the trash bin and cannot be approved.",
  "bulkResult_error_documentDeleted_pl_text": "The following {0} content items have been moved to the trash bin and cannot be approved.",
  "bulkResult_error_folderDeleted_sg_text": "The following folder has been moved to the trash bin and cannot be approved.",
  "bulkResult_error_folderDeleted_pl_text": "The following {0} folders have been moved to the trash bin and cannot be approved.",
  "bulkResult_error_documentCheckedOutByOther_sg_text": "The following content item could not be approved because it is edited by another user.",
  "bulkResult_error_documentCheckedOutByOther_pl_text": "The following {0} content items could not be approved because it is edited by another user."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkApprove_properties();
});