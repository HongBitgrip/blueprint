Ext.define("com.coremedia.blueprint.base.components.pictures.CreateFromPicturesActionBase", function(CreateFromPicturesActionBase) {/*package com.coremedia.blueprint.base.components.pictures {

import com.coremedia.ui.data.Bean;

import ext.Action;
import ext.Ext;

/**
 * Base class for actions that create a new collection document from a set of pictures.
 * /
public class CreateFromPicturesActionBase extends Action {

  private var viewModel:Bean;
  private var callback:Function;

  public*/ function CreateFromPicturesActionBase$(config/*:CreateFromPicturesAction = null*/) {if(arguments.length<=0)config=null;
    var superConfig/*:Action*/ = AS3.cast(Ext.Action,Ext.apply({}, config));
    AS3.setBindable(superConfig,"handler" ,AS3.bind( this,"picturesActionHandler$bOtl"));
    this.super$bOtl(superConfig);
    this.viewModel$bOtl = AS3.getBindable(config,"viewModel");
    this.callback$bOtl = AS3.getBindable(config,"callback");
  }/*

  private*/ function picturesActionHandler()/*:void*/ {
    this.executePicturesAction(this.viewModel$bOtl.get("name"), this.viewModel$bOtl.get("folder"), this.viewModel$bOtl.get("pictures"), this.callback$bOtl);
  }/*

  protected*/ function executePicturesAction(selectedName/*:String*/, selectedFolder/*:String*/, selectedPictures/*:Array*/,
                                           callback/*:Function*/)/*:void*/ {
    throw new AS3.Error("abstract method");
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      viewModel$bOtl: null,
      callback$bOtl: null,
      constructor: CreateFromPicturesActionBase$,
      super$bOtl: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      picturesActionHandler$bOtl: picturesActionHandler,
      executePicturesAction: executePicturesAction,
      requires: [
        "AS3.Error",
        "Ext",
        "Ext.Action"
      ]
    };
});
