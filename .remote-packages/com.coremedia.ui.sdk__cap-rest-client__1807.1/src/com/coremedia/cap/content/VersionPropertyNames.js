Ext.define("com.coremedia.cap.content.VersionPropertyNames", function(VersionPropertyNames) {/*package com.coremedia.cap.content {

/**
 * VersionPropertyNames is a container for static identifiers of Version meta property names.
 * Use these if you want to attach listeners to Version properties or access them in a generic way.
 * The property constants refer to the corresponding properties in the Version interface.
 *
 * @see Version
 * @see com.coremedia.ui.data.Bean#addPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#removePropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#hasPropertyChangeListener()
 * @see com.coremedia.ui.data.Bean#get()
 * @see com.coremedia.ui.data.Bean#set()
 * /
[PublicApi]
public class VersionPropertyNames {

  /**
   * @eventType type
   * @see Version#getType()
   * /
  public static const TYPE:String = 'type';

  /**
   * @eventType properties
   * @see Version#getProperties()
   * /
  public static const PROPERTIES:String = 'properties';

  /**
   * @eventType editionDate
   * @see Version#getEditionDate()
   * /
  public static const EDITION_DATE:String = 'editionDate';

  /**
   * @eventType editor
   * @see Version#getEditor()
   * /
  public static const EDITOR:String = 'editor';

  /**
   * @eventType approvalDate
   * @see Version#getApprovalDate()
   * /
  public static const APPROVAL_DATE:String = 'approvalDate';

  /**
   * @eventType approver
   * @see Version#getApprover()
   * /
  public static const APPROVER:String = 'approver';

  /**
   * @eventType publicationDate
   * @see Version#getPublicationDate()
   * /
  public static const PUBLICATION_DATE:String = 'publicationDate';

  /**
   * @eventType publisher
   * @see Version#getPublisher()
   * /
  public static const PUBLISHER:String = 'publisher';

  /**
   * @eventType versionNumber
   * @see Version#getVersionNumber()
   * /
  public static const VERSION_NUMBER:String = 'versionNumber';

  /**
   * @eventType containingContent
   * @see Version#getContainingContent()
   * /
  public static const CONTAINING_CONTENT:String = 'containingContent';

  /**
   * @eventType latestApprovedVersion
   * @see Version#isLatestApprovedVersion()
   * /
  public static const LATEST_APPROVED_VERSION:String = 'latestApprovedVersion';

  /**
   * @eventType latestPublishedVersion
   * @see Version#isLatestPublishedVersion()
   * /
  public static const LATEST_PUBLISHED_VERSION:String = 'latestPublishedVersion';

  /**
   * @eventType latestVersion
   * @see Version#isLatestVersion()
   * /
  public static const LATEST_VERSION:String = 'latestVersion';

  /**
   * @private
   * This class only defines constants.
   * /
  public*/ function VersionPropertyNames$() {
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      metadata: {"": ["PublicApi"]},
      constructor: VersionPropertyNames$,
      statics: {
        TYPE: 'type',
        PROPERTIES: 'properties',
        EDITION_DATE: 'editionDate',
        EDITOR: 'editor',
        APPROVAL_DATE: 'approvalDate',
        APPROVER: 'approver',
        PUBLICATION_DATE: 'publicationDate',
        PUBLISHER: 'publisher',
        VERSION_NUMBER: 'versionNumber',
        CONTAINING_CONTENT: 'containingContent',
        LATEST_APPROVED_VERSION: 'latestApprovedVersion',
        LATEST_PUBLISHED_VERSION: 'latestPublishedVersion',
        LATEST_VERSION: 'latestVersion'
      }
    };
});
