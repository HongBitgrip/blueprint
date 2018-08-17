Ext.define("com.coremedia.cap.content.results.ApproveResultCodes", function(ApproveResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the approve operation.
 * An impediment is provided for a result item if it is documented in the result code definition.
 * /
[PublicApi]
public class ApproveResultCodes {
  /**
   * A document has been successfully approved.
   * /
  public static const DOCUMENT_APPROVED:String = "documentApproved";
  /**
   * A folder has been successfully approved.
   * /
  public static const FOLDER_APPROVED:String = "folderApproved";
  /**
   * A document was already approved before the operation started.
   * /
  public static const DOCUMENT_ALREADY_APPROVED:String = "documentAlreadyApproved";
  /**
   * A folder was already approved before the operation started.
   * /
  public static const FOLDER_ALREADY_APPROVED:String = "folderAlreadyApproved";
  /**
   * A document contained validation errors and could not be approved.
   * /
  public static const DOCUMENT_NOT_VALID:String = "documentNotValid";
  /**
   * A folder contained validation errors and could not be approved.
   * /
  public static const FOLDER_NOT_VALID:String = "folderNotValid";
  /**
   * It was not allowed to approve a document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * It was not allowed to approve a folder.
   * /
  public static const FOLDER_NO_RIGHTS:String = "folderNoRights";
  /**
   * A document was in the trash and could not be approved.
   * /
  public static const DOCUMENT_DELETED:String = "documentDeleted";
  /**
   * A folder was in the trash and could not be approved.
   * /
  public static const FOLDER_DELETED:String = "folderDeleted";
  /**
   * A document was checked out by another user and could not be checked in.
   * The user who checked out the document is passed in the impediment property.
   * /
  public static const DOCUMENT_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
}*/function ApproveResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ApproveResultCodes$,
      statics: {
        DOCUMENT_APPROVED: "documentApproved",
        FOLDER_APPROVED: "folderApproved",
        DOCUMENT_ALREADY_APPROVED: "documentAlreadyApproved",
        FOLDER_ALREADY_APPROVED: "folderAlreadyApproved",
        DOCUMENT_NOT_VALID: "documentNotValid",
        FOLDER_NOT_VALID: "folderNotValid",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        FOLDER_NO_RIGHTS: "folderNoRights",
        DOCUMENT_DELETED: "documentDeleted",
        FOLDER_DELETED: "folderDeleted",
        DOCUMENT_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther"
      }
    };
});
