Ext.define("com.coremedia.cms.studio.imageeditor.util.ImageEditorUtil", function(ImageEditorUtil) {/*package com.coremedia.cms.studio.imageeditor.util {
import com.coremedia.cms.studio.imageeditor.model.Point;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;

public class ImageEditorUtil {

  private static const*/var DEFAULT_FOCUS_POINT$static/*:Point*/;/* =*/function DEFAULT_FOCUS_POINT$static_(){DEFAULT_FOCUS_POINT$static=( ImageEditorUtil.getDefaultPoint());};/*

  public static*/ function isDefaultPoint$static(point/*:Point*/)/*:Boolean*/ {
    return point.x === DEFAULT_FOCUS_POINT$static.x && point.y === DEFAULT_FOCUS_POINT$static.y;
  }/*

  public static*/ function getDefaultPoint$static()/*:Point*/ {
    return new com.coremedia.cms.studio.imageeditor.model.Point(0.5, 0.5);
  }/*

  /**
   * Get width of <b>rectangle</b> based upon the <b>reference rectangle</b>.
   * @param rectangle (with percentual values)
   * @param referenceRectangle (with pixel values)
   * @return Width in pixel
   * /
  public static*/ function getWidth$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return parseInt((rectangle.width * referenceRectangle.width).toFixed(0));
  }/*

  /**
   * Get width based upon the <b>reference rectangle</b>.
   * @param width [in pixel]
   * @param referenceRectangle [pixel-based rectangle]
   * @return percentual width
   * /
  private static*/ function getPercentageWidth$static(width/*:Number*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return width / referenceRectangle.width;
  }/*

  /**
   * Get height of <b>rectangle</b> based upon the <b>reference rectangle</b>.
   * @param rectangle (with percentual values)
   * @param referenceRectangle (with pixel values)
   * @return Height in pixel
   * /
  public static*/ function getHeight$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return parseInt((rectangle.height * referenceRectangle.height).toFixed(0));
  }/*

  /**
   * Get height based upon the <b>reference rectangle</b>.
   * @param height [in pixel]
   * @param referenceRectangle [pixel-based rectangle]
   * @return percentual height
   * /
  private static*/ function getPercentageHeight$static(height/*:Number*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return height / referenceRectangle.height;
  }/*

  /**
   * Get <b style="color:blue">x</b> value of <b>rectangle</b> [in pixel] based upon reference rectangle:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | reference rectangle     |
   *   |        <b style="color:blue">x</b>---rectangle    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @param rectangle (with percentual values)
   * @param referenceRectangle (with pixel values)
   * @return Number
   * /
  public static*/ function getX$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return parseInt((referenceRectangle.x + rectangle.x * referenceRectangle.width).toFixed(0));
  }/*

  private static*/ function getPercentageX$static(x/*:Number*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return (x - referenceRectangle.x) / referenceRectangle.width;
  }/*

  /**
   * Get <b style="color:blue">right x</b> value of <b>rectangle</b> [in pixel] based upon reference rectangle:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | reference rectangle     |
   *   |        rectangle---<b style="color:blue">x</b>    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @param rectangle (with percentual values)
   * @param reference (with pixel values)
   * @return Number
   * /
  public static*/ function getValueOfRightX$static(rectangle/*:Rectangle*/, reference/*:Rectangle*/)/*:Number*/ {
    return parseInt((ImageEditorUtil.getX(rectangle, reference) + ImageEditorUtil.getWidth(rectangle, reference)).toFixed(0));
  }/*

  /**
   * Get <b style="color:blue">y</b> value of <b>rectangle</b> [in pixel] based upon reference rectangle:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | reference rectangle     |
   *   |        <b style="color:blue">y</b> -rectangle     |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |         -----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @param rectangle (with percentual values)
   * @param referenceRectangle (with pixel values)
   * @return Number
   * /
  public static*/ function getY$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return parseInt((referenceRectangle.y + rectangle.y * referenceRectangle.height).toFixed(0));
  }/*

  private static*/ function getPercentageY$static(y/*:Number*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return (y - referenceRectangle.y) / referenceRectangle.height;
  }/*

  /**
   * Get <b style="color:blue">lower y</b> value of <b>rectangle</b> [in pixel] based upon reference rectangle:
   * <pre>
   *  <b>0/0</b>-------------------------> <b>x-axis</b>
   *   | reference rectangle     |
   *   |        rectangle---     |
   *   |        |           |    |
   *   |        |           |    |
   *   |        |           |    |
   *   |        <b style="color:blue">y</b>-----------     |
   *   |                         |
   *   |-------------------------
   *   v
   *
   *   <b>y-axis</b>
   * </pre>
   *
   * @param rectangle (with percentual values)
   * @param referenceRectangle (with pixel values)
   * @return Number
   * /
  public static*/ function getLowerY$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Number*/ {
    return parseInt((ImageEditorUtil.getY(rectangle, referenceRectangle) + ImageEditorUtil.getHeight(rectangle, referenceRectangle)).toFixed(0));
  }/*

  /**
   * Get rectangle (percentage-wise) related to the bounds of the pixel-based reference rectangle.
   * @param rectangle (with pixel values)
   * @param referenceRectangle (with pixel values)
   * @return Rectangle new Rectangle(x/reference.width, y/reference.height, width/reference.width, height/reference.height)
   * /
  public static*/ function getPercentageRectangle$static(rectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Rectangle*/ {
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(
            getPercentageX$static(rectangle.x, referenceRectangle),
            getPercentageY$static(rectangle.y, referenceRectangle),
            getPercentageWidth$static(rectangle.width, referenceRectangle),
            getPercentageHeight$static(rectangle.height, referenceRectangle));
  }/*

  public static*/ function getPixelRectangle$static(percentageRectangle/*:Rectangle*/, referenceRectangle/*:Rectangle*/)/*:Rectangle*/ {
    return new com.coremedia.cms.studio.imageeditor.model.Rectangle(
            ImageEditorUtil.getX(percentageRectangle, referenceRectangle),
            ImageEditorUtil.getY(percentageRectangle, referenceRectangle),
            ImageEditorUtil.getWidth(percentageRectangle, referenceRectangle),
            ImageEditorUtil.getHeight(percentageRectangle, referenceRectangle));
  }/*
}*/function ImageEditorUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ImageEditorUtil$,
      statics: {
        DEFAULT_FOCUS_POINT: undefined,
        isDefaultPoint: isDefaultPoint$static,
        getDefaultPoint: getDefaultPoint$static,
        getWidth: getWidth$static,
        getHeight: getHeight$static,
        getX: getX$static,
        getValueOfRightX: getValueOfRightX$static,
        getY: getY$static,
        getLowerY: getLowerY$static,
        getPercentageRectangle: getPercentageRectangle$static,
        getPixelRectangle: getPixelRectangle$static,
        __initStatics__: function() {
          DEFAULT_FOCUS_POINT$static_();
        }
      },
      uses: [
        "com.coremedia.cms.studio.imageeditor.model.Point",
        "com.coremedia.cms.studio.imageeditor.model.Rectangle"
      ]
    };
});
