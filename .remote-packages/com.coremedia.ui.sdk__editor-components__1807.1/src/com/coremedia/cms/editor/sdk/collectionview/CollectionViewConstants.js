Ext.define("com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants", function(CollectionViewConstants) {/*package com.coremedia.cms.editor.sdk.collectionview {

[PublicApi]
public class CollectionViewConstants {
  /**
   * Constant for lastEditedBy property. Indicates that only content last edited
   by the current user should be displayed.
   @see #lastEditedBy()
   * /
  public static const LAST_EDITED_BY_ME:String = "me";

  /**
   * Constant for lastEditedBy property. Indicates that no special restrictions
   on the search result apply.
   @see #lastEditedBy()
   * /
  public static const LAST_EDITED_BY_ANYONE:String = "anyone";

  /**
   * Constant for the view mode, indicating the list view.
   * /
  public static const LIST_VIEW:String = "list";

  /**
   * Constant for the view mode, indicating the thumbnail view.
   * /
  public static const THUMBNAILS_VIEW:String = "thumbnails";

  /**
   * Constant for the repository tree
   * /
  public static const TREE_MODEL_ID:String = "repositoryTreeId";

  public*/ function CollectionViewConstants$() {
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: CollectionViewConstants$,
      statics: {
        LAST_EDITED_BY_ME: "me",
        LAST_EDITED_BY_ANYONE: "anyone",
        LIST_VIEW: "list",
        THUMBNAILS_VIEW: "thumbnails",
        TREE_MODEL_ID: "repositoryTreeId"
      }
    };
});
