Ext.define("com.coremedia.cap.content.ContentRepository", function(ContentRepository) {/*package com.coremedia.cap.content {

import com.coremedia.cap.content.authorization.AccessControl;
import com.coremedia.cap.content.publication.PublicationService;
import com.coremedia.cap.content.search.SearchService;

/**
 * The content repository provides access to content types
 * and content. Use the CapConnection to retrieve
 * a ContentRepository object.
 *
 * @see com.coremedia.cap.content.ContentType
 * @see com.coremedia.cap.content.Content
 * @see com.coremedia.cap.common.CapConnection
 * /
[PublicApi]
public interface ContentRepository {

  /**
   * Return this repository's publication service. The publication service offers functionality
   * to approve and publish content and to check the approval and publication state.
   *
   * @return the publication service
   * /
  function getPublicationService():PublicationService;

  /**
   * Return this repository's access control service. The access control service offers functionality
   * to check which operations are allowed on content.
   *
   * @return the access control service
   * /
  function getAccessControl(): AccessControl;

  /**
   * Returns the root folder of this repository.
   *
   * @return the root folder of this repository
   *
   * @see Content#isRoot()
   * /
  function getRoot():Content;

  /**
   * Returns the home folder of this repository.
   *
   * @return the home folder of this repository
   * /
  function getBaseHomeFolder():Content;

  /**
   * Return the content content type, the root of all content types.
   *
   * @return the content content type, the root of all content types
   * /
  function getContentContentType():ContentType;

  /**
   * Return the document content type, the parent of all document content types.
   *
   * @return the document content type, the parent of all document content types
   * /
  function getDocumentContentType():ContentType;

  /**
   * Return the folder content type.
   *
   * @return the folder content type
   * /
  function getFolderContentType():ContentType;

  /**
   * Returns all <code>ContentType</code>s.
   *
   * <p>The returned array is a read-only snapshot of the current
   * state. The returned collection may not be modified.</p>
   *
   * @return an array of all <code>ContentType</code>s
   *
   * @see ContentType
   * /
  function getContentTypes():Array/* Vector.<ContentType> * /;

  /**
   * Returns all <code>ContentType</code>s that are subtypes of the document content type.
   *
   * <p>The returned array is a read-only snapshot of the current
   * state. The returned collection may not be modified.</p>
   *
   * @return an array of all <code>ContentType</code>s that are subtypes of the document content type
   *
   * @see ContentType
   * @see #getDocumentContentType()
   * /
  function getDocumentTypes():Array/* Vector.<ContentType> * /;

  /**
   * Returns all <code>ContentType</code>s that are subtypes of the document content type and are not abstract.
   *
   * <p>The returned array is a read-only snapshot of the current
   * state. The returned collection may not be modified.</p>
   *
   * @return an array of all <code>ContentType</code>s that are subtypes of the document content type
   * and are not abstract
   *
   * @see ContentType
   * @see #getDocumentContentType()
   * @see ContentType#isAbstract()
   * /
  function getConcreteDocumentTypes():Array/* Vector.<ContentType> * /;

  /**
   * Returns an Object mapping of all <code>ContentType</code>s, indexed by
   * their name.
   *
   * <p>The returned Object is a read-only snapshot of the current
   * state. The returned Object may not be modified.</p>
   *
   * @return an Object mapping of all <code>ContentType</code>s, indexed by their name
   *
   * @see ContentType
   * @see ContentType#getName()
   * @see #getContentType(String)
   * /
  function getContentTypesByName():Object;

  /**
   * Returns the <code>ContentType</code> with the given name.
   * Returns null, if no such content type exists.
   *
   * @param name the <code>name</code> of the <code>ContentType</code> to return
   * @return the <code>ContentType</code> with the given uriPath or name, or null, if
   *         no such content type exists
   *
   * @see ContentType
   * @see ContentType#getName()
   * @see #getContentTypesByName()
   * /
  function getContentType(name:String):ContentType;

  /**
   * Returns the Content with the given URI path. Returns null,
   * if the URI path does not conform to the internal Content URI path pattern.
   *
   * @param uriPath the uriPath of the Content to return
   * @return the Content with the given URI path, or null,
   *         if the URI path does not conform to the internal Content URI path pattern.
   *
   * @see Content
   * @see Content#getUriPath()
   * /
  function getContent(uriPath:String):Content;

  /**
   * Returns the <code>Content</code> found by a path lookup from the
   * given folder, or null if no such child content exists.
   *
   * <p>The path elements are separated by <code>/</code> slashes.</p>
   *
   * <p>Relative lookups are supported in both directions:</p>
   * <ul>
   *   <li>towards the children by specifying the path beginning
   *       with the current content; for documents this never
   *       delivers any content, as they have no children</li>
   *   <li>towards the root folder by specifying the <code>..</code>
   *       (two dots) for a content's parent</li>
   * </ul>
   *
   * <p>If <code>.</code> (one dot) or the empty string
   * is specified as a component of the path, that path
   * component is ignored.</p>
   *
   * @param path the path of the <code>Content</code> to return
   * @param callback an optional function that is called when the result is available, receiving the
   *   <code>Content</code> found by a path lookup starting from the root folder, or null and the requested absolute path
   *   if no such child content exists.
   *   Signature: <code>function(child:Content, absolutePath:String = null, error:RemoteError = null):void</code>
   * @param folder the folder where a relative path starts; defaults to the root folder
   * @return If a callback function is given, the immediate return value is <code>undefined</code>.
   *   If no callback is given, the Content at the given path or null is returned if the result can be
   *   determined synchronously, otherwise <code>undefined</code> is returned. This allows to call
   *   <code>getChild()</code> in a function value expression.
   *
   * @see Content#getChild()
   * @see com.coremedia.ui.data.error.RemoteError
   * /
  function getChild(path:String = "/", callback:Function = null, folder:Content = null):Content;

  /**
   * Return the SearchService of this content repository.
   * @return the SearchService of this content repository
   * /
  function getSearchService():SearchService;

  /**
   * Copy a collection of Content objects recursively to a target.
   * Folders are copied recursively, that is the copy of a folder
   * will contain copies of the original folder's children. Checked-out
   * documents are copied to checked-out documents, checked-in documents
   * are copied to checked-in documents.
   * <p>
   * Links between copied documents are updated automatically.
   * Assume that a content contains link lists or rich text properties with
   * internal links that link to other content objects that are to be copied.
   * In the copy of the content, these links will point to the <em>copies</em>
   * of the linked content objects. If, however, there are links to other
   * content objects, such links will be copied directly.
   * </p>
   * <p>
   * When a content object is both directly contained in the sources
   * collection and indirectly contained as the transitive child of
   * another folder in the collection, it is only copied once. It
   * is ignored as a child, so that copied folders may contain less
   * content objects than the source folders. Note that it is impossible
   * to copy a content object twice, because the target of copied
   * links might become ambiguous.
   * </p>
   * <p>
   * When there are no read rights for a content, one of two cases applies:
   * If the content is direct member of the source collection, an error
   * is reported. If the content is only an indirect transitive member
   * of a source content, the content is silently ignored.
   * </p>
   * <p>
   * After the method is completed, the callback function is called.
   * The callback function receives a <code>CopyResult</code>
   * object as its only argument. Result item codes are taken
   * from the constants of <code>CopyResultCode</code>.
   * </p>
   *
   * @param sources the content objects that should be copied
   * @param target the target folder below which the copies are created
   * @param callback the callback function that receives the copy result
   *
   * @see com.coremedia.cap.content.results.CopyResult
   * @see com.coremedia.cap.content.results.CopyResultCodes
   * /
  function copyRecursivelyTo(sources:Array, target:Content, callback:Function = null):void;

  /**
   * Moves the given contents to the given target folder.
   * <p>
   *   This operation removes a (Content) place approval.
   * </p>
   * <p>
   * After the method is completed, the callback function is called.
   * The callback function receives a <code>BulkOperationResult</code>
   * object as its only argument. Result item codes are taken
   * from the constants of <code>MoveResultCodes</code>.
   * </p>
   *
   * @param contents the content objects that should be moved
   * @param target the target folder to which the content should be moved
   * @param callback the callback function that receives the bulk result
   *
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * @see com.coremedia.cap.content.results.MoveResultCodes
   * /
  function moveTo(contents:Array, target:Content, callback:Function = null):void;

  /**
   * Unlock the given contents and store the current property values.
   * Then allow modifications of the contents by other users again.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>CheckInResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to be checked-in
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.CheckInResult
   * /
  function checkInAll(contents:Array, callback:Function = null):void;

  /**
   * Revert the property values to those of the previously checked-out versions
   * of all of the given contents
   * and make the contents checked in again to those versions.
   * Any changes to the property values since the contents were checked out are lost.
   * The contents are not locked any more, so that other users can check them out.
   * The working versions are destroyed.
   *
   * <p>Folders are not versioned, and therefore cannot be reverted.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>RevertResult</code>
   * object as its only argument.</p>
   *
   * <p>requires: <ul>
   *   <li>for all members of <code>contents</code>: <code>!isDeleted()</code></li>
   *   <li>for all members of <code>contents</code>: <code>isCheckedOut()</code></li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li>for all members of <code>contents</code>: <code>isCheckedIn()</code></li>
   * </ul></p>
   *
   * @param contents the contents to be reverted
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.RevertResult
   * /
  function revertAll(contents:Array, callback:Function = null):void;

  /**
   * Deletes the given contents.
   *
   * <p>A content can only be deleted, if it is not published.</p>
   *
   * <p>If any content is a folder, this also deletes all transitively
   * contained children that are not published.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>DeleteResult</code>
   * object as its only argument.</p>
   *
   * <p>requires: <ul>
   *   <li>for all members of <code>contents</code>: <code>isInProduction()</code></li>
   *   <li>for all members of <code>contents</code>: <code>!isPublished()</code></li>
   * </ul></p>
   * <p>ensures: <ul>
   *   <li>for all members of <code>contents</code>: <code>isDeleted()</code></li>
   *   <li>for all members of <code>contents</code>: <code>getParent() === null</code></li>
   * </ul></p>
   *
   * @param contents the contents to be deleted
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.DeleteResult
   * /
  function deleteAll(contents:Array, callback:Function = null):void;

  /**
   * Undeletes the given contents.
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>BulkOperationResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to be undeleted
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * /
  function undeleteAll(contents:Array, callback:Function = null):void;

  /**
   * Validates, if the given resource name is a valid name for the content repository
   * @param resourceName the name to be validated
   * @return <code>true</code> if the name is valid, <code>false</code> if the name is not valid.
   * /
  function isValidName(resourceName:String):Boolean;

  /**
   * Pose a ContentServer query.
   * The callback is called with a QueryResult as its single argument containing the resulting Array of contents.
   *
   * @param query the ContentServer query
   * @param callback the callback ( function(result:QueryResult):void )
   *
   * @see com.coremedia.cap.content.results.QueryResult
   * /
  function query(callback:Function, query:String):void;

  /**
   * Return whether the user approving a content version must be different from the editor. If true, this is enforced by
   * the content server.
   * /
  function useStrictWorkflow():Boolean;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
