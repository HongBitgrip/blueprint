Ext.define("com.coremedia.cap.content.results.UndeleteResultCodes", function(UndeleteResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the undelete operations.
 *
 * @see com.coremedia.cap.content.Content#undelete
 * /
[PublicApi]
public class UndeleteResultCodes {
  /**
   * The document has been undeleted.
   * /
  public static const DOCUMENT_UNDELETED:String = "documentUndeleted";
  /**
   * The folder has been undeleted.
   * /
  public static const FOLDER_UNDELETED:String = "folderUndeleted";
  /**
   * The document is not deleted.
   * /
  public static const DOCUMENT_ALREADY_UNDELETED:String = "documentAlreadyUndeleted";
  /**
   * The folder is not deleted.
   * /
  public static const FOLDER_ALREADY_UNDELETED:String = "folderAlreadyUndeleted";
  /**
   * It was not permitted to undelete the document.
   * /
  public static const DOCUMENT_NO_RIGHTS:String = "documentNoRights";
  /**
   * It was not permitted to undelete the folder.
   * /
  public static const FOLDER_NO_RIGHTS:String = "folderNoRights";
  /**
   * It was not possible to undelete the document.
   * /
  public static const DOCUMENT_FAILED:String = "documentFailed";
  /**
   * It was not possible to undelete the folder.
   * /
  public static const FOLDER_FAILED:String = "folderFailed";
  /**
   * The document could not be undeleted, because a document with the same name already exists at the target location.
   * The other content is reported as the impediment of the result item.
   * /
  public static const DOCUMENT_DUPLICATE_NAME:String = "documentDuplicateName";
  /**
   * The folder could not be undeleted, because a folder with the same name already exists at the target location.
   * The other content is reported as the impediment of the result item.
   * /
  public static const FOLDER_DUPLICATE_NAME:String = "folderDuplicateName";
  /**
   * The document could not be undeleted, because its parent folder is still deleted.
   * /
  public static const DOCUMENT_PARENT_DELETED:String = "documentParentDeleted";
  /**
   * The folder could not be undeleted, because its parent folder is still deleted.
   * /
  public static const FOLDER_PARENT_DELETED:String = "folderParentDeleted";

}*/function UndeleteResultCodes$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: UndeleteResultCodes$,
      statics: {
        DOCUMENT_UNDELETED: "documentUndeleted",
        FOLDER_UNDELETED: "folderUndeleted",
        DOCUMENT_ALREADY_UNDELETED: "documentAlreadyUndeleted",
        FOLDER_ALREADY_UNDELETED: "folderAlreadyUndeleted",
        DOCUMENT_NO_RIGHTS: "documentNoRights",
        FOLDER_NO_RIGHTS: "folderNoRights",
        DOCUMENT_FAILED: "documentFailed",
        FOLDER_FAILED: "folderFailed",
        DOCUMENT_DUPLICATE_NAME: "documentDuplicateName",
        FOLDER_DUPLICATE_NAME: "folderDuplicateName",
        DOCUMENT_PARENT_DELETED: "documentParentDeleted",
        FOLDER_PARENT_DELETED: "folderParentDeleted"
      }
    };
});
