Ext.define("com.coremedia.cap.content.publication.PublicationService", function(PublicationService) {/*package com.coremedia.cap.content.publication {

import com.coremedia.cap.content.Content;

/**
 * The publication service of a content repository offers functionality
 * to approve and publish content and to check the approval and
 * publication state. You can obtain a publication service using the method
 * <code>ContentRepository.getPublicationService()</code>.
 *
 * @see com.coremedia.cap.content.ContentRepository#getPublicationService
 * /
[PublicApi]
public interface PublicationService {
  /**
   * Approve the given content and all folders on the path to the content.
   * If the content is not checked in, check in the content. If the content is
   * a document, approve the last version.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>ApproveResult</code>
   * object as its only argument.</p>
   *
   * @param content the content to approve
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.ApproveResult
   * /
  function approveWithPath(content:Content, callback:Function = null):void;

  /**
   * Approve the given contents and all folders on the paths to the contents.
   * If any content is not checked in, check in the content. If the content is
   * a document, approve the last version.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>ApproveResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to approve
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.ApproveResult
   * /
  function approveAllWithPath(contents:Array, callback:Function = null):void;

  /**
   * Disapprove the given content.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>BulkOperationResult</code>
   * object as its only argument. Result item codes are taken
   * from the constants of <code>DisapproveResultCodes</code>.
   * </p>
   *
   * @param content the content to disapprove
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * @see com.coremedia.cap.content.results.DisapproveResultCodes
   * /
  function disapprove(content:Content, callback:Function = null):void;

  /**
   * Disapprove the given contents.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives an <code>BulkOperationResult</code>
   * object as its only argument. Result item codes are taken
   * from the constants of <code>DisapproveResultCodes</code>.
   * </p>
   *
   * @param contents the contents to disapprove
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.BulkOperationResult
   * @see com.coremedia.cap.content.results.DisapproveResultCodes
   * /
  function disapproveAll(contents:Array, callback:Function = null):void;

  /**
   * Publish the given content and all folders on the path to the content.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param content the content to withdraw
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function publish(content:Content, callback:Function = null):void;

  /**
   * Publish the given contents and all folders on the paths to the contents.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to publish
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.Content
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function publishAll(contents:Array, callback:Function = null):void;

  /**
   * Approve and publish the given content and all folders on the path to the content.
   * If the content is not checked in, check in the content. If the content is
   * a document, approve the last version.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param content the content to publish
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function approveWithPathAndPublish(content:Content, callback:Function = null):void;

  /**
   * Approve and publish the given contents and all folders on the paths to the contents.
   * If a content is not checked in, check in the content. If a content is
   * a document, approve the last version.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to publish
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.Content
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function approveWithPathAndPublishAll(contents:Array, callback:Function = null):void;

  /**
   * Withdraw the given content and in the case of folders also all children.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param content the content to withdraw
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function withdraw(content:Content, callback:Function = null):void;

  /**
   * Withdraw the given contents and in the case of folders also all children.
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to withdraw
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function withdrawAll(contents:Array, callback:Function = null):void;

  /**
   * Withdraw the given contents which is part of a tree relation where nodes ('folders') are linking to their child nodes
   * ('Subfolders') with a link list property.
   *
   * <p>To withdraw such contents, the child links in parent nodes which link to some of the given contents
   * will have to be modified by removing the links from the published version and re-publishing that version.</p>
   *
   * <p>After the method is completed, the callback function is called.
   * The callback function receives a <code>PublicationResult</code>
   * object as its only argument.</p>
   *
   * @param contents the contents to withdraw
   * @param nodeContentType the content type of tree nodes ('folders')
   * @param childNodesProperty the name of the link list property which holds links to child nodes.
   * @param callback the callback
   *
   * @see com.coremedia.cap.content.results.PublicationResult
   * /
  function withdrawAllFromTree(contents:Array, nodeContentType:String, childNodesProperty:String, callback:Function = null):void;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
