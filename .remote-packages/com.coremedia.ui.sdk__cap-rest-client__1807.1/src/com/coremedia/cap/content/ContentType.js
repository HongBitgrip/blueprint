Ext.define("com.coremedia.cap.content.ContentType", function(ContentType) {/*package com.coremedia.cap.content {
import com.coremedia.cap.common.CapType;

/**
 * The definition of a Content.
 *
 * <p>Content types form an inheritance hierarchy.</p>
 *
 * <p>There are three built-in Content types: Content, Folder, and Document.
 * All user-defined types inherit from Document.</p>
 *
 * @see ContentRepository
 * @see ContentRepository#getContentContentType
 * @see ContentRepository#getFolderContentType
 * @see ContentRepository#getDocumentContentType
 * /
[PublicApi]
public interface ContentType extends CapType {

  /**
   * Create a new content from this ContentType
   * with the given preferred name relative to the given base folder.
   *
   * <p>If a content with the given preferred name already exists,
   * the server creates a name based on the pattern "{3} ({1})".</p>
   *
   * @param base the folder relative to which content is created
   * @param preferredName the preferred name of the new content.
   * @param callback a function that is called when the content has been created successfully or an error occurred
   *   Signature: <code>function(result:ContentCreateResult):void</code>
   *
   * @see Content
   * @see ContentCreateResult
   * /
  function create(base:Content, preferredName:String, callback:Function = null):void;

  /**
   * Create a new content from this ContentType
   * with the given preferred name relative to the given base folder
   * using the given initial property value.
   *
   * <p>If a content with the given preferred name already exists,
   * the server creates a name based on the pattern "{3} ({1})".</p>
   *
   * @param base the folder relative to which content is created
   * @param preferredName the preferred name of the new content.
   * @param properties the properties to set in the new content as a map from property names to values
   * @param callback a function that is called when the content has been created successfully or an error occurred
   *   Signature: <code>function(result:ContentCreateResult):void</code>
   *
   * @see Content
   * @see ContentCreateResult
   * /
  function createWithProperties(base:Content, preferredName:String, properties:Object, callback:Function = null):void;

  /**
   * Return all instances of this type or one of its subtypes.
   * No events are fired when the set of instances changes,
   * but calls to this method are dependency tracked and
   * may be used in function value expressions.
   *
   * @return all instances of this type
   *
   * @see Content
   * /
  function getInstances():Array;
}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cap.common.CapType"],
      requires: ["com.coremedia.cap.common.CapType"]
    };
});
