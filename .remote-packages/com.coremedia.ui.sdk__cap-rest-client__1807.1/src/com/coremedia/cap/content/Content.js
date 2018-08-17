Ext.define("com.coremedia.cap.content.Content", function(Content) {/*package com.coremedia.cap.content {

import com.coremedia.cap.common.CapPropertyDescriptor;
import com.coremedia.cap.user.User;
import com.coremedia.ui.data.Previewable;
import com.coremedia.ui.data.validation.Issues;

/**
 * Fires when the deleted state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.IS_DELETED
 * @see Content#isDeleted()
 * /
[Event(name="deleted", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the editor of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.EDITOR
 * @see Content#getEditor()
 * /
[Event(name="editor", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the name of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.NAME
 * @see Content#rename()
 * @see Content#getName()
 * /
[Event(name="name", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the parent folder of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.PARENT
 * @see Content#getParent()
 * /
[Event(name="parent", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the children property of this Folder becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHILDREN
 * @see Content#getChildren()
 * /
[Event(name="children", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the childrenByName property of this Folder becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHILDREN_BY_NAME
 * @see Content#getChildrenByName()
 * /
[Event(name="childrenByName", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the childDocuments property of this Folder becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHILD_DOCUMENTS
 * @see Content#getChildDocuments()
 * /
[Event(name="childDocuments", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the subFolders property of this Folder becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.SUB_FOLDERS
 * @see Content#getSubFolders()
 * /
[Event(name="subFolders", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the path of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.PATH
 * @see Content#getPath()
 * /
[Event(name="path", type="com.coremedia.ui.data.PropertyChangeEvent")]


/**
 * Fires when the creator of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CREATOR
 * @see Content#getCreator()
 * /
[Event(name="creator", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the creationDate of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CREATION_DATE
 * @see Content#getCreationDate()
 * /
[Event(name="creationDate", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the modificationDate of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.MODIFICATION_DATE
 * @see Content#getModificationDate()
 * /
[Event(name="modificationDate", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the checkedOut state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT
 * @see Content#isCheckedOut()
 * /
[Event(name="checkedOut", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the checkedIn state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHECKED_IN
 * @see Content#isCheckedIn()
 * /
[Event(name="checkedIn", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the checkedOutByCurrentSession state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_CURRENT_SESSION
 * @see Content#isCheckedOutByCurrentSession()
 * /
[Event(name="checkedOutByCurrentSession", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the checkedOutByOther state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.CHECKED_OUT_BY_OTHER
 * @see Content#isCheckedOutByOther()
 * /
[Event(name="checkedOutByOther", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the published state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.PUBLISHED
 * @see Content#isPublished()
 * /
[Event(name="published", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the lifecycleStatus state of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.LIFECYCLE_STATUS
 * @see Content#getLifecycleStatus()
 * /
[Event(name="lifecycleStatus", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the inProduction state of this Content becomes available or changes.
 * <p>Note: The semantics of the isInProduction method changed from Studio 1.3 to Studio 2.0!</p>
 * @eventType com.coremedia.cap.content.ContentPropertyNames.IS_IN_PRODUCTION
 * @see Content#isInProduction()
 * /
[Event(name="inProduction", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the version history of this Content becomes available.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.VERSION_HISTORY
 * @see Content#getVersionHistory()
 * /
[Event(name="versionHistory", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the latest approved version of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.LATEST_APPROVED_VERSION
 * @see Content#getLatestApprovedVersion()
 * /
[Event(name="latestApprovedVersion", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * Fires when the latest published version of this Content becomes available or changes.
 * @eventType com.coremedia.cap.content.ContentPropertyNames.LATEST_PUBLISHED_VERSION
 * @see Content#getLatestPublishedVersion()
 * /
[Event(name="latestPublishedVersion", type="com.coremedia.ui.data.PropertyChangeEvent")]

/**
 * A content is an entity in the <code>ContentRepository</code>.
 *
 * <p>Modeled after the composite pattern, content provides one
 * interface for all different types (<code>ContentType</code>) of
 * content.</p>
 *
 * <p>As content describes documents (<code>isDocument()</code>) and
 * folders (<code>isFolder()</code>) with one interface, the following
 * schema is used for methods, that are not applicable: <ul>
 *   <li>getter return empty collections or null (children and version history)</li>
 *   <li>modification operations throw an appropriate exception</li>
 * </ul></p>
 *
 * @see ContentRepository
 * @see ContentType
 * @see #isDocument()
 * @see #isFolder()
 * @see com.coremedia.cap.content.publication.PublicationService
 * /
[PublicApi]
public interface Content extends ContentObject, Previewable {

  /**
   * Return the service path of this Content's URI, which is the URI (getUri()) relativized to the
   * remote service URI (coremediaRemoteServiceUri).
   * The path is shorter than the absolute URI but still unique, thus more appropriate to be used as a key.
   *
   * <p>The URI path may be externalized and used to retrieve
   * the identified Content from the <code>ContentRepository</code>.
   * Do not make any assumptions about its structure. It might
   * change in future versions, so clients should not rely on it.</p>
   *
   * @return the URI path of this Content
   *
   * @see ContentRepository#getContent()
   * /
  //override function getUriPath():String;

  /**
   * Return whether this content is the root folder.
   *
   * <p>The root has an empty String as its name.</p>
   *
   * @return true, if this content is the root folder.
   *
   * @see ContentPropertyNames#IS_ROOT
   * @see ContentRepository#getRoot()
   * @see #getName()
   * /
  function isRoot():Boolean;

  /**
   * Returns whether this content is a folder (which means that it is not a document).
   *
   * @return true, if this content is a folder
   *
   * @see ContentPropertyNames#IS_FOLDER
   * @see ContentRepository#getFolderContentType()
   * @see #isDocument()
   * /
  function isFolder():Boolean;

  /**
   * Returns whether this content is a document (which means that it is not a folder).
   *
   * @return true, if this content is a document
   *
   * @see ContentPropertyNames#IS_DOCUMENT
   * @see ContentRepository#getDocumentContentType()
   * @see #isFolder()
   * /
  function isDocument():Boolean;

  /**
   * Returns this Content's name in its parent folder.
   *
   * <p>For the root folder, an empty String is returned.</p>
   *
   * @return this Content's name in its parent folder
   *
   * @see ContentPropertyNames#NAME
   * @see #isRoot()
   * @see #getParent()
   * /
  function getName():String;

  /**
   * Returns this Content's path in the repository. The path
   * elements are separated by <code>/</code> slashes. The last path
   * element is the name of this content. Returns <code>null</code> if
   * this content is deleted.
   *
   * <p>For the root folder, a single
   * <code>/</code> slash is returned. For other contents,
   * a slash followed by the relative path from the root folder
   * is returned.</p>
   *
   * <p>Note: The path property is a computed property.
   * It remains undefined until the content and all its parents
   * are loaded. Querying the path for the first time triggers the
   * eventual loading of all parents.</p>
   *
   * <p>The easiest way of retrieving the actual path value consists of
   * defining a property path expression and loading the value of the
   * expression:</p>
   * <pre>
   * ValueExpressionFactory.create(ContentPropertyNames.PATH, content).
   *   loadValue(function(path:String):void {...});
   * </pre>
   *
   * @return this Content's path in the repository, or
   * <code>null</code> if this content is deleted. The path
   * elements are separated by <code>/</code> slashes
   *
   * @see ContentPropertyNames#PATH
   * @see #isDeleted()
   * @see #isRoot()
   * /
  function getPath():String;

  /**
   * <p>
   * Returns all documents that refer to this content.
   * </p>
   * <p>
   * This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.
   * </p>
   * <p>
   * No property change event is sent when the referrers of a content change.
   * </p>
   *
   * @return all referring documents
   * /
  function getReferrers():Array;

  /**
   * <p>
   * Returns all documents that are instance of the given content type
   * and that refer to this content in the property value with the given property descriptor
   * </p>
   * <p>
   * This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.
   * </p>
   * <p>
   * No property change event is sent when the referrers of a content change.
   * </p>
   *
   * @param contentType the content type
   * @param descriptor the descriptor
   * @return all documents referring through the given property
   * /
  function getReferrersWithDescriptor(contentType:ContentType, descriptor:CapPropertyDescriptor):Array;

  /**
   * <p>
   * Returns all documents that are instance of the content type with the given name
   * and that refer to this content in the property value with the given property descriptor name.
   * A property with the given name must be declared in the given type.
   * </p>
   * <p>
   * This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.
   * </p>
   * <p>
   * No property change event is sent when the referrers of a content change.
   * </p>
   *
   * @param contentTypeName the name of the content type
   * @param descriptorName the name of the descriptor
   * @param callback an optional callback method the result is passed to
   * @return all documents referring through the given property or undefined if the callback function is not null
   * /
  function getReferrersWithNamedDescriptor(contentTypeName:String, descriptorName:String, callback:Function = null):Array;

  /**
   * Renames this Content to the given name.
   * Since this is an asynchronous command, a callback function can be handed in that is called when the
   * command has finished.
   * This is the same as
   * <code>
   *   set(ContentPropertyNames.NAME, "newName");
   *   flush(callback);
   * </code>
   *
   * <p>This operation removes a (Content) place approval.</p>
   *
   * <p>requires: <ul>
   *   <li><code>getParent().getChild(newName) == null</code>
   *       -- "there must not be a child with that name in the current folder."</li>
   *   <li><code>!isRoot()</code> -- "cannot rename root folder"</li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li><code>getName().equals(newName)</code></li>
   * </ul></p>
   *
   * @param name the new name for this Content
   * @param callback the function to call when the rename request returns from the server, parameter signature
   *   see flush call of RemoteBean
   * @see com.coremedia.ui.data.RemoteBean#flush()
   * @see #getParent()
   * @see #getChild()
   * @see #isRoot()
   * @see #getName()
   * /
  function rename(name:String, callback:Function = null):void;

  /**
   * Moves this Content to the given target folder.
   * Since this is an asynchronous command, a callback function can be handed in that is called when the
   * command has finished.
   * This is the same as
   * <code>
   *   set(ContentPropertyNames.PARENT, target);
   *   flush(callback);
   * </code>
   *
   * <p>This operation removes a (Content) place approval.</p>
   *
   * <p>requires: <ul>
   *   <li><code>target.isFolder()</code></li>
   *   <li><code>target.getChild(getName()) == null</code>
   *       -- "there must not be a child with that name in the given folder."</li>
   *   <li><code>!isRoot()</code> -- "cannot move root folder"</li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li><code>getParent() == target</code></li>
   *   <li><code>target.getChild(getName()) == this</code></li>
   * </ul></p>
   *
   * @param target the target folder
   * @param callback the function to call when the move request returns from the server, parameter signature
   *   see flush call of RemoteBean
   * @see com.coremedia.ui.data.RemoteBean#flush()
   * @see #getParent()
   * @see #getChild()
   * @see #isRoot()
   * @see #getName()
   * /
  function moveTo(target:Content, callback:Function = null):void;

  /**
   * Copies this content to another parent folder.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>CopyResult</code>
   * object as its only argument. Result item codes are taken
   * from the constants of <code>CopyResultCode</code>.</p>
   *
   * @param target the target folder
   * @param callback the function to call when the move request returns from the server, parameter signature
   *
   * @see com.coremedia.cap.content.results.CopyResult
   * @see com.coremedia.cap.content.results.CopyResultCodes
   * /
  function copyTo(target:Content, callback:Function = null):void;

  /**
   * Returns the user who created this document.
   *
   * @return User the user who created this document
   *
   * @see ContentPropertyNames#CREATOR
   * @see User
   * /
  function getCreator():User;

  /**
   * Returns the date on which this Content was created.
   *
   * @return the date on which this Content was created
   *
   * @see ContentPropertyNames#CREATION_DATE
   * /
  function getCreationDate():Date;

  /**
   * Returns the date on which this Content was last modified.
   *
   * @return the date on which this Content was last modified
   *
   * @see ContentPropertyNames#MODIFICATION_DATE
   * /
  function getModificationDate():Date;

  /**
   * Returns whether this document is checked out.
   *
   * <p>Folders are not checked out.</p>
   *
   * @return true, if this document is checked out
   *
   * @see ContentPropertyNames#CHECKED_OUT
   * /
  function isCheckedOut():Boolean;

  /**
   * Returns whether this document is checked in
   * (that is, it is currently write protected and
   * its properties are equal to those of its checked-in version).
   *
   * <p>Folders are not checked in.</p>
   *
   * @return true, if this document is checked in, otherwise false
   *
   * @see ContentPropertyNames#CHECKED_IN
   * @see #isCheckedOut()
   * /
  function isCheckedIn():Boolean;

  /**
   * Returns whether this Content is published. A Content is considered published
   * even if a newer version exists that is not published.
   *
   * @return true, if this document is published
   *
   * @see ContentPropertyNames#PUBLISHED
   * /
  function isPublished():Boolean;

  /**
   * Returns whether this content is in production, that is, neither deleted nor destroyed.
   * <p>Note: The semantics of this method changed from Studio 1.3 to Studio 2.0!</p>
   *
   * @return true, if this content is in production
   *
   * @see ContentPropertyNames#IS_IN_PRODUCTION
   * @see #isDeleted()
   * @see #isDestroyed()
   * /
  function isInProduction():Boolean;

  /**
   * Returns whether this content is deleted (is in the recycle bin).
   *
   * <p>Deletion must not be confused with destruction: A deleted resource can be
   * restored, while destruction is irreversible.</p>
   *
   * @return true, if this content is deleted (is in the recycle bin)
   *
   * @see ContentPropertyNames#IS_DELETED
   * @see #isDestroyed()
   * /
  function isDeleted():Boolean;

  /**
   * Return the lifecycle status of this content.
   * This can be any of the states defined by the constants in class <code>LifecycleStatus</code>.
   * @return the lifecycle status of this content.
   *
   * @see ContentPropertyNames#LIFECYCLE_STATUS
   * @see LifecycleStatus
   * @see LifecycleStatus#IN_PRODUCTION
   * @see LifecycleStatus#APPROVED
   * @see LifecycleStatus#PUBLISHED
   * @see LifecycleStatus#DELETED
   * /
  function getLifecycleStatus():String;

  /**
   * Returns the folder this content is in.
   * Returns null, if this is the root content or a deleted content.
   *
   * @return the folder this content is in, or null, if this is the root content or a deleted content
   *
   * @see ContentPropertyNames#PARENT
   * @see #isRoot()
   * @see #isDeleted()
   * /
  function getParent():Content;

  /**
   * Returns the last folder this content was in before it was deleted.
   * Returns null, if this content is not deleted.
   *
   * @return the last folder this content was in before it was deleted, or null, if this is not a deleted content
   *
   * @see ContentPropertyNames#PARENT
   * @see #isRoot()
   * @see #isDeleted()
   * /
  function getLastParent():Content;

  /**
   * Returns the user currently editing this document,
   * if this document is checked out, else answer null.
   *
   * @return User the user currently editing this document, if this document is checked out, else answer null.
   *
   * @see ContentPropertyNames#EDITOR
   * @see User
   * @see #isCheckedOut()
   * /
  function getEditor():User;

  /**
   * Return a list of child contents, folders first.
   *
   * @see ContentPropertyNames#CHILDREN
   * /
  function getChildren():Array/* Vector.<Content> * /;

  /**
   * Return a mapping of the name of child contents to the child contents themselves.
   *
   * @see ContentPropertyNames#CHILDREN_BY_NAME
   * /
  function getChildrenByName():Object;

  /**
   * Return list of child documents, sorted by name (case insensitive)
   *
   * @see ContentPropertyNames#CHILD_DOCUMENTS
   * /
  function getChildDocuments():Array/* Vector.<Content> * /;

  /**
   * Return list of child folders, sorted by name (case insensitive)
   *
   * @see ContentPropertyNames#SUB_FOLDERS
   * /
  function getSubFolders():Array/* Vector.<Content> * /;

  /**
   * Returns whether this document is checked out by the current session.
   *
   * <p>Returns true, if
   * <ul>
   *   <li><code>isCheckedOut()</code> and</li>
   *   <li><code>getEditor() === session.getUser()</code></li>
   * </ul></p>
   *
   * @return true, if this document is checked out by the current session
   *
   * @see ContentPropertyNames#CHECKED_OUT_BY_CURRENT_SESSION
   * @see #isCheckedOut()
   * @see #getEditor()
   * @see com.coremedia.cms.editor.sdk.IEditorContext#getSession
   * @see com.coremedia.cap.common.CapSession#getUser()
   * /
  function isCheckedOutByCurrentSession():Boolean;

  /**
   * Returns whether this document is checked out by another user.
   *
   * <p>Returns true, if
   * <ul>
   *   <li><code>isCheckedOut()</code> and</li>
   *   <li><code>getEditor() !== session.getUser()</code></li>
   * </ul></p>
   *
   * @return true, if this document is checked out by another user
   *
   * @see ContentPropertyNames#CHECKED_OUT_BY_OTHER
   * @see #isCheckedOut()
   * @see #getEditor()
   * @see com.coremedia.cap.common.CapSession#getUser()
   * /
  function isCheckedOutByOther():Boolean;

  /**
   * Returns the Content found by looking up the given path
   * relative to this Content, or <code>null</code> if no such content exists.
   *
   * <p>The path elements are separated by slashes (<code>'/'</code>).
   * If the path starts with a slash, it is evaluated starting from the
   * root folder, ignoring the object on which this method is invoked.</p>
   *
   * <p>Relative lookups are supported in both directions:</p>
   * <ul>
   *   <li>towards the children by specifying the name of a
   *       child of the current content as a path element;
   *      for documents this never delivers any content, as they have no children</li>
   *   <li>towards the root folder by specifying two dots (<code>".."</code>)
   *       as a path element, representing the current content's parent</li>.
   * </ul>
   *
   * <p>If a single dot (<code>"."</code>) or the empty string
   * is specified as a path element, that path
   * component is ignored.</p>
   *
   * @param path the path of the Content to return
   * @param callback an optional function that is called when the result is available, receiving the
   *   Content found by a path lookup starting from this Content, or null and the requested absolute path
   *   if no such child content exists.
   *   Signature: <code>function(child:Content, absolutePath:String = null):void</code>
   * @return If a callback function is given, the immediate return value is <code>undefined</code>.
   *   If no callback is given, the Content at the given path or null is returned if the result can be
   *   determined synchronously, otherwise <code>undefined</code> is returned. This allows to call
   *   <code>getChild()</code> in a function value expression.
   *
   * @see ContentRepository#getChild()
   * /
  function getChild(path:String, callback:Function = null):Content;

  /**
   * Returns the version history of this content.
   *
   * @return the version history
   * /
  function getVersionHistory():VersionHistory;

  /**
   * Return the latest version of this content that is approved.
   * Returns null, if there is no approved version or
   * this is a folder.
   *
   * @return the latest version of the given content, that is approved, or null
   * /
  function getLatestApprovedVersion():Version;

  /**
   * Return the latest version of this content that is published.
   * Returns null, if there is no published version or
   * this is a folder.
   *
   * @return the latest version of the given content, that is published, or null
   * /
  function getLatestPublishedVersion():Version;

  /**
   * Return the version that this content was checked out from.
   * Returns null if there is no checked-out version or if this is a folder.
   *
   * @return the checked out version of the given content, or null
   * /
  function getCheckedOutVersion():Version;

  /**
   * Returns the version that this content is currently checked in as.
   * Returns null if the content is checked out or if
   * this is a folder.
   *
   * @return the checked in version of the given content, or null
   * /
  function getCheckedInVersion():Version;

  /**
   * Return the issues that affect this content.
   * @return the issues
   * /
  function getIssues():Issues;

  /**
   * Unlock this content and store the current property values.
   * Then allow modifications of this content by other users again.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>CheckInResult</code>
   * object as its only argument.</p>
   *
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.CheckInResult
   * /
  function checkIn(callback:Function = null):void;

  /**
   * Lock this content and create a working copy to
   * modify this content's property values exclusively.
   *
   * <p>Folders are not versioned, and therefore cannot be checked out.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>OperationResult</code>
   * object as its only argument.</p>
   *
   * @param callback the callback
   *
   * @see com.coremedia.ui.data.OperationResult
   * /
  function checkOut(callback:Function = null):void;

  /**
   * Revert the property values to those of the previously checked-out version,
   * and make the content checked in again to that version.
   * Any changes to the property values since the content was checked out are lost.
   * The content is not locked any more, so that other users can check it out.
   * The working version is destroyed.
   *
   * <p>Folders are not versioned, and therefore cannot be reverted.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>RevertResult</code>
   * object as its only argument.</p>
   *
   * <p>requires: <ul>
   *   <li><code>!isDeleted()</code></li>
   *   <li><code>isCheckedOut()</code></li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li><code>isCheckedIn()</code></li>
   * </ul></p>
   *
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.RevertResult
   * /
  function revert(callback:Function = null):void;

  /**
   * Deletes this content.
   *
   * <p>A content can only be deleted, if it is not published.</p>
   *
   * <p>If this content is a folder, this also deletes all transitively
   * contained children that are not published.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>DeleteResult</code>
   * object as its only argument.</p>
   *
   * <p>requires: <ul>
   *   <li><code>isInProduction()</code></li>
   *   <li><code>!isPublished()</code></li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li><code>isDeleted()</code></li>
   *   <li><code>getParent() === null</code></li>
   * </ul></p>
   *
   * <p>This method is not named <code>delete</code>, because <code>delete</code> is a reserved word in ActionScript.</p>
   *
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.DeleteResult
   * /
  function doDelete(callback:Function = null):void;

  /**
   * Undeletes this content to the last folder it was in before deletion.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>BulkOperationResult</code>
   * object as its only argument.</p>
   *
   * @param callback the callback
   *
   * @see BulkOperationResult
   * /
  function undelete(callback:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: [
        "com.coremedia.cap.content.ContentObject",
        "com.coremedia.ui.data.Previewable"
      ],
      requires: [
        "com.coremedia.cap.content.ContentObject",
        "com.coremedia.ui.data.Previewable"
      ]
    };
});
