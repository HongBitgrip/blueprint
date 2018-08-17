/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete_properties", {

  "bulkResult_error_window_title": "Error Restoring Contents",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be restored because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be restored because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_sg_text": "The following folder could not be restored because you do not have sufficient rights.",
  "bulkResult_error_folderNoRights_pl_text": "The following {0} folders could not be restored because you do not have sufficient rights.",
  "bulkResult_error_documentUndeleted_sg_text": "The following content item has been restored.",
  "bulkResult_error_documentUndeleted_pl_text": "The following {0} content items have been restored.",
  "bulkResult_error_folderUndeleted_sg_text": "The following folder has been restored.",
  "bulkResult_error_folderUndeleted_pl_text": "The following {0} folders have been restored.",
  "bulkResult_error_documentAlreadyUndeleted_sg_text": "The following content item had already been restored before.",
  "bulkResult_error_documentAlreadyUndeleted_pl_text": "The following {0} content items had already been restored before.",
  "bulkResult_error_folderAlreadyUndeleted_sg_text": "The following folder did not have to be restored.",
  "bulkResult_error_folderAlreadyUndeleted_pl_text": "The following {0} folders did not have to be restored.",
  "bulkResult_error_documentFailed_sg_text": "The following content item could not be restored. Please retry the operation.",
  "bulkResult_error_documentFailed_pl_text": "The following {0} content items could not be restored. Please retry the operation.",
  "bulkResult_error_folderFailed_sg_text": "The following folder could not be restored. Please retry the operation.",
  "bulkResult_error_folderFailed_pl_text": "The following {0} folders could not be restored. Please retry the operation.",
  "bulkResult_error_documentDuplicateName_sg_text": "The following content item could not be restored because another object with the same name already exists at the target location.",
  "bulkResult_error_documentDuplicateName_pl_text": "The following {0} content items could not be restored because other objects with the same names already exist at the target locations.",
  "bulkResult_error_folderDuplicateName_sg_text": "The following folder could not be restored because another object with the same name already exists at the target location.",
  "bulkResult_error_folderDuplicateName_pl_text": "The following {0} folders could not be restored because other objects with the same names already exist at the target locations.",
  "bulkResult_error_documentParentDeleted_sg_text": "The following content item could not be restored because its parent could not be restored.",
  "bulkResult_error_documentParentDeleted_pl_text": "The following {0} content items could not be restored because their parents could not be restored.",
  "bulkResult_error_folderParentDeleted_sg_text": "The following folder could not be restored because its parent could not be restored.",
  "bulkResult_error_folderParentDeleted_pl_text": "The following {0} folders could not be restored because their parents could not be restored.",
  "bulkResult_impedimentType_documentDuplicateName_text": "is blocked by",
  "bulkResult_impedimentType_folderDuplicateName_text": "is blocked by"
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkUndelete_properties();
});