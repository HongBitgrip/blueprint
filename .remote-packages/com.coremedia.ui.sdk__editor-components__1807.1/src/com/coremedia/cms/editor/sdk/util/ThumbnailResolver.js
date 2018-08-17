Ext.define("com.coremedia.cms.editor.sdk.util.ThumbnailResolver", function(ThumbnailResolver) {/*package com.coremedia.cms.editor.sdk.util {
/**
 * Interface to be implemented for resolving a Thumbnail instance from a content
 * that is used to generate a preview image for it.
 * /
public interface ThumbnailResolver {

  /**
   * Returns the Thumbnail object for the given object, undefined if not all
   * required remote beans have been loaded yet.
   * @param model the model to load the thumbnail for
   * @param operations the image operation string used for rendering
   * @return the String or Thumbnail instance used to render the thumbnail
   * /
  function getThumbnail(model:Object, operations:String = null):Object;

  /**
   * Every ThumbnailBlob instance is registered for a content type.
   * If null is returned the default ThumbnailResolver will be used that searches recursively
   * up the content type hierarchy for a matching ThumbnailResolver.
   * @return the name of the document type
   * /
  function getContentType():String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
