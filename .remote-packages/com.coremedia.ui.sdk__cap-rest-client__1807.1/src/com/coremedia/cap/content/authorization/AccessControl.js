Ext.define("com.coremedia.cap.content.authorization.AccessControl", function(AccessControl) {/*package com.coremedia.cap.content.authorization {

import com.coremedia.cap.content.Content;
import com.coremedia.cap.content.ContentType;

/**
 * The access control determines, which rights the current user has to access content.
 * /
[PublicApi]
public interface AccessControl {

  /**
   * Return whether the current user may perform
   * an operation which requires the given right on the given
   * content.
   *
   * <p>Even if the result of this method is true, the corresponding
   * content operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param content the content
   * @param right the right (one of the constants from the Right class)
   * @return true if the current user may perform an operation which requires the given right on the given content;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * @see com.coremedia.cap.content.authorization.Right
   * /
  function mayPerform(content:Content, right:Right):*;

  /**
   * Return whether the current user may perform
   * an operation which requires the given right on the given
   * content and content type. This is useful for some operations on documents
   * when the rights are checked on the parent folder instead of the document itself
   * (for example move and create). The type is ignored when checking for read rights
   *
   * <p>Even if the result of this method is true, the corresponding
   * content operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param content the content
   * @param contentType the content type
   * @param right the right (one of the constants from the Right class)
   * @return true if the current user may perform an operation which requires the given right on the given content;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * @see com.coremedia.cap.content.authorization.Right
   * /
  function mayPerformForType(content:Content, contentType:ContentType, right:Right):*;

  /**
   * Return whether the current user may create a content with the given type
   * below the given content.
   *
   * <p>Even if the result of this method is true, the create
   * operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param content the content
   * @param contentType the content type
   * @return true if the current user may create a content below the given content;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * /
  function mayCreate(content:Content, contentType:ContentType):*;

  /**
   * From the content given in the argument array, select those contents that are readable
   * and return those contents in a new array.
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until the readability of all contents can be checked,
   * this method returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param contents the contents to check
   * @return the readable contents or undefined, if readability cannot be determined for all contents
   * /
  function filterReadableContents(contents:Array):*;

  /**
   * Return whether the current user may copy the given contents into the
   * specified target.
   *
   * <p>Even if the result of this method is true, the copy
   * operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param contents the contents to copy
   * @param target the target content
   * @return true if the current user may copy the contents into the specified target;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * /
  function mayCopy(contents:Array, target:Content):*;

  /**
   * Return whether the current user may move the given contents into the
   * specified target.
   *
   * <p>Even if the result of this method is true, the move
   * operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param contents the contents to move
   * @param target the target content
   * @return true if the current user may move the contents into the specified target;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * /
  function mayMove(contents:Array, target:Content):*;

  /**
   * Return whether the current user may rename the given content.
   *
   * <p>Even if the result of this method is true, the rename
   * operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param content the content
   * @return true if the current user may renamed the given content
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * /
  function mayRename(content:Content):*;

  /**
   * Return whether the current user may write properties of the given content.
   * To write to a content, the user must have the write right, the content
   * must not be checked out by another user, and the content must not be
   * deleted.
   *
   * <p>Even if the result of this method is true, the write
   * operation might still fail due to concurrent modifications,
   * rights changes and unexpected errors.</p>
   *
   * <p>This method may have to trigger an asynchronous load
   * of rights data from the server. Until all data is available, this method
   * returns undefined. In order to wait for the definite result, this method may
   * be called from a function value expression.</p>
   *
   * @param content the content to write
   * @return true if the current user may write to the content;
   *   false if the current user must not perform the operation; undefined if the result cannot be determined yet
   *
   * @see com.coremedia.ui.data.ValueExpressionFactory#createFromFunction
   * @see Right#WRITE
   * /
  function mayWrite(content:Content):*;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
