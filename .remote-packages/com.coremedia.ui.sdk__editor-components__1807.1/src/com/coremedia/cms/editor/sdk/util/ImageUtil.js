Ext.define("com.coremedia.cms.editor.sdk.util.ImageUtil", function(ImageUtil) {/*package com.coremedia.cms.editor.sdk.util {
public class ImageUtil {

  /**
   * Utility method for formatting a boxing operation.
   * By default, the metadata is removed too.
   *
   * @param width the width of the crop
   * @param height the height of the crop
   * @return the formatted image operation string
   * /
  public static*/ function getCroppingOperation$static(width/*:int*/, height/*:int*/)/*:String*/ {
    return "rm/box;w=" + width + ";h=" + height;
  }/*

  /**
   * Appends a cropping uri suffix to the given uri.
   * If the given uri is not relative, the suffix is not appended.
   *
   * @param uri
   * @param width
   * @param height
   * @return the url extended by the cropping suffix for relative uri. Otherwise the given uri.
   * /
  public static*/ function getCroppingUri$static(uri/*:String*/, width/*:int*/, height/*:int*/)/*:String*/ {
    if (uri && uri.indexOf("http") !== 0 && uri.indexOf("//") !== 0) {
      var croppingSuffix/*:String*/ = ImageUtil.getCroppingOperation(width, height);
      return uri + "/" + croppingSuffix;
    } else {
      return uri;
    }
  }/*
}*/function ImageUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ImageUtil$,
      statics: {
        getCroppingOperation: getCroppingOperation$static,
        getCroppingUri: getCroppingUri$static
      }
    };
});
