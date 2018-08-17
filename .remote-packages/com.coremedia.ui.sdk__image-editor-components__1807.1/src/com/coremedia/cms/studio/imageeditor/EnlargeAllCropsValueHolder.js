Ext.define("com.coremedia.cms.studio.imageeditor.EnlargeAllCropsValueHolder", function(EnlargeAllCropsValueHolder) {/*package com.coremedia.cms.studio.imageeditor {
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;
import com.coremedia.ui.data.ValueHolder;

internal class EnlargeAllCropsValueHolder implements ValueHolder {

  private var variantsValueExpression:ValueExpression;
  private var imageEditorViewModel:Bean;

  public*/ function EnlargeAllCropsValueHolder$(variantsValueExpression/*:ValueExpression*/, imageEditorViewModel/*:Bean*/) {
    this.variantsValueExpression$pe9C = variantsValueExpression;
    this.imageEditorViewModel$pe9C = imageEditorViewModel;
  }/*

  public*/ function getValue()/*:**/ {var $2;
    for/* each*/ (var $1 in $2= this.variantsValueExpression$pe9C.getValue()) {var variant/*:ImageVariant*/ =$2[$1];
      if (!this.imageEditorViewModel$pe9C.get(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP + variant.key)) {
        return false;
      }
    }
    return true;
  }/*

  public*/ function setValue(value/*:**/)/*:Boolean*/ {var $2;
    for/* each*/ (var $1 in $2= this.variantsValueExpression$pe9C.getValue()) {var variant/*:ImageVariant*/ =$2[$1];
      this.imageEditorViewModel$pe9C.set(com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase.VIEW_MODEL_PROPERTY_PREFIX_ENLARGE_CROP + variant.key, value);
    }
  }/*

}
}

============================================== Jangaroo part ==============================================*/
    return {
      mixins: ["com.coremedia.ui.data.ValueHolder"],
      variantsValueExpression$pe9C: null,
      imageEditorViewModel$pe9C: null,
      constructor: EnlargeAllCropsValueHolder$,
      getValue: getValue,
      setValue: setValue,
      requires: ["com.coremedia.ui.data.ValueHolder"],
      uses: ["com.coremedia.cms.studio.imageeditor.ImageEditorPropertyFieldBase"]
    };
});
