Ext.define("com.coremedia.cms.editor.sdk.premular.PropertyFieldInfo", function(PropertyFieldInfo) {/*package com.coremedia.cms.editor.sdk.premular {

import ext.dom.Element;

public class PropertyFieldInfo {
  private var propertyFieldEl:Element;
  private var propertyFieldY:Number;
  private var propertyFieldHeight:Number;
  private var documentForm:DocumentForm;
  private var documentFormY:Number;
  private var documentFormHeight:Number;

  public*/ function PropertyFieldInfo$(propertyFieldEl/*:Element*/, propertyFieldY/*:Number*/, propertyFieldHeight/*:Number*/,
                                    documentForm/*:DocumentForm*/, documentFormY/*:Number*/, documentFormHeight/*:Number*/) {
    this.propertyFieldEl$FWIH = propertyFieldEl;
    this.propertyFieldY$FWIH = propertyFieldY;
    this.propertyFieldHeight$FWIH = propertyFieldHeight;
    this.documentForm$FWIH = documentForm;
    this.documentFormY$FWIH = documentFormY;
    this.documentFormHeight$FWIH = documentFormHeight;
  }/*

  public*/ function getPropertyFieldEl()/*:Element*/ {
    return this.propertyFieldEl$FWIH;
  }/*

  public*/ function getPropertyFieldY()/*:Number*/ {
    return this.propertyFieldY$FWIH;
  }/*

  public*/ function getPropertyFieldHeight()/*:Number*/ {
    return this.propertyFieldHeight$FWIH;
  }/*

  public*/ function getDocumentForm()/*:DocumentForm*/ {
    return this.documentForm$FWIH;
  }/*

  public*/ function getDocumentFormY()/*:Number*/ {
    return this.documentFormY$FWIH;
  }/*

  public*/ function getDocumentFormHeight()/*:Number*/ {
    return this.documentFormHeight$FWIH;
  }/*

  /**
   * Return the position the property field relative to the position of the document form.
   *
   * @return the position the property field
   * /
  public*/ function getPropertyFieldRelativeY()/*:Number*/ {
    return this.propertyFieldY$FWIH - this.documentFormY$FWIH;
  }/*

  public*/ function isVisible()/*:Boolean*/ {
    return this.propertyFieldY$FWIH < this.documentFormY$FWIH + this.documentFormHeight$FWIH && this.documentFormY$FWIH < this.propertyFieldY$FWIH + this.propertyFieldHeight$FWIH;
  }/*

  public*/ function isFullyVisible()/*:Boolean*/ {
    return this.propertyFieldY$FWIH >= this.documentFormY$FWIH && this.propertyFieldY$FWIH + this.propertyFieldHeight$FWIH <= this.documentFormY$FWIH + this.documentFormHeight$FWIH;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      propertyFieldEl$FWIH: null,
      propertyFieldY$FWIH: NaN,
      propertyFieldHeight$FWIH: NaN,
      documentForm$FWIH: null,
      documentFormY$FWIH: NaN,
      documentFormHeight$FWIH: NaN,
      constructor: PropertyFieldInfo$,
      getPropertyFieldEl: getPropertyFieldEl,
      getPropertyFieldY: getPropertyFieldY,
      getPropertyFieldHeight: getPropertyFieldHeight,
      getDocumentForm: getDocumentForm,
      getDocumentFormY: getDocumentFormY,
      getDocumentFormHeight: getDocumentFormHeight,
      getPropertyFieldRelativeY: getPropertyFieldRelativeY,
      isVisible: isVisible,
      isFullyVisible: isFullyVisible
    };
});
