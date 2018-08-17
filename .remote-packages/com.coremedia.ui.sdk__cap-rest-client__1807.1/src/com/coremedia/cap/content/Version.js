Ext.define("com.coremedia.cap.content.Version", function(Version) {/*package com.coremedia.cap.content {
import com.coremedia.cap.user.User;

/**
 * Fires when the editionDate of this version becomes available.
 * @eventType editionDate
 * @see Version#getEditionDate()
 * /
[Event(name="editionDate", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the editor of this version becomes available.
 * @eventType editor
 * @see Version#getEditor()
 * /
[Event(name="editor", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the latest approved version status of this version becomes available or changes.
 * @eventType latestApprovedVersion
 * @see Version#isLatestApprovedVersion()
 * /
[Event(name="latestApprovedVersion", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the latest published version status of this version becomes available or changes.
 * @eventType latestPublishedVersion
 * @see Version#isLatestPublishedVersion()
 * /
[Event(name="latestPublishedVersion", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the latest version status of this version becomes available or changes.
 * @eventType latestVersion
 * @see Version#isLatestVersion()
 * /
[Event(name="latestVersion", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * A version is part of the version history of a document.
 * @see Content
 * /

[PublicApi]
public interface Version extends ContentObject {
  /**
   * Return the date on which this version was created. At that time, the content's properties
   * were equal to those stored by the version.
   *
   * If this is a working version,
   * return the date on which the Content's properties were last saved to
   * the server.
   *
   * @return the date on which this version was created, or, if this is a working version,
   * the date on which the content's properties were last saved.
   * /
  function getEditionDate():Date;

  /**
   * Return the date on which this version was last approved,
   * or null, if it has never been approved.
   *
   * @return the date on which this version was last approved,
   *         or null, if it has never been approved
   * /
  function getApprovalDate():Date;

  /**
   * Return the date on which this version was last published,
   * or null, if it has never been published.
   *
   * @return the date on which this version was last published,
   *         or null, if it has never been published.
   * /
  function getPublicationDate():Date;

  /**
   * Return the user who created this version.
   * A version is created by checking in a content.
   *
   * If this is a working version,
   * return the Content's editor.
   *
   * @return the user who created this version
   * /
  function getEditor():User;

  /**
   * Return the user that last approved this version,
   * or null, if it has never been approved.
   *
   * @return the user that last approved this version,
   *         or null, if it has never been approved
   * /
  function getApprover():User;

  /**
   * Return the user that last published this version,
   * or null, if it has never been published.
   *
   * @return the user that last published this version,
   *         or null, if it has never been published.
   * /
  function getPublisher():User;

  /**
   * Return the numeric version number.
   *
   * @return the numeric version number
   * /
  function getVersionNumber():int;

  /**
   * Return true, if this version is the latest approved version.
   *
   * @return true, if this version is the latest approved version 
   * /
  function isLatestApprovedVersion():Boolean;

  /**
   * Return true, if this version is the latest published version.
   *
   * @return true, if this version is the latest published version
   * /
  function isLatestPublishedVersion():Boolean;

  /**
   * Return true, if this version is the latest version.
   *
   * @return true, if this version is the latest version
   * /
  function isLatestVersion():Boolean;

  /**
   * Return the content from which this version was obtained.
   *
   * @return the content from which this version was obtained
   * /
  function getContainingContent():Content;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.content.ContentObject"],
      requires: ["com.coremedia.cap.content.ContentObject"]
    };
});
