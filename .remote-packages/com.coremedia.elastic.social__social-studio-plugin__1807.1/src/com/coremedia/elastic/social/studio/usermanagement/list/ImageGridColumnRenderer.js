Ext.define("com.coremedia.elastic.social.studio.usermanagement.list.ImageGridColumnRenderer", function(ImageGridColumnRenderer) {/*package com.coremedia.elastic.social.studio.usermanagement.list {
import com.coremedia.ui.models.bem.BEMBlock;
import com.coremedia.ui.models.bem.BEMElement;
import com.coremedia.ui.models.bem.BEMModifier;

public class ImageGridColumnRenderer {

  private static const*/var BLOCK$static/*:BEMBlock*/;/* =*/function BLOCK$static_(){BLOCK$static=( new com.coremedia.ui.models.bem.BEMBlock("cm-image-grid-column"));};/*
  private static const*/var ELEMENT_THUMBNAIL$static/*:BEMElement*/;/* =*/function ELEMENT_THUMBNAIL$static_(){ELEMENT_THUMBNAIL$static=( BLOCK$static.createElement("thumbnail"));};/*
  private static const*/var MODIFIER_EMPTY$static/*:BEMModifier*/;/* =*/function MODIFIER_EMPTY$static_(){MODIFIER_EMPTY$static=( BLOCK$static.createModifier("empty"));};/*

  /**
   * Returns the thumbnail template for the given uri.
   * if uri is empty, delegates to {@link #emptyThumbnail}
   * @param uri the uri to generate the thumbnail template for
   * /
  public static*/ function thumbnailFor$static(uri/*:String*/)/*:String*/ {
    if (!uri) {
      return ImageGridColumnRenderer.emptyThumbnail();
    }
    return '<div class="' + BLOCK$static + '">' + '<img class="' + ELEMENT_THUMBNAIL$static + '" src="' + uri + '" /></div>';
  }/*

  /**
   * Returns the default template for empty thumbnails.
   * @return
   * /
  public static*/ function emptyThumbnail$static()/*:String*/ {
    return '<div class="' + BLOCK$static + ' ' + MODIFIER_EMPTY$static + '"></div>';
  }/*
}*/function ImageGridColumnRenderer$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ImageGridColumnRenderer$,
      statics: {
        BLOCK: undefined,
        ELEMENT_THUMBNAIL: undefined,
        MODIFIER_EMPTY: undefined,
        thumbnailFor: thumbnailFor$static,
        emptyThumbnail: emptyThumbnail$static,
        __initStatics__: function() {
          BLOCK$static_();
          ELEMENT_THUMBNAIL$static_();
          MODIFIER_EMPTY$static_();
        }
      },
      requires: ["com.coremedia.ui.models.bem.BEMBlock"]
    };
});
