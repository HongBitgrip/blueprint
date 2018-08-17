Ext.define("com.coremedia.cms.editor.sdk.ContentTreeRelation", function(ContentTreeRelation) {/*package com.coremedia.cms.editor.sdk {
import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;
import com.coremedia.cap.content.publication.PublicationService;

/**
 * A content tree relation represents a content tree implemented with two different content types:
 * one content type representing nodes that may holding child nodes within the tree, and one
 * content type representing leafs (nodes that
 * may not hold any child nodes).
 *
 * <p>One trivial example of a content tree relation is the tree relation built into the content server, which is implemented
 * by the class RepositoryContentTreeRelation: the folder content type is _Folder, and the leaf content type is _Document.
 *
 * <p>More complex tree relations may be implemented with link list properties.
 *
 * @see RepositoryContentTreeRelation
 * /
public interface ContentTreeRelation {

  /**
   * Returns the content type representing 'folders' in this tree relation.
   *
   * @return the content type name of content representing folders
   * /
  function folderNodeType():String;

  /**
   * Returns the content type representing leafs of this tree relation
   *
   * @return the content type name of content representing leafs
   * /
  function leafNodeType():String;

  /**
   * Checks if the given content type is a folder according to this tree relation
   *
   * @return true if the given content is a folder node, undefined if something is not loaded yet, false otherwise.
   * /
  function isFolderNode(content:Content):Boolean;

  /**
   * Returns all subfolders for the given content (which must represent a folder according to this tree relation).
   *
   * @param content the folder to retrieve the subfolders for
   * /
  function getSubFolders(content:Content):Array/*(Content)* /;

  /**
   * Returns the leaf content of the given folder content
   * Child content representing folders is excluded from the result.
   * @param content the folder to retrieve the leaf content for
   * /
  function getLeafContent(content:Content):Array/*(Content)* /;

  /**
   * Returns the parent node of the given content. If the tree relation is working on "real" folders
   * the folder the document or folder is located in will be returned.
   *
   * If the tree relation is working on linked contents there may be more than one parent
   * and the tree relation has to decide which parent to return.
   *
   * @param content the content to retrieve the parent for
   * @return the parent according to the semantic of the tree relation, or null if this content has no parent,
   * or undefined if some content needs to be loaded before the parent can be computed.
   * /
  function getParent(content:Content):Content;

  /**
   * Returns the parent node s of the given content. If the tree relation is working on "real" folders
   * a singleton array containing the folder the document or folder is located in will be returned.
   *
   * May return undefined
   * If the tree relation is working on linked contents there may be more than one parent.
   *
   * @param content the content to retrieve the parents for
   * @return the parent nodes according to the semantic of the tree relation (may be empty), or null
   * if the given  content does not take part of this tree relation, or undefined if some content needs
   * to be loaded before the parents can be computed.
   * /
  function getParents(content:Content):Array;

  /**
   * Dependency tracked function to check if the given ContentTreeRelation allows to
   * create content for the given type
   * @param folder the current folder selection
   * @param contentType the content type of the content to create
   * @return true if the content can be created
   * /
  function mayCreate(folder:Content, contentType:ContentType):Boolean;

  /**
   * Copies the given content to the new parent if the precondition checked by the mayCopy method is valid.
   * If the new parent is a not a "real" folder, the method has to update the linking between
   * the contents and the new parent and between the contents and their old parent.
   *
   * <p>
   * Note that this method is used for the executing of the paste actions for drag and drop.
   * </p>
   *
   * @param contents the contents to copy
   * @param newParent the target folder to copy the contents to
   * @param callback the optional callback method. If set the CopyResult result will be passed as parameter if the
   * copy method of the ContentRepository was used.
   *
   * @see com.coremedia.cap.content.ContentRepository.copyRecursivelyTo
   * @see com.coremedia.cap.content.results.CopyResult
   * @see com.coremedia.cap.content.results.CopyResultCodes
   * /
  function copy(contents:Array, newParent:Content, callback:Function = undefined):void;


  /**
   * Checks if the given contents can be copied to the new parent.
   *
   * This method is also used for drag and drop checks and for paste/copy actions.
   *
   * By default, contents can not be copied between different tree relations. This checked is already
   * implemented for the corresponding actions and does not need to be checked here.
   *
   * @param contents the contents that should be copied
   * @param newParent the folder to copy the contents to
   * @return true if the contents can be copied.
   * /
  function mayCopy(contents:Array, newParent:Content):Boolean;

  /**
   * Moves the given content to the new parent if the precondition checked by the mayMove method is valid.
   *
   * If the new parent is a not a "real" folder, the method has to update the linking between
   * the contents and the new parent and between the contents and their old parent.
   *
   * <p>
   * Note:  this method is used in the implementation of the MoveContentAction and for drag and drop.
   * </p>
   *
   * @param contents the contents to move
   * @param callback the optional callback method. If set the DeleteResult result will be passed as parameter.
   *
   * @see com.coremedia.cap.content.ContentRepository.moveTo
   * @param newParent the folder to move the contents to
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * @see com.coremedia.cap.content.results.MoveResultCodes
   * /
  function move(contents:Array, newParent:Content, callback:Function = undefined):void;

  /**
   * Checks if the given contents can be moved to the new parent.
   * The method is also used for drag and drop checks and for paste/move actions.
   *
   * By default, contents can not be moved between different tree relations. This checked is already
   * implemented for the corresponding actions and does not need to be checked here.
   *
   * @param contents the contents that should be moved
   * @param newParent the new parent of the contents to move. May be null, in which case this method should say whether
   * the contents could be moved somewhere (e.g. if the cut button should be enabled)
   * @return true if the contents can be moved.
   * /
  function mayMove(contents:Array, newParent:Content):Boolean;


  /**
   * Deletes the given content from the repository.
   *
   * <p>
   * Note: this method is used in the implementation of the DeleteAction.
   * </p>
   *
   * @param contents the contents to delete
   * @param callback the optional callback method. If set the DeleteResult result will be passed as parameter.
   *
   * @see com.coremedia.cap.content.results.DeleteResult
   * @see com.coremedia.cap.content.ContentRepository.deleteAll
   * /
  function deleteContents(contents:Array, callback:Function = undefined):void;

  /**
   * Restores the given content from the repository.
   *
   * <p>
   * Note: this method is used in the implementation of the UndeleteAction.
   * </p>
   *
   * @param contents the contents to restore
   * @param callback the optional callback method. If set the BulkOperationResult result will be passed as parameter.
   *
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * /
  function undeleteContents(contents:Array, callback:Function = undefined):void;

  /**
   * Checks if the given contents can be deleted.
   *
   * Usually the "DELETED" state of the contents is already checked before so it must not be re-checked in this method
   * if the contents are already deleted.
   *
   * Instead, the content types can be check for a tree relation, e.g. to avoid deletion of content types or
   * content that is linking other content and should not be deleted until these links are resolved.
   *
   * <p>
   * Note: this method is used for computing the enabling/disabling state of the DeleteAction.
   * </p>
   *
   * @param contents the contents to check for deletion.
   * @return true if the contents can be deleted.
   *
   * @see com.coremedia.cms.editor.sdk.actions.DeleteAction
   * /
  function mayDelete(contents:Array):Boolean;

  /**
   * If folders in this tree relation are represented by documents instead of "real" folders, some actions of the
   * tree relation require to checkout content. If the content is already checked-out by another user a
   * corresponding error message should be shown, indicating why the action cannot be executed.
   *
   * @param target the content the check the state for
   * /
  function showCheckoutError(target:Content):void;

  /**
   * Used when new content is created. The folder content must not necessarily a real folder, but can be a document
   * representing a folder instead. The concrete implementation will update the linking between the folder and the
   * contents in this case.
   *
   * If the folder is a real folder, no additional action is required.
   *
   * <p>
   * Note that this method is used for the NewContentAction.
   * </p>
   *
   * @param folder the folder to add children to
   * @param contents the new children of the given folder. each content of
   * @param callback called without parameters when the action is finished
   *
   * @see com.coremedia.cms.editor.sdk.actions.NewContentAction
   * /
  function addChildNodes(folder:Content, contents:Array, callback:Function):void;

  /**
   * Checks if adding a child to a folder requires the folder content to be checked out.
   *
   * When a document represents a folder, adding a new child may require modifyication of the parent, depending on
   * the link direction.
   *
   * @param folder the folder to check the check-out state for
   * @param childType the type of the child
   * @return true if the parent must be checked out to add the child as leaf.
   * /
  function addChildNeedsFolderCheckout(folder:Content, childType:String):Boolean;

  /**
   * If the tree relation is working with documents representing folders, it may be required
   * that each of these folder documents are located in a corresponding folder too (with a matching or similar name).
   *
   * When invoked, it is ensured that this folder is created when a new folder document is created.
   *
   * @param contentType the content type of the new content which decides if a folder must be created or not.
   * @param folderNode the folder node selected in the tree, may be a document with folder semantic
   * @param childNodeName the name of the child to created, used to created the corresponding folder
   * @param callback the callback invoked with the ContentCreateResult after the folder has been created
   *
   * @see com.coremedia.cap.content.Content.create(folderNode.getParent(), childNodeName, callback:Function):void
   * @see com.coremedia.cap.content.ContentCreateResult
   * /
  function provideRepositoryFolderFor(contentType:ContentType, folderNode:Content, childNodeName:String, callback:Function):void;


  /**
   * Renames the given content with the new name
   * @param content the content to rename
   * @param newName the new name to apply
   * @param callback optional callback called with the flush result
   * /
  function rename(content:Content, newName:String, callback:Function=null):void;

  /**
   * Withdraws the given content
   * @param contents the contents to withdraw
   * @param publicationService the publicationService instance
   * @param callback the callback to call with the withdraw result, no parameters.
   * /
  function withdraw(contents:Array, publicationService:PublicationService, callback:Function):void;


  /**
   * Shows the given content in the tree.
   * Optional config parameter for the view mode. Either CollectionViewConstants.LIST_VIEW for the list view
   * or CollectionViewConstants.THUMBNAILS_VIEW for the thumbnail view.
   * If not specified the current view is used.
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#LIST_VIEW
   * @see com.coremedia.cms.editor.sdk.collectionview.CollectionViewConstants#THUMBNAILS_VIEW
   * @param contents the content to show in the library tree
   * @param view the view to be used, may be undefined
   * @param treeModelId the optional id of the CompoundTreeModel that should be used when displaying the given content
   * /
  function showInTree(contents:Array, view:String = null, treeModelId:String = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
