Ext.define("com.coremedia.cms.studio.imageeditor.StoredCropBoundsValueHolder", function(StoredCropBoundsValueHolder) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.cms.studio.imageeditor.util.ConversionUtil;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueExpressionFactory;
import com.coremedia.ui.data.ValueHolder;

/**
 * Encapsulate the strange storage format of crop bounds.
 * /
internal class StoredCropBoundsValueHolder implements ValueHolder {

  private var isDefaultValueExpression:ValueExpression;
  private var relativeValueExpression:ValueExpression;

  public*/ function StoredCropBoundsValueHolder$(imageSettingsValueExpression/*:ValueExpression*/, variantKey/*:String*/) {
    this.isDefaultValueExpression$xkxI = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(
            imageSettingsValueExpression.extendBy("isDefault", variantKey),
            com.coremedia.cms.studio.imageeditor.util.ConversionUtil.stringToBoolean,
            com.coremedia.cms.studio.imageeditor.util.ConversionUtil.anyToString,
            true
    );
    this.relativeValueExpression$xkxI = com.coremedia.ui.data.ValueExpressionFactory.createTransformingValueExpression(
            imageSettingsValueExpression.extendBy("relative", variantKey),
            com.coremedia.cms.studio.imageeditor.util.ConversionUtil.positionToRectangle,
            com.coremedia.cms.studio.imageeditor.util.ConversionUtil.rectangleToPosition,
            null
    );
  }/*

  public*/ function getValue()/*:**/ {
    switch (this.isDefaultValueExpression$xkxI.getValue()) {
      case undefined: {
        return undefined;
      }
      case false: {
        return this.relativeValueExpression$xkxI.getValue();
      }
      case true:
      {
        return null;
      }
    }
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {
    if (!value) {
      // No value means the default crop should be used.
      // A possibly existing value in "relative" will be ignored. Do not unset "relative" value here to avoid
      // modification (auto-checkout) of existing documents with "relative" value and "isDefault: true".
      return this.isDefaultValueExpression$xkxI.setValue(true);
    }
    var isDefaultChanged/*:Boolean*/ = this.isDefaultValueExpression$xkxI.setValue(false);
    var relativeChanged/*:Boolean*/ = this.relativeValueExpression$xkxI.setValue(value);
    return relativeChanged || isDefaultChanged;
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      isDefaultValueExpression$xkxI: null,
      relativeValueExpression$xkxI: null,
      constructor: StoredCropBoundsValueHolder$,
      getValue: getValue,
      setValue: setValue,
      requires: [
        "com.coremedia.ui.data.ValueExpressionFactory",
        "com.coremedia.ui.data.ValueHolder"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.util.ConversionUtil"]
    };
});
