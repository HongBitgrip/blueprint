Ext.define("com.coremedia.cms.editor.sdk.util.ImageLinkListRenderer", function(ImageLinkListRenderer) {/*package com.coremedia.cms.editor.sdk.util {
import com.coremedia.cms.editor.sdk.editorContext;
import com.coremedia.ui.models.bem.BEMModifier;
import com.coremedia.ui.store.BeanRecord;
import com.coremedia.ui.util.ThumbnailImage;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.editor.Editor')]
public class ImageLinkListRenderer {
  private static const*/var IMAGE_WIDTH$static/*:int*/ = 80;/*
  private static const*/var IMAGE_HEIGHT$static/*:int*/ = 54;/*

  public static const DEFAULT_CROPPING:String =*/function DEFAULT_CROPPING$static_(){ImageLinkListRenderer.DEFAULT_CROPPING=( com.coremedia.cms.editor.sdk.util.ImageUtil.getCroppingOperation(IMAGE_WIDTH$static, IMAGE_HEIGHT$static));}/*;

  private static const*/var THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static/*:BEMModifier*/;/* =*/function THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static_(){THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static=( com.coremedia.ui.util.ThumbnailImage.BLOCK.createModifier("link-list"));};/*
  private static const*/var THUMBNAIL_IMAGE_MODIFIER_EMPTY$static/*:BEMModifier*/;/* =*/function THUMBNAIL_IMAGE_MODIFIER_EMPTY$static_(){THUMBNAIL_IMAGE_MODIFIER_EMPTY$static=( com.coremedia.ui.util.ThumbnailImage.BLOCK.createModifier("empty"));};/*

  /**
   * Common converter function for linklist thumbnails.
   * The method is simply using the resolver implementation of the editor context for content.
   * @param model the current model to render the thumbnail for
   * @return the URI string for the thumbnail
   * /
  public static*/ function convertThumbnail$static(model/*:Object*/)/*:ThumbnailImage*/ {
    return ImageLinkListRenderer.convertThumbnailFor(model, null);
  }/*

  /**
   * Custom thumbnail resolver allows to apply a specific document type
   * that determines the renderer to be used once the thumbnail data has been resolved.
   * This may apply for catalog thumbnails where the thumbnail is based on a string, not a blob.
   * @param model the model to render the thumbnail for
   * @param doctype the document type used to resolve the renderer
   * @return the URI string for the thumbnail
   * /
  public static*/ function convertThumbnailFor$static(model/*:Object*/, doctype/*:String = null*/)/*:ThumbnailImage*/ {if(arguments.length<=1)doctype=null;
    return com.coremedia.cms.editor.sdk.editorContext.getThumbnailImage(model, ImageLinkListRenderer.DEFAULT_CROPPING, doctype);
  }/*

  /**
   * Displays the image for each link list item.
   * /
  public static*/ function thumbColRenderer$static(value/*:Object*/, metaData/*:Object*/, record/*:BeanRecord*/)/*:String*/ {
    var thumbUri/*:ThumbnailImage*/ = record.data.thumbnailImage;
    return thumbnailFor$static(thumbUri);
  }/*

  /**
   * Returns the thumbnail template for the given thumbnailImage.
   * if thumbnailImage is undefined or null or does not have a non-empty imageUri, delegates to {@link #emptyThumbnail}
   * @param thumbnailImage the thumbnailImage to generate the thumbnail template for
   * /
  private static*/ function thumbnailFor$static(thumbnailImage/*:ThumbnailImage*/)/*:String*/ {
    if (!thumbnailImage) {
      return emptyThumbnail$static();
    }
    return thumbnailImage.render(THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static.getCSSClass());
  }/*

  /**
   * Returns the default template for empty thumbnails.
   * @return
   * /
  private static*/ function emptyThumbnail$static()/*:String*/ {
    var tip/*:String*/ = mx.resources.ResourceManager.getInstance().getString('com.coremedia.cms.editor.Editor', 'ImageLinkList_no_data');
    return '<div class="' + com.coremedia.ui.util.ThumbnailImage.BLOCK + ' ' + THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static + ' ' + THUMBNAIL_IMAGE_MODIFIER_EMPTY$static + '" title="' + tip + '"></div>';
  }/*
}*/function ImageLinkListRenderer$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ImageLinkListRenderer$,
      statics: {
        DEFAULT_CROPPING: undefined,
        THUMBNAIL_IMAGE_MODIFIER_LINK_LIST: undefined,
        THUMBNAIL_IMAGE_MODIFIER_EMPTY: undefined,
        convertThumbnail: convertThumbnail$static,
        convertThumbnailFor: convertThumbnailFor$static,
        thumbColRenderer: thumbColRenderer$static,
        __initStatics__: function() {
          DEFAULT_CROPPING$static_();
          THUMBNAIL_IMAGE_MODIFIER_LINK_LIST$static_();
          THUMBNAIL_IMAGE_MODIFIER_EMPTY$static_();
        }
      },
      requires: [
        "com.coremedia.cms.editor.Editor_properties",
        "com.coremedia.ui.util.ThumbnailImage",
        "mx.resources.ResourceManager"
      ],
      uses: [
        "com.coremedia.cms.editor.sdk.editorContext",
        "com.coremedia.cms.editor.sdk.util.ImageUtil"
      ]
    };
});
