Ext.define("com.coremedia.cms.editor.sdk.util.ThumbnailRendererBase", function(ThumbnailRendererBase) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.ui.data.Blob;

/**
 * The default implementation of the ThumbnailRenderer is used to render the thumbnails
 * for image link list and the thumbnail preview in the Studio library.
 * The class may be replaced in the IEditor context to change the logic how thumbnails are looked up
 * or to change the blob URL so that images can be rendered by an external service too.
 * /
public class ThumbnailRendererBase implements ThumbnailRenderer {

  /**
   * Default implementation: just return the url
   * @param url the URL generated for a thumbnail.
   * /
  public*/ function transformUrl(url/*:String*/)/*:String*/ {
    return url;
  }/*

  /**
   * Uses the given Thumbnail instance to generate the thumbnail URL.
   * @param thumbnail the Thumbnail instance contains all information about the blob to generate the URL for
   * @return the thumbnail URL
   * /
  public*/ function renderThumbnailUrl(thumbnail/*:Thumbnail*/, operations/*:String = null*/)/*:String*/ {if(arguments.length<=1)operations=null;
    var blob/*:Blob*/ = thumbnail.getBlob();
    var url/*:String*/ = blob.getUri();
    if(thumbnail.getOperations()) {
      url = url + "/" + thumbnail.getOperations();
    }
    if(operations) {
      url = url + "/" + operations;
    }
    return url;
  }/*
}*/function ThumbnailRendererBase$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.cms.editor.sdk.util.ThumbnailRenderer"],
      transformUrl: transformUrl,
      renderThumbnailUrl: renderThumbnailUrl,
      constructor: ThumbnailRendererBase$,
      requires: ["com.coremedia.cms.editor.sdk.util.ThumbnailRenderer"]
    };
});
