Ext.define("com.coremedia.cms.editor.sdk.preview.PreviewIFrameToolbarBase", function(PreviewIFrameToolbarBase) {/*package com.coremedia.cms.editor.sdk.preview {

import com.coremedia.cms.editor.sdk.editorContext;

import ext.Component;
import ext.toolbar.Toolbar;

/**
 * Pretty much like a stripped down IFrameComponent. Some of the IFrameComponents
 * interface does not make sense for non-same-origin content.
 * /
public class PreviewIFrameToolbarBase extends Toolbar {


  /**
   * The item id of the device type slider in the preview IFrame toolbar.
   * /
  public static const DEVICE_TYPE_SLIDER_SPACER_ITEM_ID:String = "deviceTypeSliderSpacer";


  /**
   * The item id of the device type slider in the preview IFrame toolbar.
   * /
  public static const DEVICE_TYPE_SLIDER_ITEM_ID:String = "deviceTypeSlider";

  public*/ function PreviewIFrameToolbarBase$(config/*:PreviewIFrameToolbar = null*/) {if(arguments.length<=0)config=null;
    this.super$8UFW(config);
    this.mon(this, "afterlayout",AS3.bind( this,"setSpacerVisibility"));
  }/*

  internal*/ function setSpacerVisibility()/*:Boolean*/ {
    var spacer/*:Component*/ = this.queryById(PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_SPACER_ITEM_ID);
    var deviceTypeSlider/*:Component*/ = this.queryById(PreviewIFrameToolbarBase.DEVICE_TYPE_SLIDER_ITEM_ID);
    // We need to be sure the slider is not the first element, displayed in the toolbar
    if (deviceTypeSlider.el.dom.offsetLeft > 10) {
      AS3.setBindable(spacer,"hidden" , false);
    }
  }/*

  protected*/ function getDeveloperGroups()/*:String*/ {
    var themeUpload/*:Object*/ = com.coremedia.cms.editor.sdk.editorContext.getConfiguration()['themeUpload'];
    if(themeUpload) {
      return themeUpload['developerGroups'];
    }
    return "";
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.toolbar.Toolbar",
      constructor: PreviewIFrameToolbarBase$,
      super$8UFW: function() {
        Ext.toolbar.Toolbar.prototype.constructor.apply(this, arguments);
      },
      setSpacerVisibility: setSpacerVisibility,
      getDeveloperGroups: getDeveloperGroups,
      statics: {
        DEVICE_TYPE_SLIDER_SPACER_ITEM_ID: "deviceTypeSliderSpacer",
        DEVICE_TYPE_SLIDER_ITEM_ID: "deviceTypeSlider"
      },
      requires: ["Ext.toolbar.Toolbar"],
      uses: ["com.coremedia.cms.editor.sdk.editorContext"]
    };
});
