Ext.define("com.coremedia.cap.content.ContentPropertyNames", function(ContentPropertyNames) {/*package com.coremedia.cap.content {

/**
 * ContentPropertyNames is a container for static identifiers of Content meta property names.
 * Use these if you want to attach listeners to Content properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the Content interface.
 *
 * @see Content
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
[PublicApi]
public class ContentPropertyNames {

  /**
   * @eventType type
   * @see Content#getType()
   * /
  public static const TYPE:String = 'type';

  /**
   * @eventType deleted
   * @see Content#isDeleted()
   * /
  public static const IS_DELETED:String = 'deleted';

  /**
   * @eventType editor
   * @see Content#getEditor()
   * /
  public static const EDITOR:String = 'editor';

  /**
   * @eventType name
   * @see Content#getName()
   * @see Content#rename()
   * /
  public static const NAME:String = 'name';

  /**
   * @eventType parent
   * @see Content#getParent()
   * /
  public static const PARENT:String = 'parent';

  /**
   * @eventType lastParent
   * @see Content#getLastParent()
   * /
  public static const LAST_PARENT:String = 'lastParent';

  /**
   * @eventType children
   * @see Content#getChildren()
   * /
  public static const CHILDREN:String = 'children';

  /**
   * @eventType childrenByName
   * @see Content#getChildrenByName()
   * /
  public static const CHILDREN_BY_NAME:String = 'childrenByName';

  /**
   * @eventType childDocuments
   * @see Content#getChildDocuments()
   * /
  public static const CHILD_DOCUMENTS:String = 'childDocuments';

  /**
   * @eventType subFolders
   * @see Content#getSubFolders()
   * /
  public static const SUB_FOLDERS:String = 'subFolders';

  /**
   * @see Content#getId()
   * /
  public static const ID:String = "id";

  /**
   * @eventType previewUrl
   * @see Content#getPreviewUrl()
   * /
  public static const PREVIEW_URL:String = "previewUrl";

  /**
   * @eventType path
   * @see Content#getPath()
   * /
  public static const PATH:String = "path";

  /**
   * @eventType creationDate
   * @see Content#getCreationDate()
   * /
  public static const CREATION_DATE:String = 'creationDate';

  /**
   * @eventType modificationDate
   * @see Content#getModificationDate()
   * /
  public static const MODIFICATION_DATE:String = 'modificationDate';

  /**
   * @eventType modifier
   * /
  public static const MODIFIER:String = 'modifier';

  /**
   * @eventType checkedOut
   * @see Content#isCheckedOut()
   * /
  public static const CHECKED_OUT:String = 'checkedOut';

  /**
   * @eventType checkedIn
   * @see Content#isCheckedIn()
   * /
  public static const CHECKED_IN:String = 'checkedIn';

  /**
   * @eventType checkedOutByCurrentSession
   * @see Content#isCheckedOutByCurrentSession()
   * /
  public static const CHECKED_OUT_BY_CURRENT_SESSION:String = 'checkedOutByCurrentSession';

  /**
   * @eventType checkedOutByOther
   * @see Content#isCheckedOutByOther()
   * /
  public static const CHECKED_OUT_BY_OTHER:String = 'checkedOutByOther';
  
  /**
   * @eventType published
   * @see Content#isPublished()
   * /
  public static const PUBLISHED:String = 'published';

  /**
   * @eventType lifecycleStatus
   * @see Content#getLifecycleStatus()
   * /
  public static const LIFECYCLE_STATUS:String = 'lifecycleStatus';

  /**
   * @eventType inProduction
   * @see Content#isInProduction()
   * /
  public static const IS_IN_PRODUCTION:String = 'inProduction';

  /**
   * @see Content#isRoot()
   * /
  public static const IS_ROOT:String = "isRoot";

  /**
   * @see Content#isDocument()
   * /
  public static const IS_DOCUMENT:String = "isDocument";

  /**
   * @see Content#isFolder()
   * /
  public static const IS_FOLDER:String = "isFolder";

  /**
   * @see Content#getProperties()
   * /
  public static const PROPERTIES:String = 'properties';

  /**
   * @see Content#getCreator()
   * /
  public static const CREATOR:String = 'creator';

  /**
   * @see Content#getVersionHistory()
   * /
  public static const VERSION_HISTORY:String = 'versionHistory';

  /**
   * @see Content#getLatestApprovedVersion()
   * /
  public static const LATEST_APPROVED_VERSION:String = 'latestApprovedVersion';

  /**
   * @see Content#getLatestPublishedVersion()
   * /
  public static const LATEST_PUBLISHED_VERSION:String = 'latestPublishedVersion';

  /**
   * @see Content#getCheckedOutVersion()
   * /
  public static const CHECKED_OUT_VERSION:String = 'checkedOutVersion';

  /**
   * @see Content#getCheckedInVersion()
   * /
  public static const CHECKED_IN_VERSION:String = 'checkedInVersion';

  /**
   * @see Content#getIssues()
   * /
  public static const ISSUES:String = 'issues';
  /**
   * @private
   * This class only defines constants.
   * /
  public*/ function ContentPropertyNames$() {
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: ContentPropertyNames$,
      statics: {
        TYPE: 'type',
        IS_DELETED: 'deleted',
        EDITOR: 'editor',
        NAME: 'name',
        PARENT: 'parent',
        LAST_PARENT: 'lastParent',
        CHILDREN: 'children',
        CHILDREN_BY_NAME: 'childrenByName',
        CHILD_DOCUMENTS: 'childDocuments',
        SUB_FOLDERS: 'subFolders',
        ID: "id",
        PREVIEW_URL: "previewUrl",
        PATH: "path",
        CREATION_DATE: 'creationDate',
        MODIFICATION_DATE: 'modificationDate',
        MODIFIER: 'modifier',
        CHECKED_OUT: 'checkedOut',
        CHECKED_IN: 'checkedIn',
        CHECKED_OUT_BY_CURRENT_SESSION: 'checkedOutByCurrentSession',
        CHECKED_OUT_BY_OTHER: 'checkedOutByOther',
        PUBLISHED: 'published',
        LIFECYCLE_STATUS: 'lifecycleStatus',
        IS_IN_PRODUCTION: 'inProduction',
        IS_ROOT: "isRoot",
        IS_DOCUMENT: "isDocument",
        IS_FOLDER: "isFolder",
        PROPERTIES: 'properties',
        CREATOR: 'creator',
        VERSION_HISTORY: 'versionHistory',
        LATEST_APPROVED_VERSION: 'latestApprovedVersion',
        LATEST_PUBLISHED_VERSION: 'latestPublishedVersion',
        CHECKED_OUT_VERSION: 'checkedOutVersion',
        CHECKED_IN_VERSION: 'checkedInVersion',
        ISSUES: 'issues'
      }
    };
});
