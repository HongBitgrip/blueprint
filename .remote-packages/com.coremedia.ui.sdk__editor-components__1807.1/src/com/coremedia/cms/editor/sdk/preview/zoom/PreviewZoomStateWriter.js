Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomStateWriter", function(PreviewZoomStateWriter) {/*package com.coremedia.cms.editor.sdk.preview.zoom {
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.util.LocalStorageUtil;

public class PreviewZoomStateWriter {
  internal static const LOCAL_STORAGE_SCALE_MODE_KEY:String = 'preview.scaleMode';
  internal static const LOCAL_STORAGE_SLIDER_ZOOM_KEY:String = 'preview.sliderZoom';

  private var scaleModeValueExpression:ValueExpression;
  private var sliderZoomValueExpression:ValueExpression;

  public*/ function PreviewZoomStateWriter$(scaleModeValueExpression/*:ValueExpression*/, sliderZoomValueExpression/*:ValueExpression*/) {
    this.scaleModeValueExpression$Rxja = scaleModeValueExpression;
    this.sliderZoomValueExpression$Rxja = sliderZoomValueExpression;

    sliderZoomValueExpression.addChangeListener(AS3.bind(this,"zoomValueChanged$Rxja"));
  }/*

  private*/ function zoomValueChanged()/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(PreviewZoomStateWriter.LOCAL_STORAGE_SLIDER_ZOOM_KEY, this.sliderZoomValueExpression$Rxja.getValue());
  }/*

  public*/ function triggerWrite()/*:void*/ {
    com.coremedia.ui.util.LocalStorageUtil.setItem(PreviewZoomStateWriter.LOCAL_STORAGE_SCALE_MODE_KEY, this.scaleModeValueExpression$Rxja.getValue());
  }/*

  public*/ function destroy()/*:void*/ {
    this.sliderZoomValueExpression$Rxja.removeChangeListener(AS3.bind(this,"zoomValueChanged$Rxja"));
  }/*

  /**
   * Returns the stored scale to width mode. Note: the value is not escaped or filtered.
   * @return The persisted scale mode.
   * /
  public static*/ function getStoredScaleMode$static()/*:Boolean*/ {
    return com.coremedia.ui.util.LocalStorageUtil.getItem(PreviewZoomStateWriter.LOCAL_STORAGE_SCALE_MODE_KEY) == "true";
  }/*

  /**
   * Returns the stored slider zoom value or NaN if no value has been persisted.
   * @return The persisted slider zoom value.
   * /
  public static*/ function getStoredSliderZoom$static()/*:Number*/ {
    var rawValue/*:String*/ = com.coremedia.ui.util.LocalStorageUtil.getItem(PreviewZoomStateWriter.LOCAL_STORAGE_SLIDER_ZOOM_KEY);
    return rawValue === null ? NaN : Number(rawValue);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      scaleModeValueExpression$Rxja: null,
      sliderZoomValueExpression$Rxja: null,
      constructor: PreviewZoomStateWriter$,
      zoomValueChanged$Rxja: zoomValueChanged,
      triggerWrite: triggerWrite,
      destroy: destroy,
      statics: {
        LOCAL_STORAGE_SCALE_MODE_KEY: 'preview.scaleMode',
        LOCAL_STORAGE_SLIDER_ZOOM_KEY: 'preview.sliderZoom',
        getStoredScaleMode: getStoredScaleMode$static,
        getStoredSliderZoom: getStoredSliderZoom$static
      },
      requires: ["com.coremedia.ui.util.LocalStorageUtil"]
    };
});
