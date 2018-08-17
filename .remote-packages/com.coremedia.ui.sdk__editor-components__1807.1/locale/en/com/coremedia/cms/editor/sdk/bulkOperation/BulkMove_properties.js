/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkMove_properties", {

  "bulkResult_error_window_title": "Error Moving Contents",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_contentUnchanged_sg_text": "The following content could not be moved because it is already located in the target folder.",
  "bulkResult_error_contentUnchanged_pl_text": "The following contents could not be moved because they are already located in the target folder.",
  "bulkResult_error_contentNoRights_sg_text": "The following content could not be moved because you do not have sufficient rights.",
  "bulkResult_error_contentNoRights_pl_text": "The following contents could not be moved because you do not have sufficient rights.",
  "bulkResult_error_contentNoRightsOnTarget_sg_text": "The following content could not be moved because you do not have sufficient rights for the target folder.",
  "bulkResult_error_contentNoRightsOnTarget_pl_text": "The following contents could not be moved because you do not have sufficient rights for the target folder.",
  "bulkResult_error_contentTargetDeleted_sg_text": "The following content could not be moved because the target folder is deleted.",
  "bulkResult_error_contentTargetDeleted_pl_text": "The following contents could not be moved because the target folder is deleted.",
  "bulkResult_error_contentTargetToBeDeleted_sg_text": "The following content could not be moved because the target folder is marked to be deleted.",
  "bulkResult_error_contentTargetToBeDeleted_pl_text": "The following contents could not be moved because the target folder is marked to be deleted.",
  "bulkResult_error_contentDuplicateName_sg_text": "The following content could not be moved because there is already a content with the same name in the target folder. Please choose a new name and try again.",
  "bulkResult_error_contentDuplicateName_pl_text": "The following contents could not be moved because there are already contents with the same names in the target folder. Please choose new names and try again.",
  "bulkResult_error_contentMoveToOtherBaseFolder_sg_text": "The following content could not be moved because the target folder belongs to a different site.",
  "bulkResult_error_contentMoveToOtherBaseFolder_pl_text": "The following contents could not be moved because the target folder belongs to a different site.",
  "bulkResult_error_contentTargetIsDescendant_sg_text": "The following content could not be moved because the target is a descendant of the content.",
  "bulkResult_error_contentTargetIsDescendant_pl_text": "The following contents could not be moved because the target is a descendant of the contents."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkMove_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkMove_properties();
});