Ext.define("com.coremedia.cap.content.results.RevertResultCodes", function(RevertResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the revert operations.
 *
 * @see com.coremedia.cap.content.Content#revert
 * /
[PublicApi]
public class RevertResultCodes {
  /**
   * A document has been reverted.
   * /
  public static const DOCUMENT_REVERTED:String = "documentReverted";
  /**
   * A new document has been checked in and deleted, because
   * a revert was not possible.
   * /
  public static const DOCUMENT_CHECKED_IN_AND_DELETED:String = "documentCheckedInAndDeleted";
  /**
   * A document was not checked out before performing the check-in.
   * /
  public static const DOCUMENT_NOT_CHECKED_OUT:String = "documentNotCheckedOut";
  /**
   * It was not permitted to revert the document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * A document could not be reverted, because it is still checked out by another user.
   * The user who checked out the document is passed in the impediment property.
   * /
  public static const DOCUMENT_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
  /**
   * Folders cannot be reverted.
   * /
  public static const FOLDER_CANNOT_REVERT:String = "folderCannotRevert";
}*/function RevertResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: RevertResultCodes$,
      statics: {
        DOCUMENT_REVERTED: "documentReverted",
        DOCUMENT_CHECKED_IN_AND_DELETED: "documentCheckedInAndDeleted",
        DOCUMENT_NOT_CHECKED_OUT: "documentNotCheckedOut",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        DOCUMENT_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther",
        FOLDER_CANNOT_REVERT: "folderCannotRevert"
      }
    };
});
