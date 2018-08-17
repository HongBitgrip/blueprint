Ext.define("com.coremedia.cms.studio.imageeditor.ColorTransformationUtil", function(ColorTransformationUtil) {/*package com.coremedia.cms.studio.imageeditor {

public class ColorTransformationUtil {

  internal static const BRIGHTNESS_DEFAULT:Number = 0;
  internal static const BRIGHTNESS_MIN:Number = -100;
  internal static const BRIGHTNESS_MAX:Number = 100;

  internal static const CONTRAST_REST_DEFAULT:Number = 1;
  internal static const CONTRAST_REST_MIN:Number = 0;
  internal static const CONTRAST_REST_MAX:Number = 10;
  internal static const CONTRAST_DEFAULT:Number = 0;
  internal static const CONTRAST_MIN:Number = -10;
  internal static const CONTRAST_MAX:Number = 10;
  internal static const CONTRAST_INCREMENT:Number = 0.1;
  internal static const CONTRAST_DECIMAL_PRECISION:Number = 1;

  public static*/ function transformContrast$static(storedValue/*:**/)/*:**/ {
    return ColorTransformationUtil.calculateInitialContrastSliderValue(Number(storedValue));
  }/*

  public static*/ function reverseTransformContrast$static(value/*:**/)/*:**/ {
    return String(ColorTransformationUtil.calculateContrast(value));
  }/*

  public static*/ function calculateContrast$static(c/*:Number*/)/*:Number*/ {
    return c < ColorTransformationUtil.CONTRAST_DEFAULT
            ? translateRangeValue$static(c, ColorTransformationUtil.CONTRAST_MIN, ColorTransformationUtil.CONTRAST_DEFAULT, ColorTransformationUtil.CONTRAST_REST_MIN, ColorTransformationUtil.CONTRAST_REST_DEFAULT)
            : translateRangeValue$static(c, ColorTransformationUtil.CONTRAST_DEFAULT, ColorTransformationUtil.CONTRAST_MAX, ColorTransformationUtil.CONTRAST_REST_DEFAULT, ColorTransformationUtil.CONTRAST_REST_MAX);
  }/*

  public static*/ function calculateInitialContrastSliderValue$static(c/*:Number*/)/*:Number*/ {
    return c < ColorTransformationUtil.CONTRAST_REST_DEFAULT
            ? translateRangeValue$static(c, ColorTransformationUtil.CONTRAST_REST_MIN, ColorTransformationUtil.CONTRAST_REST_DEFAULT, ColorTransformationUtil.CONTRAST_MIN, ColorTransformationUtil.CONTRAST_DEFAULT)
            : translateRangeValue$static(c, ColorTransformationUtil.CONTRAST_REST_DEFAULT, ColorTransformationUtil.CONTRAST_REST_MAX, ColorTransformationUtil.CONTRAST_DEFAULT, ColorTransformationUtil.CONTRAST_MAX);
  }/*

  private static*/ function translateRangeValue$static(val/*:Number*/, leftMin/*:Number*/, leftMax/*:Number*/, rightMin/*:Number*/, rightMax/*:Number*/)/*:Number*/ {
    return Number((rightMin + ((val - leftMin) / (leftMax - leftMin)) * (rightMax - rightMin)).toFixed(ColorTransformationUtil.CONTRAST_DECIMAL_PRECISION));
  }/*
  
}*/function ColorTransformationUtil$() {}/*
}

============================================== Jangaroo part ==============================================*/
    return {
      constructor: ColorTransformationUtil$,
      statics: {
        BRIGHTNESS_DEFAULT: 0,
        BRIGHTNESS_MIN: -100,
        BRIGHTNESS_MAX: 100,
        CONTRAST_REST_DEFAULT: 1,
        CONTRAST_REST_MIN: 0,
        CONTRAST_REST_MAX: 10,
        CONTRAST_DEFAULT: 0,
        CONTRAST_MIN: -10,
        CONTRAST_MAX: 10,
        CONTRAST_INCREMENT: 0.1,
        CONTRAST_DECIMAL_PRECISION: 1,
        transformContrast: transformContrast$static,
        reverseTransformContrast: reverseTransformContrast$static,
        calculateContrast: calculateContrast$static,
        calculateInitialContrastSliderValue: calculateInitialContrastSliderValue$static
      }
    };
});
