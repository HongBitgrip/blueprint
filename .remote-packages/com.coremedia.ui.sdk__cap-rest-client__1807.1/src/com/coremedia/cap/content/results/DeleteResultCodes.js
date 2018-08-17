Ext.define("com.coremedia.cap.content.results.DeleteResultCodes", function(DeleteResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the delete operations.
 *
 * @see com.coremedia.cap.content.Content#doDelete
 * /
[PublicApi]
public class DeleteResultCodes {
  /**
   * The document has been deleted.
   * /
  public static const DOCUMENT_DELETED:String = "documentDeleted";
  /**
   * The folder has been deleted.
   * /
  public static const FOLDER_DELETED:String = "folderDeleted";
  /**
   * The folder could not be deleted, because it was not empty.
   * /
  public static const FOLDER_NOT_EMPTY:String = "folderNotEmpty";
  /**
   * It was not permitted to delete the document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * It was not permitted to delete the folder.
   * /
  public static const FOLDER_NO_RIGHTS:String = "folderNoRights";
  /**
   * The document could not be deleted, because it was still published.
   * /
  public static const DOCUMENT_STILL_PUBLISHED:String = "documentStillPublished";
  /**
   * The folder could not be deleted, because it was still published.
   * /
  public static const FOLDER_STILL_PUBLISHED:String = "folderStillPublished";
  /**
   * The document could not be deleted, because it is still checked out by another user.
   * The user who checked out the document is passed in the impediment property.
   * /
  public static const DOCUMENT_CHECKED_OUT_BY_OTHER:String = "documentCheckedOutByOther";
}*/function DeleteResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: DeleteResultCodes$,
      statics: {
        DOCUMENT_DELETED: "documentDeleted",
        FOLDER_DELETED: "folderDeleted",
        FOLDER_NOT_EMPTY: "folderNotEmpty",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        FOLDER_NO_RIGHTS: "folderNoRights",
        DOCUMENT_STILL_PUBLISHED: "documentStillPublished",
        FOLDER_STILL_PUBLISHED: "folderStillPublished",
        DOCUMENT_CHECKED_OUT_BY_OTHER: "documentCheckedOutByOther"
      }
    };
});
