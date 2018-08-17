Ext.define("com.coremedia.cap.content.results.DisapproveResultCodes", function(DisapproveResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the disapprove operation.
 *
 * @see com.coremedia.cap.content.publication.PublicationService#disapprove
 * @see com.coremedia.cap.content.publication.PublicationService#disapproveAll
 * /
[PublicApi]
public class DisapproveResultCodes {
  /**
   * A document has been successfully disapproved.
   * /
  public static const DOCUMENT_DISAPPROVED:String = "documentDisapproved";
  /**
   * A folder has been successfully disapproved.
   * /
  public static const FOLDER_DISAPPROVED:String = "folderDisapproved";
  /**
   * A document was already disapproved before the operation started.
   * /
  public static const DOCUMENT_ALREADY_DISAPPROVED:String = "documentAlreadyDisapproved";
  /**
   * A folder was already disapproved before the operation started.
   * /
  public static const FOLDER_ALREADY_DISAPPROVED:String = "folderAlreadyDisapproved";
  /**
   * A document was already published and could not be disapproved.
   * /
  public static const DOCUMENT_ALREADY_PUBLISHED:String = "documentAlreadyPublished";
  /**
   * A folder was already published and could not be disapproved.
   * /
  public static const FOLDER_ALREADY_PUBLISHED:String = "folderAlreadyPublished";
  /**
   * A document was in the trash and could not be disapproved.
   * /
  public static const DOCUMENT_DELETED:String = "documentDeleted";
  /**
   * It was not allowed to disapprove a document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * It was not allowed to disapprove a folder.
   * /
  public static const FOLDER_NO_RIGHTS:String = "folderNoRights";
}*/function DisapproveResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: DisapproveResultCodes$,
      statics: {
        DOCUMENT_DISAPPROVED: "documentDisapproved",
        FOLDER_DISAPPROVED: "folderDisapproved",
        DOCUMENT_ALREADY_DISAPPROVED: "documentAlreadyDisapproved",
        FOLDER_ALREADY_DISAPPROVED: "folderAlreadyDisapproved",
        DOCUMENT_ALREADY_PUBLISHED: "documentAlreadyPublished",
        FOLDER_ALREADY_PUBLISHED: "folderAlreadyPublished",
        DOCUMENT_DELETED: "documentDeleted",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        FOLDER_NO_RIGHTS: "folderNoRights"
      }
    };
});
