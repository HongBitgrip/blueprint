Ext.define("com.coremedia.cap.content.results.CopyResultCodes", function(CopyResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the copy operation.
 *
 * @see com.coremedia.cap.content.Content#copyTo
 * /
[PublicApi]
public class CopyResultCodes {

  /**
   * A content has been copied successfully to a checked-in copy.
   * /
  public static const CONTENT_COPIED:String = "contentCopied";
  /**
   * A content has been copied successfully to a checked-out copy.
   * /
  public static const CONTENT_COPIED_CHECKED_OUT:String = "contentCopiedCheckedOut";
  /**
   * A document could not be copied, but no specific cause can be detected.
   * Probably this problem is caused by concurrent modifications.
   * /
  public static const CONTENT_FAILED:String = "contentFailed";
  /**
   * A document could not be copied, because write rights were missing for the target folder.
   * /
  public static const CONTENT_NO_RIGHTS:String = "contentNoRights";
  /**
   * A document could no be copied, because it could not be read.
   * /
  public static const CONTENT_NO_READ_RIGHTS:String = "contentNoReadRights";
  /**
   * A document could no be copied, because the target folder is deleted.
   * /
  public static const CONTENT_TARGET_DELETED:String = "contentTargetDeleted";
  /**
   * A document could no be copied, because the target folder is marked to be deleted.
   * /
  public static const CONTENT_TARGET_TO_BE_DELETED:String = "contentTargetToBeDeleted";
  /**
   * A document could no be copied, because the target name is already in use by another content.
   * /
  public static const CONTENT_DUPLICATE_NAME:String = "contentDuplicateName";
  /**
   * A document could no be copied, because the target name would be invalid, for example,
   * because the name would be too long.
   * /
  public static const CONTENT_INVALID_NAME:String = "contentInvalidName";
}*/function CopyResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CopyResultCodes$,
      statics: {
        CONTENT_COPIED: "contentCopied",
        CONTENT_COPIED_CHECKED_OUT: "contentCopiedCheckedOut",
        CONTENT_FAILED: "contentFailed",
        CONTENT_NO_RIGHTS: "contentNoRights",
        CONTENT_NO_READ_RIGHTS: "contentNoReadRights",
        CONTENT_TARGET_DELETED: "contentTargetDeleted",
        CONTENT_TARGET_TO_BE_DELETED: "contentTargetToBeDeleted",
        CONTENT_DUPLICATE_NAME: "contentDuplicateName",
        CONTENT_INVALID_NAME: "contentInvalidName"
      }
    };
});
