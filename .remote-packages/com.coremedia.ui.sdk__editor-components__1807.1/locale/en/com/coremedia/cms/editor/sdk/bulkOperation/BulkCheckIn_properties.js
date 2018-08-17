/**
 *[PublicApi]
 */
Ext.define("com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn_properties", {

  "bulkResult_error_window_title": "Error Checking Content Item In",
  "bulkResult_error_btn_OK": "OK",
  "bulkResult_error_documentNotValid_sg_text": "The following content item contains errors and cannot be checked in.",
  "bulkResult_error_documentNotValid_pl_text": "The following {0} content items contain errors and cannot be checked in.",
  "bulkResult_error_documentNoRights_sg_text": "The following content item could not be checked in because you do not have sufficient rights.",
  "bulkResult_error_documentNoRights_pl_text": "The following {0} content items could not be checked in because you do not have sufficient rights.",
  "bulkResult_error_documentCheckedOutByOther_sg_text": "The following content item could not be checked in because it is edited by another user.",
  "bulkResult_error_documentCheckedOutByOther_pl_text": "The following {0} content items could not be checked in because it is edited by another user.",
      /**
       * Should not be used.
      */
  "bulkResult_error_folderCannotCheckIn_sg_text": "Folders cannot be checked in.",
      /**
       * Should not be used.
      */
  "bulkResult_error_folderCannotCheckIn_pl_text": "Folders cannot be checked in."
}, function() {

  com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn_properties.INSTANCE = new com.coremedia.cms.editor.sdk.bulkOperation.BulkCheckIn_properties();
});