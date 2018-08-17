Ext.define("com.coremedia.cms.studio.imageeditor.ImageTransformationSliderBase", function(ImageTransformationSliderBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;

import ext.container.Container;

public class ImageTransformationSliderBase extends Container {

  public*/ function ImageTransformationSliderBase$(config/*:ImageTransformationSlider = null*/) {if(arguments.length<=0)config=null;
    this.super$huDJ(config);
  }/*

  protected static*/ function getSliderValueExpression$static(config/*:ImageTransformationSlider*/)/*:ValueExpression*/ {
    var delegate/*:ValueExpression*/ = AS3.getBindable(config,"undoHistory").createStateSavingViewModelValueExpression(AS3.getBindable(config,"propertyName"),
            AS3.getBindable(config,"commandDescription"));

    if (AS3.getBindable(config,"propertyName") !== "straighten") {
      return delegate;
    }

    var transform/*:Function*/ = function (value/*:Number*/)/*:Number*/ {
      var imageEditorViewModel/*:Bean*/ = AS3.getBindable(config,"imageEditorViewModel");

      var flipHorizontally/*:Boolean*/ = ! !imageEditorViewModel.get("flipHorizontally");
      var flipVertically/*:Boolean*/ = ! !imageEditorViewModel.get("flipVertically");

      if (flipHorizontally !== flipVertically) {
        value = -value;
      }

      return value;
    };

    return com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(delegate, transform, transform);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.container.Container",
      constructor: ImageTransformationSliderBase$,
      super$huDJ: function() {
        Ext.container.Container.prototype.constructor.apply(this, arguments);
      },
      statics: {getSliderValueExpression: getSliderValueExpression$static},
      requires: [
        "Ext.container.Container",
        "com.coremedia.ui.data.ValueExpressionFactory"
      ]
    };
});
