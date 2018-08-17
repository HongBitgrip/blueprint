Ext.define("com.coremedia.cap.content.results.MoveResultCodes", function(MoveResultCodes) {/*package com.coremedia.cap.content.results {

/**
 * Result codes returned by the move operation.
 *
 * @see com.coremedia.cap.content.ContentRepository#moveTo
 * /
[PublicApi]
public class MoveResultCodes {

  /**
   * A content was already located in the target folder.
   * /
  public static const CONTENT_UNCHANGED: String = "contentUnchanged";
  /**
   * A content was moved.
   * /
  public static const CONTENT_MOVED: String = "contentMoved";
  /**
   * A content could not be moved, because write rights were missing on the content.
   * /
  public static const CONTENT_NO_RIGHTS: String = "contentNoRights";
  /**
   * A content could not be moved, because write rights were missing on the target folder.
   * /
  public static const CONTENT_NO_RIGHTS_ON_TARGET: String = "contentNoRightsOnTarget";
  /**
   * A content could not be moved, because the target folder was deleted.
   * /
  public static const CONTENT_TARGET_DELETED: String = "contentTargetDeleted";
  /**
   * A content could not be moved, because the target folder was marked to be deleted.
   * /
  public static const CONTENT_TARGET_TO_BE_DELETED: String = "contentTargetToBeDeleted";
  /**
   * A content could not be moved, because a content with the same name existed in the target folder already.
   * /
  public static const CONTENT_DUPLICATE_NAME: String = "contentDuplicateName";
  /**
   * A content could not be moved to another base folder in a multi-site repository.
   * /
  public static const CONTENT_MOVE_TO_OTHER_BASE_FOLDER: String = "contentMoveToOtherBaseFolder";
  /**
   * A content could not be moved to itself or one of its transitive children.
   * /
  public static const CONTENT_TARGET_IS_DESCENDANT: String = "contentTargetIsDescendant";
  
}*/function MoveResultCodes$() {}/*

}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: MoveResultCodes$,
      statics: {
        CONTENT_UNCHANGED: "contentUnchanged",
        CONTENT_MOVED: "contentMoved",
        CONTENT_NO_RIGHTS: "contentNoRights",
        CONTENT_NO_RIGHTS_ON_TARGET: "contentNoRightsOnTarget",
        CONTENT_TARGET_DELETED: "contentTargetDeleted",
        CONTENT_TARGET_TO_BE_DELETED: "contentTargetToBeDeleted",
        CONTENT_DUPLICATE_NAME: "contentDuplicateName",
        CONTENT_MOVE_TO_OTHER_BASE_FOLDER: "contentMoveToOtherBaseFolder",
        CONTENT_TARGET_IS_DESCENDANT: "contentTargetIsDescendant"
      }
    };
});
