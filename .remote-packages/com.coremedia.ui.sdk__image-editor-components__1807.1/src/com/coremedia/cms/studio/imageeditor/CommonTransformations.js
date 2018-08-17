Ext.define("com.coremedia.cms.studio.imageeditor.CommonTransformations", function(CommonTransformations) {/*package com.coremedia.cms.studio.imageeditor {
public class CommonTransformations {

  private var transformations:Array;
  private var width:Number;
  private var height:Number;

  public*/ function CommonTransformations$(transformations/*:Array*/, width/*:Number*/, height/*:Number*/) {
    this.transformations$4fcy = transformations;
    this.width$4fcy = width;
    this.height$4fcy = height;
  }/*

  public*/ function getTransformations()/*:Array*/ {
    return this.transformations$4fcy;
  }/*

  public*/ function getWidth()/*:Number*/ {
    return this.width$4fcy;
  }/*

  public*/ function getHeight()/*:Number*/ {
    return this.height$4fcy;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      transformations$4fcy: null,
      width$4fcy: NaN,
      height$4fcy: NaN,
      constructor: CommonTransformations$,
      getTransformations: getTransformations,
      getWidth: getWidth,
      getHeight: getHeight
    };
});
