Ext.define("com.coremedia.cms.studio.imageeditor.util.ConversionUtil", function(ConversionUtil) {/*package com.coremedia.cms.studio.imageeditor.util {
import com.coremedia.cms.studio.imageeditor.model.Point;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;

public class ConversionUtil {

  public static*/ function stringToBoolean$static(string/*:String*/)/*:Boolean*/ {
    return string === "true";
  }/*

  public static*/ function stringToNumber$static(string/*:String*/)/*:Number*/ {
    return Number(string);
  }/*

  public static*/ function anyToString$static(any/*:**/)/*:String*/ {
    return String(any);
  }/*

  public static*/ function positionToRectangle$static(position/*:String*/)/*:Rectangle*/ {
    return !position ? null : ConversionUtil.x1y1x2y2ToRectangle(com.coremedia.cms.studio.imageeditor.util.TransformationChain.deserialize(position)[0].position);
  }/*

  public static*/ function x1y1x2y2ToRectangle$static(x1y1x2y2/*:Object*/)/*:Rectangle*/ {
    var x1/*:Number*/ = Number(x1y1x2y2.x1);
    var y1/*:Number*/ = Number(x1y1x2y2.y1);
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(x1, y1, Number(x1y1x2y2.x2) - x1, Number(x1y1x2y2.y2) - y1);
  }/*

  public static*/ function xyToPoint$static(xy/*:Object*/, defaultPoint/*:Point*/)/*:Point*/ {
    if (!xy) {
      return defaultPoint;
    }
    var x/*:Number*/ = Number(xy.x);
    var y/*:Number*/ = Number(xy.y);
    return new com.coremedia.cms.studio.imageeditor.model.Point(x, y);
  }/*

  public static*/ function getBoundingBoxForCenter$static(center/*:Point*/, radius/*:Number*/, referenceRectangle/*:Rectangle*/)/*:Rectangle*/ {
    var tmpRectangle/*:Rectangle*/ = new com.coremedia.cms.studio.imageeditor.model.Rectangle(center.x, center.y, (radius * 2) / referenceRectangle.width, (radius * 2) / referenceRectangle.height);

    var xInPixel/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getX(tmpRectangle, referenceRectangle);
    var yInPixel/*:Number*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getY(tmpRectangle, referenceRectangle);

    return com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getPercentageRectangle(new com.coremedia.cms.studio.imageeditor.model.Rectangle(
            xInPixel - radius,
            yInPixel - radius,
            radius * 2,
            radius * 2
    ), referenceRectangle);
  }/*

  public static*/ function getCenterOfRectangle$static(boundingBoxAroundCenter/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Point*/ {
    var pixelRectangle/*:Rectangle*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getPixelRectangle(boundingBoxAroundCenter, referenceRectangle);
    var movedRectangle/*:Rectangle*/ = pixelRectangle.move(pixelRectangle.width / 2, pixelRectangle.height / 2);
    var adjustedRectangle/*:Rectangle*/ = com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil.getPercentageRectangle(movedRectangle, referenceRectangle);
    return new com.coremedia.cms.studio.imageeditor.model.Point(adjustedRectangle.x, adjustedRectangle.y);
  }/*

  public static*/ function rectangleToPosition$static(rectangle/*:Rectangle*/)/*:String*/ {
    return !rectangle ? "" : com.coremedia.cms.studio.imageeditor.util.TransformationChain.serialize([{
      position: ConversionUtil.rectangleToX1y1x2y2(rectangle)
    }]);
  }/*

  public static*/ function rectangleToX1y1x2y2$static(rectangle/*:Rectangle*/)/*:Object*/ {
    return !rectangle ? null : {
      x1: String(rectangle.x),
      y1: String(rectangle.y),
      x2: String(rectangle.x + rectangle.width),
      y2: String(rectangle.y + rectangle.height)
    };
  }/*

}*/function ConversionUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ConversionUtil$,
      statics: {
        stringToBoolean: stringToBoolean$static,
        stringToNumber: stringToNumber$static,
        anyToString: anyToString$static,
        positionToRectangle: positionToRectangle$static,
        x1y1x2y2ToRectangle: x1y1x2y2ToRectangle$static,
        xyToPoint: xyToPoint$static,
        getBoundingBoxForCenter: getBoundingBoxForCenter$static,
        getCenterOfRectangle: getCenterOfRectangle$static,
        rectangleToPosition: rectangleToPosition$static,
        rectangleToX1y1x2y2: rectangleToX1y1x2y2$static
      },
      uses: [
        "com.coremedia.cms.studio.imageeditor.model.Point",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle",
        "com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil",
        "com.coremedia.cms.studio.imageeditor.util.TransformationChain"
      ]
    };
});
