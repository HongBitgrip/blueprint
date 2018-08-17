Ext.define("com.coremedia.cap.content.results.CheckInResultCodes", function(CheckInResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the check-in operations.
 *
 * @see com.coremedia.cap.content.Content#checkIn
 * /
[PublicApi]
public class CheckInResultCodes {
  /**
   * A document has been checked in.
   * The newly created version is indicated in the version
   * property of the result item.
   * /
  public static const DOCUMENT_CHECKED_IN:String = "documentCheckedIn";
  /**
   * A document was already checked in before performing the check-in.
   * The checked-in version is indicated in the version
   * property of the result item.
   * /
  public static const DOCUMENT_ALREADY_CHECKED_IN:String = "documentAlreadyCheckedIn";
  /**
   * A document contained validation errors and could not be checked in.
   * /
  public static const DOCUMENT_NOT_VALID:String = "documentNotValid";
  /**
   * It was not permitted to check-in the document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * A document could not be checked in, because it is still checked out by another user.
   * The user who checked out the document is passed in the impediment property.
   * /
  public static const DOCUMENT_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
  /**
   * Folders cannot be checked in.
   * /
  public static const FOLDER_CANNOT_CHECK_IN:String = "folderCannotCheckIn";
}*/function CheckInResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CheckInResultCodes$,
      statics: {
        DOCUMENT_CHECKED_IN: "documentCheckedIn",
        DOCUMENT_ALREADY_CHECKED_IN: "documentAlreadyCheckedIn",
        DOCUMENT_NOT_VALID: "documentNotValid",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        DOCUMENT_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther",
        FOLDER_CANNOT_CHECK_IN: "folderCannotCheckIn"
      }
    };
});
