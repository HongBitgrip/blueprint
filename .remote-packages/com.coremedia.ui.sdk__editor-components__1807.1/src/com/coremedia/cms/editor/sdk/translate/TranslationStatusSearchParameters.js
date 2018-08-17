Ext.define("com.coremedia.cms.editor.sdk.translate.TranslationStatusSearchParameters", function(TranslationStatusSearchParameters) {/*package com.coremedia.cms.editor.sdk.translate {

public class TranslationStatusSearchParameters {
  private var _targetSiteId:String;
  private var _translationStates:Array;
  private var _excludeDeleted:Boolean = false;

  public*/ function TranslationStatusSearchParameters$() {
  }/*

  public*/ function  get$targetSiteId()/*:String*/ {
    return this._targetSiteId$BxLR;
  }/*

  public*/ function  set$targetSiteId(value/*:String*/)/*:void*/ {
    this._targetSiteId$BxLR = value;
  }/*

  public*/ function  get$translationStates()/*:Array*/ {
    return this._translationStates$BxLR;
  }/*

  public*/ function  set$translationStates(value/*:Array*/)/*:void*/ {
    this._translationStates$BxLR = value;
  }/*

  public*/ function  get$excludeDeleted()/*:Boolean*/ {
    return this._excludeDeleted$BxLR;
  }/*

  public*/ function  set$excludeDeleted(value/*:Boolean*/)/*:void*/ {
    this._excludeDeleted$BxLR = value;
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      _targetSiteId$BxLR: null,
      _translationStates$BxLR: null,
      _excludeDeleted$BxLR: false,
      constructor: TranslationStatusSearchParameters$,
      __accessors__: {
        targetSiteId: {
          get: get$targetSiteId,
          set: set$targetSiteId
        },
        translationStates: {
          get: get$translationStates,
          set: set$translationStates
        },
        excludeDeleted: {
          get: get$excludeDeleted,
          set: set$excludeDeleted
        }
      }
    };
});
