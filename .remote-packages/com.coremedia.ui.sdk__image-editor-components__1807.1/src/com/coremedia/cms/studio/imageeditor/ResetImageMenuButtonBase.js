Ext.define("com.coremedia.cms.studio.imageeditor.ResetImageMenuButtonBase", function(ResetImageMenuButtonBase) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.ui.actions.DependencyTrackedActionBase;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;

public class ResetImageMenuButtonBase extends MenuButtonBase {

  private var variantsValueExpression:ValueExpression;

  [Bindable]
  public var imageEditorViewModel:Bean;

  public*/ function ResetImageMenuButtonBase$(config/*:ResetImageMenuButton = null*/) {if(arguments.length<=0)config=null;
    this.super$fngH(config);
    this.variantsValueExpression$fngH = AS3.getBindable(config,"variantsValueExpression");
  }/*

  internal*/ function computeResetFocusStatus(readOnlyValueExpression/*:ValueExpression*/, imageEditorViewModel/*:Bean*/)/*:int*/ { // NOSONAR (method too complex)
    var readOnly/*:Boolean*/ = readOnlyValueExpression.getValue();
    if (readOnly !== false) {
      return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
    }
    if (!imageEditorViewModel) {
      return undefined;
    }
    var focusAreaRectangle/*:Rectangle*/ = imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_AREA);
    var focusPointRectangle/*:Rectangle*/ = imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FOCUS_POINT);
    if (!focusAreaRectangle || !focusPointRectangle) {
      return undefined;
    }
    if (!focusAreaRectangle.isUnitSquare() || !focusPointRectangle.isUnitSquare()) {
      return com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
    }

    var variants/*:Array*/ = this.variantsValueExpression$fngH.getValue();
    if (variants === undefined) {
      return undefined;
    }
    // if I find a crop that is not in default state, I am enabled:
    for/* each*/(var $1=0;$1</* in*/ variants.length;++$1) {var v/*:ImageVariant*/ =variants[$1];
      var changed/*:**/ = imageEditorViewModel.get(v.key);
      if (changed) {
        return com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
      }
    }
    return com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED;
  }/*

  internal*/ function computeResetImageStatus(readOnlyValueExpression/*:ValueExpression*/, imageEditorViewModel/*:Bean*/)/*:int*/ { // NOSONAR (method too complex)
    var resetFocusStatus/*:int*/ = this.computeResetFocusStatus(readOnlyValueExpression, imageEditorViewModel);
    if (resetFocusStatus && resetFocusStatus === com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED) { // if undefined or false, the reset image button should be enabled
      return resetFocusStatus;
    }

    if (imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_HORIZONTALLY) === undefined ||
            imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_VERTICALLY) === undefined ||
            imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_ORIENTATION) === undefined ||
            imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_STRAIGHTEN) === undefined ||
            imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_BRIGHTNESS) === undefined ||
            imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_CONTRAST) === undefined) {
      return undefined;
    }

    var disabled/*:Boolean*/ = imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_HORIZONTALLY) === false;
    disabled = disabled && imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_FLIP_VERTICALLY) === false;
    disabled = disabled && imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_ORIENTATION) === 0;
    disabled = disabled && imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_STRAIGHTEN) === 0;
    disabled = disabled && imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_BRIGHTNESS) === 0;
    disabled = disabled && imageEditorViewModel.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_CONTRAST) === 0;

    return disabled ? com.coremedia.ui.actions.DependencyTrackedActionBase.DISABLED : com.coremedia.ui.actions.DependencyTrackedActionBase.ENABLED;
  }/*

  internal*/ function resetImage(imageEditorViewModel/*:Bean*/)/*:void*/ {
    com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.resetImage(imageEditorViewModel, this.variantsValueExpression$fngH.getValue());
  }/*

  internal*/ function resetFocusAreaAndCrops(imageEditorViewModel/*:Bean*/)/*:void*/ {
    com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.resetFocusAndCrops(imageEditorViewModel, this.variantsValueExpression$fngH.getValue());
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
      variantsValueExpression$fngH: null,
      constructor: ResetImageMenuButtonBase$,
      super$fngH: function() {
        com.coremedia.cms.studio.imageeditor.MenuButtonBase.prototype.constructor.apply(this, arguments);
      },
      computeResetFocusStatus: computeResetFocusStatus,
      computeResetImageStatus: computeResetImageStatus,
      resetImage: resetImage,
      resetFocusAreaAndCrops: resetFocusAreaAndCrops,
      config: {imageEditorViewModel: null},
      requires: [
        "com.coremedia.cms.studio.imageeditor.MenuButtonBase",
        "com.coremedia.ui.actions.DependencyTrackedActionBase"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase"]
    };
});
