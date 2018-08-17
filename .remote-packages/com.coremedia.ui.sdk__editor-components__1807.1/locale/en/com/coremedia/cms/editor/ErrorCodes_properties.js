/**
 * This class defines localizations for various workflow error codes.
 * By default only the most generic error codes are listed.
 * It is possible to add further localization keys to the
 * instance object.
 */
Ext.define("com.coremedia.cms.editor.ErrorCodes_properties", {

      /**
       * The error code for: no user is permitted to accept the task
      */
  "ErrorCode_CAP_WF_06900_text": "No user can execute this task.",
      /**
       * The error code for: the offer timeout elapsed before a user accepted the task
      */
  "ErrorCode_CAP_WF_08020_text": "No user accepted this task in time.",
  "ErrorCode_TRANSLATION_WF_10001_text": "Content in master site not readable: {0}",
  "ErrorCode_TRANSLATION_WF_10002_text": "Content in derived site not writable: {0}",
  "ErrorCode_TRANSLATION_WF_10004_text": "Not authorized to create content of type '{1}' in folder {0}",
  "ErrorCode_TRANSLATION_WF_11001_text": "Site does not exist: {0}",
  "ErrorCode_TRANSLATION_WF_11002_text": "Site already exists: {0}",
  "ErrorCode_TRANSLATION_WF_12001_text": "Conflicts on {0} ({1}): {2}",
  "ErrorCode_CAP_SITES_00007_text": "Content in master site has never been checked in: {0}",
  "ErrorCode_CAP_API_20250_text": "You are not authorized to complete this workflow. Please, abort it."
}, function() {

  com.coremedia.cms.editor.ErrorCodes_properties.INSTANCE = new com.coremedia.cms.editor.ErrorCodes_properties();
});