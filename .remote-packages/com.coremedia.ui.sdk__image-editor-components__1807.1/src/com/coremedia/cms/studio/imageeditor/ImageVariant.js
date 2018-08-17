Ext.define("com.coremedia.cms.studio.imageeditor.ImageVariant", function(ImageVariant) {/*package com.coremedia.cms.studio.imageeditor {

import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;

public class ImageVariant {
  public native function get key():String;

  public native function get widthRatio():int;

  public native function get heightRatio():int;

  public native function get minWidth():int;

  public native function get minHeight():int;

  public*/ function  get$aspectRatio()/*:Number*/ {
    return this.widthRatio / this.heightRatio;
  }/*

  public*/ function ImageVariant$(key/*:String*/, widthRatio/*:int*/, heightRatio/*:int*/, minWidth/*:int*/, minHeight/*:int*/) {
    this['key'] = key;
    this['widthRatio'] = widthRatio;
    this['heightRatio'] = heightRatio;
    this['minWidth'] = minWidth;
    this['minHeight'] = minHeight;
  }/*

  /**
   * Calculate Rectangle for this variant based upon the FocusArea and the imageDimensions.
   * @param focusArea
   * @param imageDimensions
   * @return Rectangle
   * /
  public*/ function calculateDefaultCropDimensions(focusArea/*:Rectangle*/, imageDimensions/*:ImageDimensions*/)/*:Rectangle*/ {
    if (!focusArea || !imageDimensions) {
      return undefined;
    }
    var x/*:Number*/ = focusArea.x;
    var y/*:Number*/ = focusArea.y;
    var width/*:Number*/ = focusArea.width;
    var height/*:Number*/ = focusArea.height;

    var variantAspectRatio/*:Number*/ = this.widthRatio / this.heightRatio;
    var imageAspectRatio/*:Number*/ = imageDimensions.width / imageDimensions.height;
    var focusAreaAspectRatio/*:Number*/ = imageAspectRatio * width / height;
    if (variantAspectRatio < focusAreaAspectRatio) {
      // use height of focusArea; compute width with the correct aspect ratio:
      width = height * variantAspectRatio / imageAspectRatio;
      x += (focusArea.width - width) / 2;
    } else {
      // use width of focusArea; compute height with the correct aspect ratio:
      height = width * imageAspectRatio / variantAspectRatio;
      y += (focusArea.height - height) / 2;
    }
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(x, y, width, height);
  }/*

  public*/ function calculateFittingImageDimensions(imageDimensions/*:ImageDimensions*/)/*:ImageDimensions*/ {
    if (!imageDimensions) {
      return undefined;
    }
    var width/*:Number*/ = imageDimensions.width;
    var height/*:Number*/ = imageDimensions.height;

    var variantAspectRatio/*:Number*/ = this.widthRatio / this.heightRatio;
    var imageAspectRatio/*:Number*/ = width / height;

    if (variantAspectRatio < imageAspectRatio) {
      // use width of imageDimensions; compute new height with the correct aspect ratio:
      height = Math.round(width / variantAspectRatio + 0.5);
    } else {
      // use height of imageDimensions; compute new width with the correct aspect ratio:
      width = Math.round(height * variantAspectRatio + 0.5);
    }
    return AS3.cast(com.coremedia.cms.studio.imageeditor.model.ImageDimensions,{width: width, height: height});
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ImageVariant$,
      calculateDefaultCropDimensions: calculateDefaultCropDimensions,
      calculateFittingImageDimensions: calculateFittingImageDimensions,
      __accessors__: {aspectRatio: {get: get$aspectRatio}},
      uses: [
        "com.coremedia.cms.studio.imageeditor.model.ImageDimensions",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle"
      ]
    };
});
