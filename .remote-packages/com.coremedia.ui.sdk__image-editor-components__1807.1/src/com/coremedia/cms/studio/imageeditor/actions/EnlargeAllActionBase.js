Ext.define("com.coremedia.cms.studio.imageeditor.actions.EnlargeAllActionBase", function(EnlargeAllActionBase) {/*package com.coremedia.cms.studio.imageeditor.actions {

import com.coremedia.cms.studio.imageeditor.ImageVariant;
import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.ui.actions.DependencyTrackedToggleAction;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class EnlargeAllActionBase extends DependencyTrackedToggleAction {

  private var undoHistory:UndoHistory;
  private var imageEditorViewModel:Bean;
  private var imageDimensionsValueExpression:ValueExpression;
  private var variantBoxedImageDimensionsValueExpressions:ValueExpression;
  private var variantsValueExpression:ValueExpression;

  private const BUNDLE:Object =*/function BUNDLE_(){this.BUNDLE$AeYg=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content);}/*;

  public*/ function EnlargeAllActionBase$(config/*:EnlargeAllAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.undoHistory$AeYg = AS3.getBindable(config,"undoHistory");
    this.variantsValueExpression$AeYg = AS3.getBindable(config,"variantsValueExpression");
    this.imageEditorViewModel$AeYg = AS3.getBindable(config,"imageEditorViewModel");
    this.imageDimensionsValueExpression$AeYg = AS3.getBindable(config,"imageDimensionsValueExpression");
    this.variantBoxedImageDimensionsValueExpressions$AeYg = AS3.getBindable(config,"variantBoxedImageDimensionsValueExpressions");

    this.super$AeYg(AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleAction,config));BUNDLE_.call(this);;
  }/*

  override protected*/ function handleUnpress()/*:void*/ {
    this.enlargeAllCrops(false);
    com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.handleUnpress.call(this);
  }/*

  override protected*/ function handlePress()/*:void*/ {
    this.enlargeAllCrops(true);
    com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.handlePress.call(this);
  }/*

  internal*/ function enlargeAllCrops(enlarge/*:Boolean*/)/*:void*/ {
    var undoText/*:String*/ = enlarge
                    ? this.BUNDLE$AeYg.IEC_history_enlarge_all_crops
                    : this.BUNDLE$AeYg.IEC_history_enlarge_all_crops_off;
    this.undoHistory$AeYg.pushUndoableCommand(undoText);var $2;

    for/* each*/ (var $1 in $2= this.variantsValueExpression$AeYg.getValue()) {var variant/*:ImageVariant*/ =$2[$1];
      var boxValueExpression/*:ValueExpression*/ = this.variantBoxedImageDimensionsValueExpressions$AeYg.getValue()[variant.key];
      com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase.adjustCrop(enlarge, variant, this.imageDimensionsValueExpression$AeYg.getValue(), boxValueExpression.getValue(), this.imageEditorViewModel$AeYg);
    }
  }/*



}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedToggleAction",
      undoHistory$AeYg: null,
      imageEditorViewModel$AeYg: null,
      imageDimensionsValueExpression$AeYg: null,
      variantBoxedImageDimensionsValueExpressions$AeYg: null,
      variantsValueExpression$AeYg: null,
      constructor: EnlargeAllActionBase$,
      super$AeYg: function() {
        com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.constructor.apply(this, arguments);
      },
      handleUnpress: handleUnpress,
      handlePress: handlePress,
      enlargeAllCrops: enlargeAllCrops,
      requires: [
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.actions.DependencyTrackedToggleAction",
        "mx.resources.ResourceManager"
      ],
      uses: ["com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase"]
    };
});
