Ext.define("com.coremedia.cms.studio.imageeditor.actions.EnlargeActionBase", function(EnlargeActionBase) {/*package com.coremedia.cms.studio.imageeditor.actions {

import com.coremedia.cms.studio.imageeditor.ImageVariant;
import com.coremedia.cms.studio.imageeditor.history.UndoHistory;
import com.coremedia.cms.studio.imageeditor.model.ImageDimensions;
import com.coremedia.cms.studio.imageeditor.model.Rectangle;
import com.coremedia.ui.actions.DependencyTrackedToggleAction;
import com.coremedia.ui.data.Bean;
import com.coremedia.ui.data.ValueExpression;

import ext.StringUtil;

import mx.resources.ResourceManager;

[ResourceBundle('com.coremedia.cms.studio.imageeditor.ImageEditor')]
public class EnlargeActionBase extends DependencyTrackedToggleAction {

  private var variant:ImageVariant;
  private var undoHistory:UndoHistory;
  private var imageEditorViewModel:Bean;
  private var imageDimensionsValueExpression:ValueExpression;
  private var variantBoxedImageDimensionsValueExpression:ValueExpression;

  private const BUNDLE:Object =*/function BUNDLE_(){this.BUNDLE$9_Db=( mx.resources.ResourceManager.getInstance().getResourceBundle(null, 'com.coremedia.cms.studio.imageeditor.ImageEditor').content);}/*;

  public*/ function EnlargeActionBase$(config/*:EnlargeAction = null*/)/*:void*/ {if(arguments.length<=0)config=null;
    this.variant$9_Db = AS3.getBindable(config,"variant");
    this.undoHistory$9_Db = AS3.getBindable(config,"undoHistory");
    this.imageEditorViewModel$9_Db = AS3.getBindable(config,"imageEditorViewModel");
    this.imageDimensionsValueExpression$9_Db = AS3.getBindable(config,"imageDimensionsValueExpression");
    this.variantBoxedImageDimensionsValueExpression$9_Db = AS3.getBindable(config,"variantBoxedImageDimensionsValueExpression");
    this.super$9_Db(AS3.cast(com.coremedia.ui.actions.DependencyTrackedToggleAction,config));BUNDLE_.call(this);;
  }/*

  override protected*/ function handleUnpress()/*:void*/ {
    this.enlarge(false);
    com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.handleUnpress.call(this);
  }/*

  override protected*/ function handlePress()/*:void*/ {
    this.enlarge(true);
    com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.handlePress.call(this);
  }/*

  internal*/ function enlarge(enlarge/*:Boolean*/)/*:void*/ {
    var variantDisplayName/*:String*/ = this.BUNDLE$9_Db['IEC_variants_' + this.variant$9_Db.key] || this.variant$9_Db.key;
    var undoText/*:String*/ = Ext.String.format(enlarge
                    ? this.BUNDLE$9_Db.IEC_history_enlarge_crop
                    : this.BUNDLE$9_Db.IEC_history_enlarge_crop_off,
            variantDisplayName);
    this.undoHistory$9_Db.pushUndoableCommand(undoText);
    EnlargeActionBase.adjustCrop(enlarge, this.variant$9_Db, this.imageDimensionsValueExpression$9_Db.getValue(), this.variantBoxedImageDimensionsValueExpression$9_Db.getValue(), this.imageEditorViewModel$9_Db);
  }/*

  internal static*/ function adjustCrop$static(enlarge/*:Boolean*/, variant/*:ImageVariant*/, imageDimensions/*:ImageDimensions*/, oldBox/*:ImageDimensions*/, imageEditorViewModel/*:Bean*/)/*:void*/ {
    var newBox/*:ImageDimensions*/ = enlarge ? variant.calculateFittingImageDimensions(imageDimensions) : imageDimensions;
    var oldCrop/*:Rectangle*/ = imageEditorViewModel.get(variant.key);
    if (oldCrop) {
      var newCrop/*:Rectangle*/ = oldCrop.adjust(oldBox, newBox, variant.aspectRatio);
      imageEditorViewModel.set(variant.key, newCrop);
    }
  }/*



}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "com.coremedia.ui.actions.DependencyTrackedToggleAction",
      variant$9_Db: null,
      undoHistory$9_Db: null,
      imageEditorViewModel$9_Db: null,
      imageDimensionsValueExpression$9_Db: null,
      variantBoxedImageDimensionsValueExpression$9_Db: null,
      constructor: EnlargeActionBase$,
      super$9_Db: function() {
        com.coremedia.ui.actions.DependencyTrackedToggleAction.prototype.constructor.apply(this, arguments);
      },
      handleUnpress: handleUnpress,
      handlePress: handlePress,
      enlarge: enlarge,
      statics: {adjustCrop: adjustCrop$static},
      requires: [
        "Ext.String",
        "com.coremedia.cms.studio.imageeditor.ImageEditor_properties",
        "com.coremedia.ui.actions.DependencyTrackedToggleAction",
        "mx.resources.ResourceManager"
      ]
    };
});
