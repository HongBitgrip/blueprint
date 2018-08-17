Ext.define("com.coremedia.cms.editor.sdk.preview.zoom.PreviewZoomMenuBase", function(PreviewZoomMenuBase) {/*package com.coremedia.cms.editor.sdk.preview.zoom {

import com.coremedia.ui.components.IFrameAwareMenu;

import ext.slider.SliderField;

public class PreviewZoomMenuBase extends IFrameAwareMenu {
  private var slider:SliderField;

  public*/ function PreviewZoomMenuBase$(config/*:PreviewZoomMenu = null*/) {if(arguments.length<=0)config=null;
    this.super$3r7G(config);
    this.slider$3r7G = AS3.cast(Ext.slider.Single,this.down("slider"));
  }/*

  protected*/ function zoomIn()/*:void*/ {
    this.slider$3r7G.setValue(this.slider$3r7G.maxValue);
  }/*

  protected*/ function zoomOut()/*:void*/ {
    this.slider$3r7G.setValue(this.slider$3r7G.minValue);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.components.IFrameAwareMenu",
      slider$3r7G: null,
      constructor: PreviewZoomMenuBase$,
      super$3r7G: function() {
        com.coremedia.ui.components.IFrameAwareMenu.prototype.constructor.apply(this, arguments);
      },
      zoomIn: zoomIn,
      zoomOut: zoomOut,
      requires: [
        "Ext.slider.Single",
        "com.coremedia.ui.components.IFrameAwareMenu"
      ]
    };
});
