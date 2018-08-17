Ext.define("com.coremedia.cms.editor.sdk.actions.ShowRepositoryActionBase", function(ShowRepositoryActionBase) {/*package com.coremedia.cms.editor.sdk.actions {

import com.coremedia.cms.editor.sdk.collectionview.CollectionViewManager;
import com.coremedia.cms.editor.sdk.collectionview.RepositoryState;
import com.coremedia.cms.editor.sdk.editorContext;

import ext.Action;

/**
 * This action is intended to be used from within EXML, only.
 *
 * @see com.coremedia.cms.editor.sdk.actions.ShowRepositoryAction
 * /
[PublicApi]
public class ShowRepositoryActionBase extends Action {
  private var state:RepositoryState;
  private var reset:Boolean;
  private var view:String;

  /**
   * @param config the configuration object
   * /
  public*/ function ShowRepositoryActionBase$(config/*:ShowRepositoryAction = null*/) {if(arguments.length<=0)config=null;
    this.super$m4CP(config);

    this.state$m4CP = new com.coremedia.cms.editor.sdk.collectionview.RepositoryState();
    this.state$m4CP.folder = AS3.getBindable(config,"folder");
    this.reset$m4CP = !AS3.getBindable(config,"preserveFolder");
    this.view$m4CP = AS3.getBindable(config,"view");

    this.setHandler(AS3.bind(this,"showCollectionView$m4CP"), this);
  }/*

  private*/ function showCollectionView()/*:void*/ {
    var collectionViewManager/*:CollectionViewManager*/ = com.coremedia.cms.editor.sdk.editorContext.getCollectionViewManager();
    collectionViewManager.openRepository(this.state$m4CP, this.reset$m4CP, this.view$m4CP);
  }/*
}
}

============================================== Jangaroo part ==============================================*/
    return {
      extend: "Ext.Action",
      metadata: {"": ["PublicApi"]},
      state$m4CP: null,
      reset$m4CP: false,
      view$m4CP: null,
      constructor: ShowRepositoryActionBase$,
      super$m4CP: function() {
        Ext.Action.prototype.constructor.apply(this, arguments);
      },
      showCollectionView$m4CP: showCollectionView,
      requires: ["Ext.Action"],
      uses: [
        "com.coremedia.cms.editor.sdk.collectionview.RepositoryState",
        "com.coremedia.cms.editor.sdk.editorContext"
      ]
    };
});
