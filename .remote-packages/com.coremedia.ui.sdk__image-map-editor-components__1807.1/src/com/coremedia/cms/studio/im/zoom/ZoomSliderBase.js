Ext.define("com.coremedia.cms.studio.im.zoom.ZoomSliderBase", function(ZoomSliderBase) {/*package com.coremedia.cms.studio.im.zoom {
import com.coremedia.ui.data.ValueExpression;

import ext.slider.SliderField;

public class ZoomSliderBase extends SliderField {
  private var zoomValueExpression:ValueExpression;

  public*/ function ZoomSliderBase$(config/*:ZoomSlider = null*/) {if(arguments.length<=0)config=null;
    this.super$nPkJ(config);
    this.zoomValueExpression$nPkJ = AS3.getBindable(config,"zoomValueExpression");
    this.on("change",AS3.bind( this,"writeBack"));
  }/*

  public*/ function writeBack(thys/*:ZoomSlider*/, value/*:Number*/)/*:void*/ {
    var transformedValue/*:Number*/ = value / 100;
    this.zoomValueExpression$nPkJ.setValue(transformedValue);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.slider.Single",
      zoomValueExpression$nPkJ: null,
      constructor: ZoomSliderBase$,
      super$nPkJ: function() {
        Ext.slider.Single.prototype.constructor.apply(this, arguments);
      },
      writeBack: writeBack,
      requires: ["Ext.slider.Single"]
    };
});
