Ext.define("com.coremedia.cms.editor.sdk.util.ThumbnailRenderer", function(ThumbnailRenderer) {/*package com.coremedia.cms.editor.sdk.util {
/**
 * The implementation of the ThumbnailRenderer is used to render the thumbnails
 * for image link list and the thumbnail preview in the Studio library.
 * The class may be replaced in the IEditor context to change the logic how thumbnails are looked up
 * or to change the blob URL so that images can be rendered by an external service too.
 * /
public interface ThumbnailRenderer {

  /**
   * Can be used to transform the URL that has been generated as thumbnail URL.
   * These URLs usually point to an external system, so modifying it should be necessary.
   * @param url the url to be used as thumbnail URL
   * /
  function transformUrl(url:String):String;

  /**
   * Uses the given Thumbnail instance to generate the thumbnail URL.
   * @param thumbnail the Thumbnail instance contains all information about the blob to generate the URL for
   * @param operations optional additional image transformer operations
   * @return the thumbnail URL
   * /
  function renderThumbnailUrl(thumbnail:Thumbnail, operations:String = null):String;
}
}

============================================== Jangaroo part ==============================================*/
    return {};
});
