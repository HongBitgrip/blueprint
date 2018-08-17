Ext.define("com.coremedia.cms.studio.im.zoom.ZoomSliderTipBase", function(ZoomSliderTipBase) {/*package com.coremedia.cms.studio.im.zoom {
import com.coremedia.ui.util.EncodingUtil;

import ext.Base;
import ext.slider.SliderTip;

public class ZoomSliderTipBase extends SliderTip {
  public*/ function ZoomSliderTipBase$(config/*:SliderTip = null*/) {if(arguments.length<=0)config=null;
    this.super$SP8A(config);
  }/*

  protected override*/ function getText(thumb/*:Base*/)/*:String*/ {
    return com.coremedia.ui.util.EncodingUtil.encodeForHTML(thumb['value'] + '%');
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.slider.Tip",
      constructor: ZoomSliderTipBase$,
      super$SP8A: function() {
        Ext.slider.Tip.prototype.constructor.apply(this, arguments);
      },
      getText: getText,
      requires: [
        "Ext.slider.Tip",
        "com.coremedia.ui.util.EncodingUtil"
      ]
    };
});
