Ext.define("com.coremedia.cms.studio.imageeditor.CropImageAreaBase", function(CropImageAreaBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil;
import com.coremedia.cms.studio.imageeditor.util.TransformationChain;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.StringUtil;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class CropImageAreaBase extends ImageArea {

  [Bindable]
  public var backgroundColorValueExpression:ValueExpression;

  private var variantBoxedImageDimensionsValueExpression:ValueExpression;
  private var cropBoundsValueExpression:ValueExpression;
  private var actualCropBoundsValueExpression:ValueExpression;
  private var cropTransformationValueExpression:ValueExpression;
  private var transformBindingValueExpression:ValueExpression;
  private var variantKey:String;

  public*/ function CropImageAreaBase$(config/*:CropImageArea = null*/) {if(arguments.length<=0)config=null;
    this.variantKey$lENc = AS3.getBindable(config,"variant").key;
    this.variantBoxedImageDimensionsValueExpression$lENc = AS3.getBindable(config,"variantBoxedImageDimensionValueExpression");
    this.super$lENc(config);
  }/*

  internal static*/ function createStoredCropBoundsValueExpression$static(config/*:ImageArea*/)/*:ValueExpression*/ {
    return com.coremedia.ui.data.ValueExpressionFactory.createFromValueHolder(new com.coremedia.cms.studio.imageeditor.StoredCropBoundsValueHolder(AS3.getBindable(config,"imageSettingsValueExpression"), AS3.getBindable(config,"variant").key));
  }/*

  internal*/ function getCropBoundsValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    if (!this.cropBoundsValueExpression$lENc) {
      this.cropBoundsValueExpression$lENc = com.coremedia.ui.data.ValueExpressionFactory.create(AS3.getBindable(config,"variant").key, AS3.getBindable(config,"imageEditorViewModel"));
    }
    return this.cropBoundsValueExpression$lENc;
  }/*

  override internal*/ function getBoundsValueExpression(config/*:ImageArea = null*/)/*:ValueExpression*/ {if(arguments.length<=0)config=null;
    if (!this.actualCropBoundsValueExpression$lENc) {
      this.actualCropBoundsValueExpression$lENc = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(
              this.getCropBoundsValueExpression(config),AS3.bind( this,"computeRelativeCropFromFocusArea$lENc"));
    }
    return this.actualCropBoundsValueExpression$lENc;
  }/*

  /**
   * Get image dimensions of the cropped image
   * Same as <b>imageDimensionsValueExpression</b> unless the variant has been enlarged...
   *
   * @return ValueExpression
   * /
  override internal*/ function getVariantBoxedImageDimensionsValueExpression()/*:ValueExpression*/ {
    return this.variantBoxedImageDimensionsValueExpression$lENc;
  }/*

  /*
   * keep in sync with: ImageCropSizeValidator#calculateDefaultCropDimensions
   * /
  private*/ function computeRelativeCropFromFocusArea(bounds/*:Rectangle*/)/*:Rectangle*/ {
    if (bounds) {
      return bounds;
    }
    if (!AS3.getBindable(this,"imageDimensionsValueExpression") || !this.variantBoxedImageDimensionsValueExpression$lENc) {
      return undefined;
    }
    var imageDimensions/*:ImageDimensions*/ = AS3.getBindable(this,"imageDimensionsValueExpression").getValue();
    var variantDimensions/*:ImageDimensions*/ = this.variantBoxedImageDimensionsValueExpression$lENc.getValue();
    if (!imageDimensions || !variantDimensions) {
      return undefined;
    }
    if (imageDimensions.width !== variantDimensions.width || imageDimensions.height !== variantDimensions.height) {
      // crop is enlarged
      // maximize crop by default
      return com.coremedia.cms.studio.imageeditor.model.Rectangle.getUnitSquare();
    }

    // crop is not enlarged
    var focusArea/*:Rectangle*/ = this.getImageEditorStage().getFocusArea().getPercentageRectangle();
    var crop/*:Rectangle*/ = AS3.getBindable(this,"variant").calculateDefaultCropDimensions(focusArea, imageDimensions);

    crop = this.centerCropAroundFocusPoint$lENc(crop);

    return crop.adjust(imageDimensions, variantDimensions, AS3.getBindable(this,"variant").aspectRatio);
  }/*

  private*/ function centerCropAroundFocusPoint(crop/*:Rectangle*/)/*:Rectangle*/ {
    var focusArea/*:Rectangle*/ = this.getImageEditorStage().getFocusArea().getPercentageRectangle();
    var focusPointImageArea/*:FocusPointImageArea*/ = this.getImageEditorStage().getFocusPointImageArea();
    var focusPointRectangle/*:Rectangle*/ = focusPointImageArea.getPercentageRectangle();
    var imageEditorStageBounds/*:Rectangle*/ = AS3.getBindable(this,"imageEditorStageBoundsValueExpression").getValue();

    if (!focusArea || !focusPointRectangle || !imageEditorStageBounds) {
      return crop;
    }

    var focusAreaX/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(focusArea, imageEditorStageBounds);
    var focusAreaRightX/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getValueOfRightX(focusArea, imageEditorStageBounds);
    var focusAreaY/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(focusArea, imageEditorStageBounds);
    var focusAreaLowerY/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getLowerY(focusArea, imageEditorStageBounds);

    var cropX/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(crop, imageEditorStageBounds);
    var cropY/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(crop, imageEditorStageBounds);
    var cropWidth/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getWidth(crop, imageEditorStageBounds);
    var cropHeight/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getHeight(crop, imageEditorStageBounds);

    // consider focus point
    if (!focusPointRectangle.isUnitSquare()) {
      var focusPointXCenter/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(focusPointRectangle, imageEditorStageBounds) + focusPointImageArea.getRadius();
      var focusPointYCenter/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(focusPointRectangle, imageEditorStageBounds) + focusPointImageArea.getRadius();
      cropX = focusPointXCenter - (cropWidth / 2);
      cropY = focusPointYCenter - (cropHeight / 2);
    }

    // adjust into focus area bounds
    cropX = Math.max(focusAreaX, cropX);
    if (cropX + cropWidth > focusAreaRightX) {
      cropX = focusAreaRightX - cropWidth;
    }
    cropY = Math.max(focusAreaY, cropY);
    if (cropY + cropHeight > focusAreaLowerY) {
      cropY = focusAreaLowerY - cropHeight;
    }

    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getPercentageRectangle(new com.coremedia.cms.studio.imageeditor.model.Rectangle(cropX, cropY, cropWidth, cropHeight), imageEditorStageBounds);
  }/*

  protected*/ function getCropTransformationValueExpression(config/*:CropImageArea*/)/*:ValueExpression*/ {
    if (!this.cropTransformationValueExpression$lENc) {
      this.cropTransformationValueExpression$lENc = this.createCropTransformationValueExpression(config);
    }
    return this.cropTransformationValueExpression$lENc;
  }/*

  internal*/ function createCropTransformationValueExpression(config/*:CropImageArea*/)/*:ValueExpression*/ {var this$=this;
    return com.coremedia.ui.data.ValueExpressionFactory.createFromFunction(function ()/*:String*/ {
      if (!AS3.getBindable(config,"imageSettingsWritableValueExpression").getValue()) {
        return undefined;
      }

      var commonTransformations/*:CommonTransformations*/ = AS3.getBindable(config,"commonTransformationsValueExpression").getValue();
      var relativeCrop/*:Rectangle*/ = this$.getBoundsValueExpression().getValue();
      if (!commonTransformations || !relativeCrop) {
        return undefined;
      }
      var imageDimensions/*:ImageDimensions*/ = AS3.getBindable(config,"imageDimensionsValueExpression").getValue();
      var box/*:ImageDimensions*/ = AS3.getBindable(config,"variantBoxedImageDimensionValueExpression").getValue();
      if (!imageDimensions || !box) {
        return undefined;
      }
      var cropTransformations/*:Array*/ = [];
      var boxed/*:Boolean*/ = imageDimensions.width !== box.width || imageDimensions.height !== box.height;
      if (boxed || !relativeCrop.isUnitSquare()) {
        var scaledCrop/*:Rectangle*/ = relativeCrop.scale(box.width, box.height)
                .move(-(box.width - imageDimensions.width) / 2, -(box.height - imageDimensions.height) / 2)
                .round();
        // Subsequent image scaling operations need at least 2 pixels
        // in both directions to work. Simply choose a close-by crop to avoid
        // errors. We cannot hope for a good image anyway.
        if (scaledCrop.height < 2) {
          scaledCrop = new com.coremedia.cms.studio.imageeditor.model.Rectangle(scaledCrop.x, Math.max(0, scaledCrop.y - 2 + scaledCrop.height), scaledCrop.width, 2);
        }
        if (scaledCrop.width < 2) {
          scaledCrop = new com.coremedia.cms.studio.imageeditor.model.Rectangle(Math.max(0, scaledCrop.x - 2 + scaledCrop.width), scaledCrop.y, 2, scaledCrop.height);
        }
        if (box.width !== imageDimensions.width || box.height !== imageDimensions.height) {
          scaledCrop['bg'] = AS3.getBindable(this$,"backgroundColorValueExpression").getValue();
        }
        cropTransformations.push({
          crop: scaledCrop
        });
      }
      return com.coremedia.cms.studio.imageeditor.util.TransformationChain.serialize(commonTransformations.getTransformations().concat(cropTransformations));
    });
  }/*

  override internal*/ function getCropRatio()/*:Number*/ {
    var imageDimensions/*:ImageDimensions*/ = this.variantBoxedImageDimensionsValueExpression$lENc.getValue();
    return (AS3.getBindable(this,"variant").widthRatio / AS3.getBindable(this,"variant").heightRatio) / (imageDimensions.width / imageDimensions.height);
  }/*

  override protected*/ function makeNewBox(start/*:Rectangle*/, position/*:String*/, diffX/*:Number*/, diffY/*:Number*/, region/*:Rectangle*/)/*:Object*/ {
    var cr/*:Number*/ = AS3.getBindable(this,"variant").widthRatio / AS3.getBindable(this,"variant").heightRatio;

    // Factors for computing the reference point.
    var fr/*:Number*/, fb/*:Number*/;
    // Factors for computing the distance from the reference point.
    var fx/*:Number*/, fy/*:Number*/;

    switch (position) {
      case 'east':
        fr = 0;
        fb = 0.5;
        fx = 1;
        fy = 0;
        break;
      case 'southeast':
        fr = 0;
        fb = 0;
        fx = cr / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        fy = 1 / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        break;
      case 'south':
        fr = 0.5;
        fb = 0;
        fx = 0;
        fy = 1;
        break;
      case 'southwest':
        fr = 1;
        fb = 0;
        fx = -cr / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        fy = 1 / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        break;
      case 'west':
        fr = 1;
        fb = 0.5;
        fx = -1;
        fy = 0;
        break;
      case 'northwest':
        fr = 1;
        fb = 1;
        fx = -cr / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        fy = -1 / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        break;
      case 'north':
        fr = 0.5;
        fb = 1;
        fx = 0;
        fy = -1;
        break;
      case 'northeast':
        fr = 0;
        fb = 1;
        fx = cr / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        fy = -1 / Math.sqrt(1 + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(cr));
        break;
    }

    var fl/*:Number*/ = 1 - fr;
    var ft/*:Number*/ = 1 - fb;

    // The reference point.
    var rx/*:Number*/ = fl * start.left + fr * start.right;
    var ry/*:Number*/ = ft * start.top + fb * start.bottom;
    // The relative position of the dragged point.
    var dx/*:Number*/ = fr * start.left + fl * start.right - rx + diffX;
    var dy/*:Number*/ = fb * start.top + ft * start.bottom - ry + diffY;
    // The distance from the reference point.
    var d/*:Number*/ = dx * fx + dy * fy;
    // No dragging behind the origin.
    d = Math.max(d, 0);
    // No dragging beyond the left and right border.
    if (fx !== 0) {
      d = Math.min(d, Math.abs((fr * region.left + fl * region.right - rx) / fx));
    }
    // No dragging beyond the top and bottom border.
    if (fy !== 0) {
      d = Math.min(d, Math.abs((ft * region.bottom + fb * region.top - ry) / fy));
    }

    // The new width and height.
    // Make sure the width and height never exceed the permitted dimensions.
    // Rounding errors might cause this effect.
    var w/*:Number*/ = Math.round(d / Math.sqrt(com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr(fl - fr) + com.coremedia.cms.studio.imageeditor.ImageAreaBase.sqr((ft - fb) / cr)));
    if (w > region.right - region.left) {
      w = region.right - region.left;
    }
    if (w < 1) {
      w = 1;
    }
    var h/*:Number*/ = Math.round(w / cr);
    if (h > region.bottom - region.top) {
      h = region.bottom - region.top;
      if (h < 1) {
        h = 1;
      }
      w = Math.round(h * cr);
      // Check for growth due to rounding upwards.
      if (w > region.right - region.left) {
        w = region.right - region.left;
      }
    }

    // The new position scaled from the reference point.
    // Make sure the crop fits completely into the desired region.
    // To this end, shift the crop as needed.
    var nl/*:Number*/ = Math.round(rx - w * fr);
    if (nl < region.left) {
      nl = region.left;
    }
    if (nl > region.right - w) {
      nl = region.right - w;
    }
    var nt/*:Number*/ = Math.round(ry - h * fb);
    if (nt < region.top) {
      nt = region.top;
    }
    if (nt > region.bottom - h) {
      nt = region.bottom - h;
    }

    var newBox/*:Object*/ = {
      width: w,
      height: h,
      x: nl,
      y: nt
    };
    return newBox;
  }/*

  override internal*/ function getUndoText()/*:String*/ {
    var variantDisplayName/*:String*/ = com.coremedia.cms.studio.imageeditor.VariantKeyUtil.getVariantDisplayName(this.variantKey$lENc);
    return Ext.String.format(this.resourceManager.getString('com.coremedia.cms.studio.imageeditor.ImageEditor', 'IEC_history_crops_changed_variant'), variantDisplayName);
  }/*

  /**
   * ValueExpression for writing the transform string to the struct
   * @param config the config object that contains the key of the image variant
   * /
  protected*/ function getTransformValueExpression(config/*:CropImageArea*/)/*:ValueExpression*/ {
    if (!this.transformBindingValueExpression$lENc) {
      this.transformBindingValueExpression$lENc = AS3.getBindable(config,"imageSettingsValueExpression").extendBy('transforms', AS3.getBindable(config,"variant").key);
    }
    return this.transformBindingValueExpression$lENc;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.ImageArea",
      variantBoxedImageDimensionsValueExpression$lENc: null,
      cropBoundsValueExpression$lENc: null,
      actualCropBoundsValueExpression$lENc: null,
      cropTransformationValueExpression$lENc: null,
      transformBindingValueExpression$lENc: null,
      variantKey$lENc: null,
      constructor: CropImageAreaBase$,
      super$lENc: function() {
        com.coremedia.cms.studio.imageeditor.ImageArea.prototype.constructor.apply(this, arguments);
      },
      getCropBoundsValueExpression: getCropBoundsValueExpression,
      getBoundsValueExpression: getBoundsValueExpression,
      getVariantBoxedImageDimensionsValueExpression: getVariantBoxedImageDimensionsValueExpression,
      computeRelativeCropFromFocusArea$lENc: computeRelativeCropFromFocusArea,
      centerCropAroundFocusPoint$lENc: centerCropAroundFocusPoint,
      getCropTransformationValueExpression: getCropTransformationValueExpression,
      createCropTransformationValueExpression: createCropTransformationValueExpression,
      getCropRatio: getCropRatio,
      makeNewBox: makeNewBox,
      getUndoText: getUndoText,
      getTransformValueExpression: getTransformValueExpression,
      config: {backgroundColorValueExpression: null},
      statics: {createStoredCropBoundsValueExpression: createStoredCropBoundsValueExpression$static},
      requires: [
        "Ext.String",
        "com.coremedia.cms.studio.imageeditor.ImageArea",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ],
      uses: [
        "com.coremedia.cms.studio.imageeditor.ImageAreaBase",
        "com.coremedia.cms.studio.imageeditor.StoredCropBoundsValueHolder",
        "com.coremedia.cms.studio.imageeditor.VariantKeyUtil",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle",
        "com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil",
        "com.coremedia.cms.studio.imageeditor.util.TransformationChain"
      ]
    };
});
